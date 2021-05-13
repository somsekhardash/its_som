import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
import { getUniformName } from "./FormBuilder";

const FormText: React.FC<any> = ({ schema, onChange, idx }) => {
  return (
    <div className="input">
      <Input
        label={schema.name}
        placeholder={schema.name}
        defaultValue={schema.value}
        onChange={(x, y) => {
          onChange(idx, y.value);
        }}
      />
    </div>
  );
};

export default FormText;
