import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "components/schemas/interfaces";
import { EXPERIENCE_URL, SECRET_KEY } from "config";
import useHttp from "../share/UseHttp";

const ExperienceSchema: ISchema = {
  name: "experience",
  type: SchemaTypes.GROUP,
  groups: {
    0: [
      {
        type: ComponentTypes.TEXT,
        description: "designation",
        value: "",
        name: "designation",
      },
      {
        type: ComponentTypes.TEXT,
        description: "company name",
        value: "",
        name: "companyName",
      },
      {
        type: ComponentTypes.TEXTAREA,
        description: "company description",
        value: "",
        name: "description",
      },
      {
        type: ComponentTypes.DATEPICKER,
        description: "start date in company",
        value: "",
        name: "startDate",
      },
      {
        type: ComponentTypes.DATEPICKER,
        description: "start date in company",
        value: "",
        name: "endDate",
      },
      {
        type: ComponentTypes.UPLOAD,
        description: "company Logo",
        value: "",
        name: "companyLogo",
      },
    ],
  },
};

export function ExperienceAPI() {
  const [ExperienceLoader, ExperienceData, ExperienceError, GetExperience] =
    useHttp();
  const [
    SetExperienceLoader,
    SetExperienceData,
    SetExperienceError,
    SetExperience,
  ] = useHttp();

  const [experienceDefinition, setDefinition] = useState(ExperienceSchema);

  const getExperience = () => {
    GetExperience(`${EXPERIENCE_URL}/latest`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
      },
    });
  };

  const setExperience = (data: string) => {
    SetExperience(EXPERIENCE_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: data,
    });
  };

  useEffect(() => {
    if (ExperienceData && ExperienceData.groups[0]) {
      for (const key in ExperienceData.groups) {
        if (Object.prototype.hasOwnProperty.call(ExperienceData.groups, key)) {
          const group = ExperienceData.groups[key];
          console.log(group);
        }
      }
    }

    !ExperienceError && setDefinition(ExperienceData);
  }, [ExperienceError, ExperienceData]);

  return { experienceDefinition, getExperience, setExperience };
}
