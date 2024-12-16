"use client";

import React from "react";
import { PRIMARY_COLOR } from "@/core/constants/colors";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MOCK_COLLECTIONS } from "@/core/data/collections";
import { MOCK_BOOKS_COLLECTIONS } from "@/core/data/books";
import { Collection } from "@/core/models/collection";

const Hero = () => {
  const searchParams = useSearchParams();

  const seletedCollection = (searchParams.get("collection") as Collection) || "ALL";

  const collection = MOCK_COLLECTIONS.find((collection) => collection.id === seletedCollection);

  return (
    <div
      className="w-full min-h-[20vh] bg-cover bg-center py-10"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(${PRIMARY_COLOR.RGB}, 0.9),
            rgba(${PRIMARY_COLOR.RGB}, 0.9)
          ),
          url('/assets/images/books.webp')
        `,
      }}
    >
      <div className="h-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 container text-muted">
        <div className="grid grid-cols-4 gap-2 lg:hidden">
          {Object.entries(MOCK_BOOKS_COLLECTIONS).map(([key, name]) => (
            <Link
              key={`collection-mobile-${key}`}
              href={key === "ALL" ? "/books" : `/books?collection=${key}`}
              data-state={seletedCollection === key && "active"}
              className="text-sm cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-center data-[state=active]:bg-brand-200 data-[state=active]:text-primary"
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="space-y-4 flex-grow">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-recoleta md:max-w-5xl">{collection?.name}</h1>
          <p className="md:text-xl lg:text-2xl mb-8 md:max-w-4xl">{collection?.description}</p>
        </div>

        <div className="hidden lg:flex flex-col w-[15rem] gap-2">
          {Object.entries(MOCK_BOOKS_COLLECTIONS).map(([key, name]) => (
            <Link
              key={`collection-desktop-${key}`}
              href={key === "ALL" ? "/books" : `/books?collection=${key}`}
              data-state={seletedCollection === key && "active"}
              className="cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-right data-[state=active]:bg-brand-200  data-[state=active]:text-primary"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
