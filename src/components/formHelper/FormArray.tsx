import * as React from "react";
import { useEffect, useState } from "react";
import { Input, Button, Label, Icon } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

const FormArray: React.FC<any> = ({ schema, idx, onChange }) => {
  const data = schema.data || [];
  const options = [...data, ...schema.value].map((node: string) => {
    return { key: node, text: node, value: node };
  });
  const [optns, setOptns] = useState(options);
  const [current, setCurrent] = useState(() => {
    return schema.value;
  });
  const handleAddition = (e: any, { value }: any) => {
    setOptns([...optns, { key: value, text: value, value: value }]);
  };
  const handleChange = (e: any, { value }: any) => setCurrent(value);
  useEffect(() => {
    onChange(idx, current);
  }, [current]);

  return (
    <div className="array">
      <Label>{schema.name}</Label>
      <Dropdown
        options={optns}
        placeholder="Choose Languages"
        search
        selection
        fluid
        multiple
        allowAdditions
        // defaultValue={schema.value}
        value={current}
        onAddItem={handleAddition}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormArray;
