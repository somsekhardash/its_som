import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";
import { SECRET_KEY, SKILLS_URL } from "src/config";
import useHttp from "../share/UseHttp";

const SkillSchema: ISchema = {
  name: "skills",
  type: SchemaTypes.OBJECT,
  items: [
    {
      type: ComponentTypes.TEXT,
      description: "tool title",
      value: "",
      name: "tool title",
    },
    {
      type: ComponentTypes.ARRAY,
      name: "tools",
      value: [],
      data: ["my", "dash"],
      description: "tool name",
    },
    {
      type: ComponentTypes.TEXT,
      description: "workflow title",
      value: "",
      name: "workflow title",
    },
    {
      type: ComponentTypes.TEXT,
      name: "workflow",
      value: [],
      description: "workflow",
    },
    {
      type: ComponentTypes.TEXT,
      description: "save this form",
      value: "",
      name: "saveForm",
    },
  ],
};

export function SkillsAPI() {
  const [SkillsLoader, SkillsData, SkillsError, GetSkills] = useHttp();
  const [SetSkillsLoader, SetSkillsData, SetSkillsError, SetSkills] = useHttp();

  const [SkillsDefinition, setDefinition] = useState(
    () =>
      JSON.parse(localStorage.getItem("SkillsForm")) || {
        ...SkillSchema,
      }
  );

  const getSkills = () => {
    GetSkills(`${SKILLS_URL}/latest?meta=false`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
        "X-Master-Key": SECRET_KEY
      },
    });
  };

  const setSkills = (data: string) => {
    SetSkills(SKILLS_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "X-Master-Key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: data,
    });
  };

  useEffect(() => {
    !SkillsError && setDefinition(SkillsData);
  }, [SkillsError, SkillsData]);

  return { SkillsDefinition, getSkills, setSkills };
}
