const User=require("../Controll/user_con");
const {upload}=require("../configu/helper");

const user =(app)=>{
        app.get("/info/user/getlist",User.getlist);
        app.post("/info/user/register",upload.single("image"),User.UserRegister);
        app.post("/info/user/setpassword",User.Setpassword);
        app.post("/info/user/login",User.Userlogin);
        app.put("/info/user/update",User.UserUpdate);
        app.delete("/info/user/delete",User.UserDelete);
        app.post("/info/user/Add",User.AddUser);

        // Forgot password
        app.post("/info/user/forgetpassword", User.sendOTP);
        //change password new with OTP
        app.post("/info/user/reset-password-otp",User. resetPasswordWithOTP);

        }
module.exports=user;