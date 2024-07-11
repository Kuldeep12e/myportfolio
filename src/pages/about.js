import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  JsIcon,
  NextIcon,
  ReactIcon,
  TailwindCSS,
  TsIcon,
} from "@/components/Icons";
import Skills from "@/components/Skills";
import Exprience from "@/components/Exprience";
import TransitionEffect from "@/components/TransitionEffect";
const profilePic = "/images/profile/profile.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>Kuldeep Yadav | About</title>
        <meta name="author" content="Kuldeep Yadav" />
        <meta
          name="description"
          content="This is Kuldeep Yadav's portfolio"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* Title */}
          <Animated text="Passion Fuels Purpose!" className="mb-16" />
          {/* Text */}
          <div className="grid w-full grid-cols-8 gap-16">
            {/* Biography */}
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Love coding for fun!
              </p>
              <p className="my-4 font-medium">
                Hello, I am Kuldeep Yadav, an aspiring full-stack developer with a deep interest in crafting engaging digital experiences. Eager to learn and grow, I am committed to mastering web development skills and contributing to impactful projects. Lets embark on this journey of innovation together!
              </p>
            </div>

            {/* Profile picture */}
            <div
              className="col-span-3 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 w-72 h-84
            dark:bg-dark dark:border-light"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Kuldeep"
                className="rounded-md"
                width={240}
                height={360}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Text right */}
            <div className="col-span-2 flex flex-col items-end justify-between">
              {/* Tech Stacks */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-dark/75 dark:text-light/75">
                  My Tech Stack
                </span>
                <h2 className="text-xl text-dark font-medium flex items-center my-2 dark:text-light">
                  JavaScript
                  <JsIcon className="fill-yellow-400 ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center dark:text-light">
                  React.js
                  <ReactIcon className="fill-blue-400 ml-3 w-[30px] h-[30px]" />
                </h2>
              </div>
              {/* Learning */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-dark/75 dark:text-light/75">
                  I am Learning
                </span>
                <h2 className="text-xl text-dark font-medium flex items-center my-2 dark:text-light">
                  TypeScript
                  <TsIcon className="ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center mb-2 dark:text-light">
                  NodeJs
                  <NextIcon className="ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center dark:text-light">
                  TailwindCSS
                  <TailwindCSS className="ml-3 w-[30px] h-[30px]" />
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Exprience />
        </Layout>
      </main>
    </>
  );
};

export default about;
