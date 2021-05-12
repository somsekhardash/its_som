import React, { useState, useEffect, Component } from "react";
import "semantic-ui-css/semantic.min.css";
import FormText from "./FormText";
import FormSelect from "./FormSelect";
import FormObject from "./FormObject";
import FormUpload from "./FormUpload";
import FormTextArea from "./FormTextArea";
import FormDatePicker from "./FormDatePicker";
import FormArray from "./FormArray";
import FormColorPicker from "./FormColorPicker";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
  ComponentType,
  ISchemaGroup,
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
      {schema.type == SchemaTypes.OBJECT && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      {schema.type == SchemaTypes.GROUP && (
        <React.Fragment>
          <h3>{schema.name}</h3>
          {Object.keys(schema.groups).map((node: string, index: number) => {
            let Group: Array<ComponentType> = schema.groups[node];
            return (
              <div key={index} className="group">
                {Group.map((item: ComponentType, index: number) => {
                  let Component = ComponentMAP[item.type];
                  if (Component)
                    return (
                      <Component
                        key={index}
                        schema={item}
                        idx={
                          idx
                            ? `${idx}_${node}_${getUniformName(item.name)}`
                            : getUniformName(item.name)
                        }
                        onChange={onChange}
                        type={item.type}
                      />
                    );
                })}
                {schema.remove && index > 0 && (
                  <button
                    className="ui secondary button"
                    onClick={() => schema.remove.onClick(index)}
                  >
                    {schema.remove.name}
                  </button>
                )}
              </div>
            );
          })}

          {schema.add && (
            <button
              className="ui secondary button"
              onClick={() => schema.add.onClick()}
            >
              {schema.add.name}
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export { FormBuilder };
