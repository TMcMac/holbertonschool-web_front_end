function createElement(data) {
    var newPara = document.createElement("p")
    var paraText = document.createTextNode(data)
    newPara.appendChild(paraText)
    document.body.appendChild(newPara)
}

function queryWikipedia(myCallback) {
    let wikiReq = new XMLHttpRequest()
    wikiReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
    wikiReq.onload = function() {
        myCallback(this.responseText);
    }
    wikiReq.send()
}

queryWikipedia(createElement)