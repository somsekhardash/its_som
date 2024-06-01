import * as React from "react";
import { HeaderForm } from "./HeaderForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillForm from "./SkillForm";
import SiteForm from "./SiteForm";
import { AboutAPI } from "../schemas/HeaderSchema";
import { EducationAPI } from "../schemas/EducationSchema";
import { ExperienceAPI } from "../schemas/ExperienceSchema";
import { SiteAPI } from "../schemas/SiteSchema";
import { SkillsAPI } from "../schemas/SkillsSchema";
import { ContactAPI } from "../schemas/ContactSchema";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const FormContainer = () => {
  const { definition, getAbout, setAbout } = AboutAPI();
  const { educationDefinition, getEducation, setEducation } = EducationAPI();
  const { experienceDefinition, getExperience, setExperience } =
    ExperienceAPI();
  const { SkillsDefinition, getSkills, setSkills } = SkillsAPI();
  const { SiteDefinition, getSite, setSite } = SiteAPI();
  const { contactDefinition, getContact, setContact } = ContactAPI();

  useEffect(() => {
    getAbout();
    getEducation();
    getExperience();
    getSkills();
    getSite();
    // getContact();
  }, []);

  return (
    <div className="input">
      {definition && definition.name ? (
        <HeaderForm HeaderDefinition={definition} setAbout={setAbout} />
      ) : (
        <h1>Loading.....</h1>
      )}
      {experienceDefinition && experienceDefinition.name ? (
        <ExperienceForm
          ExperienceDefinition={experienceDefinition}
          setExperience={setExperience}
        />
      ) : (
        <h1>Loading.....</h1>
      )}
      {educationDefinition && educationDefinition.name ? (
        <EducationForm
          EducationDefinition={educationDefinition}
          setEducation={setEducation}
        />
      ) : (
        <h1>Loading.....</h1>
      )}
      {SkillsDefinition && SkillsDefinition.name ? (
        <SkillForm SkillsDefinition={SkillsDefinition} setSkills={setSkills} />
      ) : (
        <h1>Loading.....</h1>
      )}
      {SiteDefinition && SiteDefinition.name ? (
        <SiteForm SiteDefinition={SiteDefinition} setSite={setSite} />
      ) : (
        <h1>Loading.....</h1>
      )}
      {contactDefinition ? (
        <ContactForm
          contactDefinition={contactDefinition}
          setContact={setContact}
        />
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
};

export { FormContainer };
