const categoryNames = {
    weapons: "🔫 Weapons",
    ammo: "📦 Ammunition",
    vest: "🦺 Armor",
    drugs: "💊 Drugs",
    attachments: "⚙️ Attachments"
  }
  
  const items = [
    // ===== class 1 =====
    { id: 1, label: "pistol .50", price: 9100, category: "weapons", weaponclass: "class 1", img: "assets/weapons/weapon_pistol50.png" },
    { id: 2, label: "ceramic pistol", price: 26000, category: "weapons", weaponclass: "class 1", img: "assets/weapons/weapon_ceramicpistol.png" },
    { id: 3, label: "x17", price: 25000, category: "weapons", weaponclass: "class 1", img: "assets/weapons/weapon_pistolxm3.png" },
    { id: 4, label: "machine pistol", price: 20000, category: "weapons", weaponclass: "class 1", img: "assets/weapons/weapon_machinepistol.png" },
  
    // ===== class 2 =====
    { id: 5, label: "mini smg", price: 23000, category: "weapons", weaponclass: "class 2", img: "assets/weapons/weapon_minismg.png" },
    { id: 6, label: "micro smg", price: 29900, category: "weapons", weaponclass: "class 2", img: "assets/weapons/weapon_microsmg.png" },
    { id: 7, label: "smg", price: 30000, category: "weapons", weaponclass: "class 2", img: "assets/weapons/weapon_smg.png" },
    { id: 8, label: "navy revolver", price: 50000, category: "weapons", weaponclass: "class 2", img: "assets/weapons/weapon_navyrevolver.png" },
    { id: 9, label: "kvr", price: 85000, category: "weapons", weaponclass: "class 2", img: "assets/weapons/weapon_kvr.png" },
  
    // ===== class 3 =====
    { id: 10, label: "assault rifle", price: 150000, category: "weapons", weaponclass: "class 3", img: "assets/weapons/weapon_assaultrifle.png" },
    { id: 11, label: "carbine rifle", price: 4700, category: "weapons", weaponclass: "class 3", img: "assets/weapons/weapon_carbinerifle.png" },
    { id: 12, label: "pump shotgun", price: 5000, category: "weapons", weaponclass: "class 3", img: "assets/weapons/weapon_pumpshotgun.png" },
    { id: 13, label: "dragon", price: 8000, category: "weapons", weaponclass: "class 3", img: "assets/weapons/dragon.png" },
  
    // ===== class 4 =====
    { id: 14, label: "ammo-50", price: 1300, category: "ammo", img: "assets/ammo/ammo-50.png" },
    { id: 15, label: "ammo-9", price: 2600, category: "ammo", img: "assets/ammo/ammo-9.png" },
    { id: 16, label: "ammo-44", price: 4000, category: "ammo", img: "assets/ammo/ammo-44.png" },
    { id: 17, label: "ammo-45", price: 4000, category: "ammo", img: "assets/ammo/ammo-45.png" },
    { id: 18, label: "ammo-rifle2", price: 5000, category: "ammo", img: "assets/ammo/ammo-rifle2.png" },
  
    // ===== non-weapon =====
    { id: 20, label: "weed", price: 500, category: "drugs", img: "assets/drugs/weed.png" },
    { id: 21, label: "meth", price: 2500, category: "drugs", img: "assets/drugs/meth.png" },
    { id: 22, label: "vest", price: 2000, category: "vest", img: "assets/vest/armour.png" }
  ];
  
  
  const itemList = document.getElementById("itemList")
  
  const grouped = items.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item]
    return acc
  }, {})
  
  itemList.innerHTML = Object.keys(grouped).map(category => `
    <section class="category-wrapper" id="${category}">
      <h2 class="category-title">${categoryNames[category]}</h2>
      <div class="items">
        ${grouped[category].map(item => `
          <div class="item">
            <img src="${item.img}">
            <h3>${item.label}</h3>
            <p>$${item.price.toLocaleString()}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
          </div>
        `).join("")}
      </div>
    </section>
  `).join("")
  
