import * as Yup from 'yup';

export const TestimonialSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required('This field is required')
    .test('fileSize', 'File too large', (value) => value && value.size <= 2000000)
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type)
    ),
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required').email('Should be a valid email'),
  position: Yup.string().required('This field is required'),
  body: Yup.string().required('This field is required'),
  stars: Yup.number().required('This field is required'),
});
