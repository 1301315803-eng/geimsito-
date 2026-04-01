console.log("script started")

function start() {
    console.log("click")
    console.log(Math.random() * window.innerWidth);
    createCircle();
}

function createCircle() {
    // Create div for the circle
    let circle = document.createElement("div"); 

    // set some text and styles
    circle.innerText = "1";
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


}

function getRandomX() {
    let reandX = Math.random () * (window.innerWidth - 100);
    return reandX;
}
    function getRandomY() {
        let randY = Math.random() * window.innerHeight;
        return randY;
    }
