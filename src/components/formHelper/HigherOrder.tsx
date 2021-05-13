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
import merge from "deepmerge";
import useHttp from "../share/UseHttp";
import { FormBuilder } from "components/formHelper/FormBuilder";
var classNames = require("classnames");
var _ = require("lodash");

const useCompoentStatus = (props: any) => {
  const onSchemaChange = (idx: any, name: any, data: any) => {
    const idxArray = `${idx}-${name}`.split("-");
    const result = idxArray
      .reverse()
      .reduce((res, key) => ({ [key]: res }), data)[
      idxArray[idxArray.length - 1]
    ];
  };

  const onSchemaClick = (name: string, data: any) => {
    console.log(name, data);
  };

  var parentClass = classNames(
    {
      section: true,
    },
    {
      loader: true,
    }
  );

  return (
    <div className={parentClass}>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Divider vertical>
            <Icon disabled name="arrow circle right" />
          </Divider>
          <Grid.Column>
            <FormBuilder
              schema={props.schema}
              formGroups={props.formGroups}
              onSchemaChange={onSchemaChange}
              onSchemaClick={onSchemaClick}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};
