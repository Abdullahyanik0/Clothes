import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { Avatar } from "@mui/material";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 8px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1B1A17;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 4.5rem;
    padding-left: 2rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
const user = localStorage.getItem("user");

const RightNav = ({ open }) => {
  const navbar = [
    { id: nanoid(), name: "Snowboarding", link: "/categorypage/women" },
    { id: nanoid(), name: "Women", link: "/categorypage/women" },
    { id: nanoid(), name: "Men", link: "/categorypage/man" },
    { id: nanoid(), name: "Kids ", link: "/categorypage/women" },
    { id: nanoid(), name: "Accessories & Bags ", link: "/categorypage/bag" },
    { id: nanoid(), name: "Sale ", link: "/categorypage/women" },
    { id: nanoid(), name: "MINE77", link: "/categorypage/women" },
  ];

  return (
    <Ul open={open} className="z-10 ml-40  ">
      {user && (
        <NavLink to="/user">
          <Avatar
            className="!absolute top-8 xl:!hidden"
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </NavLink>
      )}
      <a
        href="/user"
        className="text-white text-lg mt-4 font-semibold xxs:block hidden "
      >
        {user}
      </a>
      {navbar.map((nav) => (
        <NavLink key={nav.id} to={nav.link}>
          <li className="  hover:underline-offset-4 hover:underline ease-in duration-200 rounded-lg ">
            {nav.name}
          </li>
        </NavLink>
      ))}
    </Ul>
  );
};

export default RightNav;
