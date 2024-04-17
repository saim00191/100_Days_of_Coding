function logUntilVowels(str: string) {
    
    const vowels = "aeiouAEIOU"
    
    for(let characters of str){
      if(vowels.includes(characters)){
        console.log(`First vowels Found : ${characters}`)
        break;
      }
      console.log(str)
    }
}
  
  logUntilVowels("Hollo World")