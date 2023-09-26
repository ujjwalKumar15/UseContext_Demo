import React, { useContext } from "react";
import { useContextValue } from "./Context";
// Use curly braces for named export
export default function Dcom() {
  const { getData } = useContextValue();

  return (
    <>
      <h1> D </h1>
      {getData}
    </>
  );
}
