import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { giveRating } from '../api/api';
import Button from '../components/Button';
import Field from '../components/Field';
import TextAreaField from '../components/TextAreaField';
import useNotificationStore from '../hooks/useNotificationStore';

const initialValues = {
  rating: '',
  comment: '',
};

const validationSchema = Yup.object({
  rating: Yup.number()
    .required('Please enter your rating.')
    .min(1, 'Rating must be at least 1')
    .max(10, 'Rating must be at most 10'),
  comment: Yup.string(),
});
const Review = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { notify } = useNotificationStore();
  const mutation = useMutation({
    mutationFn: (values) => giveRating(params.id, values),
    onSuccess: () => {
      notify('Review created successfully');
      navigate('/products');
    },
  });
  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return (
    <div className="container mx-auto p-4 mt-10 flex-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Review</h1>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="space-y-6">
            <Field
              label="Rating"
              name="rating"
              placeholder="rating"
              type="number"
            />
            <TextAreaField
              label="Comment"
              name="comment"
              placeholder="Comment"
            />
            <div className="flex justify-end space-x-2">
              <Button type="reset" color="danger">
                Reset
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Review;
