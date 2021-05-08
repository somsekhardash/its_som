import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'

const FormColorPicker: React.FC<any> = ({ schema, onChange, idx }) => {
    return (
        <div className="input">
            <Input
                placeholder={schema.name}
                defaultValue={schema.value}
                type='color'
                onChange={(x, y) => { onChange(idx, schema.name, y.value) }}
            />
        </div>
    );
};

export default FormColorPicker;
