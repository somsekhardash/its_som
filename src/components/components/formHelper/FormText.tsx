import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'

const FormText: React.FC<any> = ({schema, onChange, idx}) => {
    return (
        <div className="input">
            <Input 
                label={schema.name}
                placeholder={schema.name}
                defaultValue={schema.value}
                onChange={(x,y)=>{onChange(idx,schema.name,y.value)}}
            />
        </div>
    );
};

export default FormText;
