let entriesEl = document.getElementById("entries-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() + ":" + (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    let countStr = document.createElement("li")
    countStr.textContent = count + " ( " + currentTime + " )"
    entriesEl.appendChild(countStr)
    countEl.textContent = 0
    count = 0
}
