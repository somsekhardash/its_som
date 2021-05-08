import React, { useEffect, useState } from "react";
import { FormBuilder } from "./FormBuilder";
import HeaderDefinition from "../schemas/HeaderSchema";
import merge from "deepmerge";
import "./app.scss";
import useHttp from "../share/UseHttp";
import {
  Button,
  Loader,
  Divider,
  Grid,
  Segment,
  Icon,
} from "semantic-ui-react";
import { useBuilder } from "../share/useBuilder";

import { useRemaker } from "../share/useReMaker";

const HeaderForm: React.FC<any> = () => {
  const { builderSchema, onSchemaChange } = useBuilder(HeaderDefinition);
  const { revSchema } = useRemaker(builderSchema, HeaderDefinition);

  const saveForm = () => {
    localStorage.setItem("HeaderForm", JSON.stringify(revSchema));
  };

  return (
    <div className="dash">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder schema={HeaderDefinition} onChange={onSchemaChange} />
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

export { HeaderForm };
