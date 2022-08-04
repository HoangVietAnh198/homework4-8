// 1. Variable swap

// vi du 1:
// let a = 3;
// let b = 4;
// console.log(a,b);
// [a,b]=[b,a]
// console.log(a,b);

// vi du 2
// let a = 3;
// let b = 4;
// let temp = a;
//     a=b;
//     b=temp;
// console.log(a,b);

// 2. Split String into array( Tách chuỗi này một mảng các kí tự )
// Cách làm
// let s = 'Hello beauty there';
// let array = s.split(" ");
// console.log(array);

// 3. spread operator (three dots): … dấu ba chấm
// const a = [4, 5, 7, -8,10];
// console.log(...a); // in ra màn hình sẽ là: 4 5 7 -8 10



// BÀI TẬP

//1.
// let inPut=prompt(`Nhập các số cách nhau bởi dấu phẩy`);
// let inPutarray = inPut.split(",");
// let Tong = 0;
// for (i=0; i<inPutarray.length; i++) {
//     Tong=Tong+Number(inPutarray[i]);
// } console.log(Tong);


//2.
// let inPut=prompt(`Nhập các số cách nhau bởi dấu phẩy`);
// let inPutarray = inPut.split(",");
// let min = Number(inPutarray[0])
// for (i=0; i<inPutarray.length; i++){
//     if (min>Number(inPutarray[i])){
//         min = inPutarray[i]
//     }
// }
// console.log(min)


//3.
// let arr=[3, 4, 6, -9, 10, -88, 2];
// let inPut = Number(prompt(`Input number`));
// let findIndex = -1;
// for (i=0;i<arr.length;i++) {
//     if (inPut===arr[i]){
//         findIndex=i
//     }
// }
// if (findIndex===-1) {
//     alert(`không có phần tử ${inPut} trong chuỗi`)
// } else {
//     alert(`Có phần tử ${inPut} trong chuỗi`)
// }


//4. 
// let todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let inPut = prompt(`hãy chọn C/R/U/D please`);
// if (inPut === "C") {
//     let themMoi = prompt(`Mời bạn thêm nội dung todo mới`);
//     todoList.push(themMoi);
//     for (let i = 0; i < todoList.length; i++) {
//         let todo = todoList[i]
//         console.log(i, todo)
//     }
// } else if (inPut === "R") {
//     for (let i = 0; i < todoList.length; i++) {
//         let todo1 = todoList[i]
//         console.log(i, todo1)
//     }
// } else if (inPut === "U") {
//     let upDate = Number(prompt(" Hãy chọn 1 hoặc 2 (1)Do homework at 8pm, (2)Read document at 12pm"));
//     if (upDate === 1) {
//         let nhap1 = prompt(`Hãy nhập thứ muốn thay đổi vào đây`)
//         todoList[0] = `${nhap1}`;
//         for (let i = 0; i < todoList.length; i++) {
//             let todo2 = todoList[i]
//             console.log(i, todo2)
//         }
//     } else if (upDate === 2) {
//         let nhap2 = prompt(`Hãy nhập thứ muốn thay đổi vào đây`)
//         todoList[1] = `${nhap2}`
//         for (let i = 0; i < todoList.length; i++) {
//             let todo3 = todoList[i]
//             console.log(i, todo3)
//         }
//     } else {
//         alert(`bạn chọn sai rồi`)
//     }
// } else if (inPut === "D") {
//     let Delete = Number(prompt(" Hãy chọn vị trí muốn xóa 1 hoặc 2 (1)Do homework at 8pm, (2)Read document at 12pm"));
//     if (Delete === 1) {
//         todoList.shift();
//         for (let i = 0; i < todoList.length; i++) {
//             let todo4 = todoList[i]
//             console.log(i, todo4)
//         }
//     } else if (Delete === 2) {
//         todoList.pop();
//         for (let i = 0; i < todoList.length; i++) {
//             let todo5 = todoList[i]
//             console.log(i, todo5)
//         }
//     } else {
//         alert(`Bạn đã chọn sai`)
//     }
// }


// //5.
// let store = ["Chocolate", "Marshmallow", "Cookies", "Chips"];
// let cart = [];
// let state = true;
// while (state) {
//     for (let i = 0; i <= store.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${store[i]}`);
//     }
//     let userInput = prompt("Please input C/R/U/D/E").toLowerCase();

//     if (userInput === "c") {
//         let buyItem = prompt("Input your buying item");

