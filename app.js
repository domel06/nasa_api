var datePicker = document.getElementById("date");
var button = document.getElementById("button");
var date = datePicker.value;
var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=8ZYBJxvNxQ1jU519DEMqOBjXNMqBs4IfFjLhbyYv`;


    
    button.addEventListener("click", function() {
       
        console.log(date);
       
        console.log(url);
       
    });
    axios.get(url)
    .then(function(response) {
        // handle success
        var image = response.data.photos[0].img_src;
        console.log(image)   
         var sol = response.data.photos[0].sol;
        console.log(sol)    
        var cameraName = response.data.photos[0].camera.full_name; 
        console.log(cameraName)    
        var roverName= response.data.photos[0].rover.name;
    console.log(roverName);        
    var text = `The image below was taken by the ${cameraName} on the ${roverName} rover on Martian sol ${sol}.`;
    
    document.getElementById("results").innerHTML = text;
    // sets the innerHTML of the div to the text results.
    document.getElementById("image").src = image;
    // adds the image URL to the src attribute
    document.getElementById("image").style.display = "block";
    // displays the image element


    })
    .catch(function(error) {
        // handle error
    });