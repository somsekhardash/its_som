import * as React from 'react';
import { Select } from 'semantic-ui-react'
class Options {
    key: any;
    value: any;
    text: any;
    constructor(item: any){
        this.key = item;
        this.value= item;
        this.text = item;
    }
}

const FormSelect: React.FC<any> = ({schema,idx, onChange}) => {
    const {options} = schema;
    return (
        <div className="select">
            <Select 
                placeholder='Select your country' 
                options={options.map( (option:any)=> {return new Options(option)})}
                onChange= {(x: any,y: any)=> {onChange(idx,schema.name,y.value);}}  
            />
        </div>
    );
};

export default FormSelect;
