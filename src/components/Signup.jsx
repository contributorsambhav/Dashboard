import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons

const Signup = () => {
  return (
    <div className="flex w-[100vw] h-[92vh] items-center justify-center bg-gray-900">
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(3, 'Username must be at least 3 characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="bg-gray-800 p-8 rounded shadow-md w-96">
          <h2 className="text-lg font-bold mb-6 text-white">Sign Up</h2>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="username">Username</label>
            <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
              <FaUser className="text-gray-400 ml-3" /> {/* User Icon */}
              <Field
                name="username"
                type="text"
                className="w-full p-2 bg-transparent focus:outline-none text-white"
              />
            </div>
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="email">Email</label>
            <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
              <FaEnvelope className="text-gray-400 ml-3" /> {/* Envelope Icon */}
              <Field
                name="email"
                type="email"
                className="w-full p-2 bg-transparent focus:outline-none text-white"
              />
            </div>
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="password">Password</label>
            <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
              <FaLock className="text-gray-400 ml-3" /> {/* Lock Icon */}
              <Field
                name="password"
                type="password"
                className="w-full p-2 bg-transparent focus:outline-none text-white"
              />
            </div>
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
            <div className="flex items-center border border-gray-700 rounded bg-gray-700 text-white">
              <FaLock className="text-gray-400 ml-3" /> {/* Lock Icon */}
              <Field
                name="confirmPassword"
                type="password"
                className="w-full p-2 bg-transparent focus:outline-none text-white"
              />
            </div>
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center">
            <a href="/login" className="text-blue-400 hover:underline">Already have an account? Log In</a>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
