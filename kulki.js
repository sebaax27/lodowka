const size=9;
var klik = false;
function tabela(){
     var tab=document.createElement("table");

     tab.id="tablica";
     tab.style.border="1px black solid";
     tab.style.width="60px"*size;
     tab.style.height="60px"*size;
     document.getElementById("body").appendChild(tab);


    for(i=0;i<size;i++){
        var el=document.createElement("tr");
        document.getElementById("tablica").appendChild(el);
        el.id=i;


        for(j=0;j<size;j++){
           var el2=document.createElement("td");
           document.getElementById(i).appendChild(el2);
           el2.id= i+"_"+j;
        }
    }
}

var A = [];
for(var i=0;i<size;i++){
    A[i]=[];
    for(j=0;j<size;j++){
        A[i] [j] =0;
    }
}



var B=[];
for(var i=0;i<size;i++){
    A[i]=[];
    for(var j=0;j<size;j++){
        A[i][j]=[];
    }
}
console.log(A, B);

function wpisywanie(){
      for(var i=0;i<size;i++){
          for(var j=0;j<size;j++){
              let cell = document.getElementById(i+"_"+j);
              switch(A[i][j]){

                  case 1://czerwony
                        cell.style.backgroundColor="red";
                  break;

                  case 2://zielony
                        cell.style.backgroundColor="green";
                  break;

                  case 3://niebieski
                        cell.style.backgroundColor="blue";
                  break;

                  case 4://zolty
                        cell.style.backgroundColor="yellow";
                  break;

                  case 5://czarny
                        cell.style.backgroundColor="black";
                  break;

                  case 6://brazowy
                        cell.style.backgroundColor="brown";
                  break;

                  case 7://fioletowy
                        cell.style.backgroundColor="violet";
                  break;
                  case 'X':
                        cell.innerHTML = 'X';
                        break;

                  default:

              }
          }
      }
}

function randomizingX(){
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            var pom = Math.round(Math.random());
            if(pom) {
                A[i][j] = "X";
            }
        }
    }
}

function droga(cell){
    if(cell.target !== cell.currentTarget) {
        var clickedItem = document.getElementById(cell.target.id);
        console.log(clickedItem);
        if(klik) { //ciągniemy kulkę do mety
            if(!clickedItem.innerHTML) {
                clickedItem.innerHTML = 'M';
                klik = !klik;
                meta = clickedItem;
            }
        }
        else { //wybieramy kulkę
            if(clickedItem.innerHTML === 'X') {
                clickedItem.innerHTML = 'S';
                klik = !klik;
                start = clickedItem;
            }
        }
    }
    console.log(klik);
    cell.stopPropagation();
}

function sciezka(S,M) {
    if(klik){ // wybieramy M

    }
    else { //wybieramy S

    }
    var wiersz = S.id[0];
    console.log(wiersz);
}
// function wpisz(el,content){
//     el.innerHTML = content;
// }

tabela();
randomizingX();
wpisywanie();
document.getElementById('tablica').addEventListener("click", function(cell){
    var start, meta;
    var pomoc = false;
    droga(cell);
    console.log(droga(cell));




}, false);
// sciezka();
