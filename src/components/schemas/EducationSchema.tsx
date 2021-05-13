import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "components/schemas/interfaces";
import useHttp from "../share/UseHttp";
import { EDUCATION_URL, SECRET_KEY } from "config";

const EducationDefinition: ISchema = {
  name: "education",
  type: SchemaTypes.GROUP,
  groups: {
    0: [
      {
        type: ComponentTypes.TEXT,
        description: "Institute name",
        value: "",
        name: "instituteName",
      },
      {
        type: ComponentTypes.TEXT,
        description: "Course name",
        value: "",
        name: "courseName",
      },
      {
        type: ComponentTypes.TEXT,
        description: "Course details",
        value: "",
        name: "courseDetails",
      },
      {
        type: ComponentTypes.TEXT,
        description: "CGPA",
        value: "",
        name: "CGPA",
      },
      {
        type: ComponentTypes.DATEPICKER,
        description: "start date in Institute",
        value: "",
        name: "startDate",
      },
      {
        type: ComponentTypes.DATEPICKER,
        description: "end date in Institute",
        value: "",
        name: "endDate",
      },
    ],
  },
};

export function EducationAPI() {
  const [EducationLoader, EducationData, EducationError, GetEducation] =
    useHttp();
  const [
    SetEducationLoader,
    SetEducationData,
    SetEducationError,
    SetEducation,
  ] = useHttp();

  const [educationDefinition, setDefinition] = useState(EducationDefinition);

  const getEducation = () => {
    GetEducation(`${EDUCATION_URL}/latest`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
      },
    });
  };

  const setEducation = (data: string) => {
    SetEducation(EDUCATION_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: data,
    });
  };

  useEffect(() => {
    !EducationError && setDefinition(EducationData);
  }, [EducationError, EducationData]);

  return { educationDefinition, getEducation, setEducation };
}
