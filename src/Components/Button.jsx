import { Quantity } from "./Quantity";

export function Button({ qty, count, id }) {
  return (
    <div style={{ border: "1px solid", display: "flex"}}>
      <button className="btn" onClick={() => count(id, 1)}>+</button>
      {/* <p style={{display:'inline',padding:"5px"}}>{qty}</p> */}
      <Quantity qty={qty} />
      <button className="btn" onClick={() => count(id, -1)}>-</button>
    </div>
  );
}
