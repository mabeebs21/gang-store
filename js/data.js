const categoryNames = {
    weapons: "🔫 Weapons",
    ammo: "📦 Ammunition",
    vest: "🦺 Armor",
    drugs: "💊 Drugs",
    attachments: "⚙️ Attachments"
  }
  
  const items = [
    // ===== CLASS 1 =====
    { id: 1, label: "Pistol .50", price: 9100, category: "weapons", weaponClass: "Class 1", img: "assets/weapons/WEAPON_pistol50.png" },
    { id: 2, label: "Ceramic Pistol", price: 26000, category: "weapons", weaponClass: "Class 1", img: "assets/weapons/WEAPON_ceramicpistol.png" },
    { id: 3, label: "X17", price: 25000, category: "weapons", weaponClass: "Class 1", img: "assets/weapons/WEAPON_pistolxm3.png" },
    { id: 4, label: "Machine Pistol", price: 20000, category: "weapons", weaponClass: "Class 1", img: "assets/weapons/WEAPON_machinepistol.png" },
  
    // ===== CLASS 2 =====
    { id: 5, label: "Mini SMG", price: 23000, category: "weapons", weaponClass: "Class 2", img: "assets/weapons/WEAPON_minismg.png" },
    { id: 6, label: "Micro SMG", price: 29900, category: "weapons", weaponClass: "Class 2", img: "assets/weapons/WEAPON_microsmg.png" },
    { id: 7, label: "SMG", price: 30000, category: "weapons", weaponClass: "Class 2", img: "assets/weapons/WEAPON_smg.png" },
    { id: 8, label: "Navy Revolver", price: 50000, category: "weapons", weaponClass: "Class 2", img: "assets/weapons/WEAPON_navyrevolver.png" },
    { id: 9, label: "KVR", price: 85000, category: "weapons", weaponClass: "Class 2", img: "assets/weapons/WEAPON_kvr.png" },
  
    // ===== CLASS 3 =====
    { id: 10, label: "Assault Rifle", price: 150000, category: "weapons", weaponClass: "Class 3", img: "assets/weapons/WEAPON_assaultrifle.png" },
    { id: 11, label: "Carbine Rifle", price: 4700, category: "weapons", weaponClass: "Class 3", img: "assets/weapons/WEAPON_carbinerifle.png" },
    { id: 12, label: "Pump Shotgun", price: 5000, category: "weapons", weaponClass: "Class 3", img: "assets/weapons/WEAPON_pumpshotgun.png" },
    { id: 13, label: "Dragon", price: 8000, category: "weapons", weaponClass: "Class 3", img: "assets/weapons/dragon.png" },
  
    // ===== CLASS 4 =====
    { id: 14, label: "Ammo-50", price: 1300, category: "ammo", img: "assets/ammo/ammo-50.png" },
    { id: 15, label: "Ammo-9", price: 2600, category: "ammo", img: "assets/ammo/ammo-9.png" },
    { id: 16, label: "Ammo-44", price: 4000, category: "ammo", img: "assets/ammo/ammo-44.png" },
    { id: 17, label: "Ammo-45", price: 4000, category: "ammo", img: "assets/ammo/ammo-45.png" },
    { id: 18, label: "Ammo-rifle2", price: 5000, category: "ammo", img: "assets/ammo/ammo-rifle2.png" },
  
    // ===== NON-WEAPON =====
    { id: 20, label: "Weed", price: 500, category: "drugs", img: "assets/drugs/weed.png" },
    { id: 21, label: "Meth", price: 2500, category: "drugs", img: "assets/drugs/meth.png" },
    { id: 22, label: "Vest", price: 2000, category: "vest", img: "assets/vest/armour.png" }
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
  