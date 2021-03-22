// console.log("Hello em");
// doi()
// console.log("em an com chua");
// doi()
// console.log("toi di choi nha");
// doi()
// console.log("di tra sua nha")
// hetdoi()

// doi()
// function doi (){
//     console.log("Tao dang doi")
// }

// function hetdoi(){
//     console.log("Het doi")
// }

// hello()
// Hello()
// Hello()
// function Hello(){
//     //in ra cau hello world 3 lan
//     console.log("hello world")
// }

// function hello(name){
//     console.log("Hello",name)
// }

// let total = 0;
// console.log(sum(1,2,3))//6
// sum(1,2)//3
// sum(1,2,3,4)//10
// sum(1)
// function sum(...others){
//     let total = 0;
//     for(let item of others){
//     total += item}
//     return total;
// }

//viet ham tinh trung binh cong diem cua hoc sinh
//alert ra man hinh hoc luc cua hoc sinh do



function tinhTrungbinhcong(array){
    let tong = 0;
    for(let i = 0 ; i < array.length; i++){
        tong = tong + array[i];
    }
    let ketQua = tong/array.length;
    return ketQua;
}

let average = [1,2,3,4,5,6,7,8,9,10];
let trungBinhcong = tinhTrungbinhcong(average);
console.log(`trung binh cong cua mang la ` + trungBinhcong)




//viet ham gui loi chao
//xin chao be<le van dat> <8 tuoi>,<be co khoe khong>
//   function