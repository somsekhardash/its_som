import * as React from "react";
import { Button } from "semantic-ui-react";

const FormUpload: React.FC<any> = ({ idx, schema, onChange }) => {
  const [pictures, setPictures] = React.useState<any>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const onDrop = (e: any) => {
    debugger;
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("Encoded Base 64 File String:", reader.result);
      onChange(idx, reader.result);

      /******************* for Binary ***********************/
      //debugger;
      // var data = reader.result.split(",")[1];
      // var binaryBlob = atob(data);
      // console.log("Encoded Binary File String:", binaryBlob);
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
