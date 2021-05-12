import * as React from "react";
import { ISchema } from "../schemas/interfaces";
import { objMaker } from "./SiteHeader";

function SiteEducation({ Schema }: any) {
  const { name } = Schema as ISchema;
  const education = objMaker(Schema);
  const educations = Object.keys(education);
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">{name.toUpperCase()}</h2>
        {educations.map((node, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{education[node].institutename}</h3>
              <div className="subheading mb-3">
                {education[node].coursename}
              </div>
              <div>{education[node].coursedetails}</div>
              {/* <p>GPA: {education[node].cgpa}</p> */}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {education[node].startdate} - {education[node].enddate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SiteEducation;
