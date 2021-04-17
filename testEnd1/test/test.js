//bai1
// function findOppositeNumber(n , inputNumber) {
//     num = (inputNumber + (n / 2)) % n
//     return num
// }

// console.log(findOppositeNumber(10, 2))
// console.log(findOppositeNumber(10, 6))

//bai2
// function merge2String(s1, s2) {
//     var i = ''
//     var j = Math.min(s1.length, s2.length)
//     var temp = ''
//     for(i = 0; i < j; i++) {
//         temp += s1[i] + s2[i]
//     }
//     return temp + s1.slice(i) + s2.slice(i)
// }

// console.log(merge2String('abc', '123'))
// console.log(merge2String('abc', '0123'))
// console.log(merge2String('abcd', '123'))


//bai3

    let inputNumber = document.getElementById("input-number")
    let quaysoBtn = document.getElementById("btn-quayso")

//     for(let i = 0 ; i <= 100 ; i++){
//    if(i<=100){
//        alert("tiep tuc")
//    }
//    else{
//        alert("sai,  nhap lai")
//    }
//    break
// }
btn.addEventListener('click', randomNumber)

function randomNumber(num) {
    var randomNumber = Math.floor(Math.random() * 10) + 1
    var a = 0
    a += 1
    if(inputNumber == randomNumber) {
        alert(`Chúc mừng bạn đã nhập đúng!!!`)
    }
    else {
        alert(`Ban da nhap sai, xin nhap lai`)
    }
    console.log(randomNumber);
}