import React from 'react'

const Counter = ({title, value, onClick}) => {
  return (
    <div>
      {title}: <button onClick={() => onClick(value - 1)}>-</button>
      {value}
      <button onClick={() => onClick( value + 1) }>+</button>
    </div>
  );
}

export default Counter