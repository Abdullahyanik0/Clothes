import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  /*   const [isLoading, setIsLoading] = useState(false); */
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  shuffle(data);

  useEffect(() => {
    axios.get(url).then(function (response) {
      /*   setIsLoading(true); */
      setData(response.data.result.data);
      /*   setIsLoading(false); */
    });
  }, [url]);

  return [data];
};

export default useFetch;
