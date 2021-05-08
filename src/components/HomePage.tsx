import React, { useEffect, useContext } from "react";
import useHttp from "./share/UseHttp";
import SiteHeader from "./siteHelper/SiteHeader";
import SiteExperience from "./siteHelper/SiteExperience";
import SiteNav from "./siteHelper/SiteNav";
import SiteEducation from "./siteHelper/SiteEducation";
import SiteSkill from "./siteHelper/SiteSkills";
import SiteMap from "./siteHelper/SiteMap";

import SiteContact from "./siteHelper/SiteContact";

const HomePage: React.FC<any> = () => {
  const aboutData = {};
  const experienceData = {};
  const educationData = {};
  const skillData = {};
  const contactData = {};

  useEffect(() => {
    console.log(aboutData);
    console.log(experienceData);
    console.log(educationData);
    console.log(skillData);
    console.log(contactData);
  }, []);

  return (
    <div className="input">
      <SiteNav />
      <SiteHeader data={aboutData} />
      {!true ? <SiteHeader data={aboutData} /> : <h1>Loading .....</h1>}
      {!true ? (
        <SiteExperience data={experienceData} />
      ) : (
        <h1>Loading .....</h1>
      )}
      {!true ? <SiteEducation data={educationData} /> : <h1>Loading .....</h1>}
      {!true ? <SiteSkill data={skillData} /> : <h1>Loading .....</h1>}
      <SiteMap />
      <SiteContact />
    </div>
  );
};

export default HomePage;
