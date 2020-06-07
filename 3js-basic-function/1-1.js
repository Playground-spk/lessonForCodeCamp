/*
   ให้ลองแก้บัคต่อไปนี้

    มีฟังชั่นที่รับ parameter                                                ** parameter หรือ argument คือตัวเดียวกัน
    รับ parameter x เพื่อนำ x มาเช็กว่าเป็นเลขคู่หรือเลขคี่
    ฟังชั่นนั้นจะต้องคืนค่าไปให้กับ ตัวแปร done ในบรรทัดที่ 25
     เพื่อนำ string ไปใช้ต่อ

     ข้อนี้บังคับใช้ return

*/

function checkNumber(x) {
  let result;

  if (x % 2 == 0) {
    result = "even";
  } else {
    result = "odd";
  }
}

let done = checkNumber(4);

console.log(done);
