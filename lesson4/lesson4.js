let obj = {
    key: value
    mauDa : "vang",
    "mauYeuThich" : "den" ,
    age : 21,
    listF : ["ha","dat","hien"]
}
//object lije array
console.log(obj.mauDa)
console.log(obj["mauDa"])
console.log(obj.age)
console.log(obj.listF)

for(let key in obj){
    console.log(obj[key])
}
for( let value of obj){
    console.log(value)
}

let post = {
    10325 : {
        title:"Gia bitcoin giam sau",
        content:"nhu 123"
    },
     10234 : {
         //...
     }
}