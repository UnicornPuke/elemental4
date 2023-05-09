const colors = [
    "rgba(186, 45, 11, .25)",
    "rgba(220, 104, 36, .25)",
    "rgba(253, 163, 61, .25)",
    "rgba(255, 239, 66, .25)",
    "rgba(193, 236, 79, .25)",
    "rgba(130, 233, 92, .25)",
    "rgba(111, 220, 235, .25)",
    "rgba(0, 0, 0, .25)",
    "rgba(85, 99, 255, .25)",
    "rgba(182, 99, 255, .25)",
    "rgba(255, 112, 229, .25)",
    "rgba(255, 255, 255, .25)"
]

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

hi = getCookie("elements");

if (hi == "") {
    setCookie("expr", "", 365);
    setCookie("elements", "Air|Earth|Fire|Water", 365);
    setCookie("elecolors", `${colors[6]}|${colors[1]}|${colors[0]}|${colors[8]}`, 365);
    console.log("Elements logged: Air, Earth, Fire, Water; Expressions: None");
}
else {
}

function sort() {
    var target = "ibar0";
    var target2 = "bar0";
    let elements = getCookie("elements").split("|");
    let elecolors = getCookie("elecolors").split("|");
    document.getElementById(target).innerHTML = "";
    document.getElementById("ibar1").innerHTML = "";
    document.getElementById("ibar2").innerHTML = "";
    document.getElementById("ibar3").innerHTML = "";
    document.getElementById("ibar4").innerHTML = "";
    document.getElementById("ibar5").innerHTML = "";
    document.getElementById("ibar6").innerHTML = "";
    document.getElementById("ibar7").innerHTML = "";
    document.getElementById("ibar8").innerHTML = "";
    document.getElementById("ibar9").innerHTML = "";
    document.getElementById("ibar10").innerHTML = "";
    document.getElementById("ibar11").innerHTML = "";
    var thing = 0;
    var hi = []
    while (thing < elements.length) {
        var current_color = elecolors[thing];
        var current_element = elements[thing];
        if (current_color == colors[0]) {
            target = "ibar0";
            target2 = "bar0";
        }
        else if (current_color == colors[1]) {
            target = "ibar1";
            target2 = "bar1";
        }
        else if (current_color == colors[2]) {
            target = "ibar2";
            target2 = "bar2";
        }
        else if (current_color == colors[3]) {
            target = "ibar3";
            target2 = "bar3";
        }
        else if (current_color == colors[4]) {
            target = "ibar4";
            target2 = "bar4";
        }
        else if (current_color == colors[5]) {
            target = "ibar5";
            target2 = "bar5";
        }
        else if (current_color == colors[6]) {
            target = "ibar6";
            target2 = "bar6";
        }
        else if (current_color == colors[7]) {
            target = "ibar7";
            target2 = "bar7";
        }
        else if (current_color == colors[8]) {
            target = "ibar8";
            target2 = "bar8";
        }
        else if (current_color == colors[9]) {
            target = "ibar9";
            target2 = "bar9";
        }
        else if (current_color == colors[10]) {
            target = "ibar10";
            target2 = "bar10";
        }
        else if (current_color == colors[11]) {
            target = "ibar11";
            target2 = "bar11";
        }
        elediv = `<div id="h${thing}" class="elediv" draggable="true" ondragstart="drag(event)" style="background: ${current_color}; overflow: scroll;"><span style="width: auto;display: inline-block; vertical-align: middle; line-height: normal; word-wrap: break-word;">${current_element}</span></div>`;
        document.getElementById(target).innerHTML = document.getElementById(target).innerHTML.concat(elediv);
        if (target in hi) {}
        else {
            hi.push(target);
        }
        thing++;
    }
    console.log(`Finished sorting; ${thing} elements sorted`)
}

sort();

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

bccolor = getCookie("bccolor");

if (bccolor == "") {
    document.body.style.backgroundColor = choose(colors);
    setCookie("bccolor", document.body.style.backgroundColor, 365);
}
else {
    document.body.style.backgroundColor = bccolor;
}

function allowDrop(even) {
    even.preventDefault();
}

function drag(even) {
    even.dataTransfer.setData("text", even.target.id);
}

var element1, element2 = "";

function drop1(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    document.getElementById("interboxy1").innerHTML = document.getElementById(fetchData).outerHTML;
    document.getElementById(fetchData).id = `i${fetchData}`;
    element1 = document.getElementById(fetchData).innerText;
    sort();
    document.getElementById(fetchData).id = `i${fetchData}`;
    document.getElementById(fetchData).style.marginTop = "0";
    document.getElementById(fetchData).style.marginLeft = "0";
    document.getElementById(fetchData).id = `i${fetchData}`;
    document.getElementById(`i${fetchData}`).id = fetchData;
}

element1 = element1

