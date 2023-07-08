"use client";

import { NextPage } from "next";
import Button from "@/components/atoms/Button/index";

const Page: NextPage = () => {
  return (
    <div>
      <Button>Hello</Button>
      <button style={{ backgroundColor: "red" }}>Hello</button>
    </div>
  );
};

export default Page;
