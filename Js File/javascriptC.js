//条件分岐

//数条件を制御するためのパターンです

/*

if(条件式){
    //ifがtrueになる時の命令
}else{
     //if以外になる時の命令
}

*/


let age = 17;
ticket = true;

if (age >= 18 && ticket){
    console.log("入場OK")
}else{
    console.log("入場禁止")
}


let money = 399; //所持金

if (money >= 500){//書いたいものの値段の条件
    console.log("買えます")//true
}else{
    console.log("買えない")//false
}


let score = 79;

if(score >= 80){
    console.log("素晴らしいスコア")
}else if (score >= 60){
    console.log("合格最低限のライン範囲内")
}else{
    console.log("不合格です。")
}


if(score >= 90 && score <= 100){
    console.log("S ランク")
}else if (score >= 80){
    console.log("A ランク")
}else if (score >= 70){
    console.log("B ランク")
}else if (score >= 60){
    console.log("C ランク")
}else {
    console.log("D ランク")
}


//繰り返し処理

//条件が当てはまる間にプログラムが動く
/*
   //変数　　　　//++ インクリメント演算子　ループを制御する演算子
for(初期値,条件, 増分){
    //繰り返す処理
}
*/

for(let a = 1; a <= 5; a++){
    console.log("こんにちは");
};


for (let i = 1; i <= 5; i++){
    console.log(i + "番の人");
};