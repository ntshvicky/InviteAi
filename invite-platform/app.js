// ============================================================
// INVITEAI – Complete App Engine v2
// ============================================================

const MUSIC_PRESETS = [
    { id:'indian', label:'🎵 Indian Traditional', url:'https://assets.mixkit.co/music/preview/mixkit-indian-traditional-festival-music-718.mp3' },
    { id:'romance', label:'🎵 Romantic Piano',    url:'https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3' },
    { id:'happy',  label:'🎵 Happy Celebration',  url:'https://assets.mixkit.co/music/preview/mixkit-happy-celebration-dance-256.mp3' },
    { id:'bells',  label:'🎵 Festive Bells',      url:'https://assets.mixkit.co/music/preview/mixkit-bells-in-space-music-box-504.mp3' },
    { id:'serene', label:'🎵 Gentle & Serene',    url:'https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3' },
    { id:'epic',   label:'🎵 Epic Cinematic',     url:'https://assets.mixkit.co/music/preview/mixkit-an-action-epic-hit-461.mp3' },
];

const ALL_TEMPLATES = [
// ===== WEDDING – HINDU =====
{ id:'hw1', category:'Wedding', sub:'Hindu', style:'mandala',
  title:'Royal Mandala', desc:'Rotating mandala · Marigold petals · Deep crimson',
  bg1:'#7b0d1e', bg2:'#2a0008', accent:'#FFD700', text:'#FFE88A',
  introText:'॥ श्री गणेशाय नमः ॥', namesFont:'Great Vibes',
  events:['Haldi','Mehendi','Sangeet','Wedding Day'],
  music:'indian', tGrad:'radial-gradient(circle at 35% 30%,#8B0000,#3d0000 55%,#1a0000)', tIcon:'🕉️' },

{ id:'hw2', category:'Wedding', sub:'Hindu', style:'peacock',
  title:'Peacock Splendour', desc:'Royal peacock · Teal & gold · Majestic',
  bg1:'#0d4f4f', bg2:'#001e1e', accent:'#FFD700', text:'#FFF5C0',
  introText:'॥ शुभ विवाह ॥', namesFont:'Great Vibes',
  events:['Haldi','Mehendi','Sangeet','Wedding Day'],
  music:'indian', tGrad:'linear-gradient(135deg,#0d4f4f,#0a6b6b 45%,#002a2a)', tIcon:'🦚' },

{ id:'hw3', category:'Wedding', sub:'Hindu', style:'floral',
  title:'Rose Garden', desc:'Pink florals · Drifting petals · Ivory romance',
  bg1:'#fff0f5', bg2:'#ffd6e8', accent:'#b5125f', text:'#7a003a',
  introText:'॥ शुभ मंगल सावधान ॥', namesFont:'Great Vibes',
  events:['Haldi','Mehendi','Sangeet','Wedding Day'],
  music:'indian', tGrad:'linear-gradient(135deg,#fff0f5,#ffd6e8 50%,#ffb3d1)', tIcon:'🌸' },

{ id:'hw4', category:'Wedding', sub:'Hindu', style:'mandala',
  title:'Rajasthani Royal', desc:'Deep maroon · Intricate patterns · Regal grandeur',
  bg1:'#4a0020', bg2:'#200010', accent:'#E8A020', text:'#FFE0A0',
  introText:'ॐ नमः शिवाय', namesFont:'Cinzel',
  events:['Haldi','Mehendi','Sangeet','Wedding Day'],
  music:'indian', tGrad:'radial-gradient(ellipse at 40% 30%,#5a0028,#300015 55%,#100008)', tIcon:'🪔' },

// ===== WEDDING – MUSLIM =====
{ id:'wm1', category:'Wedding', sub:'Muslim', style:'arabesque',
  title:'Arabesque Elegance', desc:'Islamic geometry · Emerald & gold · Stars',
  bg1:'#003300', bg2:'#001200', accent:'#D4AF37', text:'#F5E0A0',
  introText:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', namesFont:'Cinzel',
  events:['Nikah Ceremony','Walima Reception'],
  music:'serene', tGrad:'radial-gradient(circle at 50% 30%,#004d00,#002600 55%,#001200)', tIcon:'☪️' },

{ id:'wm2', category:'Wedding', sub:'Muslim', style:'celestial',
  title:'Celestial Night', desc:'Starry sky · Crescent moon · Gold shimmer',
  bg1:'#0a0a2e', bg2:'#050515', accent:'#D4AF37', text:'#F0E0B0',
  introText:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', namesFont:'Cinzel',
  events:['Nikah Ceremony','Walima Reception'],
  music:'serene', tGrad:'radial-gradient(ellipse at 60% 20%,#1a1a4e,#0a0a2e 55%,#02020f)', tIcon:'🌙' },

{ id:'wm3', category:'Wedding', sub:'Muslim', style:'arabesque',
  title:'Royal Garden', desc:'Lush emerald · Ornate calligraphy · Warm gold',
  bg1:'#005000', bg2:'#002200', accent:'#FFD700', text:'#FFF5C0',
  introText:'السَّلَامُ عَلَيْكُمْ', namesFont:'Cinzel',
  events:['Nikah Ceremony','Walima Reception'],
  music:'serene', tGrad:'linear-gradient(135deg,#004500,#005a00 45%,#002800)', tIcon:'🌿' },

// ===== WEDDING – CHRISTIAN =====
{ id:'wc1', category:'Wedding', sub:'Christian', style:'floral',
  title:'Garden Chapel', desc:'Floating petals · Lavender & ivory · Soft light',
  bg1:'#faf5ff', bg2:'#ede0ff', accent:'#7c3aed', text:'#3b0080',
  introText:"Together in God's Love", namesFont:'Great Vibes',
  events:['Wedding Ceremony','Reception'],
  music:'romance', tGrad:'linear-gradient(135deg,#faf5ff,#e9d5ff 50%,#c4b5fd)', tIcon:'⛪' },

{ id:'wc2', category:'Wedding', sub:'Christian', style:'minimal',
  title:'Cathedral Grace', desc:'Classic dark · Gold cross · Timeless elegance',
  bg1:'#1a1510', bg2:'#0d0b07', accent:'#C9A84C', text:'#FFF8E8',
  introText:'Two Souls, One Love', namesFont:'Cormorant Garamond',
  events:['Wedding Ceremony','Reception'],
  music:'romance', tGrad:'linear-gradient(160deg,#2a2218,#1a1510 50%,#0d0b07)', tIcon:'✝️' },

{ id:'wc3', category:'Wedding', sub:'Christian', style:'botanical',
  title:'Boho Rustic', desc:'Botanical prints · Earthy warmth · Wildflower charm',
  bg1:'#2d1f0e', bg2:'#150e06', accent:'#D4945A', text:'#FDF0E0',
  introText:'Forever & Always', namesFont:'Great Vibes',
  events:['Wedding Ceremony','Reception'],
  music:'romance', tGrad:'linear-gradient(135deg,#3d2a14,#2d1f0e 50%,#150e06)', tIcon:'🌿' },

// ===== WEDDING – SIKH =====
{ id:'ws1', category:'Wedding', sub:'Sikh', style:'saffron',
  title:'Anand Karaj', desc:'Sacred saffron · Ek Onkar · Divine gold rays',
  bg1:'#FF8C00', bg2:'#c05000', accent:'#000080', text:'#000055',
  introText:'ੴ ਸਤਿ ਨਾਮੁ', namesFont:'Cinzel',
  events:['Anand Karaj','Reception'],
  music:'indian', tGrad:'linear-gradient(135deg,#FF8C00,#FFA500 45%,#FF6600)', tIcon:'🪯' },

{ id:'ws2', category:'Wedding', sub:'Sikh', style:'saffron',
  title:'Golden Blessings', desc:'Radiant gold · Sacred geometry · Timeless grace',
  bg1:'#B8860B', bg2:'#6a4a00', accent:'#FFFFFF', text:'#FFFFFF',
  introText:'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ', namesFont:'Cinzel',
  events:['Anand Karaj','Reception'],
  music:'indian', tGrad:'linear-gradient(135deg,#8B6914,#D4AF37 50%,#8B6914)', tIcon:'⭐' },

// ===== WEDDING – SOUTH INDIAN =====
{ id:'wsi1', category:'Wedding', sub:'South Indian', style:'mandala',
  title:'Kolam Celebration', desc:'Temple gold · Silk traditions · Classical grandeur',
  bg1:'#8B0000', bg2:'#3a0000', accent:'#FFD700', text:'#FFE57A',
  introText:'நலம் வாழ்க', namesFont:'Cinzel',
  events:['Muhurtham','Nalangu','Reception'],
  music:'indian', tGrad:'radial-gradient(circle at 50% 50%,#A00000,#700000 55%,#3a0000)', tIcon:'🪔' },

{ id:'wsi2', category:'Wedding', sub:'South Indian', style:'floral',
  title:'Jasmine & Gold', desc:'Jasmine flowers · Turmeric yellow · Rich heritage',
  bg1:'#fef3c7', bg2:'#fde68a', accent:'#92400e', text:'#78350f',
  introText:'ஶ்ரீ கணேசாய நமஃ', namesFont:'Great Vibes',
  events:['Muhurtham','Nalangu','Reception'],
  music:'indian', tGrad:'linear-gradient(135deg,#fef3c7,#fde68a 50%,#f59e0b)', tIcon:'🌺' },

// ===== WEDDING – WESTERN =====
{ id:'ww1', category:'Wedding', sub:'Western', style:'minimal',
  title:'Modern Luxe', desc:'Dark luxury · Gold type · Contemporary chic',
  bg1:'#121212', bg2:'#050505', accent:'#C9A84C', text:'#F5F5F5',
  introText:'A Love Story Begins', namesFont:'Cormorant Garamond',
  events:['Ceremony','Cocktail Hour','Reception'],
  music:'romance', tGrad:'linear-gradient(135deg,#1e1e1e,#0d0d0d 50%,#000)', tIcon:'💍' },

{ id:'ww2', category:'Wedding', sub:'Western', style:'romance',
  title:'Vintage Romance', desc:'Floating hearts · Burgundy · Rose gold warmth',
  bg1:'#4a0e1e', bg2:'#1a0008', accent:'#D4896A', text:'#FFE0D0',
  introText:'Two Hearts, One Forever', namesFont:'Great Vibes',
  events:['Ceremony','Cocktail Hour','Reception'],
  music:'romance', tGrad:'radial-gradient(circle at 40% 40%,#6B0F1F,#4a0e1e 55%,#1a0008)', tIcon:'❤️' },

{ id:'ww3', category:'Wedding', sub:'Western', style:'celestial',
  title:'Midnight Stars', desc:'Celestial night · Starfield · Silver elegance',
  bg1:'#0c1445', bg2:'#05081f', accent:'#A8D8FF', text:'#E0EFFF',
  introText:'Under the Same Stars', namesFont:'Cormorant Garamond',
  events:['Ceremony','Cocktail Hour','Reception'],
  music:'romance', tGrad:'radial-gradient(ellipse at 50% 20%,#1a2060,#0c1445 55%,#05081f)', tIcon:'🌟' },

// ===== BIRTHDAY =====
{ id:'bd1', category:'Birthday', sub:'All', style:'confetti',
  title:'Confetti Blast', desc:'Rainbow confetti · Balloons · Pure joy',
  bg1:'#4C1D95', bg2:'#1E1B4B', accent:'#FCD34D', text:'#FFFFFF',
  introText:"It's Time to Celebrate!", namesFont:'Great Vibes',
  events:['Birthday Party'], music:'happy',
  tGrad:'linear-gradient(135deg,#7C3AED,#EC4899 50%,#F59E0B)', tIcon:'🎉' },

{ id:'bd2', category:'Birthday', sub:'All', style:'galaxy',
  title:'Galaxy Birthday', desc:'Space nebula · Orbiting stars · Cosmic magic',
  bg1:'#0f0c29', bg2:'#000010', accent:'#00D4FF', text:'#E0F7FF',
  introText:"You're a Star!", namesFont:'Cinzel',
  events:['Birthday Celebration'], music:'epic',
  tGrad:'radial-gradient(ellipse at 30% 30%,#302b63,#0f0c29 55%,#000)', tIcon:'🌌' },

{ id:'bd3', category:'Birthday', sub:'All', style:'botanical',
  title:'Tropical Paradise', desc:'Palm vibes · Lush greens · Festival energy',
  bg1:'#064e3b', bg2:'#012a1a', accent:'#F59E0B', text:'#ECFDF5',
  introText:'Paradise Awaits!', namesFont:'Great Vibes',
  events:['Birthday Bash'], music:'happy',
  tGrad:'linear-gradient(135deg,#064e3b,#065f46 45%,#022c22)', tIcon:'🌴' },

{ id:'bd4', category:'Birthday', sub:'All', style:'minimal',
  title:'Elegant Soirée', desc:'Dark luxury · Gold shimmer · Sophisticated',
  bg1:'#0f0f23', bg2:'#080815', accent:'#FFD700', text:'#F5F5F5',
  introText:'An Evening to Remember', namesFont:'Cormorant Garamond',
  events:['Birthday Celebration'], music:'epic',
  tGrad:'linear-gradient(135deg,#1c1c2e,#0f3460 50%,#0f0f23)', tIcon:'✨' },

{ id:'bd5', category:'Birthday', sub:'All', style:'confetti',
  title:'Kids Rainbow Party', desc:'Rainbow colors · Fun shapes · Pure happiness',
  bg1:'#BE185D', bg2:'#831843', accent:'#FEF08A', text:'#FFFFFF',
  introText:"Let's Party! 🎈", namesFont:'Great Vibes',
  events:['Birthday Party'], music:'happy',
  tGrad:'linear-gradient(135deg,#FF6B6B,#FEE140 50%,#30C5FF)', tIcon:'🎈' },

{ id:'bd6', category:'Birthday', sub:'All', style:'romance',
  title:'Candlelit Gala', desc:'Candlelit · Hearts · Intimate celebration',
  bg1:'#3a0a15', bg2:'#180507', accent:'#FF8FAB', text:'#FFE0EA',
  introText:'Celebrating You Today', namesFont:'Great Vibes',
  events:['Birthday Dinner'], music:'romance',
  tGrad:'radial-gradient(circle at 40% 30%,#5a1020,#3a0a15 55%,#180507)', tIcon:'🌹' },

// ===== ANNIVERSARY =====
{ id:'an1', category:'Anniversary', sub:'All', style:'romance',
  title:'Timeless Romance', desc:'Floating hearts · Deep rose · Golden memories',
  bg1:'#4a0e1e', bg2:'#1a0008', accent:'#FFD700', text:'#FFE0D0',
  introText:'Celebrating Years of Love', namesFont:'Great Vibes',
  events:['Anniversary Dinner','Celebration'], music:'romance',
  tGrad:'radial-gradient(circle at 40% 30%,#7B1535,#4a0e1e 55%,#1a0008)', tIcon:'💕' },

{ id:'an2', category:'Anniversary', sub:'All', style:'minimal',
  title:'Silver Jubilee', desc:'Silver metallic · 25 years · Pure elegance',
  bg1:'#1a1a2e', bg2:'#0d0d1f', accent:'#C8C8E8', text:'#E8E8FF',
  introText:'25 Beautiful Years Together', namesFont:'Cormorant Garamond',
  events:['Silver Jubilee Celebration'], music:'romance',
  tGrad:'linear-gradient(135deg,#1a1a2e,#2d2d4e 50%,#1a1a2e)', tIcon:'🥂' },

{ id:'an3', category:'Anniversary', sub:'All', style:'saffron',
  title:'Golden Jubilee', desc:'50 golden years · Radiant glory · Majestic',
  bg1:'#78350f', bg2:'#3a1a03', accent:'#FFD700', text:'#FEF3C7',
  introText:'50 Golden Years of Love', namesFont:'Cinzel',
  events:['Golden Jubilee Celebration'], music:'epic',
  tGrad:'linear-gradient(135deg,#92400e,#B45309 50%,#78350f)', tIcon:'👑' },

{ id:'an4', category:'Anniversary', sub:'All', style:'celestial',
  title:'Written in Stars', desc:'Starry night · Infinite love · Cosmic romance',
  bg1:'#0a0a2e', bg2:'#020210', accent:'#D4AF37', text:'#E8E0FF',
  introText:'Written in the Stars', namesFont:'Great Vibes',
  events:['Anniversary Celebration'], music:'romance',
  tGrad:'radial-gradient(ellipse at 50% 20%,#1a1a4e,#0a0a2e 55%,#000010)', tIcon:'⭐' },

{ id:'an5', category:'Anniversary', sub:'All', style:'botanical',
  title:'Garden Forever', desc:'Lush greens · Botanical · Organic love',
  bg1:'#14532d', bg2:'#052e16', accent:'#FDE68A', text:'#F0FDF4',
  introText:'Growing Together Always', namesFont:'Great Vibes',
  events:['Anniversary Garden Party'], music:'serene',
  tGrad:'linear-gradient(135deg,#15803d,#14532d 50%,#052e16)', tIcon:'🌻' },

// ===== NEW YEAR =====
{ id:'ny1', category:'New Year', sub:'All', style:'fireworks',
  title:'Fireworks Spectacular', desc:'CSS fireworks · Midnight sky · Explosive',
  bg1:'#000000', bg2:'#04040f', accent:'#FFD700', text:'#FFFFFF',
  introText:'Happy New Year!', namesFont:'Cinzel',
  events:["New Year's Eve Party","New Year Celebration"], music:'bells',
  tGrad:'radial-gradient(circle at 50% 60%,#1a1a00,#050520 50%,#000)', tIcon:'🎆' },

{ id:'ny2', category:'New Year', sub:'All', style:'celestial',
  title:'Golden Countdown', desc:'Gold sparkles · Champagne toast · New beginnings',
  bg1:'#1a0d00', bg2:'#080500', accent:'#FFD700', text:'#FFF3C0',
  introText:'Ring in the New Year!', namesFont:'Great Vibes',
  events:["New Year's Eve Gala"], music:'bells',
  tGrad:'linear-gradient(135deg,#2d1a00,#1a0d00 50%,#080500)', tIcon:'🥂' },

{ id:'ny3', category:'New Year', sub:'All', style:'fireworks',
  title:'Midnight Blue', desc:'Deep blue · Silver stars · Elegant countdown',
  bg1:'#0a192f', bg2:'#020c1b', accent:'#64FFDA', text:'#E6F1FF',
  introText:'A New Chapter Begins', namesFont:'Cinzel',
  events:["New Year's Eve Party"], music:'bells',
  tGrad:'linear-gradient(180deg,#0a192f,#020c1b)', tIcon:'🌠' },

// ===== HOUSEWARMING =====
{ id:'hm1', category:'Housewarming', sub:'All', style:'botanical',
  title:'Warm Welcome', desc:'Terracotta · Falling leaves · Cozy new home',
  bg1:'#7C2D12', bg2:'#3a0e03', accent:'#FED7AA', text:'#FEF3C7',
  introText:'Welcome to Our New Home!', namesFont:'Great Vibes',
  events:['Housewarming Celebration'], music:'serene',
  tGrad:'linear-gradient(135deg,#9a3412,#7C2D12 50%,#3a0e03)', tIcon:'🏡' },

{ id:'hm2', category:'Housewarming', sub:'All', style:'botanical',
  title:'Botanical Bliss', desc:'Lush greens · Botanical prints · Fresh beginnings',
  bg1:'#14532d', bg2:'#052e16', accent:'#86EFAC', text:'#F0FDF4',
  introText:'Our Roots, Our Home', namesFont:'Great Vibes',
  events:['Housewarming Party'], music:'serene',
  tGrad:'linear-gradient(135deg,#15803d,#14532d 50%,#052e16)', tIcon:'🌿' },

{ id:'hm3', category:'Housewarming', sub:'All', style:'minimal',
  title:'Modern Abode', desc:'Clean contemporary · Sky blue · Sophisticated',
  bg1:'#1e293b', bg2:'#0a1020', accent:'#38BDF8', text:'#F0F8FF',
  introText:'Home is Where Love Lives', namesFont:'Cinzel',
  events:['Housewarming Celebration'], music:'serene',
  tGrad:'linear-gradient(135deg,#1e293b,#334155 50%,#0a1020)', tIcon:'🏠' },

// ===== BABY SHOWER =====
{ id:'bs1', category:'Baby Shower', sub:'All', style:'pastel',
  title:'Pastel Dreams', desc:'Soft purples · Floating stars · Gentle magic',
  bg1:'#f3e8ff', bg2:'#e9d5ff', accent:'#7c3aed', text:'#4c1d95',
  introText:'A New Little One is Coming!', namesFont:'Great Vibes',
  events:['Baby Shower Celebration'], music:'serene',
  tGrad:'linear-gradient(135deg,#fdf4ff,#f0abfc 50%,#e879f9)', tIcon:'👶' },

{ id:'bs2', category:'Baby Shower', sub:'All', style:'pastel',
  title:'Baby Blue Sky', desc:'Sky blue clouds · Dreamy · He\'s on the way!',
  bg1:'#dbeafe', bg2:'#bfdbfe', accent:'#1d4ed8', text:'#1e3a8a',
  introText:'A Baby Boy is on the Way!', namesFont:'Great Vibes',
  events:['Baby Shower Party'], music:'serene',
  tGrad:'linear-gradient(180deg,#eff6ff,#bfdbfe 50%,#93c5fd)', tIcon:'💙' },

{ id:'bs3', category:'Baby Shower', sub:'All', style:'botanical',
  title:'Jungle Safari', desc:'Wild animals · Safari green · Adventure awaits',
  bg1:'#1a3a1a', bg2:'#0d1f0d', accent:'#86EFAC', text:'#F0FFF0',
  introText:'A Wild New Adventure Begins!', namesFont:'Great Vibes',
  events:['Baby Shower Safari Party'], music:'happy',
  tGrad:'linear-gradient(135deg,#2d5a27,#1a3a1a 50%,#0d1f0d)', tIcon:'🦁' },

{ id:'bs4', category:'Baby Shower', sub:'All', style:'pastel',
  title:'Pink Blossom', desc:'Blush pink · Floral bouquets · She\'s arriving!',
  bg1:'#fce7f3', bg2:'#fbcfe8', accent:'#be185d', text:'#831843',
  introText:'A Baby Girl is on the Way!', namesFont:'Great Vibes',
  events:['Baby Shower Party'], music:'serene',
  tGrad:'linear-gradient(135deg,#fce7f3,#fbcfe8 50%,#f9a8d4)', tIcon:'🌸' },
];

