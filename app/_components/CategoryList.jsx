import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList }) {
  console.log("categoryList =", categoryList);
  return (
    <div
      className="mx-4 py-1 md:mx-22 lg:mx-52 grid grid-cols-3
    md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      {categoryList.length > 0
        ? categoryList.map((category, index) => (
            <Link
              href={"/search/" + category.name}
              key={index}
              className={`flex flex-col items-center justify-center gap-2
             bg-purple-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out hover:bg-purple-100`}
            >
              <div className="animate-pulse">
                <Image
                  src={category.icon.url}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="text-primary">{category.name}</h2>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[120px]
                w-full bg-slate-200 animate-pulse
                rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default CategoryList;