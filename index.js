document.getElementById('f').style.left="20px";
document.getElementById('f').style.top="20px";
function right() {
	document.getElementById('f').style.left = parseInt(document.getElementById('f').style.left.replaceAll("px","")) + 10+"px";
}
function left() {
	document.getElementById('f').style.left = parseInt(document.getElementById('f').style.left.replaceAll("px","")) - 10+"px";
}
function up() {
	document.getElementById('f').style.top = parseInt(document.getElementById('f').style.top.replaceAll("px","")) - 10+"px";
}
function down() {
	document.getElementById('f').style.top = parseInt(document.getElementById('f').style.top.replaceAll("px","")) + 10+"px";
}
document.body.onkeypress = function (e) {
  if (e.key == "w") {
  	up();
  } else if (e.key == "s") {
  	down();
  } else if (e.key == "d") {
  	right();
  } else if (e.key == "a") {
  	left();
  } else if (e.key == "r") {
  	fire();
  } else {

  }
}
if (window.innerWidth > window.innerHeight) {
	document.getElementById("cntrl").remove();
} else {
	document.getElementById('f').style.top="100px";	
}

setInterval(k, 30);
function fire() {
  	var a = document.createElement("img");
  	a.src="bomb.png";
  	a.className="as";
  	a.style.position="absolute";
  	a.style.left=document.getElementById("f").style.left;
  	a.style.top= parseInt(document.getElementById("f").style.top.replaceAll("px","")) + document.getElementById("f").height + "px";
  	document.body.appendChild(a);
}
function k() {
	if (document.getElementsByClassName("as") == null) {

	} else {
		var n = 0;
		while (n < document.getElementsByClassName("as").length) {
			if (parseInt(document.getElementsByClassName("as")[n].style.top.replaceAll("px","")) > window.innerHeight + document.getElementsByClassName("as")[n].height ) {
				var t = document.createElement("img");
				t.src = "explosion.png";
				t.height = window.innerHeight/4;
				t.style.position = "absolute";
				t.style.bottom = "0px";
				t.className= "fre";
				t.style.left = document.getElementsByClassName("as")[n].style.left;
				document.getElementsByClassName("as")[n].remove();
				document.body.appendChild(t);
				setTimeout(function () {
						document.getElementsByClassName("fre")[0].remove();
				}, 2000);
			} else {
				document.getElementsByClassName("as")[n].style.top = parseInt(document.getElementsByClassName("as")[n].style.top.replaceAll("px","")) + 10 +"px";
			}
			n=n+1;
		}
	}
}
