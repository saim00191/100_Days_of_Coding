
interface BookDetails {
    title : string
    author : string
    publishedYear : number
}

const Book : BookDetails = {
    title : "Ilm ul Iqtisad",
    author : "Allama Iqbal",
    publishedYear : 1903
}
console.log(`Book Information : ${Book.title} by ${Book.author} published in ${Book.publishedYear}`)