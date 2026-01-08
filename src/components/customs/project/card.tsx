//const

import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";

interface Props {
  image: string;
  title: string;
  description: string;
  previewLink: string;
  githubLink: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  previewLink,
  githubLink,
}: Props) => {
  return (
    <>
      <Card className="py-3">
        <CardContent className="px-3">
          <img src={image} alt={title} className="rounded-lg" />
          <div className="mt-3">
            <h5 className="text-base font-semibold">{title}</h5>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 px-3">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold"
            asChild
          >
            <a href={previewLink} target="_blank" rel="noreferrer">
              Preview
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={githubLink} target="_blank" rel="noreferrer">
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
