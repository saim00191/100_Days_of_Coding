

let fetchData = async () => {

    let url = "https://jsonplaceholder.typicode.com/posts/1"

    let DataFetch = await fetch(url)

    let fetchDataToJson = await DataFetch.json()

    console.log(fetchDataToJson);

}

console.log( "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
fetchData()






