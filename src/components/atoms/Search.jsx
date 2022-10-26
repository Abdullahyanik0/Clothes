import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import debouce from "lodash.debounce";
import SearchCard from "components/atoms/SearchCard";
import { useMemo } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  
  const fetchData = async () => {
    const url = `https://ecommerceappexpress.herokuapp.com/api/product?name=${search}`;
    const token = localStorage.getItem("token");
    if (search) {
      setLoading(true);
      await axios

        .get(url, { headers: { token } })
        .then(function (response) {
          setData(response.data.result.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
    } else {
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  return (
    <div className="w-[370px] mr-4  border-spacing-4 relative">
      <div className="relative">
        <input
          className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
          placeholder="Search"
          type="text"
          onChange={debouncedResults}
        />

        <BsSearch size={21} className="absolute top-3 right-2 " />
      </div>
      <div className="absolute box-border w-full mt-[2px] mb-24 top-10  z-20 left-0  rounded-sm   bg-white  text-black">
        {loading ? (
          <p className="p-2">Loading...</p>
        ) : (
          search &&
          (data.length === 0 ? (
            <p className="p-2">No results found.</p>
          ) : (
            data
              ?.slice(0, 6)
              .map((dat) => (
                <SearchCard
                  key={dat?._id}
                  id={dat?._id}
                  name={dat?.name}
                  imgUrl={dat?.imgUrl}
                />
              ))
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default Search;
