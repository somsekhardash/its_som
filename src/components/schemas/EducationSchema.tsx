import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "src/components/schemas/interfaces";

export const EducationSchema: ISchema = {
  name: "education",
  type: SchemaTypes.GROUP,
  items: [
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
};
