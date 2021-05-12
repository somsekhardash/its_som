import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";
import { EXPERIENCE_URL, SECRET_KEY } from "src/config";
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

  const [experienceDefinition, setDefinition] = useState(
    () =>
      JSON.parse(localStorage.getItem("ExperienceForm")) || {
        ...ExperienceSchema,
      }
  );

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
    !ExperienceError && setDefinition(ExperienceData);
  }, [ExperienceError, ExperienceData]);

  return { experienceDefinition, getExperience, setExperience };
}
