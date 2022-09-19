/* import React from "react";
import * as Yup from "yup";

export const SignupSchemas = ({ SignupSchemas }) => {
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(10, "Password is too long - should be 10 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    fullName: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(10, "Password is too long - should be 10 chars maximum."),
  });

  return SignupSchemas;
};
 */