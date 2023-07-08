"use client";

import { NextPage } from "next";
import Button from "@/components/atoms/Button/index";
import Button2 from "@/components/atoms/Button2/index";

const Page: NextPage = () => {
  return (
    <div>
      <Button>Hello</Button>
      <Button2>Hello</Button2>
      <button style={{ backgroundColor: "red" }}>Hello</button>
    </div>
  );
};

export default Page;
