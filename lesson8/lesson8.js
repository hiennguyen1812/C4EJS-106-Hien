let h1 = document.getElementById('listName')
// let h2 = document.getElementById('heading-2')
// let header = document.getElementsByClassName('heading')

// for(let i of header){
//     console.log(header)
// }
// let p = document.getElementsByTagName('p')

// console.log.dir(h1)

// h1.innerHTML = "Nguyen Si Hien"
// h2.innerHTML = "tuoi: 20"


// console.log(p)
// console.log(h1)
// console.log(h2)
// console.log(header)

/* 
hoi nguoi dung muon doi ten ai
tao danh sach hoc sinh trong lop
thuc hien thay doi ten cua 1 hoc sinh bang dom
*/

// let prompt
//Create
let li = document.getElementsByTagName('li')
li[1].innerHTML = "Tran Diem Quynh"
console.log(li)
// let ul = document.getElementById('my-ul')
// let newLi = '<li>Hieu</li>'
// ul.innerHTML += newLi
// ul.insertAdjacentHTML("beforeend",'<li>Huy</li>')
// li = document
// console.dir(ul)

//Delete
// li[3].remove()//xoa vi tri 4
// for(let items of li){//xoa het
//     items.remove()
// }

function changeTitle(){
    h1.innerHTML = "CuaHien"
}
let btn = document.getElementById('my-btn')
btn.addEventListener('click',changeTitle)
console.log(btn)

/*
    an nut update => hoi nguoi dung update  
    doi ten o vi tri thu may
    =>doi thanh gi
    Update
*/
let updatebtn = document.getElementById('my-up')
updatebtn.addEventListener('click',updateName)
function updateName(){
    let index = prompt("Muon update ten cua nguoi co vi tri thu may:")
    let name = prompt("doi thanh gi")
    li[index-1].innerHTML = name
}

let myInput = document.getElementById('my-input')
myInput.addEventListener('change',function(){
    h1.innerHTML = myInput.value
})
//keyup

