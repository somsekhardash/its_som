import { useEffect, useState } from "react";
import { getUniformName } from "../formHelper/FormBuilder";
import { ISchema, SchemaTypes } from "../schemas/interfaces";

export function useRemaker(builderSchema: any, schema?: ISchema) {
  const makeSchema = (schema: ISchema, parentName?: any) => {
    if (!schema) return null;
    const prefix = !!parentName ? `${parentName}_${schema.name}` : schema.name;
    schema.items.forEach((node: any) => {
      if (node.type != SchemaTypes.OBJECT) {
        node.value = builderSchema[`${prefix}_${getUniformName(node.name)}`];
      } else {
        makeSchema(node, prefix);
      }
    });
    return schema;
  };

  const makeSchemaGroup = (schema: ISchema, parentName?: any) => {
    if (!schema) return null;
    const prefix = !!parentName ? `${parentName}_${schema.name}` : schema.name;
    const object = schema.groups;
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const subSchema = object[key];
        const key1 = key;
        subSchema.forEach((node: any) => {
          if (node.type != SchemaTypes.OBJECT) {
            node.value =
              builderSchema[`${prefix}_${key1}_${getUniformName(node.name)}`];
          }
        });
      }
    }
    return schema;
  };

  useEffect(() => {
    schema.type == SchemaTypes.GROUP
      ? makeSchemaGroup(schema)
      : makeSchema(schema);
  }, [builderSchema]);

  const revSchema =
    schema.type == SchemaTypes.GROUP
      ? makeSchemaGroup(schema)
      : makeSchema(schema);

  return { revSchema };
}
