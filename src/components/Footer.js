import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:border-light dark:text-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;All rights reserved</span>
        <div className="flex items-center lg:py-2">
          Build With
          <span className="text-red-500 text-2xl px-1">&hearts;</span>
          by&nbsp;
          <Link
            href="https://github.com/Kuldeep12e"
            className="underline underline-offset-2"
            target={"_blank"}
          >
           Kuldeep Yadav
          </Link>
        </div>
        <Link
          href="https://x.com/Kuldeep87640925"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Tweet DM me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
