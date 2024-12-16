"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Globe2, BookOpen, ShoppingBag } from "lucide-react";
import { Book as BookType } from "@/core/models/book";
import VisuallyHidden from "@/components/ui/visually-hidden";
import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

type BookDetailsCardProps = {
  book: BookType | null;
  isOpen: boolean;
  onDismiss: () => void;
};

export function BookDescription({ book }: Pick<BookDetailsCardProps, "book">) {
  return (
    <div className="relative space-y-6 z-20">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Badge className="text-sm">{book?.category}</Badge>

          <Popover>
            <PopoverTrigger className="hidden md:block">
              <div className="group hover:bg-brand-100 hover:text-primary transition-all duration-200 rounded-lg py-1.5 px-3 text-base">
                Written by <span className="font-semibold text-brand-950">{book?.author.name}</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[90%] md:w-[30rem]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage className="object-cover object-center" src={book?.author.image} />
                    <AvatarFallback>{book?.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <h3 className="text-lg font-semibold">{book?.author.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground text-justify leading-relaxed line-clamp-7 md:line-clamp-none">
                  {book?.author.description}
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <Drawer>
            <DrawerTrigger className="md:hidden">
              <div className="group hover:bg-brand-100 hover:text-primary transition-all duration-200 rounded-lg py-1.5 px-3 text-base">
                Written by <span className="font-semibold text-brand-950">{book?.author.name}</span>
              </div>
            </DrawerTrigger>
            <DrawerContent aria-describedby={undefined} className="px-4 pb-6">
              <VisuallyHidden>
                <DrawerHeader>
                  <DrawerTitle>{book?.author.name}</DrawerTitle>
                </DrawerHeader>
              </VisuallyHidden>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage className="object-cover object-center" src={book?.author.image} />
                    <AvatarFallback>{book?.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <h3 className="text-lg font-semibold">{book?.author.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground text-justify leading-relaxed">{book?.author.description}</p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-px w-full border border-dashed" />

        <h1 className="text-2xl md:text-3xl font-bold font-recoleta text-brand-950">{book?.name}</h1>
      </div>

      <div className="flex items-center gap-4 text-sm flex-wrap">
        <div className="flex items-center gap-2 border border-dashed border-brand-950/40 rounded-lg px-3 py-1.5 bg-brand-50">
          <BookOpen className="h-4 w-4" />
          <span>{book?.characteristics.pages} pages</span>
        </div>
        <div className="flex items-center gap-2 border border-dashed border-brand-950/40 rounded-lg px-3 py-1.5 bg-brand-50">
          <ShoppingBag className="h-4 w-4" />
          <span>{book?.characteristics.distributors.join(", ")}</span>
        </div>
      </div>

      <div className="leading-relaxed">{book?.description}</div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="font-bold text-brand-950 font-recoleta text-2xl md:text-3xl">{book?.price} FCFA</div>

        <div className="flex items-center gap-2 border border-dashed border-brand-950/40 rounded-lg px-3 py-1.5 bg-brand-50 text-sm md:text-base">
          <Globe2 className="h-4 w-4" />
          <span>Available in {book?.characteristics.language}</span>
        </div>
      </div>
    </div>
  );
}

export function BookDetailsCard({ book: initialBook, isOpen, onDismiss }: BookDetailsCardProps) {
  const [book, setBook] = useState<BookType | null>(null);

  useEffect(() => {
    if (initialBook) {
      setBook(initialBook);
    }
  }, [initialBook]);

  return (
    <Dialog open={isOpen && !!book} onOpenChange={onDismiss}>
      <DialogContent className="w-full max-w-4xl p-8" aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle hideCloseButton>{book?.name}</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        {book && <BookDescription book={book} />}
      </DialogContent>
    </Dialog>
  );
}
