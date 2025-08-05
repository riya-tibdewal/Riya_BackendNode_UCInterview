const express=require("express");
const axios=require("axios");
const app=express();
app.get("/show-details",async (req,res)=>{
    try{
 const response=await axios.get("https://api.tvmaze.com/singlesearch/shows?q=friends");
 const data=response.data;
 res.send({
    status:"successful",
    show:{
        id:data.id,
        name:data.name,
        summary:data.summary,
        rating:data.rating.average, 
        premiered:data.premiered,   
        genre:data.genres,
        image:data.image.original,
    }
 })
    }
    catch(err){
res.send({
    status:"error occured",    //if an object is sent in res.send it is converted to json format
    message:"couldnt fetch details",
})
    }
   

});
app.get("/episodes",async(req,res)=>{
    try{
        const showresp=await axios.get("https://api.tvmaze.com/singlesearch/shows?q=friends");
        const id=showresp.data.id
        const episoderesp=await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)
        res.send({
            status:"success",
            numberofepi:episoderesp.data.length,
            data:episoderesp.data,
        })
    
    }
    catch(err){
        res.send({
            error:err.message,
            response:"error occured",
        })

    }
});
let port=8080;
app.listen(port,(req,res)=>{
    console.log("server is working well");

});


