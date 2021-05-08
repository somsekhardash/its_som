import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import FormText from "./FormText";
import FormSelect from "./FormSelect";
import FormObject from "./FormObject";
import FormUpload from "./FormUpload";
import FormTextArea from "./FormTextArea";
import FormButton from "./FormButton";
import FormDatePicker from "./FormDatePicker";
import FormArray from "./FormArray";
import FormColorPicker from "./FormColorPicker";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
  ComponentType,
} from "src/components/schemas/interfaces";
import { useBuilder } from "../share/useBuilder";

const ComponentMAP: any = {
  [ComponentTypes.TEXT]: FormText,
  [ComponentTypes.TEXT]: FormText,
  [ComponentTypes.SELECT]: FormSelect,
  [SchemaTypes.OBJECT]: FormObject,
  [ComponentTypes.UPLOAD]: FormUpload,
  [ComponentTypes.TEXTAREA]: FormTextArea,
  [ComponentTypes.ARRAY]: FormArray,
  [ComponentTypes.DATEPICKER]: FormDatePicker,
  [ComponentTypes.COLOR]: FormColorPicker,
};

export const getUniformName = (item: string) => {
  return item.toLowerCase().split(" ").join("-");
};

const FormBuilder: React.FC<any> = ({
  schema,
  idx = schema.name,
  onChange,
}) => {
  return (
    <div className="form-builder-container">
      <h3>{schema.name}</h3>
      {schema.items.map((item: ComponentType, index: number) => {
        let Component = ComponentMAP[item.type];
        if (Component)
          return (
            <Component
              key={index}
              schema={item}
              idx={
                idx
                  ? `${idx}_${getUniformName(item.name)}`
                  : getUniformName(item.name)
              }
              onChange={onChange}
              type={item.type}
            />
          );
      })}
    </div>
  );
};

export { FormBuilder };
