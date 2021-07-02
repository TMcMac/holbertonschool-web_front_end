var roomDimensions = {
    width: 50,
    length: 100,
}

function getArea() {
    return roomDimensions.width * roomDimensions.length
}

let boundGetArea = getArea.bind(roomDimensions);
boundGetArea()