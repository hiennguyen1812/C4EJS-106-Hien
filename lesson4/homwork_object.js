// const product = {
// name: 'Xiaomi rice cooker',
// price: 1700,
// brand: 'Xiaomi',
// color: 'white'
// };
// console.log(`name : ${product.name}`);
// console.log(`price : ${product.price}`);
// console.log(`brand : ${product.brand}`);
// console.log(`color : ${product.color}`);


// 1.1: property

//bai` 2

// const task = {
// subject: 'Implement login feature',
// createdBy: 'Hoang Ngoc Duc',
// assignTo: 'Nguyen Phuong Nam',
// dueDate: '2019-10-08T18:00:24+0000',
// expectedHours: 0.5,
// }
// var subject, assignTo, dueDate;
// ({subject, assignTo, dueDate} = task)

// console.log(subject)
// console.log(assignTo)
// console.log(dueDate)

//bai4
// let keyW = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     perfect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// }
// alert("Hi there, this is dev dictionary")
// let answer = prompt("Enter a keyword")
// for(let x in keyW){
//     if(answer == x){
//         alert(`${x} ${keyW[x]}`)
//     }else{
//         let update = prompt(`We could not find your word: ${answer} leave your explanation`)
//         alert('Done')
//         //let nhapVao = prompt("Enter a keyword")
//         keyW.answer = update;{
//             alert(`${answer} 
//             ${update}`)
//         }
//         break
//     }
// }

//bai5
let tech = [
    {id: 1 , name : "Xiaomi portable charger 20000mah", brand : "Xiaomi",price : 428,color : "While" , Category:"Chager"},
    {id: 2 , name : "VSmart Active 1", brand : "VSmart",price : 5487,color : "Black" , Category:"Phone"},
    {id: 3 , name : "IPhone X", brand : "Apple",price : 21490, color : "Gray", Category:"Phone"},
    {id: 4 ,name : "Samsung Galaxy A9", brand : "Samsung",price : 8490,color : "Blue" , Category:"Phone"},
    
];
for(let tName of tech){
    console.log(`Name : ${tName.name}`)
    console.log(`Price : ${tName.price}`)
    console.log("----------------------")

}
//5.2
// for(let stt of tech){
//     console.log(`#${stt.id} : ${stt.name}`)
//     console.log(`Price : ${stt.price}`)
// }
// let Nhapso = prompt("enter your product position")
// for(let x of tech){
//     if(x.id == Nhapso){
//         console.log(x)
//     }
// }

//5.3
// let answer=prompt("Enter your category?")
// for(let x of tech){
//     if(x.Category==answer){
//         console.log(`Name: ${x.name}`)
//         console.log(`Price: ${x.price}`)
//     }
// }
//5.4
tech[0].Providers = "Phukienzero Dientuccc"
tech[1].Providers = "Tgdd Ddghn VhStore"
tech[2].Providers = "Tgdd"
tech[3].Providers = "Tgdd"
for(x of tech){
console.log(`${x.name} \n Price: ${x.price} \n Providers: ${x.Providers}`)}

//5.5
let answer1 = prompt("Enter provider")
for(let x of tech){
    let check = x.Providers.indexOf(answer1)
    if(check==-1){
        console.log('Not found')
    }
    else{
        console.log(`Name : ${x.name}`)
        console.log(`Brand : ${x.brand}`)
        console.log(`Price : ${x.price}`)
        console.log(`Color : ${x.color}`)
        console.log(`Category : ${x.Category}`)
        console.log(`Providers : ${x.Providers}`)
    }
}

let tasks = [
    {
        id: 1,
        name: 'HTML',
        complete: false
    },
    {
        id: 2,
        name: 'CSS',
        complete: false
    },
    {
        id: 3,
        name: 'Basics of JavaScript',
        complete: false
    },
    {
        id: 4,
        name: 'Node Package Manager (npm)',
        complete: false
    },
    {
        id: 5,
        name: 'Git',
        complete: false
    }
];

// 6.1: In ra console
console.log('Hi there, this is your learning tasks to front-end developer career: ');
for(let key of tasks) {
    console.log(`${key.id}. ${key.name}`);
    console.log(`   Complete: ${key.complete}`);
}
console.log('-----------------');

let inputUser = prompt('Enter your command (New, Delete, Update, Complete) ');
// 6.2: Người dùng nhập thêm task
if(inputUser == 'New') {
    console.clear();
    let nameOfNewTask = prompt('Enter new task: ');
    nameOfNewTask = {
        id: 6,
        name: nameOfNewTask,
        complete: false
    }
    tasks.push(nameOfNewTask);
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');
}
// 6.3: Người dùng sửa task
else if(inputUser == 'Update') {
    let position = Number(prompt('Enter position:'));
    let title = prompt('Enter new title');
    tasks[position].name = title;
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('-------------------------------------------------------------------');       
}

// 6.4: Người dùng hoàn thành complete
else if(inputUser == 'Complete') {
    let position = Number(prompt('Enter position:'));
    tasks[position - 1].complete = true;
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('---------------------------');
}
// 6.5: Xóa task
else(inputUser == 'Delete');{
    let delete_position = Number(prompt('Enter position: '));
    tasks.splice(delete_position - 1, 1);
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`   Complete: ${key.complete}`);
    }
    console.log('--------------------------');
}