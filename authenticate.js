// const jwt=require("jsonwebtoken");

// const authenticate=(req,res,next)=>{

//     //token takes the token from the authorization part in the headers.
//     const token=req.headers.authorization;
//     if(token){
//         jwt.verify(token,"masai",(err,decoded)=>{
//             if(decoded){
//                req.body.user=decoded.userID;
//                //console.log(decoded.userID);
//                 next();
//             }
//             else{
//                 res.send({"msg":"please login first"});
//             }
//         })
//     }
//     else{
//         res.send({"msg":"please login"});
//     }
// }


// module.exports={
//     authenticate
// }