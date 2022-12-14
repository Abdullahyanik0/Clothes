import React, { useState } from "react";
import LoginLayout from "Layout/LoginLayout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineLock } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import SellIcon from "@mui/icons-material/Sell";
import toast, { Toaster } from "react-hot-toast";

const User = () => {
  const [error, setError] = useState("");
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("No password provided."),
  });

  const url = "https://ecommerceappexpress.herokuapp.com/api/auth/login";
  const navigate = useNavigate();
  const location = useLocation();
  const [locationname] = useState(location?.state?.name?.replace("/", ""));
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const textStyle =
    "flex gap-3 items-center cursor-pointer text-2xl hover:underline underline-offset-4  mt-4";

  const handleRemove = () => {
    localStorage.removeItem("token");
    navigate("/user");
  };
  const notify = () => toast("Being directed");

  return token ? (
    <LoginLayout>
      <div className="flex justify-center items-center  flex-col xxs:mx-4 ">
        <div className="w-[600px] xxs:w-full ">
          <div className=" font-semibold items-center  ml-2 flex justify-between">
            <p className="text-xl ">User: {user}</p>
            <div>
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </div>
          </div>

          <ul className="font-semibold border-2 rounded-lg shadow-xl  pb-4 px-4 mt-6">
            <li className={textStyle}>
              <AddShoppingCartIcon />
              <Link to="/order"> My previous orders</Link>
            </li>
            <li className={textStyle}>
              <InfoIcon />
              About
            </li>
            <li className={textStyle}>
              <BookIcon />
              Blog
            </li>
            <li className={textStyle}>
              <PhoneIcon />
              Contact
            </li>
          </ul>
          <ul className="font-semibold border-2 rounded-lg shadow-xl px-4 pb-4 mt-4 ">
            <li className={textStyle}>
              <FavoriteIcon />
              <Link to="/favorite"> Favorites</Link>
            </li>
            <li className={textStyle}>
              <DeleteIcon />
              <Link to="/basket"> Basket</Link>
            </li>
            <li className={textStyle}>
              <SellIcon />
              Coupon
            </li>
          </ul>
          <div className="flex justify-end">
            <button
              className="bg-[#3d7c7d]  w-36 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
              type="submit"
              onClick={handleRemove}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </LoginLayout>
  ) : (
    <LoginLayout>
      <div className="flex justify-center mb-[70px]">
        <div className="flex flex-col justify-center w-3/12 xxs:w-9/12 items-center">
          <div>
            {locationname ? <p>{locationname} please login to buy</p> : ""}{" "}
          </div>

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
              axios
                .post(url, values)
                .then(function (response) {
                  localStorage.setItem("token", response.data.token);
                  notify();
                  setTimeout(() => {
                    if (locationname) {
                      navigate(-1);
                    } else {
                      navigate("/");
                    }
                  }, 2000);
                })
                .catch(function (error) {
                  setError(error.response.data.msg);
                  console.log(error);
                });
            }}
          >
            {({ errors, touched, dirty, isValid }) => (
              <Form className="flex flex-col w-full ">
                <Field
                  placeholder="Email"
                  className="p-3 border-[1px] border-gray-400 rounded-md text-black placeholder:text-gray-500 mb-4 my-1"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
                <Field
                  placeholder="Password"
                  className="p-3 border-[1px] border-gray-400 rounded-md text-black  placeholder:text-gray-500 mb-4 my-1"
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
                <div>{error ? error : ""}</div>

                <button
                  className="bg-[#3d7c7d] rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Sing In
                </button>
                <h1 className="text-xl font-semibold xxs:text-base flex xxs:gap-x-2 gap-x-1">
                  Don't have an account?
                  <Link className="text-[#3d7c7d] font-semibold" to="/singin">
                    Create one now.
                  </Link>
                </h1>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster
        position="center"
        reverseOrder={false}
        containerClassName="w-96"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#16C60C",
            color: "#fff",
          },
        }}
      />
    </LoginLayout>
  );
};

export default User;
