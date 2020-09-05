export const experienceDefinition: any = {
    name: 'experience',
    type: 'object',
    groups: ['experienceCompany'],
    items: [
        {
            type: 'button',
            description: 'save this form',
            label: 'Add Widget',
            value: '',
            name: 'addWidget',
            color: 'blue'
        },
        {
            type: 'button',
            description: 'save this form',
            label: 'Save Form',
            value: '',
            name: 'saveForm',
            color: 'green' 
        }
    ]
};


export const formGroups: any = {
    'experienceCompany': {
        name: '',
        type: 'object',
        items: [
            {
                type: 'text',
                description: 'designation',
                value: '',
                name: 'designation'
            },
            {
                type: 'text',
                description: 'company name',
                value: '',
                name: 'companyName'
            },
            {
                type: 'textArea',
                description: 'company description',
                value: '',
                name: 'description'
            },
            {
                type: 'datePicker',
                description: 'start date in company',
                value: '',
                name: 'startDate'
            },
            {
                type: 'datePicker',
                description: 'start date in company',
                value: '',
                name: 'endDate'
            },
            {
                type: 'button',
                description: 'delete this form',
                label: 'Delete Widget',
                value: '',
                name: 'deleteWidget',
                color: 'red'
            }
        ]
    }
}