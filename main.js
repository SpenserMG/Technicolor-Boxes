function random_color(tile) {
    // var x = Math.floor(Math.random() * 256); 
    // var y = Math.floor(Math.random() * 256); 
    // var z = Math.floor(Math.random() * 256); 
    var bgColor = "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)';
    tile.style.background = bgColor;
}

// random_color();

function addTile() {
    var tileContainer = document.getElementById("tile-container");
    var firstTile = tileContainer.firstElementChild;
    var clone = firstTile.cloneNode(true);
    tileContainer.append(clone);
}

function addTiles(totalTiles) {
    for (let index = 1; index < totalTiles; index++) {
        addTile();
    }
}

addTiles(100);

var options = {
    "default": {
        displayString: "---", func: () => {
            var tileC = document.getElementById("tile-container");
            tileC.className = "";
        }
    },

    // example of placing the function inside our hash table
    "blur": {
        displayString: "Blur",
        func: () => {
            var tileC = document.getElementById("tile-container");
            tileC.className = "blur";
            console.log("blurry")
        }
    },

    // example of calling a function to the hash table
    "shadow": {
        displayString: "Shadow",
        func: shadowTiles
    },

    "glow": {
        displayString: "Glow",
        func: glowTiles
    },
}

function populateMenu() {
    var selectMenu = document.getElementById("select-menu");
    for (var [value, obj] of Object.entries(options)) {
        var option = document.createElement("option");
        option.value = value;
        option.innerHTML = obj.displayString;
        selectMenu.appendChild(option);
    }
    selectMenu.addEventListener("change", (event) => {
        var value = event.target.value;
        var f = options[value].func;
        //f.call();
        f();
        //console.log(options[value]);
    })
}

populateMenu();

function shadowTiles() {
    // console.log("I'm the hi function");
    var tileC = document.getElementById("tile-container");
    tileC.className = "shadow";

}

function glowTiles() {
    var tileC = document.getElementById("tile-container");
    tileC.className = "glow";
}

// function blurTiles()
// {
//     // console.log("I'm the hello function");
//     var tileC = document.getElementById("tile-container");
//     tileC.className = "blur";
// }
