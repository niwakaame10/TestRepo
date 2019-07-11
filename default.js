window.onload = function() {
  setInterval(function() {
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}

// グローバル変数
var personAllay = {name:"" ,count:0};


var personAllay = [
  { name:"タマネギ", price:80, quantity:3 },
  { name:"じゃがいも", price:60, quantity:5 },
  { name:"ニンジン", price:40, quantity:4 }
];


var array = [];
var count = 0;

function clickbutton() {
  var name = document.getElementById("name").value;
 　for(var i = 0;i <= array.length;i++){
   if(name == array[i]){
     count = count + 1;
     break;
   }
 }

  array.push(name);
  if(count === 0){
    document.getElementById("form-text").innerHTML = "はじめまして " + name + " さん！";
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
