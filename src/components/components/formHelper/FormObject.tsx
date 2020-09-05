import * as React from 'react';
import FormBuilder from './FormBuilder';

const FormObject: React.FC<any> = ({schema, idx, onSchemaChange, onClick}) => {
    return (
        <React.Fragment>
            <FormBuilder 
                schema={schema}
                idx={idx}
                onSchemaChange= {onSchemaChange}
                onSchemaClick={onClick}
            />
        </React.Fragment>
    );
};

export default FormObject;
