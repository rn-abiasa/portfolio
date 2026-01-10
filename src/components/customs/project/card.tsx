//const

import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { MoveUpRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  date: string;
  previewLink: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  date,
  previewLink,
}: Props) => {
  return (
    <>
      <Card className="bg-input/20 py-3">
        <CardContent className="px-3">
          <div className="flex justify-between items-center">
            <Badge variant="default" className="py-2 px-3">
              Web
            </Badge>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="py-2 px-3">
                {date}
              </Badge>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href={previewLink}>
                  <MoveUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="text-lg font-semibold">{title}</h5>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <img src={image} alt={title} className="rounded-lg mt-5" />
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
