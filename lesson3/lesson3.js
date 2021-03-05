//array
let movies = ["spiderman", "batman","hitman"]
let age = [12,3,32,45,8]
//create
movies.push("upin & ipin")//(them vao cuoi)
movies.unshift("zombies")//(them vao dau)
console.log(movies)

//tao 1 danh sach cac ban trong lop
//hoi nguoi dung co muon them thanh vien moi khong
//neu co: them vao cuoi danh sach
//neu khong: in ra va thoat
let arr = ["dat","ha","quynh","linh","bao"]
while(true){
    let ans = prompt("co them khong?(Y/N)")
    if(ans=="Y"){
        let newStudent = prompt("Ten cua hoc sinh? ")
        arr.push(newStudent)
    }else{
        console.log(arr)
        break
    }
}

//read
// let firstMovies = movies[0]
// console.log(movies[0])
// let len = movies.length
// console.log(movies[len-1])
//for de in ra tat ca cac phan tu trong mang
// for(let i = 0;i<movies.length; i++ ){
//     console.log(movies[i])
// }
// for(let movie of movies){   //(movie de la gi cung duoc)
//     console.log(movie)
// }
// for(let movie in movies){
//     console.log(movie)
// }

//update
// let randomVar = 0
// randomVar = 2
//hoac
movies[0]="wonder woman"
movies[3]="picachu"
movies[movies.length -1] = "thuy tinh"

//delete
movies.splice(0)
movies.splice(movies.length - 1)
movies.splice(1, movies.length -1)
/*tao 1 danh sach cac ban trong lop
hoi nguoi dung thao tac(C, R , U, D)
neu nguoi dung chon C => hoi them hoc sinh
nao, them vao danh sach
neu nguoi dung chon R =>