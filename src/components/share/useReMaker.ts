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

  useEffect(() => {
    makeSchema(schema);
  }, [builderSchema]);

  const [revSchema, setRevSchema] = useState(() => makeSchema(schema));

  return { revSchema };
}
