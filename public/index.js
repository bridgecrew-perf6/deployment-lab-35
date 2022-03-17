
let quickActing = document.querySelector("#quick")
let longLasting = document.querySelector("#long")
let testBut = document.querySelector("#testBut")

const displayPotion = (evt) => {
    preventDefault()
    
}

const testButton = () => {
    // preventDefault()
    axios.get("/testbutton")
    console.log("trying to access something")
}

testBut.addEventListener("click", testButton)