import { useState } from "react";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

const products = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    qty: 1
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    qty: 2
  },
  {
    id: 3,
    name: "Chips",
    price: 10,
    qty: 3
  }
];
let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a + b));

export function CartContainer() {
  const [data, setData] = useState(products);

  function total(products) {
    return products.reduce((a, b) => a + +b.price * +b.qty, 0);
  }

  function count(id, amount) {
    console.log(id, amount);
    const newProd = products.map((el) => {
      if (id === el.id) {
        el.qty += amount;
      }
      return el;
    });
    setData([...newProd]);
  }

  return (
    <div
      style={{
        padding: "75px",
        margin: "auto",
        border: "1px solid #ff9b00",
        width: "50%",
        justifyContent:"center"
      }}
    >
      {data.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
          count={count}
        />
      ))}
      <Total total={total(products)} />
    </div>
  );
}
