backbutton.onclick=backClick;
buttoneend.onclick=eendClick;
var movement=50
var eendzijden=0;
var eendboven=0;
var eend = document.getElementById('eend');
var mis=0
var raak=0
var richting = ['n', 'no', 'o', 'zo', 'z', 'zw', 'w', 'nw']

centreerEend(eend)

setInterval(richtingcompleet,500)





function richtingcompleet(random){
	
	var random = richting[Math.floor(Math.random()*8)];
		
			switch(random){
			case "w":
			var links=parseInt(eend.style.left, 10)-movement;
			eend.style.left=links+'px';
			break;
			case "o":
			var rechts=parseInt(eend.style.left, 10)+movement;
			eend.style.left=rechts+'px'
			break;
			case "z":
			var boven=parseInt(eend.style.top, 10)-movement;
			eend.style.top=boven+'px'
			break;
			case "n":
			var beneden=parseInt(eend.style.top, 10)+movement;
			eend.style.top=beneden+'px'
			break;
			case "no":
			var rechtsboven1=parseInt(eend.style.left, 10)+movement;
			eend.style.left=rechtsboven1+'px'
			var rechtsboven2=parseInt(eend.style.top, 10)-movement;
			eend.style.top=rechtsboven2+'px'
			break;
			case "zo":
			var rechtsonder1=parseInt(eend.style.left, 10)+movement;
			eend.style.left=rechtsonder1+'px'
			var rechtsonder2=parseInt(eend.style.top, 10)+movement;
			eend.style.top=rechtsonder2+'px'
			break;
			case "zw":
			var linksonder1=parseInt(eend.style.left, 10)-movement;
			eend.style.left=linksonder1+'px'
			var linksonder2=parseInt(eend.style.top, 10)+movement;
			eend.style.top=linksonder2+'px'
			break;
			case "nw":
			var linksboven1=parseInt(eend.style.left, 10)-movement;
			eend.style.left=linksboven1+'px'
			var linksboven2=parseInt(eend.style.top, 10)-movement;
			eend.style.top=linksboven2+'px'
			}
		
		

		
	
}
	

	



function eendClick(){


	raak=raak+1

	if (raak+mis == 20) {
		alert('je hebt '+ raak +' geraakt en '+ mis +' gemist')
	}

}


function backClick(){
	

	mis=mis+1
	if (raak+mis == 20) {
	alert('je hebt '+ raak +' geraakt en '+ mis +' gemist')
}

}






function centreerEend(object){
	eendboven = (document.documentElement.clientHeight - object.offsetHeight) / 2
	eendzijden = (document.documentElement.clientWidth - object.offsetWidth) / 2

	eend.style.position='relative';
	eend.style.top = eendboven+'px';
	eend.style.left = eendzijden+'px';
}


