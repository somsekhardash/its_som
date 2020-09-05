import * as React from 'react';
import { Input, Button, Label, Icon } from 'semantic-ui-react'

const FormArray: React.FC<any> = ({ schema, idx, onChange }) => {
    const keyVar = schema.value.map((node: any, index: number) => { const obj: any = {}; obj.id = index; obj.value = node; return obj; });
    const [arrayValue, setArrayValue] = React.useState([...keyVar]);

    const onItemChange = (x: any, y: any) => {
        const selectedNode = arrayValue.filter(item => item.id == x);
        selectedNode[0].value = y;
        setArrayValue([...arrayValue]);
        onChange(idx, schema.name, arrayValue.map((node) => node.value), true);
    }

    const getArrayDom = arrayValue.map((node) => {
        return <React.Fragment key={node.id}>
            <Input
                icon={<Icon name='delete' inverted circular link onClick={() => deleteNode(node.id)} />}
                placeholder={schema.name}
                key={node.id}
                value={node.value}
                onChange={(x, y) => { onItemChange(node.id, y.value) }}
            />
        </React.Fragment>
    });

    const deleteNode = (index: number) => {
        const items = arrayValue.filter(item => item.id !== index);
        setArrayValue([...items]);
        onChange(idx, schema.name, arrayValue.map((node) => node.value), true);
    }

    const addItem = () => {
        setArrayValue([...arrayValue, { id: arrayValue.length + 1, value: '' }]);
        onChange(idx, schema.name, arrayValue.map((node) => node.value), true);
    }

    return (
        <div className="array">
            <Label>{schema.name}</Label>
            {getArrayDom}
            <Button onClick={addItem}>+</Button>
        </div>
    );
};

export default FormArray;
