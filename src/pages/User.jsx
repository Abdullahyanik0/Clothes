import React from "react";
import LoginLayout from "Layout/LoginLayout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineLock } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const User = () => {
  const userSakal = localStorage.getItem("user");
  const [users, setUsers] = useState(userSakal);

  console.log(users);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(10, "Password is too long - should be 10 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const userName = localStorage.getItem("user");
  let navigate = useNavigate();
  const handleRemove = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return users ? (
    <LoginLayout>
      <div className="flex mb-64 flex-col gap-y-6 justify-center items-center mt-24 text-lg">
        <div>Welcome</div>
        <div>{userName}</div>
        <a href="/" className="bg-blue-500   text-white p-4 rounded-lg">
          Continue shopping
        </a>
        <button
          onClick={handleRemove}
          className="bg-red-500 w-48  text-white p-4 rounded-lg"
        >
          Log out
        </button>
      </div>
    </LoginLayout>
  ) : (
    <LoginLayout>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-3/12 xxs:w-9/12 items-center">
          <div className="flex justify-between w-full text-3xl my-8">
            <h1 className="">Sign in</h1>
            <h1 className="">
              <AiOutlineLock />
            </h1>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setUsers(values);
              localStorage.setItem("user", values.email);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col w-full ">
                <Field
                  placeholder="Email"
                  className="p-3 border-[1px] border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  placeholder="Password"
                  className="p-3 border-[1px] border-gray-400 rounded-md  placeholder:text-gray-500 mb-4 my-1"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label=" Remember Me"
                  />
                </FormGroup>

                <button
                  className="bg-[#3d7c7d] rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
                  type="submit"
                >
                  Sing In
                </button>
                <h1 className="text-xl xxs:text-base flex xxs:gap-x-2 gap-x-1">
                  Don't have an account?
                  <a className="text-[#3d7c7d] font-semibold" href="/user">
                    Create one now.
                  </a>
                </h1>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </LoginLayout>
  );
};

export default User;
