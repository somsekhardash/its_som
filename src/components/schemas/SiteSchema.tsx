import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";

export const siteDefinition: ISchema = {
  name: "site",
  type: SchemaTypes.OBJECT,
  items: [
    {
      type: ComponentTypes.COLOR,
      description: "sitecolor",
      value: "",
      name: "sitecolor",
    },
    {
      type: ComponentTypes.UPLOAD,
      description: "background",
      value: "",
      name: "background",
    },
  ],
};
