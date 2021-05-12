import { useEffect, useState } from "react";
import { getUniformName } from "../formHelper/FormBuilder";
import { ISchema, SchemaTypes } from "../schemas/interfaces";

export function useBuilder(schema?: ISchema) {
  var getSchama = (schema: ISchema, parentName?: any, init: any = {}) => {
    const prefix = !!parentName ? `${parentName}_${schema.name}` : schema.name;
    schema.items.forEach((item: any) => {
      if (item.type == SchemaTypes.OBJECT) {
        getSchama(item, prefix, init);
      } else {
        init[`${prefix}_${getUniformName(item.name)}`] = item.value;
      }
    });
    return init;
  };

  var getSchemaGroup = (schema: ISchema, parentName?: any, init: any = {}) => {
    schema.add = {
      name: "add",
      onClick: () => {
        const index = Object.keys(schema.groups).length;
        schema.groups[index] = [];
        schema.groups[index - 1].forEach((node) => {
          schema.groups[index].push({ ...node, value: "" });
        });
        setBuilderSchema(getSchemaGroup(schema));
      },
    };
    schema.remove = {
      name: "remove",
      onClick: (key: any) => {
        const { [key]: remove, ...rest } = schema.groups;
        schema.groups = { ...rest };
        setBuilderSchema(getSchemaGroup(schema));
      },
    };
    const prefix = !!parentName ? `${parentName}_${schema.name}` : schema.name;
    const object = schema.groups;
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const subSchema = object[key];
        subSchema.forEach((item: any) => {
          init[`${prefix}_${key}_${getUniformName(item.name)}`] = item.value;
        });
      }
    }
    return init;
  };

  const [builderSchema, setBuilderSchema] = useState(() =>
    schema.type == SchemaTypes.GROUP
      ? getSchemaGroup(schema)
      : getSchama(schema)
  );

  const onSchemaChange = (key: string, value: any) => {
    setBuilderSchema({ ...builderSchema, [key]: value });
  };
  return { builderSchema, onSchemaChange };
}