// ---- APP STATE ----
let state = {
    view:'dashboard', category:null, subFilter:'All',
    theme:null, mainNames:'', eventsList:[],
    musicMode:'preset', musicPreset:'indian',
    musicUrl:'', musicFile:null, musicBase64:null, musicBlobUrl:null,
    outputTab:'video',
};

const $content = document.getElementById('contentArea');
const $title   = document.getElementById('pageTitle');

function setContent(html) { $content.innerHTML = `<div class="fade-in-content">${html}</div>`; }
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
}
function setActiveNav(target) {
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    const el = document.querySelector(`.menu-item[data-target="${target}"]`);
    if(el) el.classList.add('active');
}

// ---- NAVIGATION ----
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const t = e.currentTarget.getAttribute('data-target');
        if(t === 'home') { setActiveNav('home'); renderDashboard(); }
        else if(t === 'photographers') { setActiveNav('photographers'); typeof renderPhotographers === 'function' && renderPhotographers(); }
        else { setActiveNav(t); state.category = t; state.subFilter = 'All'; renderThemes(); }
    });
});
document.getElementById('menuToggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});

// ---- DASHBOARD ----
const CATEGORY_META = {
    'Wedding':      { icon:'fa-ring',             color:'#FF6B8A', desc:'Multi-cultural invites with rich regional themes & traditions' },
    'Birthday':     { icon:'fa-cake-candles',     color:'#FBBF24', desc:'Magical animated cards for every birthday celebration' },
    'Anniversary':  { icon:'fa-heart',            color:'#F87171', desc:'Celebrate milestones from silver to golden jubilee' },
    'New Year':     { icon:'fa-champagne-glasses', color:'#34D399', desc:'Ring in the new year with fireworks & sparkle' },
    'Housewarming': { icon:'fa-house-chimney',    color:'#FB923C', desc:'Welcome loved ones to your beautiful new home' },
    'Baby Shower':  { icon:'fa-baby',             color:'#A78BFA', desc:'Celebrate the arrival of your little bundle of joy' },
};

const CATEGORY_CHARS = {
    'Wedding':'hindu', 'Birthday':'birthday', 'Anniversary':'anniversary',
    'New Year':'newYear', 'Housewarming':'housewarming', 'Baby Shower':'babyShower',
};

function renderDashboard() {
    state.view = 'dashboard';
    $title.innerHTML = '<i class="fa-solid fa-border-all"></i> Select Event Category';
    setActiveNav('home');
    const cards = Object.entries(CATEGORY_META).map(([cat, meta]) => {
        const count = ALL_TEMPLATES.filter(t => t.category === cat).length;
        const charKey = CATEGORY_CHARS[cat] || 'hindu';
        const charSVG = CHARACTERS[charKey] || '';
        return `<div class="cat-card" onclick="openCategory('${cat}')">
            <div class="cat-char-bg">${charSVG}</div>
            <div class="cat-card-badge">${count} templates</div>
            <div class="cat-card-icon" style="color:${meta.color};background:${meta.color}20;border-color:${meta.color}40;">
                <i class="fa-solid ${meta.icon}"></i>
            </div>
            <h3>${cat}</h3><p>${meta.desc}</p>
        </div>`;
    }).join('');
    setContent(`<div class="category-grid">${cards}</div>`);
}
window.openCategory = cat => { state.category = cat; state.subFilter = 'All'; setActiveNav(cat); renderThemes(); };

// ---- THEME GRID ----
function buildThumbInner(t) {
    const charKey = getCharacterKey(t);
    const charSVG = CHARACTERS[charKey] || '';

    // Cultural motif badge top-left (Ganesha, crescent, cross, Khanda)
    let motifHTML = '';
    if (charKey === 'hindu' || charKey === 'southIndian') {
        motifHTML = `<div class="th-motif">${RITUAL_MOTIFS.hindu.symbol}</div>`;
    } else if (charKey === 'sikh') {
        motifHTML = `<div class="th-motif"><span style="font-size:34px;color:#FFD700;text-shadow:0 0 12px rgba(255,200,0,.6);">☬</span></div>`;
    } else if (charKey === 'muslim') {
        motifHTML = `<div class="th-motif"><span style="font-size:30px;color:#D4AF37;text-shadow:0 0 12px rgba(212,175,55,.6);">☪</span></div>`;
    } else if (charKey === 'christian') {
        motifHTML = `<div class="th-motif"><span style="font-size:28px;color:#C9A84C;text-shadow:0 0 10px rgba(201,168,76,.5);">✝️</span></div>`;
    }

    return `<div class="th-pat"></div>
        ${motifHTML}
        <div class="th-char">${charSVG}</div>
        <div class="th-fade"></div>
        <span class="th-badge">${t.tIcon}</span>
        <div class="theme-thumb-ring" style="width:62px;height:62px;top:8px;right:8px;left:auto;animation-duration:10s;border-color:rgba(255,255,255,0.1);"></div>`;
}

function renderThemes() {
    state.view = 'themes';
    $title.innerHTML = `<i class="fa-solid fa-palette"></i> ${state.category} Templates`;
    const subs = ['All', ...new Set(ALL_TEMPLATES.filter(t => t.category === state.category).map(t => t.sub))];
    const filtersHTML = subs.length > 2 ? `<div class="filters">${subs.map(s =>
        `<button class="filter-btn ${state.subFilter===s?'active':''}" onclick="setSubFilter('${s}')">${s}</button>`
    ).join('')}</div>` : '';

    const filtered = ALL_TEMPLATES.filter(t =>
        t.category === state.category && (state.subFilter==='All' || t.sub===state.subFilter)
    );

    const cards = filtered.map(t => `
        <div class="theme-card tp-${t.style||'minimal'}" onclick="selectTheme('${t.id}')">
            <div class="theme-thumb" style="background:${t.tGrad};">
                ${buildThumbInner(t)}
            </div>
            <div class="theme-info">
                <div class="theme-title">${t.title}</div>
                <div class="theme-desc">${t.desc}</div>
            </div>
            <div class="theme-overlay">
                <button class="select-btn"><i class="fa-solid fa-wand-magic-sparkles"></i> Use This Template</button>
                <div style="font-size:0.78rem;color:rgba(255,255,255,0.7);">${t.sub !== 'All' ? t.sub : t.category}</div>
            </div>
        </div>`).join('');

    setContent(`
        <div class="page-header">
            <h2>${state.category} Invitation Templates</h2>
            <p>Each template generates both a printable <strong>Card</strong> and an animated <strong>Video</strong></p>
        </div>
        ${filtersHTML}
        <div class="theme-grid">${cards}</div>`);
}
window.setSubFilter = s => { state.subFilter = s; renderThemes(); };

window.selectTheme = id => {
    state.theme = ALL_TEMPLATES.find(t => t.id === id);
    state.eventsList = state.theme.events.map(name => ({
        name, date:'Saturday, 14th November 2026', venue:'The Grand Palace Hotel, Mumbai'
    }));
    state.mainNames = state.category === 'Birthday' ? 'Priya' :
                      state.category === 'Baby Shower' ? 'The Sharma Family' :
                      state.category === 'Housewarming' ? 'The Mehta Family' :
                      'Aarav & Diya';
    state.musicPreset = state.theme.music || 'indian';
    renderForm();
};

// ---- FORM ----
function renderForm() {
    state.view = 'form';
    $title.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Customize: ${state.theme.title}`;

    const eventsHTML = state.eventsList.map((ev, i) => `
        <div class="event-item" id="ei_${i}">
            <div class="event-item-header">
                <span class="event-item-label">Screen ${i+1}</span>
                <button type="button" class="remove-btn" onclick="removeEvent(${i})"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="event-fields">
                <input type="text" class="form-control" id="ev_n_${i}" value="${ev.name}" placeholder="Event name">
                <input type="text" class="form-control" id="ev_d_${i}" value="${ev.date}" placeholder="Date & time">
                <input type="text" class="form-control event-venue" id="ev_v_${i}" value="${ev.venue}" placeholder="Venue / location">
            </div>
        </div>`).join('');

    const presetsHTML = MUSIC_PRESETS.map(p => `
        <label class="music-preset-item ${state.musicPreset===p.id?'selected':''}">
            <input type="radio" name="musicPreset" value="${p.id}" ${state.musicPreset===p.id?'checked':''}
                onchange="state.musicPreset=this.value;document.querySelectorAll('.music-preset-item').forEach(el=>el.classList.remove('selected'));this.closest('.music-preset-item').classList.add('selected')">
            ${p.label}
        </label>`).join('');

    setContent(`
        <div class="form-wrap">
            <div class="form-header">
                <div class="preview-swatch" style="background:${state.theme.tGrad};">${state.theme.tIcon}</div>
                <div><h2>${state.theme.title}</h2><p>${state.theme.desc}</p></div>
            </div>
            <form id="buildForm">
                <div class="form-card">
                    <div class="form-card-title"><i class="fa-solid fa-pen-nib"></i> Main Title / Names</div>
                    <div class="form-group">
                        <label>Names or title shown on the invitation</label>
                        <input type="text" id="mainNames" class="form-control" value="${state.mainNames}" placeholder="e.g. Aarav & Diya" required>
                    </div>
                </div>

                <div class="form-card">
                    <div class="form-card-title"><i class="fa-solid fa-layer-group"></i> Invitation Screens</div>
                    <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:1rem;">Each screen appears as a slide in the video and a section in the card.</p>
                    <div class="events-list" id="eventsList">${eventsHTML}</div>
                    <button type="button" class="btn-add" onclick="addEvent()"><i class="fa-solid fa-plus"></i> Add Another Screen</button>
                </div>

                <div class="form-card">
                    <div class="form-card-title"><i class="fa-solid fa-music"></i> Background Music (Video only)</div>
                    <div class="music-tabs">
                        <button type="button" class="music-tab ${state.musicMode==='preset'?'active':''}" onclick="switchMusicTab('preset')">🎵 Presets</button>
                        <button type="button" class="music-tab ${state.musicMode==='url'?'active':''}" onclick="switchMusicTab('url')">🔗 Custom URL</button>
                        <button type="button" class="music-tab ${state.musicMode==='upload'?'active':''}" onclick="switchMusicTab('upload')">📁 Upload File</button>
                    </div>
                    <div class="music-panel ${state.musicMode==='preset'?'active':''}" id="mpPreset">
                        <div class="music-preset-grid">${presetsHTML}</div>
                    </div>
                    <div class="music-panel ${state.musicMode==='url'?'active':''}" id="mpUrl">
                        <input type="text" id="musicUrlInput" class="form-control" value="${state.musicUrl}" placeholder="https://example.com/music.mp3">
                    </div>
                    <div class="music-panel ${state.musicMode==='upload'?'active':''}" id="mpUpload">
                        <div class="upload-zone ${state.musicFile?'has-file':''}" id="uploadZone">
                            <input type="file" id="musicFileInput" accept="audio/*" onchange="handleMusicUpload(this)">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <p>Click or drag to upload MP3 / M4A / WAV</p>
                            <div class="upload-filename" id="uploadFilename">${state.musicFile?state.musicFile.name:''}</div>
                        </div>
                        <p style="color:var(--text-secondary);font-size:0.78rem;margin-top:0.6rem;">Music is embedded in the downloaded HTML file.</p>
                    </div>
                </div>

                <div class="btn-group">
                    <button type="button" class="btn btn-secondary" onclick="renderThemes()"><i class="fa-solid fa-arrow-left"></i> Back</button>
                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-wand-magic-sparkles"></i> Generate Card & Video</button>
                </div>
            </form>
        </div>`);

    document.getElementById('buildForm').addEventListener('submit', e => {
        e.preventDefault();
        syncFormState();
        renderLoading();
        if(state.musicMode === 'upload' && state.musicFile && !state.musicBase64) {
            const reader = new FileReader();
            reader.onload = ev => { state.musicBase64 = ev.target.result; setTimeout(renderPreview, 800); };
            reader.readAsDataURL(state.musicFile);
        } else {
            setTimeout(renderPreview, 1200);
        }
    });
}

function syncFormState() {
    state.mainNames = document.getElementById('mainNames').value;
    state.eventsList = state.eventsList.map((ev, i) => ({
        name:  document.getElementById(`ev_n_${i}`)?.value || ev.name,
        date:  document.getElementById(`ev_d_${i}`)?.value || ev.date,
        venue: document.getElementById(`ev_v_${i}`)?.value || ev.venue,
    }));
    if(state.musicMode === 'url') state.musicUrl = document.getElementById('musicUrlInput')?.value || '';
    if(state.musicMode === 'preset') {
        const sel = document.querySelector('input[name="musicPreset"]:checked');
        if(sel) state.musicPreset = sel.value;
    }
}
window.switchMusicTab = mode => {
    state.musicMode = mode;
    document.querySelectorAll('.music-tab').forEach((b,i) => b.classList.toggle('active', ['preset','url','upload'][i]===mode));
    document.querySelectorAll('.music-panel').forEach((p,i) => p.classList.toggle('active', ['preset','url','upload'][i]===mode));
};
window.addEvent = () => { syncFormState(); state.eventsList.push({name:'New Event',date:'',venue:''}); renderForm(); };
window.removeEvent = idx => { syncFormState(); state.eventsList.splice(idx,1); renderForm(); };
window.handleMusicUpload = input => {
    if(input.files[0]) {
        state.musicFile = input.files[0]; state.musicBase64 = null;
        state.musicBlobUrl = URL.createObjectURL(input.files[0]);
        document.getElementById('uploadFilename').textContent = input.files[0].name;
        document.getElementById('uploadZone').classList.add('has-file');
    }
};

// ---- LOADING ----
function renderLoading() {
    $title.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating...`;
    setContent(`<div class="loading-screen">
        <div class="loading-ring"></div>
        <h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;">Crafting Your Invitation</h2>
        <p style="color:var(--text-secondary);">Building card & video with cultural motifs…</p>
    </div>`);
}

// ---- PREVIEW (TABBED) ----
function renderPreview() {
    state.view = 'preview';
    $title.innerHTML = `<i class="fa-solid fa-clapperboard"></i> Card & Video Ready`;
    const videoHTML = buildVideoHTML();
    const cardHTML  = buildCardHTML();
    window._videoHTML = videoHTML;
    window._cardHTML  = cardHTML;

    const panelHTML = tab => {
        const videoActive = tab === 'video';
        return `
        <div class="output-panel ${videoActive?'active':''}" id="panelVideo" style="${videoActive?'':'display:none;'}">
            <div class="preview-panel">
                <h3><i class="fa-solid fa-film"></i> Video</h3>
                <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.6;">Click <strong>▶ Play Invitation</strong> inside the frame to start.</p>
                <div class="preview-actions">
                    <button class="btn btn-primary" onclick="downloadFile('video')"><i class="fa-solid fa-download"></i> Download Video HTML</button>
                    <button class="btn btn-secondary" onclick="openFullscreen()"><i class="fa-solid fa-expand"></i> Fullscreen</button>
                    <button class="btn btn-secondary" onclick="copyShareLink('video')"><i class="fa-solid fa-link"></i> Copy Share Link</button>
                    <button class="btn btn-secondary" onclick="renderForm()"><i class="fa-solid fa-pen-to-square"></i> Edit Details</button>
                </div>
            </div>
            <div class="iframe-wrap">
                <div class="iframe-toolbar">
                    <button class="iframe-btn" onclick="restartVideo()"><i class="fa-solid fa-rotate-right"></i> Restart</button>
                    <button class="iframe-btn" onclick="openFullscreen()"><i class="fa-solid fa-expand"></i></button>
                </div>
                <iframe id="videoPreview" srcdoc="${escapeForSrcdoc(videoHTML)}"></iframe>
            </div>
        </div>
        <div class="output-panel ${!videoActive?'active':''}" id="panelCard" style="${!videoActive?'':'display:none;'}">
            <div class="preview-panel">
                <h3><i class="fa-solid fa-id-card"></i> Card</h3>
                <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.6;">A beautifully designed digital invitation card with cultural motifs, characters &amp; event details.</p>
                <div class="preview-actions">
                    <button class="btn btn-primary" onclick="downloadFile('card')"><i class="fa-solid fa-download"></i> Download Card HTML</button>
                    <button class="btn btn-secondary" onclick="openCardFullscreen()"><i class="fa-solid fa-expand"></i> Fullscreen</button>
                    <button class="btn btn-secondary" onclick="copyShareLink('card')"><i class="fa-solid fa-link"></i> Copy Share Link</button>
                    <button class="btn btn-secondary" onclick="renderForm()"><i class="fa-solid fa-pen-to-square"></i> Edit Details</button>
                </div>
            </div>
            <div class="card-preview-wrap">
                <iframe id="cardPreview" srcdoc="${escapeForSrcdoc(cardHTML)}"></iframe>
            </div>
        </div>`;
    };

    setContent(`
        <div class="output-tabs">
            <button class="output-tab ${state.outputTab==='video'?'active':''}" onclick="switchOutputTab('video')">
                <i class="fa-solid fa-film"></i> Animated Video
            </button>
            <button class="output-tab ${state.outputTab==='card'?'active':''}" onclick="switchOutputTab('card')">
                <i class="fa-solid fa-id-card"></i> Invitation Card
            </button>
        </div>
        ${panelHTML(state.outputTab)}`);
}

window.switchOutputTab = tab => {
    state.outputTab = tab;
    document.querySelectorAll('.output-tab').forEach((b,i) => b.classList.toggle('active', ['video','card'][i]===tab));
    document.getElementById('panelVideo').style.display = tab==='video'?'':'none';
    document.getElementById('panelCard').style.display  = tab==='card'?'':'none';
    document.getElementById('panelVideo').classList.toggle('active', tab==='video');
    document.getElementById('panelCard').classList.toggle('active', tab==='card');
};

function escapeForSrcdoc(html) {
    return html.replace(/&/g,'&amp;').replace(/"/g,'&quot;');
}

window.restartVideo = () => {
    const f = document.getElementById('videoPreview');
    f.srcdoc = ''; setTimeout(() => { f.srcdoc = escapeForSrcdoc(window._videoHTML); }, 50);
};

// Fullscreen
window.openFullscreen = () => {
    document.getElementById('fullscreenModal').classList.remove('hidden');
    document.getElementById('fsIframe').srcdoc = window._videoHTML;
};
window.openCardFullscreen = () => {
    document.getElementById('fullscreenModal').classList.remove('hidden');
    document.getElementById('fsIframe').srcdoc = window._cardHTML;
};
window.closeFullscreen = () => {
    document.getElementById('fullscreenModal').classList.add('hidden');
    document.getElementById('fsIframe').srcdoc = '';
};

// Download
window.downloadFile = type => {
    const html = type === 'video' ? window._videoHTML : window._cardHTML;
    const fname = `${state.theme.title.replace(/\s+/g,'-')}-${type}.html`;
    const blob = new Blob([html], {type:'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=fname;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    showToast(`✓ ${type === 'video' ? 'Video' : 'Card'} downloaded!`);
};

// Share link
window.copyShareLink = type => {
    try {
        const html = type === 'video' ? window._videoHTML : window._cardHTML;
        const encoded = btoa(unescape(encodeURIComponent(html)));
        navigator.clipboard.writeText(`data:text/html;base64,${encoded}`)
            .then(() => showToast('✓ Link copied to clipboard!'));
    } catch(e) { showToast('File too large for link. Please download instead.'); }
};

// ============================================================
// MUSIC HELPER
// ============================================================
function getMusicSrc() {
    if(state.musicMode==='upload' && state.musicBase64) return state.musicBase64;
    if(state.musicMode==='upload' && state.musicBlobUrl) return state.musicBlobUrl;
    if(state.musicMode==='url' && state.musicUrl) return state.musicUrl;
    const p = MUSIC_PRESETS.find(p => p.id===state.musicPreset);
    return p ? p.url : MUSIC_PRESETS[0].url;
}

// ============================================================
// CARD GENERATOR
// ============================================================
function buildCardHTML() {
    const t = state.theme;
    const ritual = getRitualKey(t);
    const charKey = getCharacterKey(t);
    const charSVG = CHARACTERS[charKey] || CHARACTERS.hindu;
    const isDark = isColorDark(t.bg1);
    const cardBg = isDark
        ? `linear-gradient(160deg, ${t.bg1}, ${t.bg2})`
        : `linear-gradient(160deg, ${t.bg1}, ${t.bg2})`;
    const textOnCard = isDark ? t.text : t.accent;
    const secondaryOnCard = isDark ? `${t.text}cc` : `${t.accent}bb`;

    const eventRows = state.eventsList.map(ev => `
        <div class="card-event">
            <div class="card-ev-name">${ev.name}</div>
            <div class="card-ev-detail">${ev.date}</div>
            <div class="card-ev-venue">${ev.venue}</div>
        </div>`).join(`<div class="card-event-divider">✦</div>`);

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${state.mainNames} – ${t.title} Invitation Card</title>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
    background:#1a1a2e;
    display:flex;align-items:flex-start;justify-content:center;
    min-height:100vh;padding:2rem;font-family:'Cinzel',serif;
}
.card{
    width:520px;
    background:${cardBg};
    border-radius:16px;
    border:2px solid ${t.accent}60;
    box-shadow:0 0 60px rgba(0,0,0,0.6),0 0 120px ${t.accent}20,inset 0 0 60px rgba(0,0,0,0.15);
    overflow:hidden;position:relative;
}
/* Corner ornaments */
.corner{position:absolute;font-size:1.8rem;color:${t.accent};opacity:0.5;}
.corner.tl{top:10px;left:10px;}
.corner.tr{top:10px;right:10px;transform:scaleX(-1);}
.corner.bl{bottom:10px;left:10px;transform:scaleY(-1);}
.corner.br{bottom:10px;right:10px;transform:scale(-1,-1);}
/* Border lines */
.card::before{
    content:'';position:absolute;inset:12px;
    border:1px solid ${t.accent}35;border-radius:10px;pointer-events:none;
}

/* --- DEITY HEADER --- */
.deity-section{
    text-align:center;padding:2rem 2rem 1rem;
    background:${isDark?'rgba(0,0,0,0.3)':'rgba(255,255,255,0.2)'};
    border-bottom:1px solid ${t.accent}30;
}
.deity-symbol{margin-bottom:0.8rem;display:flex;justify-content:center;align-items:center;}
.deity-greeting{
    font-family:'Cinzel',serif;font-size:0.9rem;
    letter-spacing:0.12em;color:${t.accent};
    margin-bottom:0.3rem;
}
.deity-sub{font-size:0.72rem;color:${secondaryOnCard};font-style:italic;letter-spacing:0.05em;}

/* --- CHARACTER SECTION --- */
.character-section{
    display:flex;justify-content:center;align-items:flex-end;
    padding:1.5rem 1rem 0.5rem;
    min-height:180px;
}
.character-section svg{filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3));}

/* --- NAMES SECTION --- */
.names-section{text-align:center;padding:1rem 2rem;}
.card-intro{
    font-size:0.75rem;letter-spacing:0.18em;
    color:${secondaryOnCard};margin-bottom:0.5rem;
    text-transform:uppercase;
}
.card-names{
    font-family:'Great Vibes',cursive;
    font-size:clamp(2.8rem,8vw,3.8rem);
    color:${t.accent};line-height:1.1;
    text-shadow:0 0 30px ${t.accent}50;
}
.card-tagline{
    font-size:0.75rem;color:${secondaryOnCard};
    letter-spacing:0.12em;margin-top:0.5rem;font-style:italic;
}

/* --- DIVIDER --- */
.ornate-divider{
    display:flex;align-items:center;gap:0.5rem;
    padding:0 2rem;margin:0.8rem 0;
}
.ornate-divider::before,.ornate-divider::after{
    content:'';flex:1;height:1px;
    background:linear-gradient(90deg,transparent,${t.accent}60,transparent);
}
.ornate-divider span{color:${t.accent};font-size:1rem;}

/* --- EVENTS SECTION --- */
.events-section{padding:0 2rem 1.5rem;}
.card-event{text-align:center;padding:0.8rem 0;}
.card-ev-name{
    font-family:'Great Vibes',cursive;
    font-size:1.8rem;color:${t.accent};
    margin-bottom:0.3rem;
}
.card-ev-detail{
    font-size:0.78rem;color:${textOnCard};
    letter-spacing:0.08em;margin-bottom:0.2rem;
}
.card-ev-venue{
    font-size:0.72rem;color:${secondaryOnCard};
    font-style:italic;line-height:1.4;
}
.card-event-divider{
    text-align:center;color:${t.accent};opacity:0.4;
    font-size:0.7rem;letter-spacing:0.3em;padding:0.3rem 0;
}

/* --- FOOTER --- */
.card-footer{
    text-align:center;padding:1rem 2rem 1.8rem;
    background:${isDark?'rgba(0,0,0,0.25)':'rgba(255,255,255,0.15)'};
    border-top:1px solid ${t.accent}25;
}
.card-footer-text{
    font-size:0.72rem;color:${secondaryOnCard};
    letter-spacing:0.12em;line-height:1.6;
}
.card-footer-emoji{font-size:1.2rem;margin-bottom:0.4rem;}
</style>
</head>
<body>
<div class="card">
    <div class="corner tl">❧</div>
    <div class="corner tr">❧</div>
    <div class="corner bl">❧</div>
    <div class="corner br">❧</div>

    <!-- Deity / Cultural Greeting -->
    <div class="deity-section">
        <div class="deity-symbol">${ritual.symbol}</div>
        <div class="deity-greeting">${ritual.greeting}</div>
        <div class="deity-sub">${ritual.subGreeting}</div>
    </div>

    <!-- Couple / Character Illustration -->
    <div class="character-section">
        ${charSVG}
    </div>

    <!-- Names -->
    <div class="names-section">
        <div class="card-intro">${t.introText}</div>
        <div class="card-names">${state.mainNames}</div>
        <div class="card-tagline">~ ${t.title} ~</div>
    </div>

    <div class="ornate-divider"><span>✦ ✦ ✦</span></div>

    <!-- Event Details -->
    <div class="events-section">${eventRows}</div>

    <!-- Footer -->
    <div class="card-footer">
        <div class="card-footer-emoji">${t.tIcon}</div>
        <div class="card-footer-text">
            We joyfully request the honour of your presence<br>
            and look forward to celebrating with you
        </div>
    </div>
</div>
</body>
</html>`;
}

function isColorDark(hex) {
    if(!hex || !hex.startsWith('#')) return true;
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 < 128;
}

// ============================================================
// VIDEO GENERATOR ENGINE
// ============================================================
function buildVideoHTML() {
    const t = state.theme;
    const musicSrc = getMusicSrc();
    const sd = getStyleData(t, t.style);
    const ritual = getRitualKey(t);
    const charKey = getCharacterKey(t);
    const charSVG = CHARACTERS[charKey] || CHARACTERS.hindu;

    // Slide 0: Cultural deity/motif greeting (Ganesha for Hindu, etc.)
    const deitySlide = `
        <div class="slide" id="s0">
            <div class="deity-bg"></div>
            <div class="slide-inner deity-slide">
                <div class="deity-symbol anim-zoom-in">${ritual.symbol}</div>
                <div class="deity-greeting anim-fade-up delay1">${ritual.greeting}</div>
                <div class="deity-sub anim-fade-up delay2">${ritual.subGreeting}</div>
            </div>
        </div>`;

    // Slide 1: Animated couple/character
    const charSlide = `
        <div class="slide" id="s1">
            <div class="slide-inner char-slide">
                <div class="char-figure anim-bounce-in">${charSVG}</div>
                <div class="main-names anim-fade-up delay2">${state.mainNames}</div>
                <div class="intro-text anim-fade-up delay3">${t.introText}</div>
            </div>
        </div>`;

    // Event slides
    const eventSlides = state.eventsList.map((ev, i) => `
        <div class="slide" id="s${i+2}">
            <div class="slide-inner">
                <div class="event-frame">
                    <div class="ev-name anim-fade-down">${ev.name}</div>
                    <div class="ev-divider anim-fade-up delay1"></div>
                    <div class="ev-date anim-fade-up delay2">${ev.date}</div>
                    <div class="ev-venue anim-fade-up delay3">${ev.venue}</div>
                </div>
            </div>
        </div>`).join('');

    const endSlide = `
        <div class="slide" id="s${state.eventsList.length+2}">
            <div class="slide-inner">
                <div class="end-frame">
                    <div class="end-icon anim-fade-up">${t.tIcon}</div>
                    <div class="end-text anim-fade-up delay1">We look forward to your presence</div>
                    <div class="end-names anim-fade-up delay2">${state.mainNames}</div>
                    <button class="replay-btn anim-fade-up delay3" onclick="location.reload()">↺ Replay</button>
                </div>
            </div>
        </div>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${state.mainNames} – ${t.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:100%;height:100%;overflow:hidden;}
body{font-family:'Cinzel',serif;background:${sd.bodyBg};color:${t.text};position:relative;}
${sd.particleCSS}

/* Start screen */
#startScreen{
    position:fixed;inset:0;z-index:200;
    display:flex;flex-direction:column;justify-content:center;align-items:center;
    background:rgba(0,0,0,0.93);transition:opacity 1s ease;text-align:center;padding:2rem;
}
#startScreen.gone{opacity:0;pointer-events:none;}
.start-char{margin-bottom:1rem;max-width:220px;}
.start-char svg{width:100%;height:auto;filter:drop-shadow(0 4px 20px rgba(0,0,0,0.5));}
.start-title{font-family:'Great Vibes',cursive;font-size:clamp(2.5rem,8vw,5rem);color:${t.accent};margin-bottom:0.4rem;text-shadow:0 0 30px ${t.accent}80;}
.start-sub{color:rgba(255,255,255,0.55);font-size:0.85rem;margin-bottom:2rem;letter-spacing:0.12em;}
.play-btn{background:${t.accent};color:${isColorDark(t.bg1)?'#000':'#fff'};border:none;padding:14px 40px;border-radius:50px;font-size:1.1rem;font-weight:700;cursor:pointer;letter-spacing:0.05em;transition:all 0.3s;box-shadow:0 0 30px ${t.accent}60;font-family:'Cinzel',serif;}
.play-btn:hover{transform:scale(1.06);box-shadow:0 0 50px ${t.accent}80;}

/* Slides */
.slide{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity 1.6s ease;pointer-events:none;}
.slide.active{opacity:1;pointer-events:all;}
.slide-inner{text-align:center;width:92%;max-width:700px;padding:2.5rem 2rem;background:${sd.slideBg};border-radius:${sd.slideRadius||'16px'};border:${sd.slideBorder||`2px solid ${t.accent}60`};box-shadow:${sd.slideShadow||`0 0 60px rgba(0,0,0,0.7)`};backdrop-filter:blur(12px);position:relative;overflow:hidden;}
${sd.slideExtras||''}

/* Deity slide */
.deity-slide{padding:2rem;}
.deity-symbol{margin-bottom:1rem;display:flex;justify-content:center;align-items:center;}
.deity-greeting{font-size:clamp(0.9rem,2.5vw,1.3rem);letter-spacing:0.14em;color:${t.accent};margin-bottom:0.6rem;}
.deity-sub{font-size:clamp(0.75rem,1.5vw,0.95rem);opacity:0.7;font-style:italic;letter-spacing:0.06em;}

/* Character slide */
.char-slide{padding:1.5rem 2rem 2rem;}
.char-figure{display:flex;justify-content:center;margin-bottom:0.8rem;}
.char-figure svg{max-width:260px;width:100%;height:auto;filter:drop-shadow(0 8px 20px rgba(0,0,0,0.4));}

/* Content */
.main-names{font-family:'Great Vibes',cursive;font-size:clamp(3rem,10vw,6rem);color:${t.accent};line-height:1.1;text-shadow:0 0 30px ${t.accent}60;}
.intro-text{font-size:clamp(0.75rem,1.8vw,1rem);letter-spacing:0.14em;opacity:0.75;margin-top:0.5rem;font-style:italic;}
.event-frame{padding:0.5rem;}
.ev-name{font-family:'Great Vibes',cursive;font-size:clamp(2.5rem,8vw,4.5rem);color:${t.accent};margin-bottom:0.8rem;text-shadow:0 0 20px ${t.accent}60;}
.ev-divider{width:80px;height:2px;margin:0 auto 0.8rem;background:linear-gradient(90deg,transparent,${t.accent},transparent);}
.ev-date{font-size:clamp(0.85rem,2vw,1.2rem);margin-bottom:0.4rem;opacity:0.9;letter-spacing:0.05em;}
.ev-venue{font-size:clamp(0.75rem,1.5vw,1rem);opacity:0.7;line-height:1.5;}
.end-frame{padding:0.5rem;}
.end-icon{font-size:3rem;margin-bottom:0.8rem;}
.end-text{font-size:clamp(0.9rem,2vw,1.3rem);margin-bottom:0.8rem;opacity:0.85;line-height:1.5;}
.end-names{font-family:'Great Vibes',cursive;font-size:clamp(2rem,6vw,3.5rem);color:${t.accent};margin-bottom:1.2rem;}
.replay-btn{background:transparent;border:1px solid ${t.accent};color:${t.accent};padding:10px 28px;border-radius:30px;font-size:1rem;cursor:pointer;font-family:'Cinzel',serif;transition:all 0.3s;}
.replay-btn:hover{background:${t.accent};color:#000;}

/* Animations */
@keyframes fadeUp{0%{opacity:0;transform:translateY(28px);}100%{opacity:1;transform:translateY(0);}}
@keyframes fadeDown{0%{opacity:0;transform:translateY(-28px);}100%{opacity:1;transform:translateY(0);}}
@keyframes zoomIn{0%{opacity:0;transform:scale(0.5);}60%{transform:scale(1.1);}100%{opacity:1;transform:scale(1);}}
@keyframes bounceIn{0%{opacity:0;transform:translateY(40px) scale(0.8);}60%{transform:translateY(-8px) scale(1.04);}80%{transform:translateY(4px) scale(0.98);}100%{opacity:1;transform:translateY(0) scale(1);}}
.anim-fade-up{animation:fadeUp 1s forwards;opacity:0;}
.anim-fade-down{animation:fadeDown 1s forwards;opacity:0;}
.anim-zoom-in{animation:zoomIn 1.2s cubic-bezier(0.22,1,0.36,1) forwards;opacity:0;}
.anim-bounce-in{animation:bounceIn 1.4s cubic-bezier(0.22,1,0.36,1) forwards;opacity:0;}
.delay1{animation-delay:.7s;}
.delay2{animation-delay:1.4s;}
.delay3{animation-delay:2.1s;}
</style>
</head>
<body>
${sd.particleHTML}
<audio id="bgMusic" src="${musicSrc}" loop></audio>

<!-- Start screen shows the couple character -->
<div id="startScreen">
    <div class="start-char">${charSVG}</div>
    <div class="start-title">${state.mainNames}</div>
    <div class="start-sub">${t.introText}</div>
    <button class="play-btn" onclick="startShow()">▶ Play Invitation</button>
</div>

<div id="videoWrap">
    ${deitySlide}
    ${charSlide}
    ${eventSlides}
    ${endSlide}
</div>

<script>
const slides=document.querySelectorAll('.slide');
let cur=0;
const DURATIONS=[7000,...Array(slides.length-2).fill(6000),0];
function startShow(){
    document.getElementById('startScreen').classList.add('gone');
    document.getElementById('bgMusic').play().catch(()=>{});
    setTimeout(nextSlide,900);
}
function nextSlide(){
    if(cur>0) slides[cur-1].classList.remove('active');
    if(cur<slides.length){
        slides[cur].classList.add('active');
        const wait=DURATIONS[cur]||6000;
        cur++;
        if(cur<slides.length) setTimeout(nextSlide,wait);
    }
}
<\/script>
</body>
</html>`;
}

// ============================================================
// STYLE DATA – unique visual backgrounds per style
// ============================================================
function getStyleData(t, style) {
    const accent = t.accent, bg1 = t.bg1, bg2 = t.bg2;
    switch(style) {

    case 'mandala': {
        const pColors = ['#FF9933','#FFD700','#FF6347','#FFA500'];
        const petals = Array.from({length:22},(_,i) => {
            const c=pColors[i%4], sz=6+(i%6), dur=4+i*0.5, del=i*0.6, left=(i*4.5+2)%100;
            return `<div style="position:fixed;left:${left}%;top:-30px;width:${sz}px;height:${sz}px;border-radius:50% 0 50% 0;background:${c};opacity:.85;animation:fallP ${dur}s ${del}s linear infinite;z-index:0;"></div>`;
        }).join('');
        return {
            bodyBg:`radial-gradient(ellipse at 30% 20%, ${bg1}, ${bg2} 70%)`,
            particleCSS:`
                @keyframes rotM{to{transform:translate(-50%,-50%) rotate(360deg);}}
                @keyframes rotMR{to{transform:translate(-50%,-50%) rotate(-360deg);}}
                @keyframes fallP{0%{transform:translateY(0) rotate(0);opacity:0;}5%{opacity:.9;}90%{opacity:.7;}100%{transform:translateY(110vh) rotate(720deg);opacity:0;}}
                .mring{position:fixed;border-radius:50%;top:50%;left:50%;}`,
            particleHTML:`
                <div class="mring" style="width:280px;height:280px;border:2px dashed ${accent}30;animation:rotM 20s linear infinite;transform:translate(-50%,-50%);"></div>
                <div class="mring" style="width:440px;height:440px;border:1px solid ${accent}18;animation:rotMR 32s linear infinite;transform:translate(-50%,-50%);"></div>
                <div class="mring" style="width:600px;height:600px;border:1px dashed ${accent}10;animation:rotM 48s linear infinite;transform:translate(-50%,-50%);"></div>
                ${petals}`,
            slideBg:`rgba(0,0,0,0.65)`, slideBorder:`2px solid ${accent}70`,
            slideShadow:`0 0 80px rgba(0,0,0,0.8),0 0 40px ${accent}20`, slideRadius:`12px`,
        };
    }

    case 'peacock': {
        const dots = Array.from({length:30},(_,i)=>{
            const x=(i*3.3+5)%95,y=(i*7.1+5)%90,sz=2+i%4,dur=2+i*0.3,del=i*0.2;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${accent};opacity:0;animation:twD ${dur}s ${del}s ease-in-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`linear-gradient(135deg,${bg1},#005555 50%,${bg2})`,
            particleCSS:`@keyframes twD{0%,100%{opacity:0;transform:scale(.5);}50%{opacity:.7;transform:scale(1.2);}}`,
            particleHTML:dots, slideBg:`rgba(0,30,30,0.7)`,
            slideBorder:`2px solid ${accent}80`, slideShadow:`0 0 60px rgba(0,0,0,0.7)`,
        };
    }

    case 'floral': {
        const pColors=['#FFB7C5','#FF8FAB','#FFD1DC','#FFAAC5','#FF69B4','#FFFFFF'];
        const petals=Array.from({length:24},(_,i)=>{
            const c=pColors[i%6],sz=10+i%8,dur=5+i*0.7,del=i*0.5,left=(i*4.2+3)%97;
            return `<div style="position:fixed;left:${left}%;top:-30px;width:${sz}px;height:${sz}px;border-radius:50% 10% 50% 10%;background:${c};opacity:0;animation:fpF ${dur}s ${del}s ease-in-out infinite;z-index:0;"></div>`;
        }).join('');
        const isDark=isColorDark(bg1);
        return {
            bodyBg:`linear-gradient(160deg,${bg1},${bg2})`,
            particleCSS:`@keyframes fpF{0%{transform:translateY(0) rotate(0) translateX(0);opacity:0;}8%{opacity:.8;}85%{opacity:.5;}100%{transform:translateY(110vh) rotate(360deg) translateX(40px);opacity:0;}}`,
            particleHTML:petals,
            slideBg:isDark?`rgba(0,0,0,0.7)`:`rgba(255,255,255,0.82)`,
            slideBorder:`2px solid ${accent}60`, slideShadow:`0 20px 60px rgba(0,0,0,0.3)`,
            slideRadius:`20px`,
            slideExtras:isDark?'':`
                .main-names,.ev-name,.end-names{color:${accent}!important;}
                .intro-text,.ev-date,.ev-venue,.end-text,.deity-greeting,.deity-sub{color:#333!important;}`,
        };
    }

    case 'arabesque': {
        const stars=Array.from({length:25},(_,i)=>{
            const x=(i*3.9+4)%96,y=(i*5.7+3)%93,sz=1.5+i%3,dur=1.5+i%3,del=i*0.25;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${accent};opacity:0;animation:twA ${dur}s ${del}s ease-in-out infinite;"></div>`;
        }).join('');
        const geomSvg=`<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><polygon points='50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35' fill='${accent}' opacity='0.12'/></svg>`;
        const bgUrl=`data:image/svg+xml,${encodeURIComponent(geomSvg)}`;
        return {
            bodyBg:`radial-gradient(ellipse at 40% 20%,${bg1},${bg2} 70%)`,
            particleCSS:`
                @keyframes twA{0%,100%{opacity:0;transform:scale(.6);}50%{opacity:.9;transform:scale(1.3);}}
                @keyframes expandA{0%{transform:translate(-50%,-50%) scale(0);opacity:.2;}100%{transform:translate(-50%,-50%) scale(5);opacity:0;}}`,
            particleHTML:`
                <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);animation:expandA 5s ease-out infinite;font-size:200px;color:${accent};opacity:0.06;">✦</div>
                <div style="position:fixed;inset:0;background-image:url('${bgUrl}');background-size:80px 80px;opacity:.06;pointer-events:none;"></div>
                ${stars}`,
            slideBg:`rgba(0,0,0,0.72)`, slideBorder:`2px solid ${accent}60`,
            slideShadow:`0 0 80px rgba(0,0,0,0.8)`,
        };
    }

    case 'celestial': {
        const stars=Array.from({length:60},(_,i)=>{
            const x=(i*1.65+0.5)%99,y=(i*2.1+1)%98,sz=1+i%3,dur=1+i%4,del=i*0.1;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${i%5===0?accent:'#fff'};opacity:0;animation:twC ${dur}s ${del}s ease-in-out infinite;"></div>`;
        }).join('');
        const shooters=Array.from({length:3},(_,i)=>`<div style="position:fixed;width:120px;height:2px;background:linear-gradient(90deg,${accent},transparent);top:${15+i*20}%;left:-10%;transform:rotate(${20+i*10}deg);animation:shootC 6s ${2+i*4}s ease-in infinite;opacity:0;"></div>`).join('');
        return {
            bodyBg:`radial-gradient(ellipse at 50% 0%,${bg1},${bg2} 80%)`,
            particleCSS:`
                @keyframes twC{0%,100%{opacity:.1;transform:scale(.7);}50%{opacity:.9;transform:scale(1.2);}}
                @keyframes shootC{0%{left:-10%;opacity:0;}5%{opacity:.9;}25%{left:120%;opacity:0;}100%{left:120%;opacity:0;}}`,
            particleHTML:`${stars}${shooters}`,
            slideBg:`rgba(0,0,20,0.75)`, slideBorder:`1px solid ${accent}40`,
            slideShadow:`0 0 100px rgba(0,0,0,0.9)`,
        };
    }

    case 'saffron': {
        const rays=Array.from({length:12},(_,i)=>`<div style="position:fixed;width:3px;height:50vh;background:linear-gradient(180deg,${accent}50,transparent);top:50%;left:50%;transform-origin:top center;transform:translateX(-50%) rotate(${i*30}deg);animation:rayS ${3+i*0.2}s ${i*0.2}s ease-in-out infinite;"></div>`).join('');
        const particles=Array.from({length:18},(_,i)=>{
            const left=(i*5.6+3)%94,dur=3+i*0.4,del=i*0.35;
            return `<div style="position:fixed;left:${left}%;bottom:-20px;width:4px;height:4px;border-radius:50%;background:${accent};opacity:0;animation:riseS ${dur}s ${del}s ease-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`linear-gradient(180deg,${bg1},${bg2} 80%)`,
            particleCSS:`
                @keyframes rayS{0%,100%{opacity:.05;}50%{opacity:.25;}}
                @keyframes riseS{0%{transform:translateY(0) scale(0);opacity:0;}15%{opacity:.9;transform:scale(1);}100%{transform:translateY(-100vh) scale(.5);opacity:0;}}`,
            particleHTML:`${rays}${particles}`,
            slideBg:`rgba(0,0,0,0.45)`, slideBorder:`3px solid ${t.text}80`,
            slideShadow:`0 0 60px rgba(0,0,0,0.6)`,
            slideExtras:`.main-names,.ev-name,.end-names,.deity-greeting{color:${t.text};} .char-figure svg{filter:drop-shadow(0 4px 20px rgba(0,0,0,0.5));}`,
        };
    }

    case 'confetti': {
        const cColors=['#FF6B6B','#FFD700','#4CAF50','#2196F3','#FF4081','#00BCD4','#FF9800','#9C27B0'];
        const pieces=Array.from({length:35},(_,i)=>{
            const c=cColors[i%8],sz=6+i%8,dur=3+i*0.4,del=i*0.35,left=(i*2.86+1)%98;
            const shape=i%3===0?'50%':i%3===1?'0':'50% 0';
            return `<div style="position:fixed;left:${left}%;top:-30px;width:${sz}px;height:${sz+(i%3)*4}px;border-radius:${shape};background:${c};opacity:0;animation:confF ${dur}s ${del}s linear infinite;z-index:0;"></div>`;
        }).join('');
        const balloons=Array.from({length:5},(_,i)=>`<div style="position:fixed;left:${10+i*18}%;bottom:-80px;width:35px;height:45px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;background:${cColors[i*2%8]};opacity:.55;animation:balR ${6+i}s ${i*1.5}s ease-in-out infinite;"></div>`).join('');
        return {
            bodyBg:`linear-gradient(135deg,${bg1},${bg2})`,
            particleCSS:`
                @keyframes confF{0%{transform:translateY(0) rotate(0) scale(0);opacity:0;}5%{opacity:.9;transform:scale(1);}90%{opacity:.8;}100%{transform:translateY(110vh) rotate(720deg);opacity:0;}}
                @keyframes balR{0%{transform:translateY(0) scale(0);opacity:0;}10%{opacity:.55;transform:scale(1);}90%{opacity:.2;}100%{transform:translateY(-120vh);opacity:0;}}`,
            particleHTML:`${pieces}${balloons}`,
            slideBg:`rgba(0,0,0,0.65)`, slideBorder:`2px solid ${accent}70`,
            slideShadow:`0 0 60px rgba(0,0,0,0.7)`, slideRadius:`20px`,
        };
    }

    case 'romance': {
        const hearts=Array.from({length:22},(_,i)=>{
            const sz=14+i%18,dur=4+i*0.5,del=i*0.4,left=(i*4.55+2)%96;
            return `<div style="position:fixed;left:${left}%;bottom:-30px;font-size:${sz}px;opacity:0;animation:heartF ${dur}s ${del}s ease-out infinite;z-index:0;color:${accent};">♥</div>`;
        }).join('');
        const bokeh=Array.from({length:8},(_,i)=>{
            const sz=50+i*30,x=(i*12+5)%90,y=(i*15+5)%90;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:radial-gradient(circle,${accent}20,transparent 70%);animation:bokF ${3+i}s ${i*0.5}s ease-in-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`radial-gradient(ellipse at 40% 30%,${bg1},${bg2} 80%)`,
            particleCSS:`
                @keyframes heartF{0%{transform:translateY(0) scale(0);opacity:0;}8%{opacity:.7;transform:scale(1);}85%{opacity:.2;}100%{transform:translateY(-110vh) rotate(15deg);opacity:0;}}
                @keyframes bokF{0%,100%{opacity:.3;transform:scale(.9);}50%{opacity:.6;transform:scale(1.1);}}`,
            particleHTML:`${hearts}${bokeh}`,
            slideBg:`rgba(0,0,0,0.7)`, slideBorder:`2px solid ${accent}50`,
            slideShadow:`0 0 80px rgba(0,0,0,0.8)`,
        };
    }

    case 'fireworks': {
        const bursts=Array.from({length:8},(_,i)=>{
            const x=8+i*12,y=12+i%3*22,dur=2.5+i*0.4,del=i*0.8;
            const c=['#FFD700','#FF6B6B','#4CAF50','#2196F3','#FF4081','#00BCD4','#FF9800','#9C27B0'][i];
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:4px;height:4px;border-radius:50%;background:${c};box-shadow:0 0 20px ${c};animation:fwB ${dur}s ${del}s ease-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`radial-gradient(ellipse at 50% 80%,${bg1},${bg2} 80%)`,
            particleCSS:`@keyframes fwB{0%{width:4px;height:4px;opacity:1;}40%{width:80px;height:80px;opacity:.8;}100%{width:200px;height:200px;opacity:0;transform:translate(-50%,-50%);}}`,
            particleHTML:bursts,
            slideBg:`rgba(0,0,0,0.82)`, slideBorder:`2px solid ${accent}60`,
            slideShadow:`0 0 100px rgba(0,0,0,0.9)`,
        };
    }

    case 'botanical': {
        const leafShapes=['🍃','🌿','🍀','🌱'];
        const leaves=Array.from({length:18},(_,i)=>{
            const sz=14+i%12,dur=5+i*0.6,del=i*0.4,left=(i*5.6+2)%96;
            return `<div style="position:fixed;left:${left}%;top:-30px;font-size:${sz}px;opacity:0;animation:leafF ${dur}s ${del}s linear infinite;z-index:0;">${leafShapes[i%4]}</div>`;
        }).join('');
        return {
            bodyBg:`linear-gradient(160deg,${bg1},${bg2} 80%)`,
            particleCSS:`@keyframes leafF{0%{transform:translateY(0) rotate(0) translateX(0);opacity:0;}8%{opacity:.9;}50%{transform:translateY(55vh) rotate(180deg) translateX(40px);}90%{opacity:.4;}100%{transform:translateY(110vh) rotate(360deg) translateX(-20px);opacity:0;}}`,
            particleHTML:leaves,
            slideBg:`rgba(0,0,0,0.65)`, slideBorder:`2px solid ${accent}50`,
            slideShadow:`0 20px 60px rgba(0,0,0,0.7)`, slideRadius:`18px`,
        };
    }

    case 'galaxy': {
        const stars=Array.from({length:70},(_,i)=>{
            const x=(i*1.43+0.5)%99,y=(i*2.3+1)%98,sz=i%8===0?3:i%4===0?2:1,dur=1+i%5,del=i*0.07;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${i%6===0?accent:'#fff'};opacity:0;animation:galT ${dur}s ${del}s ease-in-out infinite;"></div>`;
        }).join('');
        const nebulae=Array.from({length:3},(_,i)=>{
            const colors=['#7C3AED30','#EC489930','#3B82F630'],x=10+i*35,y=20+i*20,sz=200+i*100;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:radial-gradient(circle,${colors[i]},transparent 70%);animation:nebP ${5+i*2}s ${i}s ease-in-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`radial-gradient(ellipse at 30% 30%,#302b63,#0f0c29 55%,#000)`,
            particleCSS:`
                @keyframes galT{0%,100%{opacity:.1;transform:scale(.6);}50%{opacity:1;transform:scale(1.3);}}
                @keyframes nebP{0%,100%{opacity:.4;transform:scale(1);}50%{opacity:.7;transform:scale(1.08);}}`,
            particleHTML:`${nebulae}${stars}`,
            slideBg:`rgba(0,0,20,0.78)`, slideBorder:`1px solid ${accent}50`,
            slideShadow:`0 0 100px rgba(0,0,0,0.95)`,
        };
    }

    case 'minimal': {
        const floaters=Array.from({length:12},(_,i)=>{
            const sz=2+i%3,x=(i*8.4+5)%93,y=(i*7.3+5)%90,dur=4+i,del=i*0.5;
            return `<div style="position:fixed;left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${accent};opacity:0;animation:minF ${dur}s ${del}s ease-in-out infinite;"></div>`;
        }).join('');
        return {
            bodyBg:`linear-gradient(135deg,${bg1},${bg2} 80%)`,
            particleCSS:`@keyframes minF{0%,100%{opacity:0;transform:translateY(0);}50%{opacity:.2;transform:translateY(-15px);}}`,
            particleHTML:floaters,
            slideBg:`rgba(255,255,255,0.04)`, slideBorder:`1px solid ${accent}40`,
            slideShadow:`0 40px 80px rgba(0,0,0,0.6)`, slideRadius:`4px`,
            slideExtras:`
                .slide-inner::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${accent},transparent);}
                .slide-inner::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${accent},transparent);}`,
        };
    }

    case 'pastel': {
        const stars=Array.from({length:25},(_,i)=>{
            const sz=10+i%14,dur=3+i*0.5,del=i*0.4,left=(i*4+2)%96;
            const s=['⭐','✨','💫','🌟'];
            return `<div style="position:fixed;left:${left}%;top:-30px;font-size:${sz}px;opacity:0;animation:starF ${dur}s ${del}s ease-in infinite;z-index:0;">${s[i%4]}</div>`;
        }).join('');
        const isDark=isColorDark(bg1);
        return {
            bodyBg:`linear-gradient(160deg,${bg1},${bg2})`,
            particleCSS:`@keyframes starF{0%{transform:translateY(0) rotate(0) scale(0);opacity:0;}8%{opacity:.8;transform:scale(1);}90%{opacity:.4;}100%{transform:translateY(110vh) rotate(360deg);opacity:0;}}`,
            particleHTML:stars,
            slideBg:isDark?`rgba(0,0,0,0.7)`:`rgba(255,255,255,0.78)`,
            slideBorder:`2px solid ${accent}50`, slideShadow:`0 20px 60px rgba(0,0,0,0.3)`,
            slideRadius:`24px`,
            slideExtras:isDark?'':`
                .main-names,.ev-name,.end-names{color:${accent}!important;text-shadow:none;}
                .ev-date,.ev-venue,.intro-text,.end-text,.deity-greeting,.deity-sub{color:#333!important;}`,
        };
    }

    default: return getStyleData(t,'minimal');
    }
}

// ---- INIT ----
renderDashboard();
