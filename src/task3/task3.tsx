import React, { FC, useMemo } from 'react';


export interface Book {
  id: string;
  name: string;
}

export const BooksList: FC<{ books: Book[] }> = ({ books }) => {
  const renderList = useMemo(() => {
    return books.map((book, i) => <li key={i}>{book.name}</li>)
  }, [books])

  return (
    <ul>
      {renderList}
    </ul>
  )
}

const Task3 = () => {
  const books:Book[] = [
    {id: '1', name: 'Harry Potter1'},
    {id: '2', name: 'Harry Potter2'},
    {id: '3', name: 'Harry Potter3'},
  ]
  return (
    <div>
      <BooksList books={books}/>
    </div>
  );
};

export default Task3;
