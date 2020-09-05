export const headerDefinition: any = {
    name: 'about',
    type: 'object',
    items: [
        {
            type: 'text',
            description: 'full Name',
            value: '',
            name: 'full Name',
        },
        {
            type: 'text',
            description: 'house name and street name',
            value: '',
            name: 'address1',
        },
        {
            type: 'upload',
            name: 'profilePic',
        },
        {
            type: 'text',
            description: 'town and state',
            value: '',
            name: 'address2',
        },
        {
            type: 'number',
            description: 'pin code',
            value: '',
            name: 'address3',
        },
        {
            type: 'number',
            description: 'mobile number',
            value: '',
            name: 'mobile',
        },
        {
            type: 'text',
            description: 'email id',
            value: '',
            name: 'email',
        },
        {
            type: 'textArea',
            description: 'about me',
            value: '',
            name: 'about me',
        },
        {
            type:'object',
            name: 'social',
            items: [
                {
                    type: 'text',
                    description: 'email id',
                    value: '',
                    name: 'linkedin'
                },
                {
                    type: 'text',
                    description: 'email id',
                    value: '',
                    name: 'github'
                },
                {
                    type: 'text',
                    description: 'email id',
                    value: '',
                    name: 'twitter'
                },
                {
                    type: 'text',
                    description: 'email id',
                    value: '',
                    name: 'facebook'
                }
            ]
        },
        {
            type: 'button',
            description: 'clear this form',
            label: 'Clear Form',
            value: '',
            name: 'formClear',
            color: 'red'
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
