import React, { createContext, FC, useContext, useState } from 'react';


interface ContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  extraA: number;
  extraB: number;
}
//Creating a context
const userContext = createContext<ContextProps | null>(null);

export const Parent: FC = () => {
  const [count, setCount] = useState(0);
  const [extraA] = useState(1);
  const [extraB] = useState(2);
  return (
    <userContext.Provider value={{
      count,
      setCount,
      extraA,
      extraB
    }}>
    <LayerA />
    </userContext.Provider>
  );
};
/**
 * LAYER A -------------------------------------------------
 */

const LayerA: FC = () => {
  const context = useContext(userContext);
  if(!context) {
    return <></>;
  }
  const { extraA } = context;
  return (
  <div>
    <LayerB />
    <div>{extraA}</div>
  </div>
  )
};
/**
 * LAYER B -------------------------------------------------
 */

const LayerB: FC = () => {
  const context = useContext(userContext);
  if(!context) {
    return <></>;
  }
  const { extraB  } = context;
  return (
    <div>
      <Child />
      <div>{extraB}</div>
    </div>
  )
};
/**
 * LAST CHILD ----------------------------------------------
 */

const Child: FC = () => {
  const context = useContext(userContext);
  if(!context) {
    return <></>;
  }
  const { count, setCount } = context;
  return(
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </>
  );
}
const Task4 = () => {
  return (
    <div>
      <Parent/>
    </div>
  );
};

export default Task4;
