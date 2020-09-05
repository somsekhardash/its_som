import React, { useEffect, useState } from 'react';
import { Button, Loader, Divider, Grid, Segment, Icon, Header, Modal, Input } from 'semantic-ui-react';
import FormBuilder from './FormBuilder';
import { skillDefinition } from '../schemas/skillsSchema';
var classNames = require('classnames');
var _ = require('lodash');
import Firebase from './../auth/firebase';

const SkillForm: React.FC<any> = ({ data }) => {
    const [skillsComponentData, setSkillsComponentData] = useState({});
    const getSkillsData = data;

    const onSchemaChange = (idx: any, name: any, data: any, isArray: boolean) => {
        const idxArray = `${idx}-${name}`.split("-");
        const result = idxArray.reverse().reduce((res, key) => ({ [key]: res }), data)[idxArray[idxArray.length - 1]];
        const som = _.merge(skillsComponentData, result || {});
        setSkillsComponentData({ ...som });
    }

    const updateSchema = (data: any, definition: any) => {

        definition.items.forEach((element: any) => {
            if (element.type == 'object') {
                updateSchema(data[element.name], element);
            } else if (element.type == 'array') {
                element.value = data[element.name] ? [...data[element.name]] : [];
            } else {
                element.value = data[element.name] ? data[element.name] : "";
            }
        });
        return definition;
    }

    const onSchemaClick = (name: string, data: any) => {
        switch (name) {
            case "formClear":
                break;
            case "saveForm":
                setExperienceCall();
                break;
            default:
                break;
        }
    }

    const setExperienceCall = () => {
        Firebase.db.ref(`skill`).set(skillsComponentData);
        alert('data saved');
    }

    var parentClass = classNames({
        section: true
    });


    return (
        <div className={parentClass}>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Divider vertical> <Icon disabled name='arrow circle right' /> </Divider>
                    <Grid.Column>
                        {getSkillsData && <FormBuilder
                            schema={updateSchema(getSkillsData, skillDefinition)}
                            onSchemaChange={onSchemaChange}
                            onSchemaClick={onSchemaClick}
                        />}
                    </Grid.Column>
                    <Grid.Column>
                        <pre>
                            {JSON.stringify(_.merge(getSkillsData, skillsComponentData), null, 4)}
                        </pre>
                    </Grid.Column>
                </Grid>

            </Segment>
        </div>
    );
};

export default SkillForm;

