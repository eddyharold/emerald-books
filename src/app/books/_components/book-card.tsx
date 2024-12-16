import { MOCK_BOOKS_STATUS } from "@/core/data/books";
import { cn } from "@/core/lib/utils";
import { Book } from "@/core/models/book";
import Image from "next/image";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { BookDescription } from "./book-details-card";
import VisuallyHidden from "@/components/ui/visually-hidden";

type BookCardProps = {
  book: Book;
} & React.HTMLAttributes<HTMLDivElement>;

const BookCardDetails = ({ book }: Pick<BookCardProps, "book">) => {
  return (
    <div className="relative w-[70%] sm:w-full h-[350px] md:h-[300px] rounded-lg overflow-hidden ">
      <div className="group-hover:opacity-100 opacity-0 absolute inset-0 bg-black/60 backdrop-blur-sm z-20 transition-opacity duration-300 flex flex-col justify-end">
        <div className="flex flex-col justify-end p-4 gap-3">
          <h3 className="text-white text-lg font-bold leading-tight">{book.name}</h3>
          <p className="text-white text-sm">{book.author.name}</p>
        </div>
      </div>

      <div
        className={cn(
          `w-fit text-white text-sm font-semibold rounded-lg px-2 py-1 absolute top-2 right-2 z-10`,
          MOCK_BOOKS_STATUS[book.status] === "In production" ? "bg-yellow-500" : "bg-green-600"
        )}
      >
        {MOCK_BOOKS_STATUS[book.status]}
      </div>

      <Image
        src={book.image}
        alt={book.name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="group-hover:scale-110 transition-all duration-300 ease-out"
      />
    </div>
  );
};

const BookCardDesktop = ({ book, className, ...props }: BookCardProps) => {
  return (
    <div {...props} className={cn("flex justify-center items-center group w-full h-fit cursor-pointer", className)}>
      <BookCardDetails book={book} />
    </div>
  );
};

const BookCardMobile = ({ book, className, ...props }: Omit<BookCardProps, "onClick">) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div
          onClick={undefined}
          {...props}
          className={cn("flex justify-center items-center group w-full h-fit cursor-pointer", className)}
        >
          <BookCardDetails book={book} />
        </div>
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined} className="px-4 pb-6">
        <VisuallyHidden>
          <DrawerHeader>
            <DrawerTitle>{book.name}</DrawerTitle>
          </DrawerHeader>
        </VisuallyHidden>

        <BookDescription book={book} />
      </DrawerContent>
    </Drawer>
  );
};

export const BookCard = ({ book, className, ...props }: BookCardProps) => {
  return (
    <>
      <BookCardDesktop book={book} className={cn("hidden md:block", className)} {...props} />
      <BookCardMobile book={book} className={cn("md:hidden", className)} {...props} />
    </>
  );
};
