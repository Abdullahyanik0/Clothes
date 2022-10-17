import Search from "components/atoms/Search";
import Layout from "Layout/Layout";
import React from "react";

const SearchPage = () => {
  return (
    <Layout>
      <div className="h-screen my-6">
        <Search />
      </div>
    </Layout>
  );
};

export default SearchPage;
