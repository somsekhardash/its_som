import * as React from 'react';
import { Button } from 'semantic-ui-react';

const FormButton: React.FC<any> = ({schema, onClick, idx}) => {
    const clearNode = (name: any, idx: any) => {
        onClick(name, idx);
    }

    return (
        <div className="button">
            <Button color={schema.color ? schema.color : ''} onClick={()=> clearNode(schema.name, idx)}>
                {schema.label}
            </Button>
        </div>
    );
};

export default FormButton;
