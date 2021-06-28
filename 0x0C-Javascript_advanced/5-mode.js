function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green)
    let darkMode = changeMode(12, bold, capitalize, black, white)
    let screamMode = changeMode(12, normal, lowercase, white, black)

    var newPara = document.createElement("p");
    var paraText = document.createTextNode("Welcome Holberton!");
    newPara.appendChild(paraText);

    var spookyButton = document.createElement('button');
    var spookyText = document.createTextNode("Spooky");
    spookyButton.appendChild(spookyText);
    spookyButton.onclick = spooky;

    var darkButton = document.createElement('button');
    var darkText = document.createTextNode("Dark mode");
    darkButton.appendChild(darkText);
    darkButton.onclick = darkMode;

    var screamButton = document.createElement('button');
    var screamText = document.createTextNode("Scream mode");
    screamButton.appendChild(screamText);
    screamButton.onclick = screamMode;

    document.body.appendChild(newPara);
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkButton);
    document.body.appendChild(screamButton);
};
    
main();