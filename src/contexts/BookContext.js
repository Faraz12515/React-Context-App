import React, { useState, createContext } from "react";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "the way of kings", id: 1 },
    { title: "the name of the wind", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 },
  ]);

  const value = { books };

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
}
