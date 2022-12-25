import { onesPlace, tensPlace, unit, delimiter } from "./const";

const main = (number) => {
  let conversionNum = []; // 英語表記に変換した文字列格納用

  // 数字を3桁区切りで小さい順に配列に格納
  const separatNum = Number(number).toLocaleString().split(",").reverse();
  console.log(separatNum);

  // 3桁毎に英語表記に変換
  for (let i = 0; i < separatNum.length; i++) {
    let array = [];
    const num = separatNum[i];
    console.log(num);

    if (num.length === 3) {
      array.push(func1(num[0]));
      array.push(func2(num[1] + num[2]));
    }
    if (num.length === 2 || num.length === 1) {
      array.push(func2(num));
    }

    // 3桁終わりの単位を追加し、結合
    if (i) {
      array.push(unit[i]);
    }
    let str = array.join(delimiter);

    conversionNum.push(str);
  }

  return conversionNum.reverse().join(delimiter);
};

// 3桁目(百・十万・億の位)の変換
function func1(s) {
  let array = [];
  let n = Number(s);
  array.push(onesPlace[n]);
  array.push("hundred");
  return array.join(delimiter);
}

// 1,2桁目（一と十・千と万・百万と千万の位）の変換
function func2(s) {
  let array = [];
  let n = Number(s);
  if (Number(n) <= 19 && Number(n) > 0) {
    array.push(onesPlace[n]);
  }
  if (Number(n) > 19) {
    array.push(tensPlace[Number(s[0])]);
    array.push(onesPlace[Number(s[1])]);
  }
  console.log(array);
  return array.join(delimiter);
}

export default main;
