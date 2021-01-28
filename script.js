 


//var tableau_etudiant= [ "Moussa Camara"+" "+ 12 , "Jean Dupont"+" "+ 8 , "Francois Paul"+" "+ 14, "CDA test"+" "+ 13, "Emmanuel Macron"+" "+ 11 ];


		/*console.log ([tableau_etudiant])*/



var hello= [{"nom":"CAMARA","prenom":"Moussa","moyenne":" " + 12 +" " 

			},{"nom":"DUPONT","prenom":"Jean","moyenne":" " + 8 +" " 
			},{"nom":"PAUL","prenom":"François","moyenne":" "+ 14 + " "

			},{"nom":"CDA","prenom": "test","moyenne":" " + 8 + " "

			},{"nom":"MACRON","prenom":"Emmanuel","moyenne":" " + 11 + " "

			},{"nom":"pas inscrit",

			}];




function lesadmis(){
	for(var index=0;index<hello.length;index++){

	/*console.log(hello[index].nom);*/
	/*var list=document.createElement("div")
	var nom=document.createTextNode(hello[index].nom)
	list.appendChild(nom)*/
	console.log("ok");

if(hello[index].moyenne>=10){


	document.querySelector("#admis").append(hello[index].nom)
	document.querySelector("#admis").append(hello[index].moyenne)

}
}
}

function pasadmis(){
	for(var index=0;index<hello.length;index++){

	console.log("pas ok");

if(hello[index].moyenne<=10){

	document.querySelector("#pasadmis").append(hello[index].nom+" ")
}
}
}


function pasinscrit(){
	for(var index=0;index>hello.length;index++){

	console.log("pas inscrit");

if(hello[index]>hello.length){

	document.querySelector("#pasinscrit").append(hello[index].nom)
}
}
}







		
		
