import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";

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
      ],
    },
  ],
};

const localData =
  JSON.parse(localStorage.getItem("HeaderForm")) || HeaderDefinition;

export default localData;
