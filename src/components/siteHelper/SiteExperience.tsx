import * as React from "react";
import { ISchema } from "../schemas/interfaces";
import { objMaker } from "./SiteHeader";

export const getTheDate = (date: string) => {
  if (!date) return "";
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(date); //converts the string into date object
  const m = d.getMonth();
  const y = d.getFullYear(); //get the value of month
  return `${monthNames[m]} ${y}`;
};

function SiteExperience({ Schema }: any) {
  const { name } = Schema as ISchema;
  const experience: any = objMaker(Schema);
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
                {getTheDate(experience[node].startdate)} -
                {index == 0 ? "Present" : getTheDate(experience[node].enddate)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SiteExperience;
