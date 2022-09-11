import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Biography from "@lib/components/Biography";
import Skills from "@lib/components/Skills";
import ContactForm from "@lib/components/ContactForm";

const Home: NextPage = () => {
  return (
    <div className="sm:w-full lg:w-1/2 m-auto md:mt-10 sm:mt-8 sm:px-4">
      <Head>
        <title>Kamala Sahmoud</title>
        <meta name="description" content="Personal website of kamal sahmoud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Biography />

      <Skills />

      <ContactForm />
    </div>
  );
};

export default Home;
