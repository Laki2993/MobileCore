document.addEventListener("DOMContentLoaded",()=>{


    function Load(){
        setTimeout(function(){
            document.getElementById("PlanetLogo").style.opacity = "1";
            document.getElementById("PlanetLogo").style.top = "0px";
        },100);

        setTimeout(function(){
            document.getElementById("h1").style.opacity = "1";
            document.getElementById("h1").style.top = "0px";
        },1000);

        setTimeout(function (){
            document.getElementById("LoadingContainer_p").style.opacity = "1";
            document.getElementById("LoadingContainer_p").style.top = "0px";
        },600);

        setTimeout(function(){
            document.getElementById("CirkContainer").style.opacity = "1";
        },1500);
    
    }
    function OffLoadPage(){
        document.getElementById("h1").style.top = "-150px";
        document.getElementById("LoadingContainer_p").style.top = "-100px";
        document.getElementById("CirkContainer").style.top = "-200px";

        setTimeout(function(){
            document.getElementById("Loading_Page").style.width = "0px"
        },3000);
    };

    function LoadCirk(){
        document.getElementById("Cirk1").classList = "Cirk1";
        document.getElementById("Cirk2").classList = "Cirk2";
    };


    setTimeout(Load,1000);
    setTimeout(LoadCirk,1500);
    setTimeout(OffLoadPage,5000);

    document.getElementById("MiniFilter").addEventListener("click",()=>{
        if(document.getElementById("FilterBoard").style.width == "0vw"){
            document.getElementById("FilterBoard").style.width = "30vw";
        }
        else{
            document.getElementById("FilterBoard").style.width = "0vw";
            document.getElementById("FilterStatusTask").style.width = "5vw";
        }
        
    });

const container = document.getElementById("FilterStatusTask");
const redButton = document.getElementById("Red");
const orangeButton = document.getElementById("Orange");
const greenButton = document.getElementById("Green");

container.addEventListener('click', (event) => {
    if (!event.target.closest('.FilterStatus')) {
        container.style.width = container.style.width === "5vw" ? "18vw" : "5vw";
    }
});

redButton.addEventListener('click', (event) => {
    event.stopPropagation();
    container.style.width = "5vw";
    container.style.justifyContent = "start";
});

orangeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    container.style.width = "5vw";
    container.style.justifyContent = "center";
});

greenButton.addEventListener('click', (event) => {
    event.stopPropagation();
    container.style.width = "5vw";
    container.style.justifyContent = "end";
});

function GetTime(){
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    console.log(hours + ":" + minutes);
    document.getElementById("LocalTime").innerHTML = hours + ":" + minutes;
}

GetTime();
setInterval(GetTime, 60000);


});