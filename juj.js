var y = 6;
var p = 5;
var l = 4;
function ordenar(primeiro, segundo, terceiro) {
  if (terceiro > segundo && terceiro > primeiro) {
    console.log(terceiro);
    if (segundo > primeiro) {
      console.log(segundo);
      console.log(primeiro);
    } else {
      console.log(primeiro);
      console.log(segundo);
    }
  }
  if (segundo > primeiro && segundo > terceiro) {
    console.log(segundo);
    if (primeiro > terceiro) {
      console.log(primeiro);
      console.log(terceiro);
    } else {
      console.log(terceiro);
      console.log(primeiro);
    }
  }
  if (primeiro > segundo && primeiro > terceiro) {
    console.log(primeiro);
    if (segundo > terceiro) {
      console.log(segundo);
      console.log(terceiro);
    } else {
      console.log(terceiro);
      console.log(segundo);
    }
  }
}

ordenar(y, p, l);


var c=3
var d=2
var e=1

function sansao(c,d,e){
  if(c < d && c < e){
    console.log(c)
    if(d < e){console.log(d)
              console.log(e)
  }
    else{console.log(e)
        console.log(d)}
  }
  if(d < e && d < c){
    console.log(d)
    if(e < c){console.log(e)
              console.log(c)}
      else{console.log(c)
            console.log(e)}
  }
  if(e < c && e < d){
    console.log(e)
    if(c < d){
      console.log(c)
      console.log(d)
    }
    else{console.log(d)
         console.log(c) 
    }
  }
}
sansao(c,d,e)

var w = 6
var y = 5
var z = 4

function dalila(w,y,z){
  if(w > y && w > z){
    console.log(w)
    if(y > z){
      console.log(y)
      console.log(z)
    }
    else{
      console.log(z)
      console.log(y)
    }
  }
  if(y > z && y > w){
    console.log(y)
    if(z > w){
      console.log(z)
      console.log(w)
    }
    else{
      console.log(w)
      console.log(z)
    }
  }
  if(z > w && z > y){
    console.log(z)
    if(w > y){
      console.log(w)
      console.log(y)
    }
    else{
      console.log(y)
      console.log(w)
    }
  }
}
dalila(w,y,z)