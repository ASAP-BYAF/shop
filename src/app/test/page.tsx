"use client";

import { NextPage } from "next";
import Button from "@/components/atoms/Button/index";
import Button2 from "@/components/atoms/Button2/index";
import Button3 from "@/components/atoms/Button3/index";

const Page: NextPage = () => {
  return (
    <div>
      <Button>Hello</Button>
      <Button2>Hello</Button2>
      <Button3 backgroundColor={"black"}>Hello</Button3>
      <button style={{ backgroundColor: "red" }}>Hello</button>
    </div>
  );
};

export default Page;
