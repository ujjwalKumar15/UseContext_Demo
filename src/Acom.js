import React from "react";
import Bcom from "./Bcom";
import { useContextValue } from "./Context";

export default function Acom() {
  console.log(useContextValue());
  const { gettingData, getData } = useContextValue();

  const handlerChange = (e) => {
    gettingData(e.target.value);
  };

  return (
    <>
      <h1> A </h1>
      <input type="text" value={getData} onChange={handlerChange} />
      <Bcom />
    </>
  );
}
