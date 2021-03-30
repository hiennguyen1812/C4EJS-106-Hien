//bai1
// let congBtn = document.getElementById('cong-btn')
// let count = document.getElementById('count')
// let truBtn = document.getElementById('tru-btn')

// congBtn.addEventListener('click', cong)
// truBtn.addEventListener('click', tru)

// let dem = 0

// function cong() {
//     dem++
//     count.innerHTML = dem
// }

// function tru() {
//     dem--
//     count.innerHTML = dem
// }

//bai2
// let startBtn=document.getElementById('start')
// let stopBtn=document.getElementById('stop')
// let newNumber=document.getElementById('number')
// let numberInput=document.getElementById('number-input')

// let time
// function count(){
//     let number=numberInput.value
//     newNumber.innerHTML=number
//     time=setInterval(function(){
//         newNumber.innerHTML=number--
//     },1000)

// }
// startBtn.addEventListener('click',count)

// function stop(){
//     clearInterval(time)
// }
// stopBtn.addEventListener('click',stop)
//bai3


let p=document.querySelector('p')
let h4=document.querySelector('h4')
async function getData(params) {
    const DATA = await fetch(' https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
    let data= await DATA.json()
    let randomQuote=Math.floor(Math.random()* (data.length))
    // console.log(data[randomQuote].quoteText);
    p.innerHTML=data[randomQuote].quoteText
    h4.innerHTML=data[randomQuote].quoteAuthor
}
getData()

let reload=document.getElementById('reload-btn')
reload.addEventListener('click',getData)