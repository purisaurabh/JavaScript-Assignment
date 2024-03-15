// ●Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript

value = document.getElementsByTagName('p')
arrOfValue = Array.from(value)
arrOfValue.forEach((val) =>{
    val.innerHTML = "How’s the Josh?”"
})