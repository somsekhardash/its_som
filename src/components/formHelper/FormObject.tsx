import * as React from "react";
import { FormBuilder, getUniformName } from "components/formHelper/FormBuilder";
import { useBuilder } from "../share/useBuilder";

const FormObject: React.FC<any> = ({ schema, idx, onChange }) => {
  return <FormBuilder schema={schema} idx={idx} onChange={onChange} />;
};

export default FormObject;
