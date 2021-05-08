import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";

export const experienceDefinition: ISchema = {
  name: "experience",
  type: SchemaTypes.GROUP,
  items: [
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
};
