export const products = [
    { 
        id: 1, 
        name: "Hills Pd Metabolic - Peso Saludable", 
        brand: "Hills", 
        price: 212130, 
        category: "Alimentación", 
        img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=500", 
        desc: "Alimento clínico diseñado para ayudar a los perros a perder peso y mantenerlo de forma natural." 
    },
    { 
        id: 2, 
        name: "Cama Ortopédica Real Comfort", 
        brand: "Omora", 
        price: 125000, 
        category: "Descanso", 
        img: "https://images.unsplash.com/photo-1591584250647-39e2123b0360?auto=format&fit=crop&w=500", 
        desc: "Máximo confort con memory foam para las articulaciones de tu mascota." 
    },
    { 
        id: 3, 
        name: "Juguete Kong Extreme Ultra", 
        brand: "Kong", 
        price: 45000, 
        category: "Juguetes", 
        img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500", 
        desc: "El caucho más resistente del mundo para perros con mucha fuerza." 
    },
    { 
        id: 4, 
        name: "Shampoo Hipoalergénico Pro", 
        brand: "Higiene", 
        price: 32000, 
        category: "Higiene", 
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500", 
        desc: "Limpia profundamente sin irritar la piel sensible." 
    }
];

export const createProductCard = (p) => {
    return `
        <div class="product-card" onclick="openProductDetail(${p.id})">
            <div class="badge-oferta">10% OFF</div>
            <img src="${p.img}" alt="${p.name}">
            <div class="product-info">
                <span class="brand-tag">Por ${p.brand}</span>
                <h4 class="product-name">${p.name}</h4>
                <div class="price-row">
                    <span class="main-price">$${p.price.toLocaleString()}</span>
                </div>
                <button class="btn-add-quick" onclick="event.stopPropagation(); addToCart(${p.id})">Añadir +</button>
            </div>
        </div>
    `;
};