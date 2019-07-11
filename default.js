window.onload = function() {
  setInterval(function() {
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}

// グローバル変数
// 入力された人のリスト
var personAllay = [];

// 入力時格納のためのクラス
var personInfo = {name,count}

var array = [];
var count = 0;

// 入力ボタン押下
function clickbutton() {
  var name = document.getElementById("name").value;

/*
  //入力された名前が存在するかチェック
  foreach(info in personAllay){

    // 以前入力された名前の場合
    if(name == info.name){
      info.count = info.count + 1;
      //break;
    }
    // 初めて入力された名前の場合
    else{
      personInfo.name = name;
      personInfo.count = 1;
      personAllay.push(personInfo);
    }
  }
*/

 for(var i = 0;i <= array.length;i++){
   if(name == array[i]){
     count = count + 1;
     break;
   }
 }

  personInfo.name = "gorira";
  personInfo.count = 1;

  personAllay.push(personInfo);

  array.push(name);
  if(count === 0){
    document.getElementById("form-text").innerHTML = "はじめまして " + personAllay[3].name + " さん！";
  }

  if(count === 1){
    document.getElementById("form-text").innerHTML = "また会ったね " + name + " さん！";
  }

  if(count === 2){
    document.getElementById("form-text").innerHTML = "しつこいね " + name + " さん！";
  }

  if(2 < count){
    document.getElementById("form-text").innerHTML = "呆れたよ " + name + " さん！";
  }

}
