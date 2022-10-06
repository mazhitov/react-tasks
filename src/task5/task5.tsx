import React, { FC, useReducer, useState } from 'react';

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
