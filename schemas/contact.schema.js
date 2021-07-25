import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required').email('Should be a valid email'),
  position: Yup.string().required('This field is required'),
  subject: Yup.string().required('This field is required'),
  body: Yup.string().required('This field is required'),
});
