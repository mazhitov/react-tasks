import React, { FC, useMemo } from 'react';

/*

1) What’s wrong with this code snippet?
   BooksList would be re-rendered every time its parent component is re-rendered.
   This happens because books would be called on every new render and the reference to books change even if its value remains the same.

2) How can we improve it?
    We should re-rendered when genre prop is updated.
    The hook useMemo takes books function as a parameter and an array of dependencies.
    So we could “listen” to change in genre by setting it as a dependency and the function that we pass to useMemo would be run only when the prop has changed.
    Otherwise data would not be re-fetched and child component would not be re-rendered no matter how many times we re-render the parent component.
3) Are there any cases when this code can be used with no modification?
    According to React documentation, useMemo should be used to optimize performance, not to store data.
    Another and the most obvious situation in which useMemo probably does more harm than good is when the function being memoized does not perform expensive operations.
    useMemo itself requires memory so if we are trying to over-optimize by memoizing every function, it might slow the application down.
    We should also not use useMemo when the function returns a primitive value, such as a boolean or a string.
    Because primitive values are passed by value, not by reference, it means that they always remain the same, even if the component is re-rendered.


*/

export interface Book {
  id: string;
  name: string;
}

export const BooksList: FC<{ books: Book[] }> = ({ books }) => {
  const renderList = useMemo(() => {
    return books.map((book) => <li key={book.id}>{book.name}</li>)
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
