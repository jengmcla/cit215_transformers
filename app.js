var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for (let i = 0; i < chrs.length; i++) {
    // creates container
    let ele = document.createElement("div");
    ele.classList.add("character");
    document.body.appendChild(ele);

    // creates image
    let img = document.createElement("img");

    // objects
    let nameEle = document.createElement("div");
    nameEle.innerHTML = "Name: " + chrs[i].name;

    let classEle = document.createElement("div");
    classEle.innerHTML = "Class: " + chrs[i].class.toUpperCase();

    let vehicleEle = document.createElement("div");
    vehicleEle.innerHTML = "Vehicle: " + chrs[i].vehicle;

    // if decepticon, add class decepticon & image
    // else, add class autobot & image
    if ( chrs[i].afl === "decepticon" ) {
        ele.classList.add("decepticon");
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    } else {
        ele.classList.add("autobot");
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    }

    // changes the color of vehicles depending on type
    if ( chrs[i].vehicle === "truck" ) {
        vehicleEle.style.color = "blue";
    } else if ( chrs[i].vehicle === "tank" ) {
        vehicleEle.style.color = "green";
    } else if ( chrs[i].vehicle === "car" ) {
        vehicleEle.style.color = "gold";
    } else if ( chrs[i].vehicle === "plane" ) {
        vehicleEle.style.color = "white";
    }

    // appends everything inside ele
    ele.appendChild(img);
    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);
}


// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white

