export default {
    name: "external_auth",
    title: "External Authentification",
    type: "document",
    fields: [{
        name: "email",
        title: "Email",
        type: "email"
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
    }, 
    { name: 'lastlogin', type: 'datetime', title: 'Last login' }]
}