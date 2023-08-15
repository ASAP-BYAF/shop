"use client";

import { NextPage } from "next";
import CheckBox from "@/components/molecules/CheckBox";
import Dropzone from "@/components/molecules/Dropzone";

const Page: NextPage = () => {
  return (
    <div>
      <CheckBox label="tmp" checked={false} />
      <Dropzone />
    </div>
  );
};

export default Page;
