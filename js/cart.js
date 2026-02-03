const WEBHOOK_URL = "https://discord.com/api/webhooks/1468241163906449501/9mVQbg_f_3kvXo5rgm70swlMNXuQXu30crsYEbHcRPOSerZBEfTaK_8ThqD3HrPZbT-D"

let cart = {}

function addToCart(id) {
  if (cart[id]) {
    cart[id].qty++
  } else {
    const item = items.find(i => i.id === id)
    cart[id] = {
      ...item,
      qty: 1
    }
  }
  renderCart()
}

function increase(id) {
  cart[id].qty++
  renderCart()
}

function decrease(id) {
  cart[id].qty--
  if (cart[id].qty <= 0) {
    delete cart[id]
  }
  renderCart()
}

function renderCart() {
  const cartList = document.getElementById("cartList")
  const totalEl = document.getElementById("total")

  cartList.innerHTML = ""
  let total = 0

  Object.values(cart).forEach(i => {
    total += i.price * i.qty
    cartList.innerHTML += `
      <li>
        ${i.label} ($${i.price}) x <b>${i.qty}</b>
        <button onclick="increase(${i.id})">+</button>
        <button onclick="decrease(${i.id})">-</button>
      </li>
    `
  })

  totalEl.innerText = total
}

async function submitOrder() {
  const icName = document.getElementById("icName").value
  if (!icName || Object.keys(cart).length === 0) {
    alert("Isi nama IC & pilih item!")
    return
  }

  let total = 0
  let itemText = ""

  Object.values(cart).forEach(i => {
    total += i.price * i.qty
    itemText += `- ${i.label} x${i.qty} ($${i.price * i.qty})\n`
  })

  const payload = {
    content:
`🔴 **NEW GANG ORDER**

👤 IC Name: **${icName}**

📦 Items:
${itemText}

💰 Total: **$${total}**
🕒 Time: ${new Date().toLocaleString()}`
  }

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })

  alert("Order terkirim!")
  cart = {}
  renderCart()
}