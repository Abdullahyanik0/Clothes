import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import debouce from "lodash.debounce";
import SearchCard from "components/atoms/SearchCard";
import { useMemo } from "react";

const Search = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const url = `https://ecommerceappexpress.herokuapp.com/api/product?name=${search}`;
    const token = localStorage.getItem("token");
    if (search) {
      await axios
        .get(url, { headers: { token } })
        .then(function (response) {
          setData(response.data.result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
    /*eslint-disable */
  }, [search]); 

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  return (
    <div className="w-96 mr-4 border-spacing-4 relative">
      <div className="relative">
        <input
          className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
          placeholder="Search"
          type="text"
          onChange={debouncedResults}
        />

        <BsSearch size={21} className="absolute top-3 right-2 " />
      </div>

      {search && (
        <div className="absolute w-full mt-[2px] top-10  z-20 left-0  rounded-sm   bg-white  text-black">
          {data?.map((dat) => (
            <SearchCard
              key={dat?._id}
              id={dat?._id}
              name={dat?.name}
              imgUrl={dat?.imgUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
