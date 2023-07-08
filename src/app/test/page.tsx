"use client";

import { NextPage } from "next";
import Button from "@/components/atoms/Button/index";
import Button2 from "@/components/atoms/Button2/index";
import Button3 from "@/components/atoms/Button3/index";
<<<<<<< HEAD
import Button4 from "@/components/atoms/Button4/index";
=======
>>>>>>> 96c02a7e4343f40e0d4c59b2f4ce394bab823cf4

const Page: NextPage = () => {
  return (
    <div>
      <Button backgroundColor={"black"}>Hello</Button>
      <Button2>Hello</Button2>
      <Button3 backgroundColor={"black"}>Hello</Button3>
<<<<<<< HEAD
      <Button4 backgroundColor={"black"}>Hello</Button4>
=======
>>>>>>> 96c02a7e4343f40e0d4c59b2f4ce394bab823cf4
      <button style={{ backgroundColor: "red" }}>Hello</button>
    </div>
  );
};

export default Page;
