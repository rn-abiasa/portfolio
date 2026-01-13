import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { GraduationCap } from "lucide-react";
import Navbar from "../components/customs/navbar";
import Section from "../layouts/section";
import ItemCard from "../components/customs/item/card";
import ProjectCard from "../components/customs/project/card";
import Footer from "../layouts/footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main className="p-5 py-10 sm:px-16 md:px-26 lg:px-50 xl:px-70">
        <div className="sm:flex sm:gap-5 md:justify-between">
          <div className="">
            <Badge variant="outline">Fullstack web developer</Badge>
            <h1 className="text-4xl font-semibold mt-5">
              Hi there, I'm Rehan Abhiassa 👋🏻
            </h1>
            <p className="text-lg mt-5">
              I'm a web developer based in Bandung, Indonesia.
            </p>
            <p className="text-sm mt-5">
              Coding is not just a job, it is my hobby.
            </p>
            <div className="flex gap-5 mt-8">
              <Button className="font-semibold rounded-full" asChild>
                <a href="mailto:rnabiasa@gmail.com">Talk with me</a>
              </Button>
              <Button
                variant="outline"
                className="font-semibold rounded-full"
                asChild
              >
                <a href="#project">See my projects</a>
              </Button>
            </div>
          </div>
          <img
            src="/Abiasa-profile.png"
            alt=""
            className="rounded-2xl mt-12 sm:mt-0 sm:h-70 md:h-90"
          />
        </div>
      </main>
      <Section
        id="project"
        name="Our work"
        title="Sellected Work & Projects"
        className="sm:px-16 md:px-26 lg:px-50 xl:px-70"
      >
        <div className="grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard
            image="/accommodation.png"
            title="Accommodation Landing Page"
            description="Build with React, TailwindCSS, and ShadcnUI"
            date="New"
            previewLink="https://accommodation-web.vercel.app"
          />
          <ProjectCard
            image="/landingpage.png"
            title="Llama Landing Page"
            description="Build with Astro JS, and TailwindCSS"
            date="2025"
            previewLink="https://llamanetwork.netlify.app"
          />
        </div>
      </Section>
      <Section
        id=""
        name="About Me"
        title="Let's, Get to Know Me"
        className="mt-10 mb-16 sm:px-16 md:px-26 lg:px-50 xl:px-70"
      >
        <div className="mt-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-center sm:gap-10 md:gap-20">
            <div className="relative flex">
              <img
                src="/84898.jpg"
                alt=""
                className="border-7 border-secondary h-40 w-40 rounded-3xl -rotate-10"
              />
              <img
                src="/84898.jpg"
                alt=""
                className="border-7 border-secondary h-40 w-40 rounded-3xl rotate-10"
              />
            </div>
            <div className="mt-5 sm:w-70 md:w-80">
              <h3 className="text-2xl font-semibold">Call me Abiasa 👋🏻</h3>
              <p className="text-sm text-black/80 mt-2">
                I was born in Bandung, Indonesia. I have been interested in
                website development since I was in junior high school. I learned
                to develop websites autodadactically.
              </p>
              <p className="text-sm text-black/80 mt-7">
                - I like to explore new things.
              </p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 sm:flex sm:gap-10 md:gap-20">
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              <div className="grid grid-cols-1 gap-5">
                <ItemCard
                  icon={<GraduationCap />}
                  title="Frontend dev at Gamelab Indonesia"
                  date="04 Agustus, 2025 - 21 November 2025"
                />
                <ItemCard
                  icon={<GraduationCap />}
                  title="Student at SMK Negeri 1 Cipeundeuy"
                  date="Current"
                />
                <ItemCard
                  icon={<GraduationCap />}
                  title="Student at MTS Negeri 4 KBB"
                  date="04 Juli, 2020 - 21 Juli 2023"
                />
              </div>
            </div>
            <div className="mt-12 sm:mt-0">
              <h3 className="text-lg font-semibold">
                Achivements & Sertificates
              </h3>
              <div className="grid grid-cols-1 gap-5">
                <ItemCard
                  icon={<GraduationCap />}
                  title="Frontend dev at Gamelab Indonesia"
                  date="04 Agustus, 2025 - 21 November 2025"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default IndexPage;
