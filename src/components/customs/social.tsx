import React from "react";

interface Props {
  icon: React.ReactNode;
  link: string;
}

const Social = ({ icon, link }: Props) => {
  return (
    <>
      <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
        <a href={link}>{icon}</a>
      </div>
    </>
  );
};

export default Social;
