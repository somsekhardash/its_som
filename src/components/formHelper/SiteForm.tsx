import React, { useEffect } from "react";
// import siteDefinition from "../schemas/siteSchema";
import "./app.css";
import "./site.scss";
import {
  Button,
  Loader,
  Divider,
  Grid,
  Segment,
  Icon,
} from "semantic-ui-react";
import { FormBuilder } from "./FormBuilder";
import { useBuilder } from "../share/useBuilder";
import { useRemaker } from "../share/useReMaker";

const SiteForm: React.FC<any> = ({ SiteDefinition, setSite }) => {
  const { builderSchema, onSchemaChange } = useBuilder(SiteDefinition);
  const { revSchema } = useRemaker(builderSchema, SiteDefinition);

  const saveForm = () => {
    localStorage.setItem("SiteForm", JSON.stringify(revSchema));
    setSite(JSON.stringify(revSchema));
  };

  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder schema={SiteDefinition} onChange={onSchemaChange} />
          </Grid.Column>
          <Grid.Column>
            <pre>{JSON.stringify(revSchema, null, 4)}</pre>
          </Grid.Column>
          {/* <Grid.Column>
            <pre>{JSON.stringify(builderSchema, null, 4)}</pre>
          </Grid.Column> */}
          <button className="ui secondary button" onClick={() => saveForm()}>
            Save
          </button>
        </Grid>
      </Segment>
    </div>
  );
};

export default SiteForm;
