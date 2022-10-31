//importacion de mongoose
const {model, Schema} = require('mongoose');
const RequiredString8 = {
    type: String,
    min:8,
    required:true
}
const UserModel = new Schema({
    username:RequiredString8,

    password:RequiredString8,

    email:RequiredString8,

    isActive:{
        type:Boolean,
        default:true
    },
    role:{
        type:[String],
        //TODO: tener en cuenta que hay que manejar bien este tipo de dato para que un usuario sea multi rol
        default:["normal_user"],

        
    }
},{
    versionKey:false,
    timestamps:true
});


module.exports = model('Users', UserModel);