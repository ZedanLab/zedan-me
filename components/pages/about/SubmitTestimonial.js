import React, { useState } from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import Button from '../../Button';
import InputField from '../../inputs/InputField';
import ImageInput from '../../inputs/ImageInput';
import Stars from '../../inputs/Stars';
import TestimonialSchema from '../../../schemas/testimonial.schema';

function SubmitTestimonial({ animateDirection }) {
  const [submittedMessage, setSubmittedMessage] = useState(false);

  async function handleSubmit(values, { setSubmitting, setFieldError, handleReset }) {
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    Object.entries(values).map(([attribute, value]) => formData.append(attribute, value));

    axios
      .post('https://app.zedan.me/api/testimonials', formData)
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
      initial={{ opacity: 0, x: animateDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: animateDirection }}
      transition={{
        delay: 0.1,
        duration: 0.3,
      }}
    >
      {submittedMessage ? (
        <div className="md:w-2/3 mx-auto">
          <p className="text-xl text-blue-600 font-extrabold">{submittedMessage}</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            avatar: null,
            name: '',
            email: '',
            position: '',
            body: '',
            stars: 1,
          }}
          onSubmit={handleSubmit}
          validationSchema={TestimonialSchema}
        >
          {({ values, handleChange, handleBlur, setFieldValue, errors }) => (
            <Form>
              <ImageInput
                placeholder="Your Avatar"
                name="avatar"
                error={errors.avatar}
                value={values.avatar}
                handleChange={(event) => {
                  setFieldValue('avatar', event.currentTarget.files[0]);
                }}
                handleBlur={handleBlur}
              />
              <div className="text-center text-gray-800 my-2 font-bold">
                <InputField
                  placeholder="Your Name"
                  name="name"
                  error={errors.name}
                  value={values.name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <InputField
                  placeholder="Email Address"
                  name="email"
                  value={values.email}
                  error={errors.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <InputField
                  label="Position / Company"
                  placeholder="CEO at Amazing Company"
                  name="position"
                  value={values.position}
                  error={errors.position}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Stars value={values.stars} handleChange={setFieldValue} />
                <InputField
                  as="textarea"
                  placeholder="Testimonial"
                  name="body"
                  value={values.body}
                  error={errors.body}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </motion.div>
  );
}

export default SubmitTestimonial;
