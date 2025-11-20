const products = [
  {
    "id": 1,
    "title": "Air Jordan 4",
    "brand": "Jordan",
    "cat": "high-tops",
    "price": 6253,
    "img": "https://images.unsplash.com/photo-1656335362192-2bc9051b1824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFuJTIwNHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    "id": 2,
    "title": "Nike FuelCell Pro",
    "brand": "Nike",
    "cat": "collab",
    "price": 6329,
    "img": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRYpQVS6oDNnB9CSO2HzQN1F012gTAsrezbMM77YWX1W80aY-X_S5_SKKu-2N6JUnjLqNGeGZIGphRHJLPIpZWDzM5O79KGSD8WFWiEzDsH0OkVBfMRF-1"
  },
  {
    "id": 3,
    "title": "Air Jordan 1 Mid Men's",
    "brand": "Vans",
    "cat": "collab",
    "price": 11495,
    "img": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTojkVKbOutBDW8RHTxFEwI7HkydyUF1vOQ4GGn53oMG68xYrQHeM7DAQjGDW9O6-7-u7-6zAX2h_O7QgPmLw0KGOodcyj9r13UuvuXg4Tz3J3Pn6IRYCGm0OfGC9218zQG_z2eft4Kx6g&usqp=CAc"
  },
  {
    "id": 4,
    "title": "New Balance Air Max 350",
    "brand": "New Balance",
    "cat": "high-tops",
    "price": 19642,
    "img": "https://www.mrsneaker.com/cdn/shop/files/DSC_7280.jpg?crop=center&height=1200&v=1754912758&width=1200"
  },
  {
    "id": 5,
    "title": "Reebok Yeezy Boost High",
    "brand": "Reebok",
    "cat": "high-tops",
    "price": 10675,
    "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTuDmbeyDNXA2CLenYyK-LsL7t7Gs_6EWs2-BidHkeEu74kfjPtIgkUM1pGosfLF0dBTmiKRrpHOSeCaKe_0Z8ktLTlg4GxDXnwffPU-toXfjTTO5p9D3FSA"
  },
  {
    "id": 6,
    "title": "New Balance - Fuelcell SuperComp Elite V5",
    "brand": "New Balance",
    "cat": "low-tops",
    "price": 15202,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv-QPLt-vKXPE6yY0NqvXkNH01-MbTzyX3b0jIZPmWLxc64dCe-nML2-SNmH3N_Ywgow8Wc67Yx5nWxTjLlF0IjMteHY6UGRPYD6SaqCA"
  },
  {
    "id": 7,
    "title": "Nike Dunk Low Retro",
    "brand": "Nike",
    "cat": "low-tops",
    "price": 14885,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTV3QCVxPnMQNYfhZ8fNwcJ8IQPxqnYJd1Um6TGxOmOXB2oax4tSaO3vXsxPuBRWnevNzVEJQxjCxXGmbFn-9Y1GZIef3XqXfiWQHwVVCgqDamitda2GmgaXw"
  },
  {
    "id": 8,
    "title": "Puma RS-X3 Olympic",
    "brand": "Nike",
    "cat": "collab",
    "price": 11351,
    "img": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSN49E4PuZ9Gi7oPAI8PkrRpXq3vlLvjirfwbRyUPSIs3ZTFyjP2kLruDa3RN4PG0r0a8zSFjjtQFpkzjR6AgBepL59aESgWzYDyGf-iD3sTtRyAX28EiIj"
  },
  {
    "id": 9,
    "title": "Converse All Star Runner",
    "brand": "Converse",
    "cat": "collab",
    "price": 10845,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNvnZ0q-hEuF2e2QZ55Wa8RiWCDoiaN8RedxgP3tAiVpkI5pLzwfdPX7rnJZ0GrP-r7-jNn1fu0fdDWJqlb6g1teed5Fq1mlpHPWneHZjQhtPBTysnAGI2B54cqh2F37Psht33OZjABGE&usqp=CAc"
  },
  {
    "id": 10,
    "title": "Jordan 4 Retro Sb Pine Green",
    "brand": "Jordan",
    "cat": "collab",
    "price": 14097,
    "img": "https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202421-jo4resbpigr_photo5.jpeg"
  },
  {
    "id": 11,
    "title": "Reebok - Nano 9",
    "brand": "Adidas",
    "cat": "low-tops",
    "price": 19674,
    "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-bnrGN9J66k6UJjisPb6kr5GMw1_r1mYqzARPQ74t_GOuWRHnn6l7dZM_dCCudpB2b0bNLTmaE97KIZMHzTVVs7eepMT_VtKTQ1LE2TpU"
  },
  {
    "id": 12,
    "title": "New Balance Propel v5 FuelCell",
    "brand": "New Balance",
    "cat": "collab",
    "price": 7891,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRG_amwds9FEqLjPGh73pywqj0J5M1PKuC36qhCg-gAbiV2xRv9uVv2wkCXj5m3P1OIW5Y0scHTczMAbGRjNRSEJKwmFi7wkbhSUybsBZxJ8dlJlKcGUFY5zA"
  },
  {
    "id": 13,
    "title": "Reebok Elitestride Wish M Casual Sneakers",
    "brand": "Reebok",
    "cat": "low-tops",
    "price": 1982,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTE5ZhlKTstQs6d5H8zODlsN4Pxq4EWhi_0HdzkPsKIQrkIoDAowoeJrCY856jMWJuScqULtWYRbOwarU87HYDqH17g4pvQa58FZ3S7ec0puauVIAYG-4sYA"
  },
  {
    "id": 14,
    "title": "Vans Premium Old Skool Shoes",
    "brand": "Vans",
    "cat": "collab",
    "price": 10252,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDAPb7q7DaOqhUA9iMTduI1gLaq5iFFfxkVq1VzTKtPz0hPrPgsrLLNb3ESsnch2cKPtZVHW19R90VykuMS-8r4HmWH2TpyMGPiwDY-Z_twEt6vqDtHJLN"
  },
  {
    "id": 15,
    "title": "New Balance Men's BB550 Sneakers",
    "brand": "Nike",
    "cat": "low-tops",
    "price": 8699,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfluAGu1tgOfwb4t9Y2fFDcpMHXJNUcN6PxISxC4hkBprn5rJgm7Ms6Desr9sF-xNUbz-PxnVTnREBH97EKSVRzpeyEjn1CuF4CA0cyUOc3hTv_23DQV6L"
  },
  {
    "id": 16,
    "title": "Puma Palermo Lth Sneakers",
    "brand": "Puma",
    "cat": "collab",
    "price": 6999,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAWg22HJ1iweHETGq5PLVm_RU0mK1j3a3_7K2bqQ0J1M63FLgr55X19xWkPcO5PebFRfdGhp9rj4tFbVMtu61CWzpHNpj8A4-zG-k05k_AKJWr-3nMBH6RkoM"
  },
  {
    "id": 17,
    "title": "adidas Men Forum Low CL Casual Sneakers",
    "brand": "Converse",
    "cat": "low-tops",
    "price": 6489,
    "img": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxLwFiosRdhDQBgp8er_eMNDH6gf_pnlgBhtnUI4Bb0VXHXmTgTqRnXtcinQnmie8KCO-wdcyJ4Lt3EzymNlxBT8yrAMYLPMgQh-uSa35Jp7rXKNxL5aUH"
  },
  {
    "id": 18,
    "title": "DROP STEP LOW 2.0",
    "brand": "Adidas",
    "cat": "collab",
    "price": 11295,
    "img": "https://www.superkicks.in/cdn/shop/files/1_925327fd-da6c-4698-b051-c56f7b9d4594.png?v=1757085620&width=493"
  },
  {
    "id": 19,
    "title": "New Balance Unisex CT300 Sneakers",
    "brand": "New Balance",
    "cat": "low-tops",
    "price": 5091,
    "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQW-oAe5JSF75CEV9bZCkrlFF2CiAMLc3Oo-UI2pG9kjxTDDK0yLWvhGTmQlXEj62yuWqCxlm51ciHrOjLitWBnKFirz5IAXh5M9AzHPRlM0BhwQ2tyWDtm"
  },
  {
    "id": 20,
    "title": "adidas Originals Superstar II",
    "brand": "Adidas",
    "cat": "collab",
    "price": 9999,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaRs9Jct6H5JRz0BD5brHWA5jhY-KKr5PI8wLuj-bF32c7clagQOxKVHM9pqNx4J0epja-nBMwWw_OWTMed3-qI4RtZVwsedM6DFCIdQaT3wNLls-8EWvv"
  },
  {
    "id": 21,
    "title": "Reebok Courtswift Effort Sneakers",
    "brand": "Reebok",
    "cat": "low-tops",
    "price": 2399,
    "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuQKxYrdlrVM36ZeHOzmpqcj1K1dfC4dYzJsvAJdwEakucq4A-LWn6CUlvXxk8YDWrTIsJwveeQRBzJZXHVjYh0aVOicqTFxB49LFmgBT0EJkdgFb07OYh"
  },
  {
    "id": 22,
    "title": "Men's Jordan Air 1 Mid",
    "brand": "Jordan",
    "cat": "high-tops",
    "price": 11660,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_BneoVpRRn5R2mBlVUaNdDzfIVLsFF6NCCbSsDANsQBU50AlrCvmk---wYXHlsEM_rW6mFzGrOn1pH3QgOtzvxucwhBRRRHleGcwL03XR2qcHKcOHoZcmeg"
  },
  {
    "id": 23,
    "title": "SPEEDCAT ELEVATED",
    "brand": "Puma",
    "cat": "low-tops",
    "price": 8186,
    "img": "https://www.superkicks.in/cdn/shop/files/4_4f5478c6-6cdf-4ddb-a24f-b81af4641574.png?v=1762930951&width=720"
  },
  {
    "id": 24,
    "title": "Vans Authentic Platform",
    "brand": "Vans",
    "cat": "low-tops",
    "price": 12388,
    "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJb1eaYz8skFao8q8esxK5J3_GoKy4sO28-m82oloB_FkSLDSFZ3dlb1gixKOv4BdnFVNrRrDEVzOX5vIouFvM9hwdkE9JS3i8YK0MKfA6gHbl-31aDl66st8"
  },
  {
    "id": 25,
    "title": "New Balance 880 V15 Fresh Foam X",
    "brand": "New Balance",
    "cat": "collab",
    "price": 7409,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZtdWXunIFUYCfUQ4zRF6nphKaJW1tiE_2G2i-V1KCjrUJCCwzbigJlO7a2RbDiePmoRuLJZdCZwkX89eCiWtb3KKd9ifyNSkD25vazExMOaJClDCpZcoL"
  },
  {
    "id": 26,
    "title": "Converse Men's Pro Blaze V2 Mid Top Sneakers",
    "brand": "Converse",
    "cat": "high-tops",
    "price": 4500,
    "img": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/7/57351baA09511C_3.jpg?rnd=20200526195200&tr=w-256"
  },
  {
    "id": 27,
    "title": "New Balance - 2002RX ",
    "brand": "New Balance",
    "cat": "collab",
    "price": 18228,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT29H7_6mHwG5pJvvP_S9_AySpoaFtMbnryw_euZ-ySzmGy5wh2ujvWsXfBCIQpuSyPkJqe3wn3hhOR5czNEaosXsJNM45wCwIDaaCt04rbNRFCvwNfi-0I6bU"
  },
  {
    "id": 28,
    "title": "Yeezy Boost 350 V2 Beluga Reflective ",
    "brand": "Converse",
    "cat": "low-tops",
    "price": 17986,
    "img": "https://image.goat.com/attachments/product_template_additional_pictures/images/064/334/468/medium/848748_01.jpg.jpeg"
  },
  {
    "id": 29,
    "title": "Converse All Stars Ox Black Unisex Trainers",
    "brand": "Converse",
    "cat": "low-tops",
    "price": 13583,
    "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlcsAAEZcWRcuLSfXtHR1bAbRTVa6H3pFDq_-98uW8ryAX5KbfiXP3hIqHMhCkS4jPpUuAjHQl-CGwH8DNviLRoQ8EjJec9rInHE91BWL_-RC4iKKPPTJEcA"
  },
  {
    "id": 30,
    "title": "PUMA RS-X Efekt Premium Athletics Sneakers",
    "brand": "Puma",
    "cat": "collab",
    "price": 4328,
    "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTL-HtqV7X9CckNnuPOmYTEsGc-H3hjJXQniK1ZU_L4CVvDJBwC3C1NHA2F8m8X7laZYcfvgUz4lNb1nbxIc4HWPDASITBj0xzmRPBooPQqfbJk-mu6UgDGDA"
  },
  
  
];
  const productsEl = document.getElementById('products');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const cartBtn = document.getElementById('cartBtn');
  let cartCount = 0;
  
  function render(list){
    productsEl.innerHTML = '';
    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="title">${p.title}</div>
        <div class="price">₹${p.price.toLocaleString()}</div>
        <div class="row">
          <button data-id="${p.id}" class="add">Add to cart</button>
          <button data-id="${p.id}" class="view">Quick View</button>
        </div>
      `;
      productsEl.appendChild(card);
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 100);
    });
  }
  
  // ========================
  // 🧠 Filters
  // ========================
  function applyFilters(){
    const q = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    const price = priceFilter.value;
    let out = products.filter(p => p.title.toLowerCase().includes(q));
    if(cat !== 'all') out = out.filter(p => p.cat === cat);
    if(price === 'under-10000') out = out.filter(p => p.price < 10000);
    if(price === '10000-20000') out = out.filter(p => p.price >= 10000 && p.price <= 20000);
    render(out);
  }
  
  // ========================
  // 🪟 Modal (Quick View)
  // ========================
  document.addEventListener('click', (e) => {
    if(e.target.matches('.view')){
      const id = +e.target.dataset.id;
      const p = products.find(x => x.id === id);
      openModal(`<h2>${p.title}</h2><img src="${p.img}" style="width:100%;height:auto"/><p>Price: ₹${p.price.toLocaleString()}</p>`);
    }
  });
  
  function openModal(html){
    document.getElementById('modalContent').innerHTML = html;
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
  
  document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  });
  
  // ========================
  // 🔍 Search & Filters Events
  // ========================
  searchInput.addEventListener('input', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);
  priceFilter.addEventListener('change', applyFilters);
  render(products);
  
  // ========================
  // 🛒 Cart Button Counter
  // ========================
  document.addEventListener('click', (e) => {
    if(e.target.matches('.add')){
      cartCount += 1;
      cartBtn.textContent = `Cart (${cartCount})`;
      showToast('Added to cart 🛒');
    }
  });
  
  // ========================
  // 🧭 Scroll "Shop Now"
  // ========================
  document.getElementById('shopNow').addEventListener('click', () => {
    const section = document.getElementById('products');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  // ========================
  // 🍞 Toast Notifications
  // ========================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = 'var(--accent)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 50);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 2000);
    setTimeout(() => { toast.remove(); }, 2400);
  }
  
  // ========================
  // ❤️ Wishlist Feature
  // ========================
  let wishlist = [];
  document.addEventListener('click', (e) => {
    if(e.target.matches('.title')) {
      const id = +e.target.closest('.card').querySelector('.add').dataset.id;
      if(!wishlist.includes(id)) {
        wishlist.push(id);
        showToast('Added to wishlist ❤️');
      } else {
        showToast('Already in wishlist');
      }
    }
  });
  
  // ========================
  // 🛒 Enhanced Cart Feature
  // ========================
  let cart = [];
  
  function updateCartUI() {
    const cartPanel = document.getElementById("cartPanel");
    const cartItemsEl = document.getElementById("cartItems");
    const cartTotalEl = document.getElementById("cartTotal");
    cartItemsEl.innerHTML = "";
  
    let total = 0;
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">₹${item.price}</div>
        </div>
        <button class="remove-item" data-id="${item.id}">🗑️</button>
      `;
      cartItemsEl.appendChild(div);
      total += item.price;
    });
  
    cartTotalEl.textContent = total.toLocaleString();
  }
  
  document.addEventListener("click", (e) => {
    if (e.target.matches(".add")) {
      const id = +e.target.dataset.id;
      const p = products.find((x) => x.id === id);
      cart.push(p);
      cartCount = cart.length;
      cartBtn.textContent = `Cart (${cartCount})`;
      showToast(`${p.title} added to cart 🛒`);
      updateCartUI();
    }
  
    if (e.target.matches("#cartBtn")) {
      document.getElementById("cartPanel").classList.remove("hidden");
    }
  
    if (e.target.matches("#closeCart")) {
      document.getElementById("cartPanel").classList.add("hidden");
    }
  
    if (e.target.matches(".remove-item")) {
      const id = +e.target.dataset.id;
      cart = cart.filter((item) => item.id !== id);
      cartCount = cart.length;
      cartBtn.textContent = `Cart (${cartCount})`;
      updateCartUI();
    }
  
    if (e.target.matches("#checkoutBtn")) {
      if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
      }
      alert("Redirecting to payment page...");
      window.location.href = "payment.html"; // your payment page
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  