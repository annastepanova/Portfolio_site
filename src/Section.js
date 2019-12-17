import React from "react"

export default function Section({ title, id }) {
  return (
      <div className="section-content" id={id}>
        <h1>{title}</h1>
      </div>
  );
}
