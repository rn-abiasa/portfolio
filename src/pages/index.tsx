import { Button } from "../components/ui/button";
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
      <main className="p-5 mt-5 sm:px-16">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <img
              src="/foto_profil_formal.png"
              alt=""
              className="h-14 w-14 rounded-full"
            />
            <h1 className="text-3xl font-semibold mt-5">
              Hi there! I'm Rehan Abhiassa
            </h1>
          </div>
          <div>
            <p className="text-lg font-medium mt-5">
              A Website developer based in Bandung, Indonesia.
            </p>
            <p className="text-sm font-medium mt-5 text-muted-foreground">
              A Website developer based in Bandung, Indonesia.
            </p>
            <div className="flex gap-5 mt-12">
              <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold">
                Talk with me
              </Button>
              <Button
                variant="outline"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                See my projects
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-16 md:flex md:justify-between">
        <Section className="bg-card/10 sm:px-16" title="My Experience">
          <div className="flex flex-col gap-5 mt-4">
            <ItemCard
              icon={<GraduationCap />}
              title="Frontend Dev at Gamelab Indonesia"
              date="Agustus 2025 - November 2025"
            />
            <ItemCard
              icon={<GraduationCap />}
              title="Student at SMK Negeri 1 Cipeundeuy"
              date="Current"
            />
            <ItemCard
              icon={<GraduationCap />}
              title="Student at MTS Negeri 4 KBB"
              date="Juli 2020 - Juli 2023"
            />
          </div>
        </Section>
        <Section
          className="bg-card/10 mt-5 sm:px-16"
          title="Rewards & Sertificates"
        >
          <div className="flex flex-col gap-5 mt-4">
            <ItemCard
              icon={<GraduationCap />}
              title="Frontend Dev at Gamelab Indonesia"
              date="Agustus 2025 - November 2025"
            />
          </div>
        </Section>
      </div>
      <Section className="mt-16 mb-16 sm:px-16" title="My Projects">
        <div className="grid grid-cols-1 gap-5 mt-7 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard
            image="/landingpage.png"
            title="Llama Network Landing Page"
            description="Landing page created with Astro JS."
            previewLink="#"
            githubLink="#"
          />
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default IndexPage;
