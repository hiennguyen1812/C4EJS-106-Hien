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
let keyW = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    perfect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
}
alert("Hi there, this is dev dictionary")
let answer = prompt("Enter a keyword")
for(let x in keyW){
    if(answer == x){
        alert(`${x} ${keyW[x]}`)
    }else{
        let update = prompt(`We could not find your word: ${answer} leave your explanation`)
        alert('Done')
        //let nhapVao = prompt("Enter a keyword")
        keyW.answer = update;{
            alert(`${answer} 
            ${update}`)
        }
        break
    }
}

//bai5