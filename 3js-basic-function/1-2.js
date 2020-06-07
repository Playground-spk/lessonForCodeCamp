/* 
 เซลขายบ้านคิดค้นโปรแกรมสำหรับถามถึงความต้องการของลุกค้าที่จะมาซื้อบ้าน
 แต่โปรแกรมทำงานผิดปกติ  ราคาบ้านที่เสนอลูกค้าไม่ตรงกับความเป็นจริง

    สิ่งที่เซลคนนี้ต้องการให้เราทำคือ
    1.แก้บัคให้โปรแกรมแจ้งราคาให้ตรง
    2.เขียนโปรแกรมเพิ่มเติม ถ้า wantTobuyOrNot = ใช่    ให้เอาราคาบ้านไปหัก myMoney และ alert แจ้งเงินคงเหลือ ถ้าเงินไม่พอไม่ต้องหักออก ให้ alert ไปว่า ขออภัยเงินไม่พอ



*/

function checkPrice(wide, long, location) {
  let squareArea = wide * long;
  console.log("in line 15");

  console.log("hello above ทองหล่อ");
  if (location === "ทองหล่อ") {
    console.log("hello in ทองหล่อ");
    return squareArea * 100000;
  } else if (location === "สุขุมวิทย์") {
    return squareArea * 99555;
  } else if (location === "เอกมัย") {
    return squareArea * 90000;
  }
}
let myMoney = 100000000000000;

let wide = +prompt("ต้องการบ้านกว้างเท่าไหร่");
let long = +prompt("ต้องการบ้านยาวเท่าไหร่");

let place = prompt("ต้องการทำเลแถวไหน ทองหล่อ สุขุมวิทย์ หรือ เอกมัย ");
let price = checkPrice(wide, long, place);

let wantBuyOrNot = prompt(`บ้านราคา${price}ต้องการซื้อ ใช่หรือไม่`);

if (wantBuyOrNot === "ใช่") {
  if (myMoney - price >= 0) {
    myMoney -= price;
    alert(myMoney);
  } else {
    alert("ขออภัยเงินไม่พอ");
  }
}
