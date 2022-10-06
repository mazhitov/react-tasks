import React, { FC, useReducer, useState } from 'react';

/*
1) What options do we have to get `open` value in Parent component?
  One of which is Redux: You create a data store and connect any component to the store and void,
  no matter where the component is positioned in the Component Tree it has access to the store
  Also we can create local state with hook useState and pass dispatch to child component to get value in child.
2) What benefits and drawbacks of each method?
  if we use value from child component only one parent component we should use dispatch localState,
  else we should use Redux to have accessibility to value from other component.

 */
export const Parent: FC = () => {
  const [openState, setOpenState] = useState(false);
  return (
    <div>
      <Child setOpenState={setOpenState}>
        {openState && <p>{openState.toString()}</p>}
      </Child>
    </div>
  )
};
type ChildProps = {
  children?: React.ReactNode;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>
};

const Child: FC<ChildProps> = (props:ChildProps) => {
  const [open, toggleOpen] = useReducer(value => !value, false);
  return (
    <div>
      <button onClick={() => {
        toggleOpen();
        props.setOpenState(open);
      }}>
        Toggle
      </button>
      {props.children}
    </div>
)}

const Task5 = () => {
  return (
    <div>
      <Parent/>
    </div>
  );
};

export default Task5;
