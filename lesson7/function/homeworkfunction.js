//bai1
// function average(...others){
//     let sum = 0;
//     for(let items of others){
//         sum += items;
//     }
//     let trungBinhcong = sum/others.length;
//     console.log(`Diem trung binh: ${trungBinhcong}`)
//     if(trungBinhcong <= 5){
//         alert("Hoc sinh trung binh")
//     }else if(trungBinhcong>5 && trungBinhcong <= 6.5){
//         alert("Hoc sinh kha")
//     }else{
//         alert("Hoc sinh gioi")
//     }
//     return trungBinhcong;
// }
// average(3,4,5,6,7)

//bai2
function ptbac2(a,b,c){
    let x;
    let delta = b*b-4*a*c;
    if (a==0){
        x = -c/b;
        console.log(`Phuong trinh co nghiem duy nhat : ${x}`)
    }
    else if(delta==0){
        x= -b/2*a
        console.log(`Phuong trinh co nghiem kep: ${x}`)
    }
    else if(delta>0){
        let x1=(-b+Math.sqrt(delta))/(2*a)
        let x2=(-b-Math.sqrt(delta))/(2*a)
        console.log(`Phương trình có 2 nghiệm phân biệt: x1=${x1} \n x2=${x2}`);
    }
    else{
        console.log("Phuong trinh vo nghiem")
    }
}
ptbac2(2,-7,3)


