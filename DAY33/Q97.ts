//@ts-ignore
function getCurrentDate()  {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0");
    const Month = String(now.getMonth() + 1).padStart(2, "0")
    const Year = now.getFullYear();

    return `${day}-${Month}-${Year}`
}

console.log("Current Date : ",getCurrentDate());

