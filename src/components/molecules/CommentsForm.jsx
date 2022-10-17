import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "@mui/material/Select";

const CommentsForm = () => {
  const params = useParams();
  const notifyCard = () => toast("Added to Comments.");

  const detail = params;
  const navigate = useNavigate();
  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;
  const token = localStorage.getItem("token");

  const [form, setForm] = useState([{ comment: "", star: "" }]);
  return (
    <div className="py-2">
      <h1 className="mb-4">Comment</h1>
      <Formik
        initialValues={{ form }}
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
                  notifyCard();
                  setTimeout(() => {
                    window.location.reload(1);
                  }, 1000);
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
        {({ errors, touched, dirty, isValid }) => (
          <Form className="flex gap-x-2  text-black">
            <div className="flex items-center ">
              <Field
                name="comment"
                className="h-full border-[1px] border-gray-400 rounded-md text-black  placeholder:text-gray-500"
              />
            </div>
            {errors.comment && touched.comment ? (
              <div>{errors.comment}</div>
            ) : null}

            <Field className="p-2" as="select" name="star">
              <option value="1">Select Star</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>

            <button
              className="bg-[#3d7c7d] px-6 xxs:px-2 rounded hover:bg-opacity-90  ease-in duration-200 p-1 text-white text-xl font-semibold"
              type="submit"
              disabled={!(dirty && isValid)}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CommentsForm;
