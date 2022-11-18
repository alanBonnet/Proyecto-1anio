//importacion de mongoose
const {model, Schema} = require('mongoose');
const RequiredString8 = {
    type: String,
    min:8,
    required:true
}
const UserModel = new Schema({
    username:{... RequiredString8, unique:true},

    password:RequiredString8,

    email:RequiredString8,

    isActive:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        default:"normal_user",
        
    }
},{
    versionKey:false,
    timestamps:true
});


module.exports = model('Users', UserModel);