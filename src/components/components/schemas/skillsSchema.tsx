export const skillDefinition: any = {
    name: 'skills',
    type: 'object',
    items: [
        {
            type: 'text',
            description: 'tool title',
            value: '',
            name: 'tool title',
        },
        {
            type: 'array',
            name: 'tools',
            value: [''],
            description: 'tool name'
        },
        {
            type: 'text',
            description: 'workflow title',
            value: '',
            name: 'workflow title',
        },
        {
            type: 'array',
            name: 'workflow',
            value: [''],
            description: 'workflow'
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