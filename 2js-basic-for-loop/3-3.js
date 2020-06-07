/*
ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงผลต่างของตัวเลขที่น้อยที่สุด และ มากที่สุดออกมา
*/

let min = Infinity;
let max = -Infinity;

while (true) {
  let input = prompt("ใส่เลขเข้ามา หรือถ้าต้องการหยุดให้ใส่ stop");

  if (Number(input) < Number(min)) {
    min = input;
    console.log("in  min" + min);
  }

  if (Number(input) > Number(max)) {
    max = input;
    console.log("in  max" + max);
  }

  if (input === "stop") {
    let difference = max - min;
    alert(difference);
    break;
  }
}
