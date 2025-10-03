// console.log("Hello world")

// từ khóa khai báo biến + tên biến = giá trị của biến

// constant => Hằng số ko thay đổi
// const PI = 3.14

// PI = 3.1415  // Gán lại giá trị mới cho biến

// var có cơ chế hoisting: đưa khai báo biến lên đầu
//                         cho phép khai báo biến trùng tên
// var example2 = 2

// let ko cho phép khai báo biến trùng tên
// let example1 = "something wrong"

// {
//     // phạm vi 1
//     var a = 5
//     console.log(a)
// }

// console.log(a)

// {
//     // phạm vi 1
//     let a = 5
//     console.log(a)
// }

// console.log(a)
// => Kết luận: ko dùng từ khóa var để khai báo biến mà chỉ sử dụng let hoặc const


// Kiểu dữ liệu
// 1. Primitive value(kiểu dữ liệu nguyên thủy)

// Number
// let number = 32

// String
// let str1 = "Đây là buổi học js đầu tiên"
// let str2 = "160"
// let str3 = 'Xin chào'
// let str4 = `Xin chào các bạn lớp ${str2}`

// Boolean
// let isRain = false
// let isStudent = true

// undefined, null
// let hmm // undifined
// let empty = null

// 2. Complex value(Kiểu dữ liệu phức)

// Array

// Object

// Toán tử toán học
// cộng: +
// Trừ: -
// Nhân: *
// chia:
//     Chia bình thường: /
//     chia lấy phần dư: %

// phép gán:
// let a = 10
// let b = 5

// a = a + b

// toán tử logic
// && => Điều kiện đồng thời
// || => Điều kiện 1 vế (1 trong n điều kiện thỏa mãn là dc)



// Bài tập

// // 1

// let length = 5
// let width = 3
// area = length * width
// perimeter = (length + width) * 2

// console.log(area)
// console.log(perimeter
// )


// // 2

// S = prompt()
// gio=(S - S%3600)/3600;
// phut=((S %3600)-(S % 3600) % 60)/60;
// giay=S - phut*60-gio*3600;

// console.log(gio + 'h' + phut + 'm' + giay + 's')



// // 3

// a = prompt("nhập số")
// b = prompt("nhập số mũ")
// c = a**b


// console.log(c)



// // 4
// let a = Number(prompt("nhập a"))
// let b = Number(prompt("nhập b"))
// let c = Number(prompt("nhập c"))
// const tb = (a+b+c)/3
// console.log('tb',tb)



// // 5

// a = prompt("x1")
// b = prompt("y1")
// c = prompt("x2")
// d = prompt("y2")

// e = (c - a)**2 + (d - c)**2
Math.pow(2,5) === 2**5;
// console.log("khoảng cách 2 điểm là:" + Math.sqrt(e))



// // 6

// a = prompt("nhập a")
// b = prompt('nhập b')
// c = prompt('nhập c')

// if (a > b && a > c){
//     console.log("true")
// }else{
//     console.log("false")
// }



// // 7

// a = prompt('nhập:')
// b = prompt('nhập:')

// if(a = b){
//     console.log('true')
// }else{
//     console.log('false')
// }




// // 8

// a = prompt('nhập số dương:')

// if(a % 1 == 0){
//     console.log('true')
// }else{
//     console.log('fasle')
// }



// // 9

// a = prompt('Nhập năm nhuận:')

// if(a % 400 == 0){
//     console.log('true')
// }
// if(a % 4 == 0 && a % 100 != 0){
//     console.log('true')
// }else{
//     console.log('false')
// }



// 10

a = prompt('nhập h1')
b = prompt('nhập m1:')
c = prompt('nhập h2:')
d = prompt('nhập m2:')

// if(a > c){
//     console.log('true')
// }
// if(a == c && b > d){
//     console.log('true')
// }else{
//     console.log('false')
// }

a > c ? console.log("true") : a == c && b > d ? console.log('true') : console.log("false")
