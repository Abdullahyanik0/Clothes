import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";

import SearchCard from "components/SearchCard";

const Search = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = `https://ecommerceappexpress.herokuapp.com/api/product?${search}`;
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
      if (!search) {
        setDatas("");
      } else {
        setDatas("");
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
      return item;
    });
    setDatas(filteredItems);
  }, [search]);

  return (
    <div className="w-96 mr-4  relative">
      <div className="relative">
        <input
          className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />

        <BsSearch size={21} className="absolute top-3 right-2 " />
      </div>
      {search ? (
        <div className="absolute w-full top-10  z-20 left-0 pt-2 mt-1 rounded-sm   bg-white  text-black">
          {datas?.map((dat) => (
            <SearchCard
              key={dat?._id}
              id={dat?._id}
              name={dat?.name}
              imgUrl={dat?.imgUrl}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
