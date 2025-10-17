import React from "react";

function CollapseSection({ title, buttonText, children }) {
  const collapseId = `collapse-${title.replace(/\s+/g, "")}`;

  return (
    <div className="my-4 text-center">
      <h4>{title}</h4>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${collapseId}`}
        aria-expanded="false"
        aria-controls={collapseId}
      >
        {buttonText}
      </button>

      <div className="collapse mt-3" id={collapseId}>
        <div className="card card-body shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollapseSection;
