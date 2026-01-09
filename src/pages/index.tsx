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
                <a href="">Talk with me</a>
              </Button>
            </div>
          </div>
          <img src="/Abiasa-profile.png" alt="" className="rounded-2xl mt-12" />
        </div>
      </main>
      <Section name="Our work" title="Sellected Work & Project" className="">
        <div className="grid grid-cols-1 gap-5 mt-10">
          <ProjectCard
            image="/landingpage.png"
            title="Llama Landing Page"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            previewLink=""
            githubLink=""
          />
          <ProjectCard
            image="/landingpage.png"
            title="Llama Landing Page"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            previewLink=""
            githubLink=""
          />
        </div>
      </Section>
      <Section name="About Me" title="Let's, Get to Know Me" className="mt-10">
        <div className="mt-10">
          <div className="flex flex-col gap-8">
            <img src="/84898.jpg" alt="" className="rounded-3xl" />
            <div>
              <h3 className="text-2xl font-semibold">Call me Abiasa</h3>
              <p className="text-sm text-black/80 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-sm text-black/80 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default IndexPage;
