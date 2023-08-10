import React, { useEffect, useContext } from "react";
import useHttp from "./share/UseHttp";
import SiteHeader from "./siteHelper/SiteHeader";
import SiteExperience from "./siteHelper/SiteExperience";
import SiteNav from "./siteHelper/SiteNav";
import SiteEducation from "./siteHelper/SiteEducation";
import SiteSkill from "./siteHelper/SiteSkills";
import SiteMap from "./siteHelper/SiteMap";
import SiteContact from "./siteHelper/SiteContact";
import { SkillsAPI } from "./schemas/skillsSchema";
import { AboutAPI } from "./schemas/HeaderSchema";
import { ExperienceAPI } from "./schemas/ExperienceSchema";
import { EducationAPI } from "./schemas/EducationSchema";
import SiteSkills from "./siteHelper/SiteSkills";
import { ContactAPI } from "./schemas/ContactSchema";
import { SiteAPI } from "./schemas/siteSchema";

function HomePage() {
  const { definition, getAbout } = AboutAPI();
  const { experienceDefinition, getExperience } = ExperienceAPI();
  const { SkillsDefinition, getSkills } = SkillsAPI();
  const { educationDefinition, getEducation } = EducationAPI();
  const { getContact, setContact } = ContactAPI();
  const { SiteDefinition, getSite } = SiteAPI();

  document.querySelector("body").classList.add("margin-left-parent");

  useEffect(() => {
    getAbout();
    getExperience();
    getEducation();
    getSkills();
    // getContact();
    getSite();
    return () => {
      document.querySelector("body").classList.remove("margin-left-parent");
    };
  }, []);

  return (
    <React.Fragment>
      {definition ? <SiteNav Schema={definition} /> : <h1>Loading .....</h1>}
      <div className="container-fluid p-0">
        {definition ? (
          <SiteHeader Schema={definition} />
        ) : (
          <h1>Loading .....</h1>
        )}
        <hr className="m-0"></hr>
        {experienceDefinition ? (
          <SiteExperience Schema={experienceDefinition} />
        ) : (
          <h1>Loading .....</h1>
        )}
        <hr className="m-0"></hr>
        {SkillsDefinition ? (
          <SiteSkills Schema={SkillsDefinition} />
        ) : (
          <h1>Loading .....</h1>
        )}
        <hr className="m-0"></hr>
        {educationDefinition ? (
          <SiteEducation Schema={educationDefinition} />
        ) : (
          <h1>Loading .....</h1>
        )}
        <hr className="m-0"></hr>
        {SiteDefinition ? (
          <SiteMap Schema={SiteDefinition} />
        ) : (
          <h1>Loading .....</h1>
        )}
        <hr className="m-0"></hr>
        <SiteContact setContact={setContact} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
