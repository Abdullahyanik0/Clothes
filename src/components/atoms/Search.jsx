import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import FavoriteCard from "components/molecules/FavoriteCard";

const Search = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const url = `https://ecommerceappexpress.herokuapp.com/api/product`;
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      await axios

        .get(url, { headers: { token } })
        .then(function (response) {
          setData(response.data.result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredItems = data.filter((item) => {
      if (search.length < 0) {
        setDatas("");
      } else {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
      return item;
    });
    setDatas(filteredItems);
  }, [search, data]);

  return (
    <div className="w-72  flex items-center relative">
      <div className="relative">
        <input
          className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <BsSearch size={21} className="absolute top-3 right-2 " />
      </div>
      <div className="absolute top-10 -left-2 bg-white  text-black">
        {datas?.map((dat) => (
          <FavoriteCard
            key={dat?._id}
            id={dat?._id}
            name={dat?.name}
            imgUrl={dat?.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
