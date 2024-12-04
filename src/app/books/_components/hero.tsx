"use client";

import React from "react";
import { PRIMARY_COLOR } from "@/core/constants/colors";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MOCK_COLLECTIONS } from "@/core/data/collections";

type Collection = "ALL" | "PRINCIPIUM" | "DIKTION" | "FOX";

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
          <Link
            href="/books"
            data-state={seletedCollection === "ALL" && "active"}
            className="text-sm cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-center data-[state=active]:bg-brand-200 data-[state=active]:text-primary"
          >
            All books
          </Link>
          <Link
            href="/books?collection=PRINCIPIUM"
            data-state={seletedCollection === "PRINCIPIUM" && "active"}
            className="text-sm cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-center data-[state=active]:bg-brand-200 data-[state=active]:text-primary"
          >
            Principium
          </Link>
          <Link
            href="/books?collection=DIKTION"
            data-state={seletedCollection === "DIKTION" && "active"}
            className="text-sm cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-center data-[state=active]:bg-brand-200 data-[state=active]:text-primary"
          >
            Diktion
          </Link>
          <Link
            href="/books?collection=FOX"
            data-state={seletedCollection === "FOX" && "active"}
            className="text-sm cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-center data-[state=active]:bg-brand-200 data-[state=active]:text-primary"
          >
            Fox
          </Link>
        </div>

        <div className="space-y-4 flex-grow">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-recoleta md:max-w-5xl">{collection?.name}</h1>
          <p className="md:text-xl lg:text-2xl mb-8 md:max-w-4xl">{collection?.description}</p>
        </div>

        <div className="hidden lg:flex flex-col w-[15rem] gap-2">
          <Link
            href="/books"
            data-state={seletedCollection === "ALL" && "active"}
            className="cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-right data-[state=active]:bg-brand-200  data-[state=active]:text-primary"
          >
            All books
          </Link>
          <Link
            href="/books?collection=PRINCIPIUM"
            data-state={seletedCollection === "PRINCIPIUM" && "active"}
            className="cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-right data-[state=active]:bg-brand-200  data-[state=active]:text-primary"
          >
            Principium
          </Link>
          <Link
            href="/books?collection=DIKTION"
            data-state={seletedCollection === "DIKTION" && "active"}
            className="cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-right data-[state=active]:bg-brand-200  data-[state=active]:text-primary"
          >
            Diktion
          </Link>
          <Link
            href="/books?collection=FOX"
            data-state={seletedCollection === "FOX" && "active"}
            className="cursor-pointer rounded-lg font-semibold p-2.5 w-full hover:bg-brand-200 hover:text-primary text-right data-[state=active]:bg-brand-200  data-[state=active]:text-primary"
          >
            Fox
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
