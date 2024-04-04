let Languages = {
    languages: ["TypeScript", "Python", "C++"],
    Frameworks: ["Pyramid", "NestJs", "POCO"],
    tools : ["Jupyter Notebook","Git","Docker"]
}

let { languages, Frameworks, tools } = Languages

console.log(`Language : ${languages[1]} , Frameworks : ${Frameworks[0]} , tools : ${tools[0]}`);