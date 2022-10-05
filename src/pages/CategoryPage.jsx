import Layout from "Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "components/molecules/Card";
import Loading from "components/atoms/Loading";

const CategoryPage = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  let params = useParams();
  const categories = params;
  const url = `https://ecommerceappexpress.herokuapp.com/api/product/?categories=${categories.id}`;
  const token = localStorage.getItem("token");

  const fetchData = () => {
    axios
      .get(url, { headers: { token } })
      .then(function (response) {
        // handle success
        setData(response.data.result.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [categories]);
  return isLoading ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <div className="grid grid-cols-4 gap-12 text-black xxs:grid-cols-2 xxs:gap-y-4 mb-20">
        {data?.map((data) => (
          <Card
            key={data?._id}
            price={data?.price}
            categories={data?.categories}
            selected={data?.selected}
            imgUrl={data?.imgUrl}
            name={data?.name}
            title={data?.title}
            subtitle={data?.subtitle}
            quantity={data?.quantity}
            id={data?._id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CategoryPage;