function drop2(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    document.getElementById("interboxy2").innerHTML = document.getElementById(fetchData).outerHTML;
    document.getElementById(fetchData).id = `ii${fetchData}`;
    element2 = document.getElementById(fetchData).innerText;
    sort();
    document.getElementById(fetchData).id = `ii${fetchData}`;
    document.getElementById(fetchData).style.marginTop = "0";
    document.getElementById(fetchData).style.marginLeft = "0";
    document.getElementById(fetchData).id = `ii${fetchData}`;
    document.getElementById(`ii${fetchData}`).id = fetchData;
    document.getElementById(`ii${fetchData}`).draggable = false;
}

element2 = element2

function exprclick() {
    if (element1 == "" || element2 == "") {
        alert("You must choose two elements to combine.");
    }
    else {
        let expressions = getCookie("expr").split("|");
        let elements = getCookie("elements").split("|");
        let elecolors = getCookie("elecolors").split("|");
        if (expressions.includes(`${element1}+${element2}`)) {
            result = expressions[expressions.indexOf(`${element1}+${element2}`) + 1];
            current_color = elecolors[elements.indexOf(result)];
            current_element = elements[elements.indexOf(result)];
            document.getElementById("boxy3").innerHTML = `<div id="iiih${elements.indexOf(result)}" class="elediv" draggable="false" style="background: ${current_color}; overflow: scroll;"><span style="width: auto;display: inline-block; vertical-align: middle; line-height: normal; word-wrap: break-word;">${current_element}</span></div>`;
            document.getElementById(`iiih${elements.indexOf(result)}`).style.marginTop = "0";
            document.getElementById(`iiih${elements.indexOf(result)}`).style.marginLeft = "0";
            document.body.style.backgroundColor = current_color;
            setCookie("bccolor", current_color, 365);
            setTimeout(() => document.getElementById(`iiih${elements.indexOf(result)}`).style.animation = "byebye 1s", 8576)
            setTimeout(() => document.getElementById("boxy3").innerHTML = '<h1 style="margin-top: 0; text-align: center;">Mix!</h1>', 9570);
        }
        else if (expressions.includes(`${element2}+${element1}`)) {
            result = expressions[expressions.indexOf(`${element2}+${element1}`) + 1];
            current_color = elecolors[elements.indexOf(result)];
            current_element = elements[elements.indexOf(result)];
            document.getElementById("boxy3").innerHTML = `<div id="iiih${elements.indexOf(result)}" class="elediv" draggable="false" style="background: ${current_color}; overflow: scroll;"><span style="width: auto;display: inline-block; vertical-align: middle; line-height: normal; word-wrap: break-word;">${current_element}</span></div>`;
            document.getElementById(`iiih${elements.indexOf(result)}`).style.marginTop = "0";
            document.getElementById(`iiih${elements.indexOf(result)}`).style.marginLeft = "0";
            document.body.style.backgroundColor = current_color;
            setCookie("bccolor", current_color, 365);
            sleep(3000);
            document.getElementById(`iiih${elements.indexOf(result)}`).style.opacity = "0";
            document.getElementById("boxy3").innerHTML = '<h1 style="margin-top: 0; text-align: center;">Mix!</h1>';
        }
        else {
            document.getElementById("menu").style.animation = 'biggy 1s';
            document.getElementById("menu").style.width = "98vw";
            document.getElementById("menu").style.outlineWidth = "2px";
        }
    }
}

var select_color = colors[11];

function colorset(colorid) {
    select_color = colors[colorid];
    document.getElementById("elepreview").style.backgroundColor = select_color;
}

function changeprev() {
    document.getElementById("elepreview").innerHTML = `<span style="font-size: 3vh; width: auto;display: inline-block; vertical-align: middle; line-height: normal; word-wrap: break-word;">${document.getElementById("nameset").value}</span>`;
}

function newele() {
    if (document.getElementById("nameset").value == "") {
        alert("You must enter an element name.");
    }
    else {
        element1 = document.getElementById("boxy1").innerText
        element2 = document.getElementById("boxy2").innerText
        let elements = getCookie("elements").split("|");
        let elecolors = getCookie("elecolors").split("|");
        let expr = getCookie("expr").split("|");
        if (elements.includes(document.getElementById("nameset").value)) {
        }
        else {
            elecolors.push(select_color);
            elements.push(document.getElementById("nameset").value);
        }
        expr.push(`${element1}+${element2}`);
        expr.push(document.getElementById("nameset").value);
        setCookie("elements", elements.join("|"), 365);
        setCookie("elecolors", elecolors.join("|"), 365);
        setCookie("expr", expr.join("|"), 365);
        setCookie("bccolor", select_color, 365);
        document.body.style.backgroundColor = select_color;
        sort();
        document.getElementById("menu").style.animation = 'smally 1s';
        document.getElementById("menu").style.width = "0vw";
        document.getElementById("menu").style.outlineWidth = "0px";
    }
}
