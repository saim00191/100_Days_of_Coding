
// ReOpen The Interface And Use Cases

// interface reopening in TypeScript is a valuable technique for gradually building and extending interfaces
// as your project grows, promoting modularity and code organization. It enables you to create versatile,
// flexible, and consistent object structures.

interface Settings {
    font : boolean
}
interface Settings {
    construction : boolean
}
interface Settings {
    color : string
}

let Res: Settings = {
    font: false,
    construction: true,
    color : "white"
}

console.log(Res)
