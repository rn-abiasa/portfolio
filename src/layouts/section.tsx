import React from "react";
import { Badge } from "@/components/ui/badge";

const Section = ({
  id,
  className,
  name,
  title,
  children,
}: {
  id: string;
  className: string;
  name: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={`p-5 ${className}`}>
      <div className="flex flex-col justify-center items-center gap-2">
        <Badge variant="outline">{name}</Badge>
        <h2 className="text-2xl font-semibold text-center max-w-55">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
