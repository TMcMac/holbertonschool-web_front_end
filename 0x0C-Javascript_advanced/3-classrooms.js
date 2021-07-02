function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }
    let students = [];

    for (let i = 0; i < numbersOfStudents; i++) {
        let newSeat = studentSeat(i + 1);
        students.push(newSeat);
    }

    return students;
}
let classRoom = createClassRoom(10);