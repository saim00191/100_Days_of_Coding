function studentsGrades(TotalMarks) {
    if (TotalMarks >= 90) {
        return "Grade A";
    }
    else if (TotalMarks >= 80) {
        return "Grade B";
    }
    else if (TotalMarks >= 70) {
        return "Grade C";
    }
    else if (TotalMarks >= 60) {
        return "Grade D";
    }
    else if (TotalMarks >= 50) {
        return "Grade E";
    }
    else {
        return "Fail.";
    }
}
console.log(studentsGrades(66)); // Grade D
console.log(studentsGrades(75)); // Grade C
console.log(studentsGrades(33)); // Fail.
