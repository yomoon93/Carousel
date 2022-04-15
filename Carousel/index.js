//This is where we grab the file with the json and grab the info
// we are fetching from a rest API
fetch(" http://localhost:3000/movies")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    //appendData method interface adds the provided data to the end of the node's current data 
    appendData(data)
  })
  .catch(function(err) {
    console.log("error" + err);
  });

/*
The start of the code we make our variables first
*/
var last = 4
var first = 0
var dataCount = 0

function plusOne(){
    
    
    //hide first movie
    document.getElementsByClassName("movie-container")[first].style.display = 'none'
    //move counter to the next movie
    first = first + 1;
    //show the next movie
    document.getElementsByClassName("movie-container")[last].style.display = 'block'
    //move counter to the next movie 
    last = last + 1;

    //check if we are past the first four movies, display previous button
    if (last >= 4){
        document.getElementById("prev").style.visibility = "visible"
    }
    
    //if we are at end hide next arrow
    if ((dataCount) === last){
        document.getElementById("next").style.visibility = "hidden"
    }

    // console.log(last, first)
    
}

function subOne(){
    //hide last movie
    document.getElementsByClassName("movie-container")[last - 1].style.display = 'none'
    //move counter to the left
    last = last - 1;
    //show next movie to the left 
    document.getElementsByClassName("movie-container")[first - 1].style.display = 'block'
    //move counter to the left
    first = first - 1;

    //check if we are at the first four movies
    if (last <= 4){
        document.getElementById("prev").style.visibility = "hidden"
    }

    //check if we are not at the last movie
    if ((dataCount) !== last){
        document.getElementById("next").style.visibility = "visible"
    }
    
    //console.log(last, first)
    
}


function appendData(data) {

    dataCount = data.length

    //get myData div
    var mainContainer = document.getElementById("myData");

    //get the next arrow
    var a = document.getElementById("next")

    //hide prev button once data is fetched
    document.getElementById("prev").style.visibility = "hidden"

    //loop through movie array
    for (var i = 0; i < data.length; i++) {

        //create a new div in myData
        var div = document.createElement("div")
        div.className = "movie-container"
        div.style.display = "block"
        mainContainer.appendChild(div);

        //insert div before last arrow
        a.before(div)

        //any movie past the forth movie do not display
        if ( i > 3) {
            document.getElementsByClassName("movie-container")[i].style.display = 'none'
            //console.log(i)
        }
        
        const img = document.createElement("img");
        img.src = `${data[i].imgUrl}`;
        //add img to the newly created div
        div.appendChild(img);
        
        var mdiv = document.createElement("p");
        mdiv.innerHTML = 'Movie: ' + data[i].name;
        //add p to the newly created div
        div.appendChild(mdiv);

        var iDiv = document.createElement("p");
        iDiv.innerHTML = 'Info: ' + data[i].outlineInfo
        
        //add p to the newly created div
        div.appendChild(iDiv);
        
    }
}

    