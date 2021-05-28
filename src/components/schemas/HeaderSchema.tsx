import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";
import useHttp from "../share/UseHttp";
import { ABOUT_URL, SECRET_KEY } from "src/config";
import dataInject from "src/components/share/dataInjector";

const HeaderDefinition: ISchema = {
  name: "about",
  type: SchemaTypes.OBJECT,
  items: [
    {
      type: ComponentTypes.TEXT,
      description: "full Name",
      value: "",
      name: "full Name",
    },
    {
      type: ComponentTypes.TEXT,
      description: "house name and street name",
      value: "",
      name: "address1",
    },
    {
      type: ComponentTypes.UPLOAD,
      name: "profilePic",
      value: "",
      description: "Profile Picture",
    },
    {
      type: ComponentTypes.TEXT,
      description: "town and state",
      value: "",
      name: "address2",
    },
    {
      type: ComponentTypes.TEXT,
      description: "pin code",
      value: "",
      name: "address3",
    },
    {
      type: ComponentTypes.TEXT,
      description: "mobile number",
      value: "",
      name: "mobile",
    },
    {
      type: ComponentTypes.TEXT,
      description: "email id",
      value: "",
      name: "email",
    },
    {
      type: ComponentTypes.TEXTAREA,
      description: "about me",
      value: "",
      name: "about me",
    },
    {
      type: SchemaTypes.OBJECT,
      name: "social",
      items: [
        {
          type: ComponentTypes.TEXT,
          description: "email id",
          value: "",
          name: "linkedin",
        },
        {
          type: ComponentTypes.TEXT,
          description: "email id",
          value: "",
          name: "github",
        },
        {
          type: ComponentTypes.TEXT,
          description: "email id",
          value: "",
          name: "twitter",
        },
        {
          type: ComponentTypes.TEXT,
          description: "email id",
          value: "",
          name: "facebook",
        },
        {
          type: ComponentTypes.TEXT,
          description: "resume",
          value: "",
          name: "resume",
        },
      ],
    },
  ],
};

export function AboutAPI() {
  const [AboutLoader, AboutData, AboutError, GetAbout] = useHttp();
  const [SetAboutLoader, SetAboutData, SetAboutError, SetAbout] = useHttp();

  const [definition, setDefinition] = useState(null);

  const getAbout = () => {
    GetAbout(`${ABOUT_URL}/latest`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
      },
    });
  };

  const setAbout = (data: string) => {
    SetAbout(ABOUT_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInject.schemaToObject(JSON.parse(data))),
    });
  };

  useEffect(() => {
    if (!AboutError && AboutData) {
      setDefinition(dataInject.objectToSchema(AboutData, HeaderDefinition));
    }
  }, [AboutError, AboutData]);

  return { definition, getAbout, setAbout };
}
