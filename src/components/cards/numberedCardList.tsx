import React from "react";

interface NumberedCardListProps {
  items: string[];
}

const NumberedCardList: React.FC<NumberedCardListProps> = ({ items }) => {
  return (
    <div className="container my-5">
      <div className="row gy-4">
        {items.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-6" key={index}>
            <div className="numbered-card modern-style">
              <span className="card-number">{index + 1}</span>
              <h4 className="card-title">{item}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberedCardList;
