import React, { useEffect } from 'react';
import FormBuilder from './FormBuilder';
import { siteDefinition } from '../schemas/siteSchema';
import merge from 'deepmerge';
import './app.scss';
import useHttp from '../share/UseHttp';
import { Button, Loader, Divider, Grid, Segment, Icon } from 'semantic-ui-react';
var classNames = require('classnames');

import Firebase from './../auth/firebase';

const SiteForm: React.FC<any> = ({ data }) => {
    const [siteComponentData, setSiteComponentData] = React.useState({});
    const [setSiteLoader, setSiteData, setSiteError, setsite] = useHttp();
    const getSiteData = data;

    const onSchemaChange = (idx: any, name: any, data: any) => {

    }

    const updateSchema = (data: any, definition: any) => {

    }

    const setSiteCall = () => {

    }

    const onSchemaClick = (name: string) => {

    }

    var siteClass = classNames({
        section: true
    });



    return (
        <div className={siteClass}>
            <h1>dash</h1>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Divider vertical> <Icon disabled name='arrow circle right' /> </Divider>
                    <Grid.Column>
                        <FormBuilder
                            schema={siteDefinition}
                            onSchemaChange={onSchemaChange}
                            onSchemaClick={onSchemaClick}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <pre>
                            {JSON.stringify(siteDefinition, null, 4)}
                        </pre>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};

export default SiteForm;
