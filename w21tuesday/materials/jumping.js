function jumping_init() {
    // TODO: Find classes .jumping
    let text = document.querySelectorAll('.jumping');

        for (let i = 0; i < text.length; i++) {
            let characters = text[i].innerHTML.split("");
        
            // create a span for every letter in the textContent
            characters.forEach(createSpan);

            // replace the content with these spans
            text[i].innerHTML = characters.join("");

            // make sure every span has a style animation-delay of 0.05s more than the last one!
            

        }    
}
function createSpan(value,index,array){
    let letter = array[index];
        if (letter !== " "){
        letter =  '<span>' + letter + '</span>'; 
        array[index] =  letter ;  
        } 
}