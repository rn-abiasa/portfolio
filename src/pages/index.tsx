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
      <main className="p-5 py-10 sm:px-16">
        <div>
          <Badge variant="outline">Fullstack web developer</Badge>
          <div className="mt-5">
            <h1 className="text-3xl font-semibold">
              Hi there, I'm Rehan Abhiassa
            </h1>
            <p className="text-lg mt-5">
              I'm a web developer based in Bandung, Indonesia.
            </p>
            <p className="text-sm mt-5">
              I'm a web developer based in Bandung, Indonesia.
            </p>
            <div className="flex gap-5 mt-8">
              <Button className="font-semibold rounded-full" asChild>
                <a href="">Talk with me</a>
              </Button>
              <Button
                variant="outline"
                className="font-semibold rounded-full"
                asChild
              >
                <a href="">See my projects</a>
              </Button>
            </div>
          </div>
          <img src="/Abiasa-profile.png" alt="" className="rounded-2xl mt-12" />
        </div>
      </main>
      <Section name="Our work" title="Sellected Work & Projects" className="">
        <div className="grid grid-cols-1 gap-10 mt-12">
          <ProjectCard
            image="/landingpage.png"
            title="Llama Landing Page"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            previewLink=""
          />
          <ProjectCard
            image="/landingpage.png"
            title="Llama Landing Page"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            previewLink=""
          />
        </div>
      </Section>
      <Section
        name="About Me"
        title="Let's, Get to Know Me"
        className="mt-10 mb-16"
      >
        <div className="mt-12">
          <div className="flex flex-col gap-8">
            <div className="relative flex">
              <img
                src="/84898.jpg"
                alt=""
                className="border-7 border-gray-200 h-40 w-40 rounded-3xl -rotate-10"
              />
              <img
                src="/84898.jpg"
                alt=""
                className="border-7 border-gray-200 h-40 w-40 rounded-3xl rotate-10"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">Call me Abiasa</h3>
              <p className="text-sm text-black/80 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-sm text-black/80 mt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="mt-12">
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
                  title="Student dev at SMK Negeri 1 Cipeundeuy"
                  date="current"
                />
                <ItemCard
                  icon={<GraduationCap />}
                  title="Frontend dev at Gamelab Indonesia"
                  date="04 Agustus, 2025 - 21 November 2025"
                />
              </div>
            </div>
            <div className="mt-12">
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
