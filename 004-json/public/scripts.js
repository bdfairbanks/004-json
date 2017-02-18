debugger
var xhr = new XMLHttpRequest();
xhr.open ("GET", "http://localhost:4567/people");
xhr.onload = function(){
	body =document.createElement("body")
	html= document.lastElementChild
	html.appendChild(body)
	var personList = JSON.parse(xhr.responseText);
	for (var i=0; i<personList.length; i++){
	object = document.createElement("div");
	fname = document.createElement("div");
	fnameInside =document.createTextNode(personList[i].fname);
	fname.appendChild(fnameInside);
	lname = document.createElement("div");
	lnameInside =document.createTextNode(personList[i].lname);
	lname.appendChild(lnameInside);
	address = document.createElement("div");
	addressInside =document.createTextNode(personList[i].address);
	address.appendChild(addressInside);
	city = document.createElement("div");
	cityInside =document.createTextNode(personList[i].city);
	city.appendChild(cityInside);
		state = document.createElement("div");
	stateInside =document.createTextNode(personList[i].state);
	state.appendChild(stateInside);
		tel = document.createElement("div");
	telInside =document.createTextNode(personList[i].tel);
	tel.appendChild(telInside);
		zip = document.createElement("div");
	zipInside =document.createTextNode(personList[i].zip);
	zip.appendChild(zipInside);
	object.appendChild(fname);
	object.appendChild(lname);
	object.appendChild(address);
	object.appendChild(city);
	object.appendChild(state);
	object.appendChild(tel);
	object.appendChild(zip);
	body.appendChild(object)
}

};
xhr.send(null);



// address
// :
// "7220 Tellus Ln"
// city
// :
// "Manchester"
// fname
// :
// "Johnathan"
// lname
// :
// "Lewis"
// state
// :
// "MS"
// tel
// :
// "(895)032-8486"
// zip
// :
// 64696