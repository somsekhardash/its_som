export const enum SchemaTypes {
  OBJECT = "object",
  GROUP = "group",
}

export const enum ComponentTypes {
  SELECT = "select",
  MULTISELECT = "multiselect",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  TEXT = "text",
  DATEPICKER = "datePicker",
  TEXTAREA = "textarea",
  UPLOAD = "upload",
  NUMBER = "number",
  COLOR = "color",
  ARRAY = "array",
}

export interface ComponentType extends Omit<ISchema, "type"> {
  type: ComponentTypes | SchemaTypes;
  description: string;
  value: any;
  data?: any;
}

export interface ISchema {
  name: string;
  type: SchemaTypes;
  items?: Array<ComponentType | ISchema>;
}
