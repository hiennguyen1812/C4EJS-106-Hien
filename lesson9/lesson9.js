// console.log("hello");

// let interval = setInterval(function(){
//     console.log("how are you");
// },5000)


// console.log("goodbye");

//bai12 buoi8
items = ["backpack","Miband","Ring"]

 let listItem = document.getElementById('list-item')
 let addBtn = document.getElementById('add-btn')
 let addInput = document.getElementById('add-input')
 let saveBtn = document.getElementById('save-btn')
 let updateInput = document.getElementById('update-input')

 render()
 

addBtn.addEventListener('click',addItemHander)


function removeItemHandler(e){
    let parentElement = e.target.parentElement
    let removeItem = parentElement.outerText.replace('remove','')
    let removeIndex = items.indexOf(removeItem)
    items.splice(removeIndex,1)

    render()
}

  function addItemHander(){
      let addInput = document.getElementById('add-input')
      let addValue = addInput.value
      items.push(addValue)
      addInput.value = ''
      render()
      
  }

  function updateHandler(e){
      //update ui
      let parentElement = e.target.parentElement
      let updateItem = parentElement.outerText.replace('removeUpdate','')
      let updateIndex = items.indexOf(updateItem)
      updateInput.value = updateItem

      saveBtn.addEventListener('click',function(){
          let newInput = document.getElementById('new-input')
          let newValue = newInput.value
          items[updateIndex] = newValue
        //   updateInput.value = ''
        //   newInput.value = ''

          render()
      })

  }

  function render(){
      listItem.innerHTML = ''
        for(let item of items){
      let li = `<li>${item}<button class="remove-btn">remove</button><button class="update-btn">Update</button></li>`
      listItem.innerHTML += li
    }
    let updateBtn = document.getElementsByClassName('update-btn')
    let removeBtn = document.getElementsByClassName('remove-btn')
 for (let btn of removeBtn){
     btn.addEventListener('click',removeItemHandler)
 }
  for (let btn of updateBtn){
     btn.addEventListener('click',updateHandler)
 }
}





 console.log(listItem)
 console.log(addBtn)
 console.log(addInput)