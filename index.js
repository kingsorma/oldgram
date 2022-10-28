const firstpostEl = document.getElementById("firstpostel")
const firstpostheartEl = document.getElementById("firstpostheartel")
let firstpostlikecountEl = document.getElementById("firstpostlikecountel")
const secondpostEl = document.getElementById("secondpostel")
const secondpostheartEl = document.getElementById("secondpostheartel")
let secondpostlikecountEl = document.getElementById("secondpostlikecountel")
const thirdpostEl = document.getElementById("thirdpostel")
const thirdpostheartEl = document.getElementById("thirdpostheartel")
let thirdpostlikecountEl = document.getElementById("thirdpostlikecountel")
const fourthpostEl = document.getElementById("fourthpostel")
const fourthpostheartEl = document.getElementById("fourthpostheartel")
let fourthpostlikecountEl = document.getElementById("fourthpostlikecountel")

let firstpostLikes = 463
let secondpostLikes = 281
let thirdpostLikes = 152
let fourthpostLikes = 834

firstpostEl.addEventListener("dblclick", function() {
    firstpostLikes += 1
    firstpostlikecountEl.textContent = firstpostLikes
})

firstpostheartEl.addEventListener("click", function() {
    firstpostLikes += 1
    firstpostlikecountEl.textContent = firstpostLikes
})


secondpostEl.addEventListener("dblclick", function() {
    secondpostLikes += 1
    secondpostlikecountEl.textContent = secondpostLikes
})

secondpostheartEl.addEventListener("click", function() {
    secondpostLikes += 1
    secondpostlikecountEl.textContent = secondpostLikes
})


thirdpostEl.addEventListener("dblclick", function() {
    thirdpostLikes += 1
    thirdpostlikecountEl.textContent = thirdpostLikes
})

thirdpostheartEl.addEventListener("click", function() {
    thirdpostLikes += 1
    thirdpostlikecountEl.textContent = thirdpostLikes
})


fourthpostEl.addEventListener("dblclick", function() {
    fourthpostLikes += 1
    fourthpostlikecountEl.textContent = fourthpostLikes
})

fourthpostheartEl.addEventListener("click", function() {
    fourthpostLikes += 1
    fourthpostlikecountEl.textContent = fourthpostLikes
})