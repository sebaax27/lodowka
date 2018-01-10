const size = 9;
var klik = false;
var start, meta;

function tabela() {
    var tab = document.createElement("table");

    tab.id = "tablica";
    tab.style.border = "1px black solid";
    tab.style.width = "60px" * size;
    tab.style.height = "60px" * size;
    document.getElementById("body").appendChild(tab);


    for (i = 0; i < size; i++) {
        var el = document.createElement("tr");
        document.getElementById("tablica").appendChild(el);
        el.id = i;


        for (j = 0; j < size; j++) {
            var el2 = document.createElement("td");
            document.getElementById(i).appendChild(el2);
            el2.id = i + "_" + j;
			var kulka = document.createElement("div");
                    kulka.className="kulka";        
                    el2.appendChild(kulka);
        }
    }
}

var A = [];
for (var i = 0; i < size; i++) {
    A[i] = [];
    for (j = 0; j < size; j++) {
        A[i][j] = 0;
    }
}



var B = [];
for (var i = 0; i < size; i++) {
    B[i] = [];
    for (var j = 0; j < size; j++) {
        B[i][j] = [];
    }
}

function wpisywanie() {
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            let cell = document.getElementById(i+"_"+j);//ma byc kolo
			let circle = cell.getElementsByClassName('kulka')[0];
            switch (A[i][j]) {

                case "czerwony": //czerwony
                    circle.style.backgroundColor = "red";
                    break;

                case "zielony": //zielony
                    circle.style.backgroundColor = "green";
                    break;

                case "niebieski": //niebieski
                    circle.style.backgroundColor = "blue";
                    break;

                case "zolty": //zolty
                    circle.style.backgroundColor = "yellow";
                    break;

                case "czarny": //czarny
                    circle.style.backgroundColor = "black";
                    break;

                case "brazowy": //brazowy
                    circle.style.backgroundColor = "brown";
                    break;

                case "fioletowy": //fioletowy
                    circle.style.backgroundColor = "violet";
                    break;
                case 'X':
                    circle.style.visibility = "visible";
					circle.style.backgroundColor = "red";
                    break;

                default:

            }
        }
    }
}

function randomizingX() {
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var pom = Math.round(Math.random());
            if (pom) {
                A[i][j] = "X";
				
            }
        }
    }
}

function randomowe_3_kulki(){
	var tabC =[];
	for(var i=0;i<size;i++){
		for(var j=0;j<size;j++){
			if(A[i][j]=0){
				tabC.push(i+"_"+j);
			}
			
		}
		
	}
	if(tabC.length<=3){
	alert("koniec gry!!");
	}
	else{
		var pomoc = 0;
		var wylosowane = [];
		while(pomoc!=3){
			var pomoc2=Math.floor(Math.random()*100)%tabC.length;
			wylosowane.push(tabC[pomoc2]);
			pomoc++;
		}
		for(let i=0; i<3; ++i){
			var wiersz = parseInt(wylosowane[i][0]);
			var kolumna = parseInt(wylosowane[i][2]);
			A[wiersz][kolumna] = 'X';
		}
	}
}

function droga(cell) {
    if (cell.target !== cell.currentTarget) {
        var clickedItem = document.getElementById(cell.target.id);
        console.log(clickedItem);
        if (klik) { //ciągniemy kulkę do mety
            if (!clickedItem.innerHTML) {
                clickedItem.innerHTML = 'M';
                klik = !klik;
                meta = clickedItem;
            }
        } else { //wybieramy kulkę
            if (clickedItem.innerHTML === 'X') {
                clickedItem.innerHTML = 'S';
                klik = !klik;
                start = clickedItem;
            }
        }
    }
    console.log(klik);
    cell.stopPropagation();
}
function renderowanie(){
	if(!start && !meta){
		randomowe_3_kulki();	
	}
	else{
		return 0;
	}
}

function wyznaczSciezke(){
	var sciezka = [];
	var swiersz = start.id[0], skolumna = start.id[2];
	var mwiersz = meta.id[0], mkolumna = meta.id[2];
	var licznik = 0;
	/* while(){
		++licznik;
		for(let i=)
	} */
	
	return sciezka;
}
// function wpisz(el,content){
//     el.innerHTML = content;
// }

tabela();
randomizingX();
wpisywanie();
document.getElementById('tablica').addEventListener("click", function(cell) {
    droga(cell);
	if(meta) {
		//zamalujSciezke(wyznaczSciezke());
	}
}, false)