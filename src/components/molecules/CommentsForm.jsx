import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CommentsForm = () => {
  const params = useParams();
  const detail = params;
  const navigate = useNavigate();
  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;
  const token = localStorage.getItem("token");
  return (
    <div className="py-2">
      <h1>Comment</h1>
      <Formik
        initialValues={{
          comment: "",
          star: "",
        }}
        onSubmit={(values) => {
          token
            ? axios({
                method: "post",
                url: url,
                data: values,
                headers: { token },
              })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })
            : setTimeout(() => {
                alert("Please sign in to post a comment");
                navigate("/user");
              }, 1000);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex gap-x-2">
            <Field name="comment" />
            {errors.comment && touched.comment ? (
              <div>{errors.comment}</div>
            ) : null}
            <Field name="star" />
            {errors.star && touched.star ? <div>{errors.star}</div> : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CommentsForm;