//         let findIndex = -1;
//         for (let i = 0; i <= store.length - 1; i = i + 1) {
//             if (buyItem === store[i]) {
//                 findIndex = i;
//             }
//         }
//         if (findIndex === -1) {
//             console.log("Item is not available");
//         } else {
//             let findIndex2 = -1;
//             for (let i = 0; i <= cart.length - 1; i = i + 1) {
//                 if (buyItem === cart[i][0]) {
//                     findIndex2 = i;
//                 }
//             }
//             let number = Number(prompt("Please input your number"));
//             if (findIndex2 === -1) {
//                 cart.push([buyItem, number]);
//             } else {
//                 cart[findIndex2][1] = cart[findIndex2][1] + number;
//             }
//             for (let i = 0; i <= cart.length - 1; i = i + 1) {
//                 console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//             }
//         }
//     } else if (userInput === "r") {
//         for (let i = 0; i <= store.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${store[i]}`);
//         }

//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }
//     } else if (userInput === "u") {
//         let updatedItem = prompt("Please input updated item name");
//         let findIndex = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             if (updatedItem === cart[i][0]) {
//                 findIndex = i;
//             }
//         }
//         if (findIndex === -1) {
//             console.log("Item is not in cart");
//         } else {
//             let newNumber = prompt("Please input new number");
//             cart[findIndex][1] = newNumber;
//             for (let i = 0; i <= cart.length - 1; i = i + 1) {
//                 console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//             }
//         }
//     } else if (userInput === "d") {
//         let deletedItem = prompt("Please input deleted item name");
//         let findIndex = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             if (deletedItem === cart[i][0]) {
//                 findIndex = i;
//             }
//         }
//         if (findIndex === -1) {
//             console.log("Item is not in cart");
//         } else {
//             cart.splice(findIndex, 1);
//             for (let i = 0; i <= cart.length - 1; i = i + 1) {
//                 console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//             }
//         }
//     } else if (userInput === "e") {
//         console.log("Thank you for shopping");
//         state = false;
//     } else {
//         console.log("Invalid command");
//     }
// }


//6.
// let imPut = prompt(`Hãy nhập tên ngăn cách nhau bằng dấu phẩy`);
// let imPutarray = imPut.split(", ");
// let a = "";
// for (i=0;i<imPutarray.length;i++) {
//     a = `${a}, <${imPutarray[i]}>`
// } console.log(a);

// //7.
// let imPut = prompt(`Hãy nhập các số bạn muốn tôi sẽ lọc cho bạn số lẻ ^-^`);
// let imPutarray = imPut.split(", ");
// let a = "";
// for (i = 0; i < imPutarray.length; i++) {
//     if (Number(imPutarray[i]) % 2 === 1) {
//         a = `${a}, ${imPutarray[i]}`
//     }
// } console.log(a);
 
//8.
// let numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
// let min = numbers[0];
// let max = numbers[0];
// let tong = 0;
// let tich = 1;

// for (i=0; i<numbers.length; i++) {
//     if (min>numbers[i]) {
//         min=numbers[i];
//     }
// }console.log(`Số nhỏ nhất là ${min}`)
// for (i=0; i<numbers.length; i++) {
//     if (max<numbers[i]) {
//         max=numbers[i];
//     }
// }console.log(`Số lớn nhất là ${max}`) 
// for (i=0; i<numbers.length; i++) {
//     tong = tong + numbers[i]
// }console.log(`Số ${tong} là tổng`) 
// for (i=0; i<numbers.length; i++) {
//     tich = tich * numbers[i]
// }console.log(`Số ${tich} là tích`) 

// let tb = tong/(Number(numbers.length))
// console.log(`Số ${tb} là trung bình`)

// numbers.sort(function(a, b){return a - b});
// console.log(numbers);
// numbers.sort(function(a, b){return b - a});
// console.log(numbers);

 
// 9.
// let str = "Hello";
// let strarray = str.split("");
// let str1 = strarray.reverse();
// console.log(str1.join(''));

//10.
// let str = "Hello, My NAme is TOmy"
// let str1 = str.toLocaleLowerCase();
// let str2 = str1.split(" ");
// for (i=0;i<str2.length;i++) {
//     str2[i]=str2[i][0].toUpperCase()+str2[i].slice(1);
// }
// let str3 = str2.join('');
// console.log(str2);

// bài 11.



// 12.
// let tram = ["một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sau trăm", "bảy trăm", "tam trăm", "chín trăm"];
// let chuc = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sau mươi", "bảy mươi", "tam mươi", "chín mươi"];
// let donVi = ["một", "hai", "ba", "bốn", "năm", "sau", "bảy", "tam", "chín"];

// let inPut = prompt('nhap tiem').split('');
// let outPut = [];

// for (i=0; i<tram.length; i++){
//     if(inPut[0]==i){
//         outPut.push(tram[i]);
//     }
// }
// for (i=0; i<chuc.length; i++){
//     if(inPut[1]==i){
//         outPut.push(chuc[i]);
//     }
// }
// for (i=0; i<donVi.length; i++){
//     if(inPut[2]==i){
//         outPut.push(donVi[i]);
//     }
// }
// console.log(outPut.join(' '));