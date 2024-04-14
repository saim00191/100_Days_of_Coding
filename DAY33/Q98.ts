//@ts-ignore

function dayUntilNewYear() {
    const today = new Date()
    const NewYear = new Date(today.getFullYear() + 1 ,0 )

    const difference = NewYear.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24))

    return days
}

console.log(dayUntilNewYear(), "Days Left Until New Year!");





