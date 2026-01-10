import React from "react";

interface Props {
  icon?: React.ReactNode;
  title: string;
  date: string;
}

const ItemCard = ({ icon, title, date }: Props) => {
  return (
    <>
      <div className="border-b border-muted-foreground/20 py-5 flex items-center gap-5">
        <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
