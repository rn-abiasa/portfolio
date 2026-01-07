import React from "react";

const Section = ({
  className,
  title,
  children,
}: {
  className: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={`p-5 ${className}`}>
      <div>
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
