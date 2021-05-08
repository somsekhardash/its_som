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

  const [builderSchema, setBuilderSchema] = useState(() => getSchama(schema));

  const onSchemaChange = (key: string, value: any) => {
    setBuilderSchema({ ...builderSchema, [key]: value });
  };
  return { builderSchema, onSchemaChange };
}
