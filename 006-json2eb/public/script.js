window.addEventListener("load", submit);
	function submit(){
		document.getElementById("search").addEventListener("click", get)
		movieList = ""

		function makeHtml(input) {
			debugger
			htmlString = `<div> ${input.Title} </div>`
			htmlString += `<div> Year Premiered: ${input.Year} </div>`
			htmlString += `<div> ImdbID: ${input.imdbID} </div>`
			htmlString += `<div> Type: ${input.Type} </div>`
			htmlString += `<div> <img src ="${input.Poster}"></div>`
			return htmlString
		}
		function get(event) {
			event.preventDefault()
			var xhr = new XMLHttpRequest();
			xhr.open ("GET", "http://localhost:4567/results?query=" + document.getElementById("query").value);
			xhr.onload = function(){
			var movieList = JSON.parse(xhr.responseText);
				for (var i=0; i<movieList.Search.length; i++){
					makeHtml(movieList.Search[i])
					document.getElementById("receiver").insertAdjacentHTML('afterbegin', htmlString)
					debugger

				}
			}	
			xhr.send(null);

		}
	
	}