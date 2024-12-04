"use client";

import React from "react";
// import { useSearchParams } from "next/navigation";

// type Collection = "ALL" | "PRINCIPIUM" | "DIKTION" | "FOX";

const CollectionList = () => {
  // const searchParams = useSearchParams();

  // const seletedCollection = (searchParams.get("collection") as Collection) || "ALL";

  return (
    <div className="py-10 lg:py-20 container">
      <div className="min-h-[20vh] border border-brand-950/10 border-dashed rounded flex justify-center items-center text-base lg:text-xl">
        No book published for the moment
      </div>
    </div>
  );
};

export default CollectionList;
