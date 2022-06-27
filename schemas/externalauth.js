export default {
    name: "externalauth",
    title: "External Authentification",
    type: "document",
    fields: [{
        name: "email",
        title: "Email",
        type: "email"
    }, {
        name: "provider",
        title: "Provider",
        type: "string"
    }, {
        name: "image",
        title: "Image",
        type: "url"
    }, {
        name: "name",
        title: "Name",
        type: "string"
    }, {
        name: "uid",
        title: "UID",
        type: "string"
    }, {
        name: "validUntil",
        title: "Valid Until",
        type: "datetime"
    }, 
    { name: 'lastlogin', type: 'datetime', title: 'Last login' }]
}