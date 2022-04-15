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
var first = 0;
var last = 4;
var dataCount = 0;

function appendData(data) {
  dataCount = data.length;
  console.log(dataCount)
  //get myData div
  let mainContainer = document.getElementById("myData");
  //get the next arrow information
  let nextM = document.getElementById("next");
  // hide prev button once data is fetched
  document.getElementById("prev").style.visibility = "hidden";
  //loop through movie array
  for (let i = 0; i < data.length; i++) {
    // create a new div in myData
    let div = document.createElement("div");
    div.className = "movie-container";
    div.style.display = "block";
    //adds a child to the div
    mainContainer.appendChild(div);
    //insert div before last arrow
    nextM.before(div);

    //any movie past the foruth movie do not display
    if (i > 3) {
      document.getElementsByClassName("movie-container")[i].style.display =
        "none";
    }
    const img = document.createElement("img");
    img.src = data[i].imgUrl;
    //add img to the newly created div
    div.appendChild(img);

    //  this is for the title
    let mdiv = document.createElement("p");
    mdiv.innerHTML = "Movie" + data[i].name;
    //add p to the newly created div
    div.appendChild(mdiv);

    //this is for the information on the movie
    let iDiv = document.createElement("p");
    iDiv.innerHTML = "Info: " + data[i].outlineInfo;
    // add p to the newly created div
    div.appendChild(iDiv);
  }
}


function prevOne(){
      
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

function nextOne(){
    
   // hide the first div (movie)
   document.getElementsByClassName("movie-container")[first].style.display = 'none'
   //move counter to the next movie 
   first = first + 1  //show the next movie
   document.getElementsByClassName("movie-container")[last].style.displey = "block"
   //move counter to the next movie
   last = last + 1
   //check if we are past the first four movies, display previous button
   if(last => 4){
     document.getElementById("prev").style.visibility = "visable"
   }
   if((dataCount)=== last){
     document.getElementById("next").style.visibility = "hidden"
   }
  //console.log(last, first)
}

const addCookies =()=>{
  let boughtCookies = 30
  let cookie = 4.50
  let total = 0

  total = cookie * boughtCookies   
  console.log(total);
  return total;

}
addCookies()