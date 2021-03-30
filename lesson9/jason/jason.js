// const DATE = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')

// console.log(DATE)
getData()

async function getData(){
    const DATA = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
    let data = await DATA.json() //await cho cau lenh trc chay xong moi chay
    console.log(data)
}

//in ra list email cua nguoi dung trog data
// khi click vao email
// => in ra man hinh tat ca thong tin tuong ung cua nguoi do
//bao gom ho ten + anh