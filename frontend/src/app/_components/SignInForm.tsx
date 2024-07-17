import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const API_URL = 'http://localhost:8000/api/'; 

interface SignInProps {
  onSubmit: (values: SignInValues) => void;
}

interface SignInValues {
  username: string;
  password: string;
}

const signInValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignInForm: React.FC<SignInProps> = ({ onSubmit }) => {
  const router = useRouter();

  const handleSignIn = async (values: SignInValues) => {
    const { username, password } = values;
    try {
      const response = await axios.post(`${API_URL}api-token-auth/`, { username, password });
      // Store the token in local storage or any other secure storage
      localStorage.setItem('token', response.data.token);
      // Redirect to the dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      // Handle error (show message to user, etc.)
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={signInValidationSchema}
      onSubmit={handleSignIn}
    >
      {({ isSubmitting, errors }) => (
        <Form className='px-[30px] py-[30px]'>
          <div className="flex-col flex">
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" id="username" className="h-[40px] bg-slate-100 p-3" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>
          <div className="flex-col flex">
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" id="password" className="h-[40px] bg-slate-100 p-3" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <div className='py-5'>
            <Button type="submit" className='w-full' disabled={isSubmitting}>
              {isSubmitting ? 'Signing In...' : 'Sign In'}
              {isSubmitting && <span className="spinner-border spinner-border-sm ml-2"></span>}
            </Button>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
            <p className="mt-2 text-center">Don't have an account? 
              <Link href='/auth?currentTab=sign-up'>Sign Up</Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
