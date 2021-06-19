import React, { useEffect, useState } from "react";
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
import { FormBuilder } from "./FormBuilder";
import { useBuilder } from "../share/useBuilder";
import { useRemaker } from "../share/useReMaker";

const SkillForm = ({ SkillsDefinition, setSkills }: any) => {
  const { builderSchema, onSchemaChange } = useBuilder(SkillsDefinition);
  const { revSchema } = useRemaker(builderSchema, SkillsDefinition);

  const saveForm = () => {
    localStorage.setItem("SkillForm", JSON.stringify(revSchema));
    setSkills(JSON.stringify(revSchema));
  };

  return (
    <div id="skills">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder schema={SkillsDefinition} onChange={onSchemaChange} />
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

export default SkillForm;
