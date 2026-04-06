console.log("script started")

function start() {
    console.log("click")
    //console.log(Math.random() * window.innerWidth);
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);
}

function createCircle(num) {
    // Create div for the circle
    let circle = document.createElement("div"); 

    // set some text and styles
    circle.innerText = num;
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.backgroundColor = "red"
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "30px"  
    //position circle randomly using absolute 
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";


    //Add to the page
    document.body.appendChild(circle);

    // Make it clickable 
    circle.addEventListener("click", checkForRemove);
}

function getRandomX() {
    let reandX = Math.random () * (window.innerWidth - 100);
    return reandX;
}
    function getRandomY() {
        let randY = Math.random() * window.innerHeight;
        return randY;
    }

//checks for the right choice and removes it 
function checkForRemove(event) {
    let circle = event.target;
    console.log(circle.innerText);
}