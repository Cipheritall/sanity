export default {
    name: "user",
    title: "user",
    type: "document",
    fields: [{
        name: "name",
        title: "Name",
        type: "string"
    },{
        name: "password",
        title: "MD5 Password",
        type: "string"
    },{
        name: "email",
        title: "Email",
        type: "email"
    }]
}