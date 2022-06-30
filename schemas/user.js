import externalauth from './externalauth'
import session from './session'
import countries from './countries'
import { MdVerifiedUser, MdCall, MdAttachMoney } from 'react-icons/md'

export default {
    name: "user",
    title: "user",
    type: "document",
    fields: [{
        name: "username",
        title: "Username",
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