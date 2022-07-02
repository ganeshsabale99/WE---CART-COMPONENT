import { Button } from "./Button";
import { LabelPrice } from "./LabelPrice";

export function CartItem({ id, name, price, qty, count }) {
  return (
    <div
      style={{
        border: "1px solid #ff9b00",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        columnGap:"100px" 
      }}
    >
      <h2>{name}</h2>
      <LabelPrice price={price} />
      <Button qty={qty} count={count} id={id} />
    </div>
  );
}
