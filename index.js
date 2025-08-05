let name=prompt("Enter your name");
let newname=name.slice(0,4);
console.log( " sliced name is :",newname);

let friends=["Geller", "Tribbiani", "Buay", "Green", "Bing", "Wheeler", "Hannigan"]
let l=friends.length;
let surname=friends[Math.floor(Math.random()*l)];
console.log ("new name is :" + newname + " " + surname);

try{
    if(name.length<4){
    newname=name;
    console.log ("new name is :" + newname + " " + surname);
}
}
catch(err){
    console.log(err);

}