import React, { Fragment, useEffect, useRef } from "react";

type PlatformItem = {
  title: string;
  image: string;
};

type RolldownListProps = {
  items: PlatformItem[];
};

const RolldownList: React.FC<RolldownListProps> = ({ items }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = Array.from(listEl.children) as HTMLElement[];
          children.forEach((li, index) => {
            li.style.animationDelay = `${index * 0.2}s`;
            li.classList.add("visible");
          });
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(listEl);
    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div className="rolldown-container">
        <span className="rolldown-heading fw-bold fs-3">
          Supported platforms
        </span>
        <ul className="rolldown-list" ref={listRef}>
          {items.map((item, index) => (
            <Fragment>
              <li key={index}>
                <div className="rolldown-list-inner-container">
                  <img src={`${item.image}`} alt={`${item.title}`} />
                  {item.title}
                </div>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default RolldownList;
