
function getNextBirthDay(day: number, month: number) {
    const today = new Date()
    const year = today.getFullYear()

    const BirthDay = new Date(year, month - 1, day)
    if (BirthDay < today) {
        BirthDay.setFullYear(year + 1)
    }
    return BirthDay
}

const NextBirthDay = getNextBirthDay(9, 10);

console.log("Next BirthDay is on : ", NextBirthDay.toLocaleDateString() );