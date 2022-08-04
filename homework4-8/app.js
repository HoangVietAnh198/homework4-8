// Bài tập 1:
// let myColor = ["Red", "Green", "White", "Black"];
// a = myColor[0];
// b = myColor[0];
// for (i=1;i<myColor.length;i++) {
//     a =a+", "+myColor[i];
//     b = b +"+"+ myColor[i];
// } console.log(a);
// console.log(b);

//bài tập 2:
// let number = prompt(nhập số ban muốn"").split('');
// let b=[];
// let a = "";
// for(let i = 0; i < number.length; i++) {
//     b.push(number[i]);
// }
// a = b.join('-');
// console.log(a);

//Bài tập 3:
// let str = "The Quick Brown Fox";
// let str1 = str.toUpperCase();
// let str2 = str1.split(" ");
// for (i=0;i<str2.length;i++) {
//     str2[i]=str2[i][0].toLowerCase()+str2[i].slice(1);
// }
// let str3 = str2.join('');
// console.log(str2);

// bài tập 4:
// let a = prompt('Hãy nhập số cách nhau bởi dấu phẩy').split(',');
// let tong = 0;
// for(let i = 0; i < a.length; i++) {
//     tong = tong + Number(a[i]);
// }
// console.log(tong);

// bài tập 5 :
// let inPut=prompt(`Nhập các số cách nhau bởi dấu phẩy`);
// let inPutarray = inPut.split(",");
// let min = Number(inPutarray[0])
// for (i=0; i<inPutarray.length; i++){
//     if (min>Number(inPutarray[i])){
//         min = inPutarray[i]
//     }
// }
// console.log(min)

// Bài tập 6 :
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

// Bài tập 7:
// let a = [5,7,300,90,24,50,75];

// console.log('Xin chào, đây là kích thước đàn cừu của tôi');
// console.log(a);

// let max = Number(a[0])
// for (i=0; i<a.length; i++){
//     if (max<Number(a[i])){
//         max = a[i]
//     }
// }
// console.log(`con cừu lớn nhất của tôi có kích thước ${max}, hãy cạo nó`);

// a[a.indexOf(max)] = 8;
// console.log('sau khi cạo lông đây là đàn cừu của tôi');
// console.log(a);
// let g = 0;
// for(let i = 0; i < 3; i++) {
//     g++
//     for(let i = 0; i <a.length; i++){
//     a[i] = a[i] + 50;
//     }
//     console.log('month'+g);
//     console.log('sau 1 tháng bầy cừu của tôi đã lớn, đây là kích thước đàn cừu của tôi');
//     console.log(a);
//     let max = Math.max.apply(null, a);
//     console.log(`con cừu lớn nhất của tôi có kích thước ${max}, hãy cạo nó`);
//     a[a.indexOf(max)] = 8;
//     console.log('sau khi cạo lông đây là đàn cừu của tôi');
//     console.log(a);
// }
// let sum = 0;
//  for(let i = 0; i < a.length; i++) {
//      sum += a[i];
//  }
//  console.log(`đàn của tôi có tổng kích thước ${sum}`);
//  let tien = sum * 2;
//  console.log(`tôi sẽ lấy ${sum} x 2$ = ${tien}`);

// Bài tập 8
// let imPut = prompt(`Hãy nhập tên ngăn cách nhau bằng dấu phẩy`);
// let imPutarray = imPut.split(", ");
// let a = "";
// for (i=0;i<imPutarray.length;i++) {
//     a = `${a}, <${imPutarray[i]}>`
// } console.log(a);

// Bài tập 9
// let imPut = prompt(`Hãy nhập các số bạn muốn tôi sẽ lọc cho bạn số lẻ ^-^`);
// let imPutarray = imPut.split(", ");
// let a = "";
// for (i = 0; i < imPutarray.length; i++) {
//     if (Number(imPutarray[i]) % 2 === 1) {
//         a = `${a}, ${imPutarray[i]}`
//     }
// } console.log(a);