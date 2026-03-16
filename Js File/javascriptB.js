//データ型


//プリミティブ型


//① ストリング型　（文字列）

let string = "データ";

//②　ナンバー型　（番号）

let number = 123;

//③ ブリアン型　（真・偽）

let boolean = true;

let boolean2 = false;

//参照型

// ❶ 配列型

let arr = [1,2,3,4,5,6,7]

// ❷ オブジェクト型

let object = {
    firstName: "alessio", //firstName:　＝＞　プロパティーキー（名）
    age:36
}

//演算子


//算術演算子　（計算する）

/*
 「+」足し算　a + b
 「-」引き算  a - b
 「*」掛け算 a * b
 「/」除算 a / b
 */


//比較演算子　

/*
 「===」 a === b 完全に同じ
  「!==」a !== b 完全に違う
  「<」　a < b aがbより小さい
  「>」　a > b aがbより大きい
  「<=」 a <= b aを含めてb以下 
  「>=」 a >= b　aを含めてb以上
*/

let age = 19;


// 0 ~ 17 false
// 18以上　true

console.log(age >= 18)
console.log(10 >= 10);

// 0 ~ 18 true
// 19以上　false

console.log(age <= 18)
console.log(5 <= 4) //false


//論理演算子　（条件と条件を繋げて判定する）（判断型）

//console.log(a && b) and

//console.log(a || b) or

//console.log(!a) not


//&& aかつb (shift + 6 2回)
let age2 = 21;
const money = true;

console.log(age2 >= 20 && money)//true

// true && true -> true
// false && true -> false
// true && false -> false

// || aもしくはb (shift + ¥　2回)

let age3 = 18;
let money2 = false;

console.log(age3 >= 18 || money2)

// false || true -> true
// true || false ->  true
// false || false -> false

// ! not 否定演算子

let money3 = true;

console.log(!money3)//false