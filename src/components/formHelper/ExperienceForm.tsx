import React, { useEffect } from "react";
import {
  Button,
  Loader,
  Divider,
  Grid,
  Segment,
  Icon,
  Header,
  Modal,
  Input,
} from "semantic-ui-react";
import { FormBuilder } from "src/components/formHelper/FormBuilder";
import { experienceDefinition } from "../schemas/experienceSchema";
import { useBuilder } from "../share/useBuilder";
import { useRemaker } from "../share/useReMaker";

const ExperienceForm: React.FC<any> = () => {
  const { builderSchema, onSchemaChange } = useBuilder(experienceDefinition);
  const { revSchema } = useRemaker(builderSchema, experienceDefinition);

  const saveForm = () => {
    localStorage.setItem("HeaderForm", JSON.stringify(revSchema));
  };

  return (
    <div className="dash">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder
              schema={experienceDefinition}
              onChange={onSchemaChange}
            />
          </Grid.Column>
          <Grid.Column>
            <pre>{JSON.stringify(revSchema, null, 4)}</pre>
          </Grid.Column>
          {/* <Grid.Column>
            <pre>{JSON.stringify(builderSchema, null, 4)}</pre>
          </Grid.Column> */}
        </Grid>
      </Segment>
      <button className="ui secondary button" onClick={() => saveForm()}>
        Okay
      </button>
    </div>
  );
};

export default ExperienceForm;
