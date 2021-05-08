import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";

export const skillDefinition: ISchema = {
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
