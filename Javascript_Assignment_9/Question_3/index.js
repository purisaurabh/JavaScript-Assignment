btn = document.createElement("button")
btn.innerHTML = "Changeto10X"
document.getElementById("owner").appendChild(btn)
btn.addEventListener('click', function () {
    document.querySelector('video').playbackRate = 10
})