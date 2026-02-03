const log = document.getElementById("log")
const data = JSON.parse(localStorage.getItem("orders") || "[]")

data.forEach(o=>{
  log.innerHTML += `<p>${o.ic} - $${o.total}</p>`
})
