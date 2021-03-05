// ex1
let a = 5;
let b =6;
[a,b] = [b,a]
console.log(a,b)

// ex2
const s = 'Hello beauty there';
const a = Array(s);
console.log(a)
let d = s.split(" ");
console.log(d)

// ex3
const a = [4,5,7,-2]
console.log(...a)

// bai4
let arr = ["jeans","black shirt","socks"]
while(true){
    let ans = prompt("Hi, welcome to admin panel, what do you want?(C/R/U/D)")
    if(ans=="C" || ans == "c"){
        let Quanao = prompt("Ten quan ao? ")
        arr.push(Quanao)
        alert("Done")
    }
    else if(ans == "R" || ans =="r"){
        for(let aoquan of arr)
        console.log(aoquan)
    }
    else if(ans == "U" || ans =="u" ){
        let stt = prompt("Vi tri muon update ")
        let quanaomoi = prompt("enter new quan ao ")
        for(let i = 0; i <= arr.length ; i++){
            if(stt == i)
            {
                arr[i] = quanaomoi; 
                alert(arr)
            }
        }
    }
    else if(ans == "D" || ans == "d"){
        let xoa = prompt("Vi tri muon xoa ")
        alert("Done")
        for(let i = 0; i<= arr.length; i++){
            if(xoa == i)
            {
                arr.splice(i,1)
                alert(arr)
            }
        }

    }
    else{
        alert("No support")
        break
    }
}

// bai5
var num = prompt("Enter a squence of Number, separated by commas (,) ");
num = num.split(",")//phan tach dau ,
let sum = 0;
for(let i of num)
{
    sum += Number(i);
}
alert(The sum of them is ${sum});

// bai6
let Numbers1 = prompt("Nhap cac phan tu ")
Numbers1 = Numbers1.split(",")
let sonhonhat = Math.min.apply(Math, Numbers1)
alert("So nho nhat la" + sonhonhat) 

// bai7
const num = [1, 2, 3, 4, -13];
let input = Number(prompt("Enter a number "));
let check = num.indexOf(input);
if(check > -1)
{
    alert(`${input} is FOUND in my array at index ${check}`);
}
else
{
    alert(`${input} is NOT found in my array`);
}

//bai8
const flockOfSheep = [5,7,300,90,24,50,75]
console.log("Hello, my name is Hien here is my sheep size")
console.log(...flockOfSheep)
console.log("\n")
//bai8.2
let max = Math.max.apply(Math,flockOfSheep)
console.log(`Now my biggest sheep has size ${max}, let's shave it`)
console.log("\n")
//bai8.3
let maxSheep = flockOfSheep.indexOf(max)
flockOfSheep[maxSheep]=8
console.log("After shearing, here is ma flock")
console.log(...flockOfSheep)
console.log("\n")

//bai8.4
let new_flockOfSheep = []
for(let i of flockOfSheep){
    i += 50 
    new_flockOfSheep.push(i)
}
console.log("MONTH 1")
console.log("One month has, passed, my sheep have grown, here are their sizes")
console.log(...new_flockOfSheep)
console.log("\n")

let max1 = Math.max.apply(Math,new_flockOfSheep)
console.log(`Now my biggest sheep has size ${max}, let's shave it`)
console.log("\n")

let maxSheep1 = new_flockOfSheep.indexOf(max1)
new_flockOfSheep[maxSheep1]=8
console.log("After shearing, here is ma flock")
console.log(...new_flockOfSheep)
console.log("\n")

//bai8.5
let month = Number(prompt("Nhap so thang ban muon"))
for(let a = 2; a <= month; a++){
//tim max
    let max2=Math.max.apply(Math,new_flockOfSheep)
    console.log(`Now my biggest sheep has size ${max2}, let's shave it`)
    console.log("\n")
//tra max ve = 8
let maxSheep2 = new_flockOfSheep.indexOf(max2)
new_flockOfSheep[maxSheep2] = 8
console.log("After shearing, here is my flock")
console.log(...new_flockOfSheep)
console.log("\n")

//cong tat ca them 50
for(let b = 0; b< new_flockOfSheep.length;b++){
    new_flockOfSheep[b]+=50
}
console.log(`MONTH ${a}`)
console.log("One month has, passed, my sheep have grown, here are their sizes")
console.log(...new_flockOfSheep)
console.log("\n")
}

//bai8.6:tinh tong kich thuoc va gia tien

let sum = 0;
for(let c of new_flockOfSheep)
{
    sum += Number(c);
}
console.log(`My flock has size in total: ${sum}`);
let tich = sum * 2;
console.log(`I would get ${sum} * 2$ = ${tich}`);