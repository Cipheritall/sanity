export default {
    name: "game",
    title: "Game",
    type: "document",
    fields: [{
        name: "name",
        title: "Name",
        type: "string",
    },
    {
        title: 'Demo',
        name: 'isdemo',
        type: 'boolean'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96
        }
    }, {
        name: "thumbnail",
        title: "Thumbnail",
        type: "image"
    }, {
        name: "iframe",
        title: "Iframe",
        type: "url"
    },
    {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: 'category' }]
    }, {
        name: "provider",
        title: "Provider",
        type: "reference",
        to: [{ type: 'provider' }]
    }, {
        name: "users",
        title: "users",
        type: "array",
        of: [{
            name: "fan_users",
            title: "Fan users",
            type: "object",
            fields: [{
                name: "user",
                type: "reference",
                to: [{
                    type: "user"
                }]
            }, {
                name: "loss_value",
                title: "Loss value",
                type: "string",
            }, {
                name: "gain_value",
                title: "Gain value",
                type: "string",
            }, {
                name: "enter_time",
                type: "datetime",
                title: "Enter time"
            }, {
                name: "exit_time",
                type: "datetime",
                title: "Exit time"
            }]
        }]
    }
    ]
}