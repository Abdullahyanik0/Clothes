import React from "react";
import LoginLayout from "Layout/LoginLayout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineLock } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SingIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("No password provided."),
    fullName: Yup.string().required("Required."),
  });
  const url = "https://ecommerceappexpress.herokuapp.com/api/auth/register";

  return (
    <LoginLayout>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center w-3/12 xxs:w-9/12 items-center">
          <div className="flex justify-between w-full text-3xl my-8">
            <h1 className="">Register</h1>
            <h1 className="">
              <AiOutlineLock />
            </h1>
          </div>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              axios
                .post(url, values)
                .then(function (response) {
                  console.log(response);
                  navigate("/user");
                })
                .catch(function (error) {
                  console.log(error.response.data.msg);
                  setError(error.response.data.msg);
                });
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col w-full ">
                <Field
                  placeholder="Name"
                  className="p-3 border-[1px] !text-black border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  name="fullName"
                />

                {errors.fullName && touched.fullName ? (
                  <div className="text-red-600">{errors.fullName}</div>
                ) : null}
                <Field
                  placeholder="Email"
                  className="p-3 border-[1px] !text-black border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
                <Field
                  placeholder="Password"
                  className="p-3 border-[1px] !text-black border-gray-400 rounded-md  placeholder:text-gray-500 mb-4 my-1"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}
                <FormGroup>
                  <div>{error ? error : ""}</div>
                  <FormControlLabel
                    control={<Checkbox />}
                    label=" Remember Me"
                  />
                </FormGroup>

                <button
                  className="bg-[#3d7c7d] rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
                  type="submit"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex gap-2 text-xl font-semibold">
            <p>Already have an account? </p>
            <Link to="/user">
              <p className=" text-[#3d7c7d] ">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default SingIn;
