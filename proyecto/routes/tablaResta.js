function resta(a,b){
  var r=0;
    for (var i = 1; i <= b; i++) {
      r=a-i;
      console.log(a+"-"+i+"="+r);
    }
}
var x=5;
var y=10;
resta(x,y);