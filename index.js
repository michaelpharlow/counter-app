let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() + ":" + (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    let countStr = count + " ( " + currentTime + " ) - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
