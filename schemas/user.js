import countries from './countries'


export default {
    name: "user",
    title: "user",
    type: "document",
    fields: [{
        name: "username",
        title: "Username",
        type: "string"
    }, {
        name: "balances",
        title: "Balances",
        type: "array",
        of: [{
            type: "string"
        }]
    }, {
        name: "email",
        title: "Email",
        type: "email"
    }, {
        name: "phone",
        title: "Phone Number",
        type: "object",
        fields: [{
            title: 'country',
            name: 'country',
            type: 'string',
            options: {
                list: [
                    ...countries
                ],
            }
        }, {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string"
        }]
    }, {
        name: "photo",
        title: "Photo",
        type: "image"
    }, {
        name: "bank_info",
        title: "Bank account",
        type: "object",
        fields: [{
            name: "iban",
            title: "Iban",
            type: "string"
        },{
            title: 'country',
            name: 'country',
            type: 'string',
            options: {
                list: [
                    ...countries
                ],
            }
        }, {
            name: "added_timestamp",
            title: "Date",
            type: "datetime"
        }
    ]
    }, {
        name: "wallets",
        title: "Wallets",
        type: "array",
        of: [{
            type: "reference",
            to: [{ type: 'wallet' }]
        }]
    }, {
        name: "sessions",
        title: "Sessions",
        type: "object",
        fields: [{
            name: "browser",
            title: "Browser",
            type: "string"
        }, {
            name: "ip",
            title: "IP Address",
            type: "string"
        }, {
            name: "location",
            title: "Location",
            type: "geopoint"
        }, {
            name: "last_login",
            title: "Last Login",
            type: "datetime"
        }]
    }]
}