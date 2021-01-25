// bai3a
for(let i = 0; i < 7 ; i++){
   console.log(i);
}

// bai3b
let n = Number(prompt("nhap so n"));
for(let i = 0; i<n;i++){
    console.log(i);
}

// bai3c
let m = Number(prompt("nhap m:"));
for (let i = 3 ; i < m; i++){
    console.log(i);
}

// bai3d
let a = Number(prompt("nhap so dau"));
let b = Number(prompt("nhap so cuoi"));
for( let i = a; i < b; i++){
    console.log(i);
}

// bai3e
let c = Number(prompt("nhap so dau"));
let n = Number(prompt("nhap so cuoi"));
for(let i = c; i < n; i+=3){
    console.log(i);
}

//bai3f
let c = Number(prompt("nhap so dau:"));
let n = Number(prompt("nhap so cuoi:"));
let s = Number(prompt("nhap step:"));
for(let i = c ; i < n ; i+=s ){
    console.log(i);
}

//bai4
let n = Number(prompt("nhap n:"));
var giaithua = 1;
for(let i = 1 ; i <= n ; i++){
    giaithua = giaithua * i;
}
    alert(giaithua);

//bai5
    let age = Number(prompt("nhap tuoi cua ban:"));
    if (1 < age <= 14){
        alert("khong du tuoi de xem cai nay");
    }
    else{
    alert("xem di");
}

//bai6
let a = Number(prompt("nhap so:"));
if(a<9/2){
    alert("lower half of 9");
}
else{
    alert("higher half of 9");
}

//bai7
let n = Number(prompt("nhap n:"));
let a = Number(prompt("nhap so de so sanh voi n/2:"));
if(a<n/2){
    alert("lower half of n");
}
else{
    alert("higher half of n");
} 

//bai8
let n = Number(prompt("Nhap n:"));
if(n%2==0){
    alert("day la so chan");
}
else{
    alert("day la so le");
}

//bai9a
for(let i = 0; i < 6 ; i++){
if(i<6/2){
    console.log("L");
}
else{
    console.log("H");
}
}

//bai9b
let n = Number(prompt("nhap so:"));
for(let i = 0 ; i < n; i++)
if(i<n/2){
    console.log("L");
}
else{
    console.log("H");
}

//bai9c
for (let i = 0; i < 8; i++){
    if(i%2==0){
    console.log(0)
    }
    else{
        console.log(1)
    }
}

//bai9d
let n = Number(prompt("nhap n:"));
for(let i = 0; i < n; i++){
    if(i%2==0){
        console.log(0)
    }
    else{
        console.log(1)
    }
}

//bai10
let weight = Number(prompt("can nang bao nhieu:"));
let height = Number(prompt("chieu cao bao nhieu:"));
var bmi = (weight / Math.pow(height/100, 2));
alert(`Your BMI is ${bmi.toPrecision(3)}`);
if(bmi < 16)
{
    alert("You are severely underweight");
}
else if(16 <= bmi && bmi < 18.5)
{
    alert("You are underweight");
}
else if(18.5 <= bmi && bmi < 25)
{
    alert("You are normal");
}
else if(25 <= bmi && bmi < 30)
{
    alert("You are overweight");
}
else
{
    alert("You are obese");
}
/*Câu 1:
        1. var và const là kiểu khai báo biến trong JS
        2. Sự khác nhau giữa var và let:
            - Phạm vi sử dụng của var có thể trong hoặc ngoài funcion, toàn cục.
            - Phạm vi sử dụng của let là trong một block, xác định bằng cặp dấu {}.
        3. Sự khác nhau giữa var và const:
            - var có thể được cập nhật và khai báo lại trong phạm vi của nó, var có thể được khai báo mà không được khởi tạo.
            - const không thể cập nhật hoặc khai báo lại, const phải được khởi tạo trong quá trình khai báo.
        4. Trường hơp sử dụng:
            - Dùng var khi cần truy cập biến nhiều lần.
            - Dùng let khi cần biến truy cập một lần, hiệu quả trong một vòng lặp.
            - Dùng const khi cần định nghĩa một hằng số.

    Câu 2:
        1. Boolean là một kiểu dữ liệu
        2. Kết quả kiểu Boolean là một trong hai giá trị thường là "true" hoặc "false".
/*