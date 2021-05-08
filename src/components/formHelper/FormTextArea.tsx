import * as React from 'react';
import { Form, TextArea } from 'semantic-ui-react'

const FormTextArea: React.FC<any> = ({schema, onChange, idx}) => {
    return (
        <div className="input">
            <Form>
                <TextArea 
                    placeholder={schema.name}
                    defaultValue={schema.value}
                    onChange={(xx,yy)=>onChange(idx,schema.name,yy.value)} />
            </Form>
        </div>
    );
};

export default FormTextArea;
