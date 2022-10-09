import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const color = localStorage.getItem("color");

  const card = useSelector((state) => state.card.items);
  const favorite = useSelector((state) => state.favorite.favorite);

  return (
    <div className="bottom-0  fixed w-full border-t-2 md:!hidden z-20">
      <Box>
        <BottomNavigation
          className={`${color}`}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            className={`${color}`}
            label={<Link to="/">Home</Link>}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            className={`${color}`}
            label={
              <Link to="/basket">
                <div>
                  {card.length ? (
                    <div className="rounded-full flex justify-center items-center w-4 h-4 absolute top-0 right-8 text-white bg-red-600">
                      <p>{card.length}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>{" "}
                Basket
              </Link>
            }
            icon={<ShoppingBasketIcon />}
          />

          <BottomNavigationAction
            className={`${color}`}
            label={
              <Link to="/favorite">
                <div>
                  {favorite.length ? (
                    <div className="rounded-full flex justify-center items-center w-4 h-4 absolute top-0 right-8 text-white bg-red-600">
                      <p>{favorite.length}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                Favorite
              </Link>
            }
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            className={`${color}`}
            label={<Link to="/user">User</Link>}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
