import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, "This field is required"],
            unique:true,
        },
       email:{
            type:String,
            required:[true, "This field is required"],
            unique:true,
        },
        password:{
            type:String,
        },
        isVerifed:{
            type:Boolean,
            default:false,
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        image:String,
        providers:{
            type:[String],
            default:[],
        },
        forgotPasswordToken:String,
        forgotPasswordTokenExpiry:Date,
        verifyToken:String,
        verifyTokenExpiry:Date,
    }
)
const User = mongoose.models.User || mongoose.model("User", userSchema);
 export default User;