import React from "react";

type VerticalCardItemProps = {
  icon: React.ReactNode; // Allows emoji, SVG, or any React element
  title: string;
  description: string;
};

const VerticalCard: React.FC<VerticalCardItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="item">
      <div className="icon">
        <img src={`${icon}`} alt={`${title}`} />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default VerticalCard;
