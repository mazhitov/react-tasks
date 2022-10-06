import React, { createContext, FC, useCallback, useContext, useState } from 'react';


/*
1) What’s wrong with this code snippet?
  There is prop drilling, when the same data is being sent at almost every level due to requirements in the final level.
2) How can we improve it?
  Data needed to be sent from Parent -> LayerA -> LayerB -> Child.

  One of which is Redux: You create a data store and connect any component to the store and void,
  no matter where the component is positioned in the Component Tree it has access to the store.

  React also has the concept of Context which lets you create something like a global data store and any Component in 'context' can have access to the data store.
3) What benefits and drawbacks of each method
  If we're only using Redux to avoid passing down props, we can replace it with Context API. Context is great for sharing trivial pieces of state between components.
  Redux is much more powerful and provides a set of handy features that Context doesn't have.
  It's great for managing centralized state and handling API requests.
*/
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
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  if(!context) {
    return <></>;
  }
  const { count, setCount } = context;
  return(
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Inc</button>
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
