import "./Steps.css";

const steps = ["your info", "select plan", "add-ons", "summary"];

export default function Steps({ currentPage }) {
  return (
    <aside className="pages flex">
      <ol className="pages__list flex">
        {steps.map((name, index) => (
          <li key={index} className="pages__li flex  uppercase">
            <div
              className={`pages__pg ${
                currentPage === index ? "pages__pg--current" : ""
              } flex center `}
            >
              {index + 1}
            </div>
            <div className="pages__step-name ">
              <div className="pages__step">{"step " + (index + 1)}</div>
              <div className="pages__name">{name}</div>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
