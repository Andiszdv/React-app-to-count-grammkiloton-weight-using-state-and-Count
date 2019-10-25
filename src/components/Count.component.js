import React from "react";

function CountComponent(props) {
  const countIncrement = () => {
    props.setCount && props.setCount(props.gramCount + props.countIncrement);
  };
  const count = Math.round(props.gramCount / props.countIncrement);
  return (
    <div>
      {count} {props.countLabel}
      <button onClick={countIncrement} style={{ marginLeft: 16 }}>
        +
      </button>
    </div>
  );
}

export default CountComponent;
