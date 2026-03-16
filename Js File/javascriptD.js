//DOM操作

// JavascriptからHTMLを操作する仕組み

/*
<h1 id="title">Javascript</h1>
    <button onclick="changeText()"></button>
*/

function changeText(){
    document.getElementById("title").textContent = "typescript";
};

// イベント

/*

javascriptはイベントをきっかけに動く言語です。

イベントとはユーザの操作です。

例：　クリック、入力、マウス動き、スクロールなど

*/

document.getElementById("button").onclick = function(){
    console.log("クリックされました");
};

//addEventListener

document.getElementById("button").addEventListener("click", function(){
    alert("クリックされました。");
});