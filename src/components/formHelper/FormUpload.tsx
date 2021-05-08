import * as React from "react";
import { Button } from "semantic-ui-react";

const FormUpload: React.FC<any> = ({ idx, schema, onChange }) => {
  const [pictures, setPictures] = React.useState<any>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
        // onChange={(e) => onDrop(e.target.files[0])}
        accept="image/png, image/jpeg"
      />

      {pictures.map((node: any, index: number) => {
        return <p key={index}>{node[0].name}</p>;
      })}
    </div>
  );
};

export default FormUpload;
