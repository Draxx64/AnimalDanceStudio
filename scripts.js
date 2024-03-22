const newtab = false;

let froggif = "froggif.gif";

var song = document.getElementById("thing i found");
song.volume = 0.1;

function tojukebox(){
	let form = document.getElementById("FORMA");
	var formData = new FormData(form);
	var urlSearchParams = new URLSearchParams(formData).toString();
	openma("jukebox.html?" + urlSearchParams);
}

function openma(page){
	if(newtab){
		var newpage = window.open(page, "_blank");
	}
	if(!newtab){
		var newpage = window.open(page);
	}
	newpage.focus();
}

function playSong(){
	song.pause();
	song.currentTime = 0;
	song.play();
}

function showTab(tabNumber) {
	const tabs = document.querySelectorAll('.tab');
	const tabButtons = document.querySelectorAll('.tab-button');

	tabs.forEach(tab => tab.classList.remove('active'));
	tabButtons.forEach(button => button.classList.remove('active'));

	document.getElementById('tab' + tabNumber).classList.add('active');
	document.querySelector('.tab-button:nth-child(' + tabNumber + ')').classList.add('active');
}