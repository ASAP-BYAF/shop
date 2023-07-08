"use client";

import { NextPage } from "next";
import Button from "@/components/atoms/Button/index";
import Button2 from "@/components/atoms/Button2/index";
import Button3 from "@/components/atoms/Button3/index";
import Button4 from "@/components/atoms/Button4/index";
import Button5 from "@/components/atoms/Button5/index";
import Button6 from "@/components/atoms/Button6/index";

const Page: NextPage = () => {
  return (
    <div>
      <button>button</button>
      <Button variant={"primary"}>Button</Button>
      <Button variant={"secondary"}>Button</Button>
      <Button>Button</Button>
      <Button2>Button2</Button2>
      <Button3 backgroundColor={"black"}>Button3</Button3>
      <Button4 backgroundColor={"black"}>Button4</Button4>
      <Button5 variant={"primary"}>Button5</Button5>
      <Button6 variant={"primary"}>Button6</Button6>
      <Button6 variant={"secondary"}>Button6</Button6>
      <button style={{ backgroundColor: "red" }}>button</button>
    </div>
  );
};

export default Page;
