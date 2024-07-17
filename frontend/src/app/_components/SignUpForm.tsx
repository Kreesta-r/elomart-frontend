import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Button } from '@/components/ui/button';

const API_URL = 'http://localhost:8000/api/users'; // Update this with your actual backend URL

interface SignUpProps {
  onSubmit: (values: SignUpValues) => void;
}

interface SignUpValues {
  username: string;
  password: string;
  email: string;
}

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

const SignUpForm: React.FC<SignUpProps> = ({ onSubmit }) => {
  const router = useRouter();

  const handleSignUp = async (values: SignUpValues) => {
    const { username, password, email } = values;
    try {
      const response = await axios.post(`${API_URL}users/`, {
        username,
        email,
        password,
        is_vendor: false, // Adjust based on your logic
        is_customer: true, // Adjust based on your logic
      });
      // Optionally, store the token or redirect the user
      // localStorage.setItem('token', response.data.token);
      router.push('/dashboard'); // Redirect to dashboard or another page
    } catch (error) {
      console.error('Signup failed', error);
      // Handle error (show message to user, etc.)
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '', email: '' }}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting, errors }) => (
        <Form className='px-[30px] py-[30px]'>
          <div className="flex flex-col">
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" id="username" className="h-[40px] bg-slate-100 p-3" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" className="h-[40px] bg-slate-100 p-3" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div className="flex flex-col mb-15">
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" id="password" className="h-[40px] bg-slate-100 p-3" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <div className='py-5'>
            <Button type="submit" disabled={isSubmitting} className='w-full'>
              {isSubmitting ? 'Signing Up...' : 'Create Account'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
