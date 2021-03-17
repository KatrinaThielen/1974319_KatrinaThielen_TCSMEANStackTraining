var count = 0;
var x = 0;
var blogPosted = new Array();

function appearBody() {
    var T = document.getElementById("showcase");
    T.style.display = "";	  // Clear display to show content.
    var H = document.getElementById("promptAdd");
    H.style.display = "none"; // Set display to none to hide content.
}

function loadStorage() {
	var keyAmount = localStorage.getItem('i');
	console.log('number of keys is : ', JSON.parse(keyAmount));

	if (keyAmount){
		count = parseInt(keyAmount) + 1;
	}

	for (var x = 0; x <= keyAmount; x++){
		var data = localStorage.getItem('key'+x);
		console.log('data items : ', JSON.parse(data));
		var info = JSON.parse(data);
		
		if (blogPosted.indexOf(x) < 0){
			insertBlog(info,x);
			blogPosted[x] = x;
		}
		if (blogPosted.indexOf(x) == x){
			document.getElementById("imageInfo").src=info.imageInfo;
		}
		if (x >= 0){ 
		appearBody();
		}
	}
}

function addBlog(){
	var data = readFormData();

	localStorage.setItem('i',JSON.stringify(count));
	localStorage.setItem('key'+count, JSON.stringify(data));
	count++;

	resetData();

	var keyAmount = localStorage.getItem('i');
	console.log('number of keys is : ', JSON.parse(keyAmount));

	for (var x = 0; x <= keyAmount; x++){
		var data = localStorage.getItem('key'+x);
		console.log('data items : ', JSON.parse(data));

		var info = JSON.parse(data);
		console.log('inserted data to info : ', info);

		console.log('BEFORE IF STATEMENT : ',blogPosted.indexOf(x));
		
		if (blogPosted.indexOf(x) < 0){
			insertBlog(info,x);
			blogPosted[x] = x;
		}

		if (blogPosted.indexOf(x) == x){
			document.getElementById("imageInfo").src=info.imageInfo;		
		}	
	}
	if (x >= 0){ 
		appearBody();
	}

	x++;
	alert("Thank you, your blog submission has been posted. Please review the gallery below to view the new addition.");
}

function readFormData(){
	var obj = {}
	obj.title = document.getElementById("title").value;
	obj.desc = document.getElementById("desc").value;
	obj.imageInfo = document.getElementById("imageId").files[0].name;
	console.log(obj);
	return obj;
}


function insertBlog(info, x){
	
	//var internalCount = 0;

	if (parseInt(x) > 0){								
		
		var OGcard = document.querySelector('#Acard');		//Retrieving element to copy

		var newCard = OGcard.cloneNode(true);				//Creating copy of selected #id

		newCard.id = 'card'+x;								//Set card id to corresponding key value

		var contain = document.querySelector('#showcase');	//Retrieving element to append to
		contain.append(newCard);							//Addition of newCard to blog gallery

		document.getElementById('titleInfo').innerHTML=info.title;
		document.getElementById("descInfo").innerHTML=info.desc;
		document.getElementById("imageInfo").src=info.imageInfo;

		console.log(imageInfo);								//Debug check

	}

	else {													
		document.getElementById('titleInfo').innerHTML=info.title;
		document.getElementById("descInfo").innerHTML=info.desc;
		document.getElementById("imageInfo").src=info.imageInfo;
	}



}

function resetData(){
	document.getElementById("title").value="";
	document.getElementById("desc").value="";
	document.getElementById("imageId").src=" ";
	//alert("Thank you. Your blog has been submitted."); <-- Debugging Alert
}
