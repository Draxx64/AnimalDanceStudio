var currParams = "";
var selAnimal = "";
var selSong = "";
var urlParams = new URLSearchParams(window.location.search);
var animValue = urlParams.get("animal");
var songValue = urlParams.get("song");
if(!animValue) selAnimal = "NULL";
else selAnimal = animValue;
if(!songValue) selSong = "NULL";
else selSong = songValue;

function topage(page){
	//console.log("should send to: " + page);
	//console.log("with: " + selAnimal + " and " + selSong);
	window.location.href=page + "?animal=" + selAnimal + "&song=" + selSong;
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

function picSwitch(picname){
	switch(picname){
		case "Giraffe":
			return "https://cdn.mos.cms.futurecdn.net/mEuBJTDhXuTfSKdLefzSKg-1200-80.jpg";
		break;
		
		case "Monkey":
			return "https://wp.technologyreview.com/wp-content/uploads/2023/04/GettyImages-1158496265.jpeg";
		break;
		
		case "Cat":
			return "https://i.cbc.ca/1.7046282.1701447456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/humane-society.jpg";
		break;
		
		case "Dog":
			return "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg";
		break;
		
		case "Frog":
			return "https://www.pbs.org/wnet/nature/files/2021/05/frog-610x343.png";
		break;
		
		case "Bear":
			return "https://media.cnn.com/api/v1/images/stellar/prod/211125112643-bart-the-bear-ii.jpg?q=x_2,y_0,h_898,w_1596,c_crop/h_833,w_1480";
		break;
		
		case "Gorilla":
			return "https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Carousel_Image_48384.jpg/carousel_small/2ekufeboqr_Mountain_Gorilla_Carousel_Image_48384.jpg";
		break;
		
		case "Crocodile":
			return "https://c02.purpledshub.com/uploads/sites/62/2014/11/GettyImages-123529247-2a29d6c.jpg";
		break;
		
		case "Armadillo":
			return "https://bernheim.org/wp-content/uploads/2023/07/9-banded-armadillo.png";
		break;
		
		case "Raccoon":
			return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1200px-Raccoon_in_Central_Park_%2835264%29.jpg";
		break;
	}
}

var animImg = picSwitch(selAnimal);

function songSwitch(songname){
	switch(songname){
		case "found":
			return "song i found.mp3";
		break;
		case "town":
			return "music/Accumula Town.mp3";
		break;
		case "chipi":
			return "music/chipi chipi chapa chapa dubi dubi daba daba.mp3";
		break;
		case "coffin":
			return "music/Coffin Dance.mp3";
		break;
		case "hey":
			return "music/HEYYEYAAEYAAAEYAEYAA.mp3";
		break;
	}
}

var songfile = songSwitch(selSong);
var song;

function initSong(){
	var newElem = document.createElement("audio");
	newElem.setAttribute("style", "display: none;");
	var temp1 = "";
	temp1 +=  "<source src='" + songfile + "' type='audio/mp3'>";
	newElem.innerHTML = temp1;
	
	song = newElem;
	
	document.body.appendChild(newElem);
}

initSong();

function playSong(){
	song.pause();
	song.currentTime = 0;
	song.play();
}

function stopSong(){
	song.pause();
	song.currentTime = 0;
}