import React from 'react';

export function counter(count = 0) {
  let currentCount = count;
  return [
    () => {
      console.log(currentCount);
      return currentCount;
    },
    () => currentCount++,
  ]
}
const Task2 = () => {
  const [getA, nextA] = counter(1);
  getA(); // 1
  nextA();
  getA(); // 2
  const [getB, nextB] = counter(10);
  nextB();
  getA(); // 2
  getB(); // 11
  nextA();
  getA(); // 3
  getB(); // 11
  return (
    <div>
    </div>
  );
};

export default Task2;
