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
import { useBuilder } from "../share/useBuilder";
import { useRemaker } from "../share/useReMaker";

const ExperienceForm: React.FC<any> = ({
  ExperienceDefinition,
  setExperience,
}) => {
  const { builderSchema, onSchemaChange } = useBuilder(ExperienceDefinition);
  const { revSchema } = useRemaker(builderSchema, ExperienceDefinition);

  const saveForm = () => {
    localStorage.setItem("ExperienceForm", JSON.stringify(revSchema));
    setExperience(JSON.stringify(revSchema));
  };

  return (
    <div className="dash">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder
              schema={ExperienceDefinition}
              onChange={onSchemaChange}
            />
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

export default ExperienceForm;
