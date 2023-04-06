const products = [
  {
    id: '1',
    name: 'Procesador AMD RYZEN 3',
    price: 53500,
    category: 'procesador',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg',
    stock: 60,
    description: 'Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler',
  },
  {
    id: '2',
    name: 'Mother ASUS PRIME',
    price: 62850,
    category: 'mother',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_AM4_5th_Gen_Ready_9f5c58de-grn.jpg',
    stock: 50,
    description: 'Mother ASUS PRIME A320M-K AM4 5th Gen Ready',
  },
  {
    id: '3',
    name: 'Placa de Video Asrock',
    price: 99200,
    category: 'placa',
    img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28822_Placa_de_Video_Asrock_RX_570_8GB_GDDR5_Phantom_Gaming_Elite_9ecf3ec5-grn.jpg',
    stock: 45,
    description: 'Placa de Video Asrock RX 570 8GB GDDR5 Phantom Gaming Elite',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
