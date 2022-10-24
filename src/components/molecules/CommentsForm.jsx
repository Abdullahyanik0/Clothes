import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CommentsForm = ({ fetchData }) => {
  const params = useParams();
  const notifyCard = () => toast("Added to Comments.");

  const detail = params;
  const navigate = useNavigate();
  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;
  const token = localStorage.getItem("token");

  const [value, setValue] = useState(0);
  const [comment, setComments] = useState("");

  const SignupSchema = Yup.object().shape({
    comment: Yup.string().required("Required"),
    star: Yup.string().required("Required"),
  });
  const handleTextChange = (e) => {
    setComments(e.target.value);
  };

  return (
    <div className="py-2">
      <h1 className="mb-4">Comment</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{ star: value, comment: comment }}
        validationSchema={SignupSchema}
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
                  fetchData();
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
          <Form className="flex gap-x-2  xxs:flex-col text-black">
            <div className="flex xxs:mb-4">
              <div className="flex items-center ">
                <TextareaAutosize
                  minRows={2}
                  style={{ width: 350 }}
                  placeholder="Comment"
                  type="text"
                  name="comment"
                  onChange={handleTextChange}
                  value={comment}
                  className="h-full p-2 border-[1px] xxs:py-2 border-gray-400 rounded-md text-black  placeholder:text-gray-500"
                />
              </div>
            </div>
            {errors.comment && touched.comment ? (
              <div className="text-red-600 mb-2">{errors.comment}</div>
            ) : null}
            <div className="flex justify-between items-center ">
              <div className="flex items-center px-8">
                <Rating
                  name="star"
                  value={value}
                  size="medium"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <button
                className="bg-[#3d7c7d] xxs:w-1/2 h-10  px-6 xxs:px-2 rounded hover:bg-opacity-90  ease-in duration-200 p-1 text-white text-xl font-semibold"
                type="submit"
                /* disabled={!(dirty && isValid)} */
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CommentsForm;
