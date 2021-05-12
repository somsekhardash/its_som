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

const EducationForm: React.FC<any> = ({
  EducationDefinition,
  setEducation,
}) => {
  const { builderSchema, onSchemaChange } = useBuilder(EducationDefinition);
  const { revSchema } = useRemaker(builderSchema, EducationDefinition);

  const saveForm = () => {
    localStorage.setItem("EducationForm", JSON.stringify(revSchema));
    setEducation(JSON.stringify(revSchema));
  };

  return (
    <div className="dash">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder
              schema={EducationDefinition}
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

export default EducationForm;
