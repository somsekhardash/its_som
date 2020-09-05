export const educationDefinition: any = {
    name: 'education',
    type: 'object',
    groups: ['educationInstitute'],
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
    'educationInstitute': {
        name: '',
        type: 'object',
        items: [
            {
                type: 'text',
                description: 'Institute name',
                value: '',
                name: 'instituteName'
            },
            {
                type: 'text',
                description: 'Course name',
                value: '',
                name: 'courseName'
            },
            {
                type: 'text',
                description: 'Course details',
                value: '',
                name: 'courseDetails'
            },
            {
                type: 'text',
                description: 'CGPA',
                value: '',
                name: 'CGPA'
            },
            {
                type: 'datePicker',
                description: 'start date in Institute',
                value: '',
                name: 'startDate'
            },
            {
                type: 'datePicker',
                description: 'end date in Institute',
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