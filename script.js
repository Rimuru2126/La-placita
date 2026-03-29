// ═══ DATA ═══
const DRINKS = [
  {id:'dr_cc15',name:'Coca-Cola 1.5L',price:3500,img:'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&q=80'},
  {id:'dr_sp15',name:'Sprite 1.5L',price:3500,img:'https://images.unsplash.com/photo-1624517397197-35b0aae32d2d?w=300&q=80'},
  {id:'dr_ccl',name:'Coca-Cola Lata',price:1500,img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&q=80'},
  {id:'dr_spl',name:'Sprite Lata',price:1500,img:'https://images.unsplash.com/photo-1624517397197-35b0aae32d2d?w=300&q=80'},
  {id:'dr_mil',name:'Miller 600ml',price:3800,img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&q=80'},
  {id:'dr_sf',name:'Santa Fe Lata',price:2300,img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&q=80'},
];

const COUNTRIES = [
  {flag:'🇦🇷',name:'Argentina',code:'+54'},
  {flag:'🇺🇸',name:'USA',code:'+1'},
  {flag:'🇲🇽',name:'México',code:'+52'},
  {flag:'🇨🇴',name:'Colombia',code:'+57'},
  {flag:'🇻🇪',name:'Venezuela',code:'+58'},
  {flag:'🇪🇸',name:'España',code:'+34'},
  {flag:'🇧🇷',name:'Brasil',code:'+55'},
  {flag:'🇵🇦',name:'Panamá',code:'+507'},
  {flag:'🇨🇱',name:'Chile',code:'+56'},
  {flag:'🇵🇪',name:'Perú',code:'+51'},
  {flag:'🇺🇾',name:'Uruguay',code:'+598'},
  {flag:'🇵🇾',name:'Paraguay',code:'+595'},
  {flag:'🇧🇴',name:'Bolivia',code:'+591'},
];

const MENU = {
  hamburguesas: {label:'🍔 Hamburguesas', sections:[
    {title:'Hamburguesas Clásicas', gt:'none',
     note:'Todas incluyen papas fritas',
     items:[
      {id:'h1',name:'Clásica',price:7000,img:'https://imag.bonviveur.com/hamburguesa-clasica.jpg'},
      {id:'h2',name:'Criolla',price:8000,img:'https://resuelveconbimbo-com-v2-assets.s3.amazonaws.com/s3fs-public/2024-01/Banner%20Desktop_Hamburguesa%20Criolla%20con%20Maduritos.png?VersionId=tHcjFdYcLMqDvE8fIHwp_e76jfcngaem'},
      {id:'h3',name:'Completa',price:8000,img:'https://recetaslaplanchetta.com/wp-content/uploads/cooked/images/recipes/recipe_205.jpg'},
      {id:'h4',name:'Mini Sublime',price:10000,img:'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/300af136027e893a8ad3a88aa8b7a6dd/Derivates/970f39850d8d8fd6a659c923af0f60583a9327d3.jpg'},
      {id:'h5',name:'Caramelizada',price:10000,img:'https://panelacolombia.com.co/wp-content/uploads/2025/05/Receta-con-panela-023-1024x558.png'},
      {id:'h6',name:'Sublime',price:12500,img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a4/04/95/caption.jpg?w=500&h=-1&s=1'},
      {id:'h7',name:'Cuarto de Libra',price:8000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaYd2J9JTidjlujXATgA4Xzb7ojUu1C9T4w&s'},
      {id:'h8',name:'Cuarto de Libra XL',price:9500,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1VTvY10WklYhS9CL7FF3tsZysJlbMpyGMg&s'},
      {id:'h9',name:'Cuarto de Libra XL Completa',price:10500,img:'https://mcdonalds.com.hn/imagen/menu-products/1698087538_400x400_CUARTO_DE_LIBRA_DOBLE.png'},
    ]},
    {title:'De Pollo Smash', gt:'none', items:[
      {id:'h10',name:'Mc Chicken',price:9000,img:'https://www.allrecipes.com/thmb/cEaLfplaeP_pwhDKvB_vah_Ezwg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8702751_CopycatMcChicken4x3-fd74c35c3fdc48538f4d3e95e7fda55a.jpg'},
      {id:'h11',name:'Chicken Little',price:8500,img:'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/07/05/primera-smash-de-pollo-de-madrid.jpeg'},
      {id:'h12',name:'Suprema',price:10000,img:'https://bambuleburger.com/wp-content/uploads/2024/11/bambule-crispy-bambule-300x300.jpg'},
    ]},
    {title:'Mini Hambur-pizza', gt:'none', items:[
      {id:'h13',name:'Mini KenJhi Completa',price:10000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KqfwerQhhrggIoP1lUo0Uxissb5I-3H83Q&s'},
      {id:'h14',name:'Mini KenJhi Estilo Sublime',price:10000,img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
    ]},
    {title:'Adicionales', gt:'none',
     note:'Precio por unidad — se agregan al pedido',
     items:[
      {id:'h15',name:'Medallón Extra',price:1500,img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80'},
      {id:'h16',name:'Medallón Relleno Extra',price:1600,img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80'},
      {id:'h17',name:'Feta de Queso Cheddar',price:700,img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80'},
    ]},
  ]},

  pizzas: {label:'🍕 Pizzas', sections:[
    {title:'Pizzas', gt:'none',
     note:'Se pueden pedir pizzas mixtas',
     items:[
      {id:'pz1',name:'Muzarella',price:8000,img:'https://glacial.com.uy/3335-large_default/pizza-mozzarella-grande-reforzada-glacial.jpg'},
      {id:'pz2',name:'Margherita',price:8500,img:'https://imag.bonviveur.com/pizza-margarita.jpg'},
      {id:'pz3',name:'La Grinch',price:8500,img:'https://nepapizzareview.com/wp-content/uploads/2022/12/75C11C5A-C5C2-4051-8321-2663E3FB5369-1536x1152-1.webp'},
      {id:'pz4',name:'Napolitana',price:9000,img:'https://images.aws.nestle.recipes/original/acc78d19f296b00d093fa80060a695fb_pizza_napolitana.jpg'},
      {id:'pz5',name:'Fugazzeta',price:9000,img:'https://holavegan.com/wp-content/uploads/2021/06/fugazzeta_ok2.jpg'},
      {id:'pz6',name:'Calabresa',price:9000,img:'https://cantinagiovannifreddo.com.br/wp-content/uploads/2023/09/PIZZA-DE-CALABRESA.webp'},
      {id:'pz7',name:'Jamón y Morrón',price:9000,img:'https://www.demoslavueltaaldia.com/sites/default/files/pizza-de-mozzarella-jamon-y-morron.jpg.jpg'},
      {id:'pz8',name:'Palmitos y Salsa Golf',price:9500,img:'https://images.unsplash.com/photo-1594007654729-407eeec4be30?w=400&q=80'},
      {id:'pz9',name:'La Grinch con Tomate Cherry',price:9500,img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'},
      {id:'pz10',name:'Anchoas',price:10000,img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80'},
      {id:'pz11',name:'Hongos & Bacón',price:11000,img:'https://images.unsplash.com/photo-1536587831884-b045f6e06430?w=400&q=80'},
      {id:'pz12',name:'Pepperoni',price:10000,img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80'},
      {id:'pz13',name:'Jamón Crudo y Rúcula',price:10000,img:'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&q=80'},
      {id:'pz14',name:'Hawaiana',price:11000,img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80'},
      {id:'pz15',name:'4 Quesos',price:11000,img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80'},
      {id:'pz16',name:'Candy Onion Cheese',price:11500,img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80'},
      {id:'pz17',name:'Americana',price:13000,img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80'},
      {id:'pz18',name:'Hambur-pizza',price:20500,img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80'},
    ]},
    {title:'Pizzetas (x2)', gt:'none',
     note:'Americanas: $6.000 — precio confirmado por WhatsApp',
     items:[
      {id:'pzt1',name:'2 Pizzetas a elección',price:4500,img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80',
       note:'Muzarella · Napolitana · Calabresa · Jamón y Morrón · Americana · Fugazzeta'},
    ]},
  ]},

  tacos: {label:'🌮 Tacos', sections:[
    {title:'Tacos', gt:'none',
     note:'Se pueden pedir tacos mixtos',
     items:[
      {id:'t1',name:'1 Taco de Pollo o Vacío',price:4000,img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80'},
      {id:'t2',name:'2 Tacos de Pollo o Vacío',price:7000,img:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80'},
      {id:'t3',name:'Gigante de Tacos con Papas',price:20000,img:'https://images.unsplash.com/photo-1624300629298-e9ff39444a9b?w=400&q=80',
       note:'Pollo o vacío'},
    ]},
    {title:'Agregados para Tacos', gt:'none',
     note:'Precio por unidad',
     items:[
      {id:'tad1',name:'Cebolla Caramelizada',price:500,img:'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400&q=80'},
      {id:'tad2',name:'Troceado de Jamón',price:500,img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80'},
      {id:'tad3',name:'Gratinado Queso Tybo',price:600,img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80'},
      {id:'tad4',name:'Gratinado Queso Cheddar',price:800,img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80'},
    ]},
  ]},

  burritos: {label:'🌯 Burritos', sections:[
    {title:'Burritos', gt:'none',
     note:'Se le puede agregar picante',
     items:[
      {id:'b1',name:'Burrito Completo (con papas)',price:9000,img:'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&q=80'},
      {id:'b2',name:'Burrito Mex (con papas)',price:9000,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'},
      {id:'b3',name:'Promo 2 Burritos sin papas',price:15000,img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80'},
      {id:'b4',name:'Promo 2 Burritos con papas',price:16000,img:'https://images.unsplash.com/photo-1581878969767-2e63bbea9e37?w=400&q=80'},
      {id:'b5',name:'Burrito de Vacío Desmenuzado',price:10000,img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'},
    ]},
  ]},

  milanesas: {label:'🥩 Milanesas', sections:[
    {title:'Milanesas de Carne', gt:'none',
     note:'Todas incluyen papas fritas salvo se indique',
     items:[
      {id:'mil1',name:'Milanesa Napolitana con Papas',price:8500,img:'https://images.unsplash.com/photo-1544025162-d76538b2ed7b?w=400&q=80'},
      {id:'mil2',name:'Milanesa Napolitana sin Papas',price:8000,img:'https://images.unsplash.com/photo-1544025162-d76538b2ed7b?w=400&q=80'},
      {id:'mil3',name:'Sandwich Milanesa Napolitana',price:9000,img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'},
      {id:'mil4',name:'Sandwich Milanesa Completo',price:9000,img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'},
      {id:'mil5',name:'2 Sandwich Milanesa Napolitana',price:16000,img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'},
      {id:'mil6',name:'2 Sandwich Milanesa Completo',price:16000,img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'},
      {id:'mil7',name:'Gigante Sandwich Milanesa Completo',price:24000,img:'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80'},
    ]},
    {title:'Sandwich de Pollo o Vacío', gt:'none', items:[
      {id:'mil8',name:'1 Sandwich Pollo o Vacío',price:9000,img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'},
      {id:'mil9',name:'1 Sandwich Pollo o Vacío + Papas',price:9500,img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80'},
      {id:'mil10',name:'2 Sandwich Pollo o Vacío',price:15000,img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'},
      {id:'mil11',name:'2 Sandwich Pollo o Vacío + Papas',price:16000,img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80'},
    ]},
  ]},

  extras: {label:'🍟 Extras & Otros', sections:[
    {title:'Papas Fritas', gt:'none',
     note:'Se puede agregar queso cheddar y bacon',
     items:[
      {id:'pf1',name:'Porción Chica de Papas',price:4500,img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80'},
      {id:'pf2',name:'Porción Mediana de Papas',price:6000,img:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80'},
      {id:'pf3',name:'Porción Grande de Papas',price:7000,img:'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80'},
      {id:'pf4',name:'Papas Cheddar & Bacon',price:3500,img:'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&q=80',
       note:'Agregado sobre cualquier porción'},
    ]},
    {title:'Wraps', gt:'none',
     note:'Elección entre carne y pollo Kentucky como base',
     items:[
      {id:'wr1',name:'Wrap Completo',price:8000,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'},
      {id:'wr2',name:'Wrap Completo x2',price:14000,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80'},
      {id:'wr3',name:'Wrap Cheese',price:8000,img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80'},
      {id:'wr4',name:'Wrap Cheese x2',price:14000,img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80'},
    ]},
    {title:'Pollo Kentucky', gt:'none',
     note:'Aderezo a elección: Mayonesa, Mayo Ajo, Ketchup o Ketchup Picante — uno por pollo',
     items:[
      {id:'pk1',name:'Pollo Kentucky',price:5500,img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80'},
      {id:'pk2',name:'Pollo Kentucky x2',price:10000,img:'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400&q=80'},
    ]},
    {title:'Quesadillas', gt:'none', items:[
      {id:'qd1',name:'Quesadilla',price:5500,img:'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80'},
      {id:'qd2',name:'Quesadilla x2',price:10000,img:'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80'},
    ]},
    {title:'Sandwiches de Miga', gt:'none', items:[
      {id:'sm1',name:'Sandwich de Miga',price:7000,img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80'},
      {id:'sm2',name:'Sandwich de Miga Triple',price:8500,img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'},
      {id:'sm3',name:'Miganessa',price:10000,img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80'},
    ]},
  ]},

  bebidas: {label:'🥤 Bebidas', sections:[
    {title:'Bebidas', gt:'none', items:[
      {id:'dr1',name:'Coca-Cola 1.5 Lts',price:3500,img:'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80'},
      {id:'dr2',name:'Sprite 1.5 Lts',price:3500,img:'https://images.unsplash.com/photo-1624517397197-35b0aae32d2d?w=400&q=80'},
      {id:'dr3',name:'Coca-Cola Lata',price:1500,img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80'},
      {id:'dr4',name:'Sprite Lata',price:1500,img:'https://images.unsplash.com/photo-1624517397197-35b0aae32d2d?w=400&q=80'},
      {id:'dr5',name:'Miller 600ml (No Retornable)',price:3800,img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80'},
      {id:'dr6',name:'Cerveza Santa Fe Lata',price:2300,img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80'},
    ]},
  ]},
};

// ═══ STATE ═══
let activeCat = 'hamburguesas';
let cart = [];
let step = 'cart';
let svc = '';
let contactName = '', contactPhone = '', contactCountryIdx = 0;
let addrCalle = '', addrNum = '', addrComp = '', addrRef = '';
let tipMode = 'no', tipCustom = '', orderComment = '', payMethod = '', payAmount = '';
let orderNum = '';
let pdItem = null, pdGT = 'none', pdSD = null, pdQty = 1, pdCmt = '';

// ═══ HELPERS ═══
function genOrderNum(){return 'KJ-'+Math.floor(1000000000+Math.random()*9000000000);}
function fmt(n){return '$'+Number(n).toLocaleString('es-AR');}
function cartCount(){return cart.reduce((s,e)=>s+e.qty,0);}
function cartTotal(){return cart.reduce((s,e)=>s+(e.item.price+(e.drink?e.drink.price:0))*e.qty,0);}
function itemCartQty(id){return cart.filter(e=>e.item.id===id).reduce((s,e)=>s+e.qty,0);}
function findItemSec(id){
  for(const cat of Object.values(MENU)){
    for(const sec of cat.sections){
      const it=sec.items.find(i=>i.id===id);
      if(it) return {item:it,gt:sec.gt||'none'};
    }
  }
  return null;
}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2);}
function now(){
  const d=new Date();
  return {
    date:d.toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'numeric'}),
    time:d.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit',hour12:false}),
  };
}
function updateHeader(){
  const c=cartCount(),t=cartTotal();
  document.getElementById('hdr-count').textContent=c;
  document.getElementById('hdr-badge').textContent='$'+t.toLocaleString('es-AR');
  document.getElementById('bar-count').textContent=c+' artículo'+(c!==1?'s':'');
  document.getElementById('bar-total').textContent=fmt(t);
  document.getElementById('cart-bar').classList.toggle('visible',c>0);
}

// ═══ MENU ═══
function renderTabs(){
  document.getElementById('tabs').innerHTML=Object.entries(MENU).map(([k,v])=>
    `<button class="tab ${k===activeCat?'active':''}" onclick="switchCat('${k}')">${v.label}</button>`
  ).join('');
}
function switchCat(k){
  activeCat=k;renderTabs();renderMain();
  document.getElementById('main').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderMain(){
  const cat=MENU[activeCat];
  let h='';
  for(const sec of cat.sections){
    h+=`<div class="section"><div class="sec-title">${sec.title}</div>`;
    if(sec.note) h+=`<div class="sec-note">📌 ${sec.note}</div>`;
    h+=`<div class="grid">`;
    for(const item of sec.items){
      const qty=itemCartQty(item.id);
      h+=`<div class="card" onclick="openPD('${item.id}','${sec.gt||'none'}')">
        <div class="card-img"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=card-img-fallback>🍽️</span>'"/></div>
        <div class="card-body">
          <div class="card-name">${item.name}</div>
          ${item.note?`<div class="card-sub">${item.note}</div>`:''}
          <div class="card-foot">
            <div class="card-price">${fmt(item.price)}</div>
            <div class="card-qty ${qty>0?'show':''}">${qty>0?qty+'x':''}</div>
            <button class="add-btn" onclick="event.stopPropagation();openPD('${item.id}','${sec.gt||'none'}')">+</button>
          </div>
        </div>
      </div>`;
    }
    h+=`</div></div>`;
  }
  document.getElementById('main').innerHTML=h;
}

// ═══ PRODUCT DETAIL ═══
function openPD(itemId,gt){
  const f=findItemSec(itemId); if(!f) return;
  pdItem=f.item; pdGT=gt; pdSD=null; pdQty=1; pdCmt='';
  renderPD();
  document.getElementById('pd-ov').classList.add('open');
  document.getElementById('pd-sheet').scrollTop=0;
}
function closePDModal(){document.getElementById('pd-ov').classList.remove('open');}
function closePD(e){if(e.target===document.getElementById('pd-ov'))closePDModal();}
function pdTotal(){return(pdItem.price+(pdSD?pdSD.price:0))*pdQty;}
function renderPD(){
  let body=`<div class="pd-hero"><img src="${pdItem.img}" alt="${pdItem.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'"/></div>
  <div class="pd-hdr">
    <div class="pd-name">${pdItem.name}</div>
    <div class="pd-price">${fmt(pdItem.price)}</div>
    ${pdItem.note?`<div class="pd-note">📌 ${pdItem.note}</div>`:''}
  </div>`;

  body+=`<div class="pd-sec"><div class="pd-sec-title">🥤 ¿Qué vas a beber?</div>
  <div class="pd-sec-sub">Elige una bebida (opcional)</div>
  <div class="drinks-wrap">`;
  for(const d of DRINKS){
    const sel=pdSD&&pdSD.id===d.id;
    body+=`<div class="drink-chip ${sel?'sel':''}" onclick="toggleD('${d.id}')"><img class="drink-thumb" src="${d.img}" alt="${d.name}" onerror="this.style.display='none'"/> ${d.name} <span style="opacity:.65">+${fmt(d.price)}</span></div>`;
  }
  body+=`</div></div>`;

  body+=`<div class="pd-sec"><div class="pd-sec-title">💬 Comentarios</div>
  <textarea class="pd-textarea" id="pd-cmt" rows="2" placeholder="Ej: Sin cebolla, con extra salsa...">${pdCmt}</textarea>
  </div><div class="pd-spacer"></div>`;

  document.getElementById('pd-body').innerHTML=body;
  document.getElementById('pd-foot').innerHTML=`
    <div class="qty-ctrl">
      <button class="qty-btn" onclick="pdChgQ(-1)">−</button>
      <span class="qty-num" id="pd-qty">${pdQty}</span>
      <button class="qty-btn" onclick="pdChgQ(1)">+</button>
    </div>
    <button class="pd-add-btn" id="pd-add" onclick="addPD()">Agregar · ${fmt(pdTotal())}</button>`;
}
function toggleD(id){
  const d=DRINKS.find(x=>x.id===id); if(!d) return;
  pdSD=(pdSD&&pdSD.id===id)?null:d;
  pdCmt=document.getElementById('pd-cmt')?.value||''; renderPD();
}
function pdChgQ(delta){
  pdQty=Math.max(1,pdQty+delta);
  pdCmt=document.getElementById('pd-cmt')?.value||'';
  document.getElementById('pd-qty').textContent=pdQty;
  document.getElementById('pd-add').textContent='Agregar · '+fmt(pdTotal());
}
function addPD(){
  pdCmt=document.getElementById('pd-cmt')?.value||'';
  cart.push({uid:uid(),item:pdItem,qty:pdQty,drink:pdSD,comment:pdCmt});
  closePDModal(); updateHeader(); renderMain();
  const bar=document.getElementById('cart-bar');
  bar.style.boxShadow='0 -4px 30px rgba(34,197,94,.6)';
  setTimeout(()=>bar.style.boxShadow='',700);
}

// ═══ CART / CHECKOUT ═══
function openCart(){step='cart';renderCart();document.getElementById('cart-ov').classList.add('open');}
function closeCartModal(){document.getElementById('cart-ov').classList.remove('open');}
function closeCartOv(e){if(e.target===document.getElementById('cart-ov'))closeCartModal();}

const STEPS_META={
  service:{n:1,label:'Servicio'},
  contact:{n:2,label:'Contacto'},
  address:{n:3,label:'Dirección'},
  summary:{n:4,label:'Resumen'},
  almost:{n:5,label:'Enviar'},
};

function stepIndicator(currentStep){
  const stepsOrder=svc==='domicilio'
    ?['service','contact','address','summary','almost']
    :['service','contact','summary','almost'];
  const idx=stepsOrder.indexOf(currentStep);
  let h='<div class="steps">';
  stepsOrder.forEach((s,i)=>{
    const state=i<idx?'done':i===idx?'active':'';
    h+=`<div class="step-dot ${state}">${i<idx?'✓':(i+1)}</div>`;
    if(i<stepsOrder.length-1) h+=`<div class="step-line ${i<idx?'done':''}"></div>`;
  });
  return h+'</div>';
}

function renderCart(){
  const el=document.getElementById('cart-content');
  if(step==='cart') renderCartView(el);
  else if(step==='service') renderService(el);
  else if(step==='contact') renderContact(el);
  else if(step==='address') renderAddress(el);
  else if(step==='summary') renderSummary(el);
  else if(step==='almost') renderAlmost(el);
  else if(step==='success') renderSuccess(el);
}

function renderCartView(el){
  if(!cart.length){
    el.innerHTML=`<div class="s-inner">
      <div class="s-title">Tu Pedido 🛒</div>
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-msg">Tu carrito está vacío</div>
        <div style="font-size:12px;color:var(--g400);margin-top:6px;">¡Agrega algo del menú!</div>
      </div>
    </div>`; return;
  }
  const rows=cart.map(e=>{
    const lt=(e.item.price+(e.drink?e.drink.price:0))*e.qty;
    return `<div class="cart-item">
      <img class="ci-img" src="${e.item.img}" alt="${e.item.name}" onerror="this.style.display='none'"/>
      <div class="ci-info">
        <div class="ci-name">${e.item.name}</div>
        <div class="ci-extras">${e.drink?'+ '+e.drink.name:''}${e.comment?`<br>📝 ${e.comment}`:''}</div>
        <div class="ci-price">${fmt(lt)}</div>
        <div class="ci-ctrl">
          <button class="ci-btn" onclick="chgCart('${e.uid}',-1)">−</button>
          <span class="ci-qty">${e.qty}</span>
          <button class="ci-btn" onclick="chgCart('${e.uid}',1)">+</button>
          <button class="ci-del" onclick="delCart('${e.uid}')">🗑</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const total=cartTotal();
  el.innerHTML=`<div class="s-inner">
    <div class="s-title">Tu Pedido 🛒</div>
    ${rows}
    <div class="cart-totals">
      <div class="tot-row"><span>Subtotal</span><span>${fmt(total)}</span></div>
      <div class="tot-row"><span>Envío</span><span>A confirmar</span></div>
      <div class="tot-row grand"><span>TOTAL</span><span>${fmt(total)}</span></div>
    </div>
    <button class="btn-primary" onclick="step='service';renderCart()">Continuar con el pedido →</button>
    <button class="btn-back" onclick="closeCartModal()">Seguir eligiendo</button>
  </div>`;
}

function chgCart(uid,delta){
  const e=cart.find(x=>x.uid===uid); if(!e) return;
  e.qty=Math.max(0,e.qty+delta);
  if(e.qty===0) cart=cart.filter(x=>x.uid!==uid);
  updateHeader(); renderCart();
}
function delCart(uid){cart=cart.filter(x=>x.uid!==uid); updateHeader(); renderCart();}

function renderService(el){
  el.innerHTML=`<div class="s-inner">
    ${stepIndicator('service')}
    <div class="s-title">¿Cómo lo querés?</div>
    <div class="svc-grid">
      <button class="svc-btn ${svc==='local'?'sel':''}" onclick="svc='local';renderCart()">
        <div class="svc-icon">🍽️</div><div class="svc-label">En el Local</div>
      </button>
      <button class="svc-btn ${svc==='llevar'?'sel':''}" onclick="svc='llevar';renderCart()">
        <div class="svc-icon">🛍️</div><div class="svc-label">Para Llevar</div>
      </button>
      <button class="svc-btn ${svc==='domicilio'?'sel':''}" onclick="svc='domicilio';renderCart()">
        <div class="svc-icon">🛵</div><div class="svc-label">A Domicilio</div>
      </button>
    </div>
    <button class="btn-primary" ${!svc?'disabled':''} onclick="step='contact';renderCart()">Continuar →</button>
    <button class="btn-back" onclick="step='cart';renderCart()">← Volver al carrito</button>
  </div>`;
}

function renderContact(el){
  el.innerHTML=`<div class="s-inner">
    ${stepIndicator('contact')}
    <div class="s-title">Tus Datos</div>
    <div class="f-group">
      <label class="f-label">Nombre completo</label>
      <input class="f-input" type="text" placeholder="Tu nombre" value="${contactName}"
        oninput="contactName=this.value;document.getElementById('cnt-btn').disabled=!contactName.trim()||!contactPhone.trim()"/>
    </div>
    <div class="f-group">
      <label class="f-label">Teléfono</label>
      <div class="f-row">
        <select class="country-sel" onchange="contactCountryIdx=this.value">
          ${COUNTRIES.map((c,i)=>`<option value="${i}" ${i===contactCountryIdx?'selected':''}>${c.flag} ${c.code}</option>`).join('')}
        </select>
        <input class="f-input" type="tel" placeholder="Número" value="${contactPhone}"
          oninput="contactPhone=this.value;document.getElementById('cnt-btn').disabled=!contactName.trim()||!contactPhone.trim()"/>
      </div>
    </div>
    <button id="cnt-btn" class="btn-primary" ${(!contactName.trim()||!contactPhone.trim())?'disabled':''}
      onclick="step='${svc==='domicilio'?'address':'summary'}';renderCart()">Continuar →</button>
    <button class="btn-back" onclick="step='service';renderCart()">← Volver</button>
  </div>`;
}

function renderAddress(el){
  el.innerHTML=`<div class="s-inner">
    ${stepIndicator('address')}
    <div class="s-title">Dirección de Entrega</div>
    <div class="f-group"><label class="f-label">Calle / Avenida</label>
      <input class="f-input" type="text" placeholder="Ej: Av. Corrientes" value="${addrCalle}"
        oninput="addrCalle=this.value;chkAddr()"/></div>
    <div class="f-group"><label class="f-label">Número</label>
      <input class="f-input" type="text" placeholder="Ej: 1234" value="${addrNum}"
        oninput="addrNum=this.value;chkAddr()"/></div>
    <div class="f-group"><label class="f-label">Piso/Depto <span>(opcional)</span></label>
      <input class="f-input" type="text" placeholder="Ej: 3B" value="${addrComp}" oninput="addrComp=this.value"/></div>
    <div class="f-group"><label class="f-label">Referencia <span>(opcional)</span></label>
      <input class="f-input" type="text" placeholder="Ej: Casa con portón verde" value="${addrRef}" oninput="addrRef=this.value"/></div>
    <button id="addr-btn" class="btn-primary" ${(!addrCalle.trim()||!addrNum.trim())?'disabled':''}
      onclick="step='summary';renderCart()">Continuar →</button>
    <button class="btn-back" onclick="step='contact';renderCart()">← Volver</button>
  </div>`;
}
function chkAddr(){document.getElementById('addr-btn').disabled=!addrCalle.trim()||!addrNum.trim();}

function renderSummary(el){
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const tipAmt=Math.round(total*tipPct/100);
  const grand=total+tipAmt;
  const country=COUNTRIES[contactCountryIdx];
  const rows=cart.map(e=>{
    const lt=(e.item.price+(e.drink?e.drink.price:0))*e.qty;
    return `<div class="cart-item" style="padding:8px 0;">
      <img class="ci-img" src="${e.item.img}" alt="${e.item.name}" onerror="this.style.display='none'" style="width:44px;height:44px"/>
      <div class="ci-info">
        <div class="ci-name">${e.item.name} x${e.qty}</div>
        <div class="ci-extras">${e.drink?'🥤 '+e.drink.name:''}${e.comment?`<br>📝 ${e.comment}`:''}</div>
        <div class="ci-price">${fmt(lt)}</div>
      </div>
    </div>`;
  }).join('');

  el.innerHTML=`<div class="s-inner">
    ${stepIndicator('summary')}
    <div class="s-title">Resumen del Pedido</div>
    <div class="datos-card">
      <div class="datos-card-hdr"><div class="datos-card-title">📋 Pedido (${cartCount()} items)</div>
        <button class="datos-change" onclick="step='cart';renderCart()">Editar</button></div>
      ${rows}
    </div>
    <div class="datos-card">
      <div class="datos-card-hdr"><div class="datos-card-title">📍 Entrega</div>
        <button class="datos-change" onclick="step='service';renderCart()">Cambiar</button></div>
      <div class="datos-row">🚀 ${svc==='local'?'En el local':svc==='llevar'?'Para llevar':'A domicilio'}</div>
      ${svc==='domicilio'?`<div class="datos-row">📍 ${[addrCalle,addrNum,addrComp,addrRef].filter(Boolean).join(', ')}</div>`:''}
      <div class="datos-row">👤 ${contactName} · ${country.code} ${contactPhone}</div>
    </div>
    <div class="f-group">
      <label class="f-label">💰 Propina (opcional)</label>
      <div class="tip-grid">
        ${['no','10','15','20','otro'].map(v=>`<button class="tip-btn ${tipMode===v?'sel':''}" onclick="tipMode='${v}';renderCart()">${v==='no'?'Sin propina':v==='otro'?'Otra %':v+'%'}</button>`).join('')}
        ${tipMode==='otro'?`<input class="tip-input" type="number" value="${tipCustom}" placeholder="%" oninput="tipCustom=this.value;renderCart()"/>`:''}
      </div>
    </div>
    <div class="f-group">
      <label class="f-label">💳 Método de pago</label>
      <div class="pay-opts">
        ${[['Efectivo','💵'],['Transferencia','🏦'],['MercadoPago','📱']].map(([m,ic])=>
          `<button class="pay-btn ${payMethod===m?'sel':''}" onclick="payMethod='${m}';renderCart()">
            <div class="pay-icon">${ic}</div>${m}</button>`).join('')}
      </div>
      ${payMethod==='Efectivo'?`<input class="f-input" type="number" placeholder="Con cuánto pagás" value="${payAmount}"
        oninput="payAmount=this.value"/>`:''}
    </div>
    <div class="f-group">
      <label class="f-label">📝 Comentarios <span>(opcional)</span></label>
      <textarea class="pd-textarea" rows="2" placeholder="Indicaciones generales del pedido..."
        oninput="orderComment=this.value">${orderComment}</textarea>
    </div>
    <div class="cart-totals">
      <div class="tot-row"><span>Subtotal</span><span>${fmt(total)}</span></div>
      ${tipAmt>0?`<div class="tot-row"><span>Propina (${tipPct}%)</span><span>${fmt(tipAmt)}</span></div>`:''}
      <div class="tot-row"><span>Envío</span><span>A confirmar</span></div>
      <div class="tot-row grand"><span>TOTAL</span><span>${fmt(grand)}</span></div>
    </div>
    <button class="btn-primary" ${!payMethod?'disabled':''} onclick="goAlmost()">Confirmar pedido →</button>
    <button class="btn-back" onclick="step='contact';renderCart()">← Volver</button>
  </div>`;
}

function goAlmost(){orderNum=genOrderNum();step='almost';renderCart();}

function buildWAMsg(){
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const tipAmt=Math.round(total*tipPct/100);
  const grand=total+tipAmt;
  const dt=now();
  const country=COUNTRIES[contactCountryIdx];
  const svcNames={local:'En el local',llevar:'Para llevar',domicilio:'A domicilio'};
  const addrLine=svc==='domicilio'?[addrCalle,addrNum,addrComp,addrRef].filter(Boolean).join(', '):'';

  let msg=`¡Hola! Vengo de KenJhi Fast Food 🍔🍕\n`;
  msg+=`${orderNum}\n`;
  msg+=`Fecha: ${dt.date}  Hora: ${dt.time}\n\n`;
  msg+=`*Tipo de servicio: ${svcNames[svc]}*\n\n`;
  msg+=`Nombre: ${contactName}\n`;
  msg+=`Teléfono: ${country.code} ${contactPhone}\n`;
  if(addrLine) msg+=`Dirección: ${addrLine}\n`;
  if(orderComment) msg+=`Comentario: ${orderComment}\n`;
  msg+=`\n*-- PRODUCTOS --*\n`;
  for(const e of cart){
    const lt=(e.item.price+(e.drink?e.drink.price:0))*e.qty;
    msg+=`*X${e.qty} ${e.item.name}  $${lt.toLocaleString('es-AR')}*\n`;
    if(e.drink) msg+=`  + ${e.drink.name} $${(e.drink.price*e.qty).toLocaleString('es-AR')}\n`;
    if(e.comment) msg+=`  Nota: ${e.comment}\n`;
    msg+='\n';
  }
  msg+=`Subtotal: $${total.toLocaleString('es-AR')}\n`;
  if(tipAmt>0) msg+=`Propina (${tipPct}%): $${tipAmt.toLocaleString('es-AR')}\n`;
  msg+=`Envío: A confirmar\n`;
  msg+=`*Total: $${grand.toLocaleString('es-AR')}*\n\n`;
  msg+=`*-- PAGO --*\n`;
  msg+=`Estado: No pagado\n`;
  msg+=`*Total a pagar: $${grand.toLocaleString('es-AR')}*\n`;
  if(payMethod==='Efectivo'){
    const amt=parseFloat(payAmount)||grand;
    const change=Math.max(0,amt-grand);
    msg+=`Efectivo $${grand} (entrego $${amt}, vuelto $${change})\n`;
  } else {
    msg+=`${payMethod}\n`;
  }
  msg+=`\n¡Por favor confirmar recibo del pedido! Gracias 🙏`;
  return msg;
}

function renderAlmost(el){
  el.innerHTML=`${stepIndicator('almost')}
  <div class="almost-wrap">
    <div class="almost-title">¡Casi listo! 🎉</div>
    <div class="almost-sub">Tu pedido está armado. Solo envialo por WhatsApp para que lo recibamos.</div>
    <div class="action-box">
      <div class="action-label">⚡ Acción necesaria</div>
      <button class="wa-btn" onclick="sendWA()">
        <span class="wa-icon">💬</span> Enviar por WhatsApp
      </button>
    </div>
    <div style="font-size:12px;color:var(--g400);line-height:1.6;">
      Se abrirá WhatsApp con el mensaje listo.<br>
      Solo presioná <strong>Enviar</strong> y listo 🚀
    </div>
  </div>
  <div class="s-inner" style="padding-top:0;">
    <button class="btn-back" onclick="step='summary';renderCart()">← Volver al resumen</button>
  </div>`;
}

function sendWA(){
  const msg=buildWAMsg();
  // WhatsApp de KenJhi Fast Food
  const url='https://wa.me/5493498432943?text='+encodeURIComponent(msg);
  window.open(url,'_blank');
  setTimeout(()=>{step='success';renderCart();},800);
}

function renderSuccess(el){
  const total=cartTotal();
  const tipPct=tipMode==='no'?0:tipMode==='otro'?(parseFloat(tipCustom)||0):(parseFloat(tipMode)||0);
  const grand=total+Math.round(total*tipPct/100);
  const rows=cart.map(e=>{
    const lt=(e.item.price+(e.drink?e.drink.price:0))*e.qty;
    return `<div class="suc-row"><span><img class="suc-thumb" src="${e.item.img}" alt="${e.item.name}" onerror="this.style.display='none'"/> ${e.item.name} x${e.qty}</span><span>${fmt(lt)}</span></div>`;
  }).join('');
  const svcNames={local:'🍽️ En el local',llevar:'🛍️ Para llevar',domicilio:'🛵 A domicilio'};

  el.innerHTML=`<div class="success-wrap">
    <div class="success-icon">✅</div>
    <div class="order-num">${orderNum}</div>
    <div class="success-title">¡Pedido Enviado!</div>
    <div class="success-msg">Recibimos tu pedido. Te contactaremos al<br><strong>${COUNTRIES[contactCountryIdx].code} ${contactPhone}</strong></div>
    <div class="success-box">
      <div class="sbox-title">Resumen · ${cartCount()} producto(s)</div>
      ${rows}
      <div class="suc-row" style="font-weight:800;border-top:1px solid var(--g200);margin-top:8px;padding-top:8px;color:var(--accent);"><span>Total</span><span>${fmt(grand)}</span></div>
      <div class="suc-row"><span>Servicio</span><span>${svcNames[svc]||''}</span></div>
      <div class="suc-row"><span>Estado del pago</span><span style="background:rgba(250,204,21,.15);color:var(--gold);padding:2px 8px;border-radius:20px;font-size:12px;font-weight:700;">No pagado</span></div>
      <div class="suc-row"><span>Pago</span><span>${payMethod}</span></div>
    </div>
    <button class="wa-btn" onclick="resendWA()" style="margin-bottom:10px;">💬 Consultar sobre mi pedido</button>
    <button class="new-order-btn" onclick="resetOrder()">🍔 Hacer otro pedido</button>
  </div>`;

  cart=[]; updateHeader(); renderMain();
}

function resendWA(){
  const msg=`Hola KenJhi! Quisiera saber el avance de mi pedido Nº ${orderNum}. Gracias.`;
  window.open('https://wa.me/5493498432943?text='+encodeURIComponent(msg),'_blank');
}

function resetOrder(){
  cart=[]; svc=''; contactName=''; contactPhone=''; contactCountryIdx=0;
  addrCalle=''; addrNum=''; addrComp=''; addrRef='';
  tipMode='no'; tipCustom=''; orderComment=''; payMethod=''; payAmount=''; orderNum='';
  step='cart'; closeCartModal(); updateHeader(); renderMain();
}

// ═══ INIT ═══
renderTabs(); renderMain();
