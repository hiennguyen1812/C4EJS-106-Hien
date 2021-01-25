let com = prompt("nhap ten mon an");
let giacom = prompt("nhap gia mon tuong ung");
let my = prompt("nhap ten mon an");
let giamy = prompt("nhap gia mon tuong ung");
let sua = prompt("nhap ten mon an");
let giasua = prompt("nhap gia mon tuong ung");
console.log("menu:");
console.log(`${com} : ${giacom}`);
console.log(`${my} : ${giamy}`);
console.log(`${giamy} : ${giasua}`);


for(let i = 0 ; i < 3; i++){
    let tendoan = prompt("nhap ten mon an");
    let giadoan= prompt("nhap gia mon tuong ung");
    console.log(`${tendoan} : ${giadoan}`);
}
console.log("bai1");
for(let i = 0 ; i<100; i++){
    console.log(i);
}
console.log("bai2");
for(let i=10 ; i>0; i--){
    console.log(i);
}
console.log("bai3");
for(let i=0 ; i<50; i+=2){
    console.log(i);
}
bai nhap m den n
let m = Number(prompt("nhap m"));
let n = Number(prompt("nhap n"));
for( let i = m ; i <= n; i++){
    console.log(i)
}

let m = Number(prompt("nhap m"));
let n = Number(prompt("nhap n"));
while(m<=n){
    console.log(m);
    m++;
}

in ra day so tu 3 den n cac so chia het cho 3
let n = Number(prompt("nhap n"));
for (let i = 3; i <=n; i+=3){
    console.log(i);
}

in ra day so tu m den n cac so chia het cho 3
let m = Number(prompt("nhap m:"));
let n = Number(prompt("nhap n:"));
for(let i = m; i<= n; i ++){
    if(i%3 ==0){
        console.log(chia het cho 3);
    }else if(i%5 == 0){
        console.log("chia het cho 5");
    }else{
        console.log("Failed");
    }
}

yeu cau nguoi dung nhap tuoi. 
tu do in ra xem nguoi do da du tuoi lay vo hay chua
neu < 10 => tre con
neu < 20 => chua du tuoi
neu <60 => oke 
neu > 60 => gia qua
while(true){
let age = Number(prompt("nhap tuoi:"));
if (age ==0){
    break;
}    if(age < 10){
        console.log("tre con");
    }
    else if(age < 20){
        console.log("chua du tuoi");
    }
    else if(age < 60){
        console.log("oke");
    }
    else {
        console.log("gia qua");
    }
}



