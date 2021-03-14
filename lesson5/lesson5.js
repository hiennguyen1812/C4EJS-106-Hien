// let hienRose ={
//     name: 'Hien Ro xi',
//     address: 'Ha Noi',
//     age: 20,
//     isMarried: true,
//     favourites: ["an","ngu"],
//     wife:{
//         name:"sap co ",
//         age: 20
//     },
//     earnMoney: function(){
//         console.log('Chi co lam moi co tien')
//     }
// };
// console.log(hienRose);
//them thuoc tinh cho 1 obj
// hienRose["weight"] = 67;
// hienRose.height = 175;
// hienRose.children = [
//     {name: "Child 1",age:10},
//     {name: "Child 2",age:5}
// ];
// console.log(hienRose);
// sua gia tri thuoc tinh
// hienRose.name = "Hien ROxe"
// hienRose.age = 21;
// console.log(hienRose)
//xoa 1 thuoc tinh
// delete hienRose.favourites;
// delete hienRose.address;

//duyet object: bao nhieu thuoc tinh(giong duyet mang)
// for(let key in hienRose){
//     console.log("key" + key + ":" + hienRose[key]);
// }

//tao 1 object la nguoi yeu cua cac ban gom cac thuoc tinh:
// name, age, address,weight,height,favorites[],
//crush:{name,age,address},appearance

// let nguoiYeu = {
//     name :'My Linh',
//     age : 20,
//     address:'Ha Noi',
//     weight: 45,
//     height: 165,
//     favourite:["di choi","an uong"],
//     crush:{
//         name :'Hien',
//         age : 20,
//         address: 'Ha Noi',
//         appearance : 'dep'
//     }
// }
// console.log(nguoiYeu)

// let data = [
//   { id: 1, name: "Dung", age: 21, address: "HN" },
//   { id: 2, name: "Linh", age: 20, address: "HN" },
//   { id: 3, name: "Trang", age: 23, address: "HN" },
//   { id: 4, name: "Thuy Anh", age: 20, address: "HN" },
//   { id: 5, name: "Ha", age: 20, address: "Thai Nguyen" },
//   { id: 6, name: "Phuong Anh", age: 20, address: "HN" },
// ];
//tim obj co id bang 3
//tim 1 nguoi co tuoi 20
//tim dia chi nhung nguoi hon 20 tuoi
//tim tuoi nhung nguoi co ten bat dau bang chu L
// for (let person of data) {
//   if (person.id == 3) {
//     console.log(person);
//   }
// }
// for(let date of data) {
//     if(date.age == 20) {
//         console.log(date);
//         break
//     }
// }
//k lay phan tu o dau
// let _name = "";
// for(let person of data){
//     if(person.age == 20){
//         _name = person.name;
        
//     }
// }
// console.log(_name)


// for(let highestAge of data) {
//     if(highestAge.age > 20){
//     console.log(highestAge.address)}
// }


//bai cuoi cach1
// for(let firstName of data)  {
//     if(firstName.name.startsWith('L',0)){
//         console.log(firstName.name)
//     }
// }

//cach2
// for(let person of data){
//     if(person.name[0] == "L" || person.name[0] == "l"){
//         console.log(person.age)
//     }
// }

// let films = [
//     {
//         id: 1,
//         name: 'Film 1',
//         year: 2020,
//         actors: [
//             'Actor 1',
//             'Actor 2',
//             'Actor 3'
//         ]
//     },

//     {
//         id: 2,
//         name: 'Film 2',
//         year: 2019,
//         actors: [
//             'Actor 2',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 3,
//         name: 'Film 3',
//         year: 2021,
//         actors: [
//             'Actor 1',
//             'Actor 3',
//             'Actor 4'
//         ]
//     },

//     {
//         id: 4,
//         name: 'Film 4',
//         year: 2021,
//         actors: [
//             'Actor 2',
//             'Actor 1',
//             'Actor 5'
//         ]
//     }
// ];

// 1. Tim ten cua cac film san xuat vao nam 2020
// 2. Nhap vao ten 1 dien vien bat ki, tim cac film co dien vien do tham gia
//=> tim phan tu co trong mang
// 3. Sap xep danh sach film theo thu tu nam san xuat tang dan

// for(let namSanxuat of films){
//     if(namSanxuat.year == 2020){
//         console.log(namSanxuat.year)
//     }
// }

// let name = prompt("Nhap ten dien vien: ")
// cach 1
// for(let film of films){

//     let check = false;
//     for(let actor of film.actors){
//         if(actor == name)check = true;
//     }
//     if(check){
//         console.log(film)
//     }
// }

//cach 2
// for(let film of films){
//     for(let actor of film.actors){
//         if(actor == name){
//             console.log(film)
//             break
//         }
//     }
// }

//cach 3
// for(let film of films){
//     if(film.actors.includes(name)){
//         console.log(film)
//     }
// }




let nums = [9,7,1,2,4,10,-1,3];
//bubble sort

// for( let i =0; i< nums.length; i++){

//     for(let j = 0; j < nums.length; j++){
//         if(nums[i] < nums[j]){
//             let tmp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = tmp;
//         }
//     }
// }
nums.sort()
console.log(nums)

//quick sort, merge sort,....