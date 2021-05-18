import * as React from "react";
import { Button } from "semantic-ui-react";

const FormUpload: React.FC<any> = ({ idx, schema, onChange }) => {
  const [pictures, setPictures] = React.useState<any>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const onDrop = (e: any) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      onChange(idx, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="logo">
      <Button
        content={schema.name}
        labelPosition="left"
        icon="file"
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      />
      <input
        ref={fileInputRef}
        type="file"
        multiple={false}
        hidden
        onChange={(e) => onDrop(e)}
        accept="image/png, image/jpeg"
      />

      {pictures.map((node: any, index: number) => {
        return <p key={index}>{node[0].name}</p>;
      })}
    </div>
  );
};

export default FormUpload;
