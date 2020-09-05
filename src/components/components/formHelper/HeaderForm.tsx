import React, { useEffect } from 'react';
import FormBuilder from './FormBuilder';
import { headerDefinition } from '../schemas/headerSchema';
import merge from 'deepmerge';
import './app.scss';
import useHttp from '../share/UseHttp';
import { Button, Loader,Divider, Grid, Segment,Icon } from 'semantic-ui-react';
var classNames = require('classnames');

import Firebase from './../auth/firebase';

const HeaderForm: React.FC<any> = ({data}) => {
    if(Object.entries(data).length === 0) return null;
    const [headerComponentData, setHeaderComponentData] = React.useState({});
    const [setHeaderLoader, setHeaderData, setHeaderError, setHeader] = useHttp();
    const getHeaderData = data;

    const onSchemaChange = (idx: any, name: any, data: any) => {
        const idxArray = `${idx}-${name}`.split("-");
        const result = idxArray.reverse().reduce((res, key) => ({ [key]: res }), data)[idxArray[idxArray.length-1]];
        setHeaderComponentData(merge(headerComponentData, result || {}));
    }

    const updateSchema = (data: any, definition: any) => {
        definition.items.forEach((element: any) => {
            element.value = data[element.name] ? data[element.name] : "";
            if (element.type == 'object') {
                updateSchema(data[element.name], element);
            }
        });
        return definition;
    }

    const setHeaderCall = () => {
        const updatedData: any = merge(getHeaderData, headerComponentData);
        Firebase.db.ref(`about`).set(updatedData);
        alert('data saved');
    }
    
    const onSchemaClick = (name: string) => {
        switch(name) {
            case "formClear":
                break;
            case "saveForm":
                setHeaderCall();
                break;
            default:
                break;
        }
    }

    var parentClass = classNames({
        section: true
    }, {
        loader: setHeaderLoader
    });

    

    return (
        <div className={parentClass}>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Divider vertical> <Icon disabled name='arrow circle right' /> </Divider>
                    <Grid.Column>
                        {setHeaderLoader && <b>Loading...</b>}
                        {getHeaderData && <FormBuilder
                            schema={updateSchema(getHeaderData, headerDefinition)}
                            onSchemaChange={onSchemaChange}
                            onSchemaClick= {onSchemaClick}
                        />}
                    </Grid.Column>
                    <Grid.Column>
                        <pre>
                            {JSON.stringify(merge(getHeaderData, headerComponentData), null, 4)}
                        </pre>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};

export default HeaderForm;
