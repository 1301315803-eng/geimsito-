console.log("script started")

// var to track current number
let currentNum = 1;
let level = 1;

function start() {
    currentNum = 1;
    console.log("click")
    //console.log(Math.random() * window.innerWidth);
    startLevel1();
}
function startLevel1() {
    currentNum = 1;
     setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);

}
function startLevel2() {
    currentNum = 1;
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);
    setTimeout(createCircle, 2000, 4);
    setTimeout(createCircle, 2500, 5);
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
    if (circle.innerText == currentNum) {
        circle.remove();
        currentNum++;
        if (currentNum == 4 && level == 1 ) {
            startLevel2();
        }
        else if (currentNum == 6 && level == 2) {
            startLevel3();
        }
    }
}