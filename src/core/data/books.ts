import { Collection } from "../models/collection";
import { Book } from "../models/book";

export const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    collectionId: "PRINCIPIUM",
    status: "published",
    image: "/assets/images/books/book-1.jpg",
    name: "The Fundamentals of General Pedagogy: Suitable for teachers' training",
    audience: "Beginners in professional training",
    description:
      "The Fundamentals of General Pedagogy is the result of extensive research aimed at implementing the official program of general pedagogy, a key discipline in teacher education. Combining current psychopedagogical theories with previous studies, it draws on long-term classroom experimentation to enhance educational systems. This book serves as a training resource for future teachers and a guide for professionals seeking to refine their pedagogical practices. School administrators will find valuable tools for planning and managing educational activities. Additionally, it appeals to anyone invested in the formal education of young people.",
    author: {
      image: "/assets/images/authors/author-1.jpg",
      name: "Philippe DONFACK",
      description:
        "Mr. Philippe DONFACK holds a Bachelor's degree in Biochemistry from the University of Yaoundé I, obtained in 1993. Three years later, he was admitted to the École Normale Supérieure of Yaoundé in the Department of Educational Sciences, specializing in Biology Didactics. He has taught in several ENIEG (Teacher Training Colleges) across the Republic of Cameroon. In 2009, he was appointed Head of Studies and Internships at the Bilingual ENIEG in Bafoussam, a position he subsequently held at the ENIEG in Foumban and the Bilingual ENIEG in Bamenda until December 2020. He has participated in numerous research projects, including the development of environmental education teaching programs in 2005 under the coordination of the Living Earth Foundation, and practical activities didactics in 2016. Currently, Mr. Philippe Donfack serves as a High School Principal.",
    },
    category: "Didactic Book",
    characteristics: {
      pages: 136,
      language: "French and English",
      distribution: "Printed and e-Book",
      distributors: ["Amazon (Kindle)", "HOREB Solution", "YouScribe"],
      publicationDate: "2024-01-01",
    },
    tags: ["Pedagogy", "Teaching", "Education", "Training", "General", "Foundational"],
    price: 5000,
  },
];

export const MOCK_BOOKS_STATUS = {
  published: "Published",
  pending: "In production",
};

export const MOCK_BOOKS_COLLECTIONS: Record<Collection, string> = {
  ALL: "All books",
  PRINCIPIUM: "Principium",
  DIKTION: "Diktion",
  FOX: "Fox",
};
