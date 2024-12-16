"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_BOOKS, MOCK_BOOKS_COLLECTIONS } from "@/core/data/books";
import { BookCard } from "./book-card";
import { Book } from "@/core/models/book";
import { BookDetailsCard } from "./book-details-card";
import { useIsDesktop } from "@/hooks/useIsDesktop";

type Collection = "ALL" | "PRINCIPIUM" | "DIKTION" | "FOX";

const CollectionList = () => {
  const searchParams = useSearchParams();
  const isDesktop = useIsDesktop();

  const [showDetails, setShowDetails] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const seletedCollection = (searchParams.get("collection") as Collection) || "ALL";

  const handleShowDetails = (book: Book) => {
    if (isDesktop) {
      setSelectedBook(book);
      setShowDetails(true);
    }
  };

  const handleDismissDetails = () => {
    setSelectedBook(null);
    setShowDetails(false);
  };

  const books = useMemo(() => {
    if (seletedCollection === "ALL") return MOCK_BOOKS;
    return MOCK_BOOKS.filter((book) => book.collectionId === seletedCollection);
  }, [seletedCollection]);

  return (
    <>
      <div className="py-10 lg:py-20 container">
        {books.length <= 0 ? (
          <div className="min-h-[20vh] border border-brand-950/10 border-dashed rounded flex justify-center items-center text-base lg:text-xl">
            No book {seletedCollection !== "ALL" && `from ${MOCK_BOOKS_COLLECTIONS[seletedCollection]}`} for the moment
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {books.map((book) => (
              <BookCard onClick={() => handleShowDetails(book)} key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>

      <BookDetailsCard book={selectedBook} isOpen={showDetails} onDismiss={handleDismissDetails} />
    </>
  );
};

export default CollectionList;
