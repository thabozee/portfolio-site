import React from "react";

function ProjectPreview() {
  const title: string = "Data Anaysis App";
  const desc: string = "Processess data in python";

  return (
    <div>
      <a href={""} className="font-bold underline hover:">{title}</a>
      <div>{desc}</div>
    </div>
  );
}

export default ProjectPreview;
