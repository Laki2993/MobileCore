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
            document.getElementById("Loading_Page").style.width = "0px";
            setTimeout(function(){
                document.getElementById("Line").style.position = "relative";
            },1000);
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
            setTimeout(function(){
                document.getElementById("FilterBoard").style.height = "13vw";
            },500)
        }
        else{
            document.getElementById("FilterBoard").style.height = "5vw";
            setTimeout(function(){
                document.getElementById("FilterBoard").style.width = "0vw";
                document.getElementById("btnSaveFilter").classList = "btnSaveFilterSave";
                document.getElementById("cirk").classList = "Default";
            },500)
        }
        
    });


function GetTime(){
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = String(now.getUTCFullYear() + 1).padStart(2, '0');
    let weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let weekday = weekdays[now.getDay()];

    let formattedDate = `${weekday} ${day}.${month}`;
    let formattedFullDate = `${day}.${month}.${year}`;
    document.getElementById("DayMon").innerHTML = formattedDate;
    document.getElementById("LocalTime").innerHTML = hours + ":" + minutes;
}

function DefaultData(){
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear(); // убираем +1 и padStart
    
    let formattedFullDate = `${day}.${month}.${year}`; 
    let createFormattedFullDate = `${year}-${month}-${day}`; 
    
    document.getElementById("Date").innerHTML = formattedFullDate;
    document.getElementById("createData").value = formattedFullDate;
}

DefaultData();

GetTime();
setInterval(GetTime, 60000);


document.getElementById("green").addEventListener("click", function(){
   document.getElementById("cirk").classList = "easy";
});
document.getElementById("orange").addEventListener("click", function(){
   document.getElementById("cirk").classList = "Normal";
});
document.getElementById("red").addEventListener("click", function(){
   document.getElementById("cirk").classList = "Hard";
});

document.getElementById("inputData").addEventListener("input", function(){
    let date = document.getElementById("inputData").value;
    let formatted = date.split('-').reverse().join('.');
    document.getElementById("Date").innerHTML = formatted;
});

document.getElementById("btnSaveFilter").addEventListener("click", function(){
    if(document.getElementById("FilterBoard").style.height !== "4.5vw"){
        document.getElementById("FilterBoard").style.height = "4.5vw";
        document.getElementById("btnSaveFilter").classList = "btnSaveFilterDel";
    }
    else{
        document.getElementById("FilterBoard").style.height = "13vw";
        document.getElementById("btnSaveFilter").classList = "btnSaveFilterSave";
    }
});

document.getElementById("NewTask").addEventListener("click", function(){
    document.getElementById("Line").style.left = "-92vw";
});

document.getElementById("Main").addEventListener("click", function(){
    document.getElementById("Line").style.left = "0vw";
});

document.getElementById("createHard").addEventListener("click", function(){
   document.getElementById("createText").classList = "createTextHard";
});

document.getElementById("createNormak").addEventListener("click", function(){
   document.getElementById("createText").classList = "createTextNormal";
});

document.getElementById("createEasy").addEventListener("click", function(){
   document.getElementById("createText").classList = "createTextEasy";
});


document.getElementById("createBtn").addEventListener("click", function(){
   if(document.getElementById("taskName").value !== "" && document.getElementById("textDesc").value !== ""){
        let taskContainer = document.createElement("article");
        taskContainer.classList = "taskContainer";
        let taskName = document.createElement("p");
        taskName.classList = "taskTitle";
        taskName.innerHTML = document.getElementById("taskName").value;
        //let textDesc = document.createElement("p");
        //textDesc.classList = "taskDesc";
        //textDesc.innerHTML = document.getElementById("textDesc").value;
        let taskData = document.createElement("p");
        taskData.classList = "taskData";
        taskData.innerHTML = document.getElementById("createData").value;
        let Indicator = document.createElement("div");
        Indicator.classList = "Indicator";
        Indicator.style.backgroundColor = window.getComputedStyle(document.getElementById("createText")).backgroundColor;
        taskContainer.appendChild(taskName);
        taskContainer.appendChild(taskData);
        taskContainer.appendChild(Indicator);
        document.getElementById("TasksContainer").appendChild(taskContainer);
        document.getElementById("Line").style.left = "0vw";
   }
});

document.getElementById("Setting").addEventListener("click", function () {
        document.getElementById("Line").style.left = "-184vw";
});

});