import React from "react";
import LoginLayout from "Layout/LoginLayout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineLock } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(10, "Password is too long - should be 10 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const url = "https://ecommerceappexpress.herokuapp.com/api/auth/login";
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .post(url, {
        fullName: "Abdullah",
        email: "deneme@gmail.com",
        password: "123456aa",
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/");
  };

  return (
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
              console.log(values);
              localStorage.setItem("user", values.email);
            }}
          >
            {({ errors, touched, dirty, isValid }) => (
              <Form className="flex flex-col w-full ">
                <Field
                  placeholder="Email"
                  className="p-3 border-[1px] border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
                <Field
                  placeholder="Password"
                  className="p-3 border-[1px] border-gray-400 rounded-md  placeholder:text-gray-500 mb-4 my-1"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
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
                  disabled={!(dirty && isValid)}
                  onClick={handleClick}
                >
                  Sing In
                </button>
                <h1 className="text-xl xxs:text-base flex xxs:gap-x-2 gap-x-1">
                  Don't have an account?
                  <a className="text-[#3d7c7d] font-semibold" href="/singin">
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
