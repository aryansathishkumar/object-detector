img = "";
img_x = 0;
function preload()
{
    img = loadImage("dog-cat.jpg");
}
status = "";
percent = 0;
objects = [];
video_declare = "";
object_detector= "";
function setup()
{
    canvas = createCanvas(450, 450);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("detect").innerHTML = "detecting objects";
}
function modelloaded()
{
    console.log("cocossd is loaded", ml5.version);
    status = true;
    object_detector.detect(img,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
        window.alert("There is an error kindly reload the page");
    }
    else
    {
        console.log(results);
        document.getElementById("detect").innerHTML = "Object Detected"
        objects = results;
        object_detector.detect(img,gotresult);

    }
}
function draw()
{
    image(img, 0, 0, 450, 450);
    if(status != "")
    {
    for(i=0; i<objects.length; i++)
    {
        percent= Math.floor(objects[i].confidence*100);
        object_name= objects[i].label;
        fill("red");
        textSize(20);
        text(object_name+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
}
function change_img()
{
    if(img_x == 0)
    {
        img = loadImage("dog-cat.jpg");
        img_x = img_x+1
        console.log("cocossd is loaded", ml5.version);
        status = true;
        object_detector.detect(img,gotresult);
    }
    else if(img_x == 1)
    {
        img = loadImage("bedroom.jpg")
        img_x = img_x+1;
        console.log("cocossd is loaded", ml5.version);
        status = true;
        object_detector.detect(img,gotresult);
    }
    else if(img_x == 2)
    {
        img = loadImage("car.jpg")
        img_x = img_x+1;
        console.log("cocossd is loaded", ml5.version);
        status = true;
        object_detector.detect(img,gotresult);
    }
    else if(img_x == 3)
    {
        img = loadImage("desk.jpg")
        img_x = img_x+1;
        console.log("cocossd is loaded", ml5.version);
        status = true;
        object_detector.detect(img,gotresult);
    }
    else if(img_x == 4)
    {
        img = loadImage("fruitbasket.jpg")
        img_x = img_x+1;
        console.log("cocossd is loaded", ml5.version);
        status = true;
        object_detector.detect(img,gotresult);
    }
    else if(img_x == 5)
    {
        img_x = 0;
    }
}