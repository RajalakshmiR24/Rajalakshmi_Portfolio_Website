import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
        
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Passionate front-end developer with expertise in HTML, CSS, JavaScript,
          React Native, Expo, and Next.js. Dedicated to creating engaging web
          and mobile interfaces and driving innovative projects. Seeking a position
          in IT to contribute to organizational prosperity and professional
          development
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            20+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience to build own projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {" "}
            <sub className="font-semibold text-base">
            I’m currently learning React Native & Expo
            <img src="https://github.com/RajalakshmiR24/RajalakshmiR24/assets/127002476/06faed26-4d6b-4f95-a9a2-b6bb352fa8fe" alt="expologo"></img>
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://camo.githubusercontent.com/9d703cf8593853e2e7d9c2f30fbe74a9c028121f7b204f51d395788f5843142a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d72616a616c616b73686d697232342673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt="RajalakshmiR24"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://camo.githubusercontent.com/0a9c4dccc89357305b937c0f028367f904f1abf9e3dc213acd6350c073fc5ec8/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d72616a616c616b73686d697232342673686f775f69636f6e733d74727565266c6f63616c653d656e"
            alt="RajalakshmiR24"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=babel,bootstrap,css,figma,firebase,git,github,html,js,jquery,netlify,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="RajalakshmiR24"
            loading="lazy"
          />
        </ItemLayout>



        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://main--zingy-cranachan-3b920a.netlify.app/"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://camo.githubusercontent.com/17b5727ccc1058c6a32b3a966c78dbf410206c69a52d376c83d09c007828cb76/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d72616a616c616b73686d6972323426"
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
