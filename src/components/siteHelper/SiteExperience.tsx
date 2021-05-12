import * as React from "react";
import { ISchema } from "../schemas/interfaces";
import { objMaker } from "./SiteHeader";

function SiteExperience({ Schema }: any) {
  const { name } = Schema as ISchema;
  const experience = objMaker(Schema);
  const experiences = Object.keys(experience);
  console.log(experience);
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">{name.toUpperCase()}</h2>
        {experiences.map((node, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{experience[node].designation}</h3>
              <div className="subheading mb-3">
                {experience[node].companyname}
              </div>
              <div className="desc">
                {experience[node].description.split("*").map((node: any) => {
                  return <p>{node}</p>;
                })}
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {experience[node].startdate} -{" "}
                {index == 0 ? "Present" : experience[node].enddate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SiteExperience;
