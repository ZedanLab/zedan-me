import axios from 'axios';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ContactSchema } from '../schemas/contact.schema';
import InputField from '../components/inputs/InputField';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

const CustomInput = (props) => (
  <InputField
    {...props}
    classes="!m-0"
    inputClasses="!w-full"
    labelClasses="md:!left-2"
    helperClasses="md:!mx-0"
  />
);

export default function Resume() {
  const [submittedMessage, setSubmittedMessage] = useState(false);

  async function handleSubmit(values, { setSubmitting, setFieldError, handleReset }) {
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    Object.entries(values).map(([attribute, value]) => formData.append(attribute, value));

    axios
      .post('https://app.zedan.me/api/contact-me', formData)
      .then(({ data }) => {
        setSubmittedMessage(data.message);
        handleReset();
      })
      .catch(({ response }) => {
        if (response?.status === 422) {
          Object.entries(response.data.errors).map(([attribute, errors]) =>
            setFieldError(attribute, errors[0])
          );
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <motion.div
      key="submit"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        delay: 0.1,
        duration: 0.3,
      }}
    >
      {submittedMessage ? (
        <div className="md:w-2/3 mx-auto text-center">
          <p className="text-3xl text-blue-600 font-extrabold">{submittedMessage}</p>
          <LinkButton replace href="/">
            Go Home
          </LinkButton>
        </div>
      ) : (
        <>
          <h1 className="text-gradient !my-5 text-center">Always Happy To Hear From You</h1>
          <p className="text-center text-3xl font-semibold  text-blue-600">Get in Touch</p>
          <Formik
            initialValues={{
              name: '',
              email: '',
              position: '',
              subject: '',
              body: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
          >
            {({ values, handleChange, handleBlur, errors }) => (
              <Form>
                <div className="text-center text-gray-800 my-2 font-bold grid grid-cols-1 gap-4">
                  <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
                    <CustomInput
                      placeholder="Your Name"
                      name="name"
                      error={errors.name}
                      value={values.name}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <CustomInput
                      placeholder="Email Address"
                      name="email"
                      value={values.email}
                      error={errors.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </div>
                  <CustomInput
                    placeholder="Position / Company"
                    name="position"
                    value={values.position}
                    error={errors.position}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <CustomInput
                    placeholder="Subject"
                    name="subject"
                    value={values.subject}
                    error={errors.subject}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <CustomInput
                    as="textarea"
                    placeholder="Message"
                    name="body"
                    value={values.body}
                    error={errors.body}
                    handleChange={handleChange}
                  />
                </div>
                <div className="text-center mt-8">
                  <Button type="submit" className="block lg:inline-block w-full lg:w-40">
                    Send
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </motion.div>
  );
}

export async function getStaticProps() {
  const props = {
    title: 'Contact me',
  };

  return {
    // eslint-disable-next-line object-shorthand
    props: props,
  };
}
