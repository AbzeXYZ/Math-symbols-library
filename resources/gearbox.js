const buttons = document.querySelectorAll("button");
const textarea = document.getElementById("thecopyingzone");
const input = document.getElementById("text");
const upper = "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻ¹²³⁴⁵⁶⁷⁸⁹⁰⁻⁺˙⸍⁼⁽⁾";
const lower = "ₐᵦcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz₁₂₃₄₅₆₇₈₉₀₋₊.⸝₌₍₎";
const normal = "abcdefghijklmnopqrstuvwxyz1234567890-+∙/=()";
textarea.style.display = "none";

function replace(letter, mode){
    if(normal.includes(letter)){
        let index = normal.indexOf(letter);
        if(mode == 0){
           return(upper[index]);
        } else {
            return(lower[index]);
        }
    } else {
        return(letter);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if(button.id != "up" && button.id != "down"){
            textarea.style.display = "block";
            textarea.value = button.innerText;
            textarea.select();
            document.execCommand("copy");
            textarea.style.display = "none";
        } else if(button.id == "up"){
            let text = input.value;
            let output = "";
            for(let i = 0; i < text.length; i++){
                output += replace(text[i], 0);
            }
            input.value = output;
            input.select();
            document.execCommand("copy");
        } else {
            let text = input.value;
            let output = "";
            for(let i = 0; i < text.length; i++){
                output += replace(text[i], 1);
            }
            input.value = output;
            input.select();
            document.execCommand("copy");
        }
    });
  });