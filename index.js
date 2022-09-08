const inputs = document.querySelectorAll("input");
inputs.forEach(inp=>{
    inp.addEventListener("keydown",function (e) {
        console.log(e.key);
        console.log(/^[0-9]$/.test(e.key));
        if ((/[^a-zA-Z0-9]/.test(e.key))) {
            e.preventDefault()
            return ;
        } 
        else {
            
            if (inp.value.length >=1) {
                this.nextElementSibling?.focus()
            }
            if (e.key == "Backspace") {
                inp.value = null
                this.previousElementSibling?.focus()
            }
        }
    })
    
})
window.onload = function() {
    inputs[0].focus();
  }