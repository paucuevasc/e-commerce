ban=new Array(3);
ban[0]="design/banner1.jpg";
ban[1]="design/banner2.jpg";
ban[2]="design/banner3.jpg";

arrayURL=new Array(3);
arrayURL[0]="https://librarum.com";
arrayURL[1]="https://librarum.com";
arrayURL[2]="https://librarum.com";

var longitudArray=ban.length;
var contador=0;

contador = Math.floor((Math.random()*longitudArray));

var temp=1;
var timer=temp*3000;

function banner(){
contador++;
contador=contador%longitudArray;
document.banner.src=ban[contador];
setTimeout("banner()",timer);
}
function getURL(){
contador2=contador;
url=window.open(arrayURL[contador2]);
return false;
}
