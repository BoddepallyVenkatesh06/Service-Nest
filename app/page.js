"use client";

import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";


export default function Home() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  // Used to get All Category List
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("resp.categories =", resp.categories)
      setCategoryList(resp.categories);
    });
  };


  return (
    <div>
      <Hero />

      <CategoryList categoryList={categoryList} />


    </div>
  );
}