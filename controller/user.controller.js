const connection= require("./db/config");

module.exports={
    getAllUsers: (req,res)=>
    {
        connection.query("Select * from users",(err,results)=>{
            if(err){
                res.status(500).send("Error reteriving users");
            }
            else{
                res.join
            }
        })
    }
}