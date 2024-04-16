function evaluteGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("V.Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Fair");
            break;
        case "E":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
    }
}
evaluteGrade("B");
evaluteGrade("F");
evaluteGrade("G");
