var elsec = document.querySelector(".sec")
var elmin = document.querySelector(".min")
var elhours = document.querySelector(".hours")

setInterval(() => {

    var date = new Date()
    
    var sec = date.getSeconds()
    var min = date.getMinutes()
    var hour = date.getHours()

    elsec.style = `transform: rotate(${sec * 6}deg)`
    elmin.style = `transform: rotate(${min * 6}deg)`
    elhours.style = `transform: rotate(${hour * 30}deg)`
    
}, 1000);