"use client";

import { NextPage } from "next";
import CheckBox from "@/components/molecules/CheckBox";

const Page: NextPage = () => {
  return (
    <div>
      <CheckBox label="tmp" checked={false} />
    </div>
  );
};

export default Page;
