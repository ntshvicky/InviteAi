// ============================================================
// INVITEAI – Photographer Directory v1
// ============================================================

const SAMPLE_PHOTOGRAPHERS = [
  {
    id:'ph_s1', sample:true, verified:true,
    name:'Rahul Sharma Photography', ownerName:'Rahul Sharma',
    avatarInitials:'RS', avatarColor:'#FF6B8A',
    city:'Mumbai', state:'Maharashtra',
    specialties:['Hindu Wedding','Candid','Pre-wedding'],
    priceMin:25000, priceMax:80000,
    bio:'Award-winning wedding photographer with 8+ years of experience. Known for capturing the emotional depth of Hindu ceremonies — from the sacred Saat Phere to the joyful Vidai. My candid storytelling style freezes time so you can relive every precious moment forever.',
    email:'rahul.sharma@rsphotos.com', phone:'+91 98765 43210',
    instagram:'rahulsharma_photos', website:'www.rsphotos.com',
    yearsExp:8, eventsShot:250, rating:4.8, reviewCount:45,
    portfolioSeeds:[10,20,30,40,50,60],
    packages:[
      {name:'Essential', price:25000, desc:'6 hrs · 200 edited photos · Online gallery'},
      {name:'Standard',  price:50000, desc:'Full day · 400 photos · Highlights reel'},
      {name:'Premium',   price:80000, desc:'2-day · 600 photos · Cinematic film + album'},
    ]
  },
  {
    id:'ph_s2', sample:true, verified:true,
    name:'Faiz Photography Studio', ownerName:'Mohammed Faiz',
    avatarInitials:'MF', avatarColor:'#34D399',
    city:'Hyderabad', state:'Telangana',
    specialties:['Muslim Wedding','Nikah','Traditional'],
    priceMin:30000, priceMax:100000,
    bio:'Specialist in Muslim wedding photography — from intimate Nikah ceremonies to grand Walima receptions. Every photograph is composed with deep respect for Islamic cultural and religious sentiments. 10+ years, 320+ events.',
    email:'faiz@faizstudio.in', phone:'+91 99887 76655',
    instagram:'faiz_studio', website:'www.faizstudio.in',
    yearsExp:10, eventsShot:320, rating:4.9, reviewCount:68,
    portfolioSeeds:[11,22,33,44,55,66],
    packages:[
      {name:'Nikah',        price:30000,  desc:'Ceremony coverage · 150 edited photos'},
      {name:'Full Ceremony',price:65000,  desc:'Nikah + Walima · 350 photos + reel'},
      {name:'Grand',        price:100000, desc:'All events · cinematic film · premium album'},
    ]
  },
  {
    id:'ph_s3', sample:true, verified:true,
    name:'Blessed Moments Studio', ownerName:'Grace Fernandez',
    avatarInitials:'BM', avatarColor:'#7C3AED',
    city:'Chennai', state:'Tamil Nadu',
    specialties:['Christian Wedding','South Indian','Church Ceremony'],
    priceMin:20000, priceMax:60000,
    bio:'Capturing the sacred beauty of church weddings and South Indian Muhurtham ceremonies. Faith, love, and family — every frame tells your story with grace and reverence. Serving Chennai and all of Tamil Nadu.',
    email:'grace@blessedmoments.in', phone:'+91 98011 22334',
    instagram:'blessedmoments_studio', website:'www.blessedmoments.in',
    yearsExp:6, eventsShot:180, rating:4.7, reviewCount:38,
    portfolioSeeds:[111,222,333,444,555,666],
    packages:[
      {name:'Ceremony', price:20000, desc:'Church ceremony · 150 photos'},
      {name:'Full Day', price:38000, desc:'Church + reception · 300 photos'},
      {name:'Complete', price:60000, desc:'All events · cinematic film · album'},
    ]
  },
  {
    id:'ph_s4', sample:true, verified:true,
    name:'Gurpreet Singh Captures', ownerName:'Gurpreet Singh',
    avatarInitials:'GS', avatarColor:'#FF8C00',
    city:'Amritsar', state:'Punjab',
    specialties:['Sikh Wedding','Anand Karaj','Portrait'],
    priceMin:35000, priceMax:90000,
    bio:'The sacred Anand Karaj ceremony deserves photography that honors its spiritual depth. Serving Punjabi families for 12+ years across Amritsar, Chandigarh, and beyond. Each image carries the reverence and joy of the holy ceremony.',
    email:'gurpreet@sikhcaptures.com', phone:'+91 97800 11223',
    instagram:'gurpreet_captures', website:'www.gurpreetcaptures.com',
    yearsExp:12, eventsShot:400, rating:4.9, reviewCount:92,
    portfolioSeeds:[100,200,300,400,500,600],
    packages:[
      {name:'Anand Karaj',  price:35000, desc:'Ceremony coverage · 200 photos'},
      {name:'Two-Day',      price:62000, desc:'Milni + Ceremony + Reception'},
      {name:'Royal Package',price:90000, desc:'Full multi-day · video + album'},
    ]
  },
  {
    id:'ph_s5', sample:true, verified:true,
    name:'The Wedding Story Co.', ownerName:'Anika & Rohan Mehta',
    avatarInitials:'WS', avatarColor:'#C9A84C',
    city:'New Delhi', state:'Delhi',
    specialties:['Western Wedding','Pre-wedding','Destination'],
    priceMin:50000, priceMax:200000,
    bio:'Award-winning destination wedding photographers. We travel across India and internationally to document your unique love story through cinematic, magazine-quality imagery. Capturing emotion, detail, and the magic in between.',
    email:'hello@theweddingstory.co', phone:'+91 91234 56789',
    instagram:'theweddingstory_co', website:'www.theweddingstory.co',
    yearsExp:9, eventsShot:210, rating:5.0, reviewCount:124,
    portfolioSeeds:[15,25,35,45,55,65],
    packages:[
      {name:'Story',       price:50000,  desc:'One day · 300 edited photos'},
      {name:'Cinematic',   price:100000, desc:'Multi-day · film + highlights + album'},
      {name:'Destination', price:200000, desc:'Travel included · complete cinematic package'},
    ]
  },
  {
    id:'ph_s6', sample:true, verified:false,
    name:'Pixelcraft Studios', ownerName:'Kavya Nair',
    avatarInitials:'KN', avatarColor:'#A78BFA',
    city:'Bengaluru', state:'Karnataka',
    specialties:['All Weddings','Candid','Corporate Events'],
    priceMin:15000, priceMax:50000,
    bio:'Fresh, creative, and budget-friendly. Pixelcraft serves Bengaluru with professional photography for all celebrations. We believe every couple deserves beautiful memories, regardless of budget.',
    email:'kavya@pixelcraft.studio', phone:'+91 88900 44556',
    instagram:'pixelcraft_studio', website:'www.pixelcraft.studio',
    yearsExp:4, eventsShot:130, rating:4.6, reviewCount:29,
    portfolioSeeds:[1,2,3,4,5,6],
    packages:[
      {name:'Essential', price:15000, desc:'4 hrs · 100 edited photos'},
      {name:'Popular',   price:30000, desc:'Full day · 250 photos'},
      {name:'Pro',       price:50000, desc:'Full day · video + prints included'},
    ]
  },
  {
    id:'ph_s7', sample:true, verified:true,
    name:'Royal Rajasthan Photography', ownerName:'Vijay Rathore',
    avatarInitials:'VR', avatarColor:'#8B0000',
    city:'Jaipur', state:'Rajasthan',
    specialties:['Hindu Wedding','Royal','Outdoor','Haveli Wedding'],
    priceMin:40000, priceMax:150000,
    bio:"Jaipur's premier photographer for royal, heritage, and outdoor weddings. From the Pink City's majestic havelis to golden desert landscapes — we make your wedding look like a Bollywood film. 15 years, 500+ events.",
    email:'vijay@royalrajphoto.com', phone:'+91 94100 77788',
    instagram:'royal_raj_photography', website:'www.royalrajphoto.com',
    yearsExp:15, eventsShot:500, rating:4.8, reviewCount:156,
    portfolioSeeds:[101,102,103,104,105,106],
    packages:[
      {name:'Heritage', price:40000,  desc:'Outdoor + ceremony · 200 photos'},
      {name:'Royal',    price:85000,  desc:'Multi-location · 400 photos + film'},
      {name:'Maharaja', price:150000, desc:'Complete 3-day royal package'},
    ]
  },
  {
    id:'ph_s8', sample:true, verified:true,
    name:'Meera Moments', ownerName:'Meera Bose',
    avatarInitials:'MB', avatarColor:'#DB2777',
    city:'Kolkata', state:'West Bengal',
    specialties:['Hindu Wedding','Bengali','Candid','Baby Shower'],
    priceMin:20000, priceMax:70000,
    bio:'Capturing the warmth, tradition, and raw emotion of Bengali weddings with a feminine, story-driven approach. Known for emotive imagery that preserves the smallest, most precious moments of your celebration.',
    email:'meera@meeramoments.in', phone:'+91 93300 12345',
    instagram:'meera_moments', website:'www.meeramoments.in',
    yearsExp:7, eventsShot:195, rating:4.7, reviewCount:51,
    portfolioSeeds:[201,202,203,204,205,206],
    packages:[
      {name:'Intimate',    price:20000, desc:'5 hrs · 150 edited photos'},
      {name:'Celebration', price:45000, desc:'Full day · 300 photos + reel'},
      {name:'Heritage',    price:70000, desc:'2-day Bengali wedding coverage'},
    ]
  },
];

// ============================================================
// DATA HELPERS
// ============================================================

function getPhotographers() {
    const registered = JSON.parse(localStorage.getItem('inviteai_photographers') || '[]');
    return [...SAMPLE_PHOTOGRAPHERS, ...registered];
}

function registerPhotographer(data) {
    const existing = JSON.parse(localStorage.getItem('inviteai_photographers') || '[]');
    const ph = {
        ...data,
        id: 'ph_u' + Date.now(),
        verified: false, sample: false,
        eventsShot: data.eventsShot || 0,
        rating: 0, reviewCount: 0,
        portfolioSeeds: [],
        registeredAt: new Date().toISOString()
    };
    existing.push(ph);
    localStorage.setItem('inviteai_photographers', JSON.stringify(existing));
    return ph;
}

function saveInquiry(photographerId, data) {
    const list = JSON.parse(localStorage.getItem('inviteai_inquiries') || '[]');
    list.push({ ...data, photographerId, id:'inq_'+Date.now(), sentAt:new Date().toISOString() });
    localStorage.setItem('inviteai_inquiries', JSON.stringify(list));
}

function priceFmt(n) {
    if (!n) return '₹0';
    if (n >= 100000) return '₹' + (n/100000).toFixed(n%100000===0?0:1) + 'L';
    return '₹' + Math.round(n/1000) + 'K';
}

// ============================================================
// RENDER: DIRECTORY
// ============================================================

function renderPhotographers() {
    state.view = 'photographers';
    $title.innerHTML = `<i class="fa-solid fa-camera"></i> Find Photographers`;

    const allSpecialties = [...new Set(SAMPLE_PHOTOGRAPHERS.flatMap(p => p.specialties))].sort();
    const total = getPhotographers().length;

    setContent(`
      <div class="photo-dir-header">
        <div>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;margin-bottom:0.25rem;">
            Find Your Perfect Photographer
          </h2>
          <p style="color:var(--text-secondary);font-size:0.88rem;" id="ph-count-label">
            ${total} photographer${total!==1?'s':''} available across India
          </p>
        </div>
        <button class="btn btn-primary" style="flex:none;width:auto;padding:0.7rem 1.4rem;"
            onclick="renderRegisterPhotographer()">
          <i class="fa-solid fa-camera-retro"></i> Register Your Studio
        </button>
      </div>

      <div class="photo-filters">
        <input id="ph-search" type="text" class="photo-search"
            placeholder="🔍  Search by name, city, or style..."
            oninput="filterPhotographers()">
        <select id="ph-specialty" class="photo-filter-select" onchange="filterPhotographers()">
            <option value="All">All Specialties</option>
            ${allSpecialties.map(s => `<option value="${s}">${s}</option>`).join('')}
        </select>
        <select id="ph-price" class="photo-filter-select" onchange="filterPhotographers()">
            <option value="">Any Budget</option>
            <option value="25000">Under ₹25K</option>
            <option value="50000">Under ₹50K</option>
            <option value="100000">Under ₹1L</option>
            <option value="200000">Under ₹2L</option>
        </select>
      </div>

      <div class="photographer-grid" id="photographer-grid">
        ${getPhotographers().map(p => buildPhotographerCard(p)).join('')}
      </div>
    `);
}

function filterPhotographers() {
    const q  = (document.getElementById('ph-search')?.value  || '').toLowerCase();
    const sp = document.getElementById('ph-specialty')?.value || 'All';
    const mp = document.getElementById('ph-price')?.value     || '';

    let list = getPhotographers();
    if (q)  list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        (p.ownerName||'').toLowerCase().includes(q) ||
        p.specialties.some(s => s.toLowerCase().includes(q))
    );
    if (sp !== 'All') list = list.filter(p => p.specialties.includes(sp));
    if (mp) list = list.filter(p => (p.priceMin||0) <= parseInt(mp));

    const grid  = document.getElementById('photographer-grid');
    const label = document.getElementById('ph-count-label');

    if (grid) grid.innerHTML = list.length
        ? list.map(p => buildPhotographerCard(p)).join('')
        : `<div style="grid-column:1/-1;text-align:center;padding:4rem 1rem;color:var(--text-secondary);">
              <i class="fa-solid fa-camera" style="font-size:2.5rem;display:block;margin-bottom:1rem;"></i>
              No photographers match your filters. <a href="#" onclick="renderPhotographers()" style="color:var(--accent);">Clear filters</a>
           </div>`;

    if (label) label.textContent =
        `${list.length} photographer${list.length!==1?'s':''} available across India`;
}

function buildPhotographerCard(p) {
    const ratingText = p.rating
        ? `⭐ ${p.rating} <span style="color:var(--text-secondary);">(${p.reviewCount})</span>`
        : `<span style="color:var(--text-secondary);">New</span>`;
    const eventsText  = p.eventsShot ? `📷 ${p.eventsShot}+ events` : '📷 New';
    const priceText   = p.priceMin   ? `${priceFmt(p.priceMin)} – ${priceFmt(p.priceMax)}` : 'Contact for pricing';
    const initials    = p.avatarInitials || p.name.substring(0,2).toUpperCase();
    const verified    = p.verified
        ? `<div class="photo-verified-badge"><i class="fa-solid fa-circle-check"></i> Verified</div>` : '';

    return `
    <div class="photographer-card">
      <div class="photo-card-header" style="background:linear-gradient(135deg,${p.avatarColor}60,${p.avatarColor}20,transparent);">
        ${verified}
        <div class="photo-card-avatar" style="background:${p.avatarColor};">${initials}</div>
      </div>
      <div class="photo-card-body">
        <div class="photo-card-name">${p.name}</div>
        <div class="photo-card-owner">${p.ownerName}</div>
        <div class="photo-card-location">
          <i class="fa-solid fa-location-dot" style="color:var(--accent);"></i>
          ${p.city}, ${p.state}
        </div>
        <div class="photo-tags">${p.specialties.slice(0,3).map(s => `<span class="photo-tag">${s}</span>`).join('')}</div>
        <div class="photo-card-stats">
          <span>${ratingText}</span>
          <span>${eventsText}</span>
          <span>🕐 ${p.yearsExp||1}y exp</span>
        </div>
        <div class="photo-card-price">${priceText}</div>
        <div class="photo-card-actions">
          <button class="btn-ph-profile" onclick="event.stopPropagation();renderPhotographerProfile('${p.id}')">
            <i class="fa-solid fa-eye"></i> View Profile
          </button>
          <button class="btn-ph-contact" onclick="event.stopPropagation();showContactModal('${p.id}')">
            <i class="fa-solid fa-paper-plane"></i> Contact
          </button>
        </div>
      </div>
    </div>`;
}

// ============================================================
// RENDER: PROFILE PAGE
// ============================================================

function renderPhotographerProfile(id) {
    const p = getPhotographers().find(ph => ph.id === id);
    if (!p) return;
    state.view = 'photographer-profile';
    $title.innerHTML = `<i class="fa-solid fa-id-card"></i> ${p.name}`;
    const initials = p.avatarInitials || p.name.substring(0,2).toUpperCase();

    const verifiedBadge = p.verified
        ? `<span class="photo-verified-badge" style="position:static;display:inline-flex;"><i class="fa-solid fa-circle-check"></i> Verified</span>` : '';

    const portfolioHTML = (p.portfolioSeeds && p.portfolioSeeds.length > 0)
        ? p.portfolioSeeds.slice(0,6).map(seed =>
            `<div class="portfolio-img" style="background-image:url('https://picsum.photos/seed/${seed}/400/300');"></div>`
          ).join('')
        : Array(6).fill(0).map((_,i) =>
            `<div class="portfolio-img" style="background:linear-gradient(135deg,${p.avatarColor}50 0%,${p.avatarColor}20 100%);"></div>`
          ).join('');

    const packagesHTML = (p.packages||[]).map(pkg => `
        <div class="package-card">
          <div class="package-name">${pkg.name}</div>
          <div class="package-price">${priceFmt(pkg.price)}</div>
          <div class="package-desc">${pkg.desc}</div>
        </div>`).join('');

    const statsHTML = [
        { val: p.rating||'—',      label:'Rating' },
        { val: p.reviewCount||0,   label:'Reviews' },
        { val: p.eventsShot||0,    label:'Events' },
        { val: (p.yearsExp||1)+'y',label:'Experience' },
    ].map(s => `<div class="profile-stat">
        <div class="stat-val">${s.val}</div>
        <div class="stat-label">${s.label}</div>
    </div>`).join('');

    const socialLinks = [
        p.instagram && `<a href="https://instagram.com/${p.instagram}" target="_blank" class="social-link"><i class="fa-brands fa-instagram"></i> @${p.instagram}</a>`,
        p.website   && `<a href="https://${p.website}"   target="_blank" class="social-link"><i class="fa-solid fa-globe"></i> ${p.website}</a>`,
        p.phone     && `<span class="social-link" style="cursor:default;"><i class="fa-solid fa-phone"></i> ${p.phone}</span>`,
    ].filter(Boolean).join('');

    setContent(`
      <button class="btn btn-secondary" style="width:auto;margin-bottom:1.5rem;padding:0.6rem 1.2rem;"
          onclick="renderPhotographers()">
        <i class="fa-solid fa-arrow-left"></i> Back to Directory
      </button>

      <div class="form-card">
        <div class="photo-profile-header">
          <div class="photo-profile-avatar" style="background:${p.avatarColor};">${initials}</div>
          <div class="photo-profile-meta">
            <h2>${p.name} &nbsp;${verifiedBadge}</h2>
            <div class="profile-location">
              <i class="fa-solid fa-location-dot" style="color:var(--accent);"></i> ${p.city}, ${p.state}
            </div>
            <div class="photo-tags" style="margin:0.5rem 0 0.7rem;">
              ${p.specialties.map(s => `<span class="photo-tag">${s}</span>`).join('')}
            </div>
            <div class="social-links-row">${socialLinks}</div>
            <div class="photo-profile-stats">${statsHTML}</div>
          </div>
          <button class="btn btn-primary" style="width:auto;flex:none;padding:0.75rem 1.5rem;align-self:flex-start;"
              onclick="showContactModal('${p.id}')">
            <i class="fa-solid fa-paper-plane"></i> Send Inquiry
          </button>
        </div>
      </div>

      <div class="form-card">
        <div class="form-card-title"><i class="fa-solid fa-user"></i> About</div>
        <p style="color:var(--text-secondary);line-height:1.75;font-size:0.93rem;">${p.bio||'No bio provided.'}</p>
      </div>

      <div class="form-card">
        <div class="form-card-title"><i class="fa-solid fa-images"></i> Portfolio</div>
        <div class="photo-portfolio-grid">${portfolioHTML}</div>
      </div>

      ${packagesHTML ? `<div class="form-card">
        <div class="form-card-title"><i class="fa-solid fa-tag"></i> Packages & Pricing</div>
        <div class="packages-grid">${packagesHTML}</div>
      </div>` : ''}

      <div style="text-align:center;padding:1rem 0 2.5rem;">
        <button class="btn btn-primary" style="width:auto;padding:1rem 3rem;"
            onclick="showContactModal('${p.id}')">
          <i class="fa-solid fa-paper-plane"></i> Send Inquiry to ${p.ownerName}
        </button>
      </div>
    `);
}

// ============================================================
// CONTACT MODAL
// ============================================================

function showContactModal(photographerId) {
    const p = getPhotographers().find(ph => ph.id === photographerId);
    if (!p) return;
    const initials = p.avatarInitials || p.name.substring(0,2).toUpperCase();

    document.getElementById('contactModalOverlay')?.remove();

    const eventTypes = ['Hindu Wedding','Muslim Wedding','Christian Wedding','Sikh Wedding',
        'South Indian Wedding','Western Wedding','Pre-wedding Shoot','Birthday',
        'Anniversary','Baby Shower','Housewarming','Corporate Event','Other'];

    const el = document.createElement('div');
    el.id = 'contactModalOverlay';
    el.className = 'contact-modal-overlay';
    el.innerHTML = `
      <div class="contact-modal" id="contactModalBox" style="position:relative;">
        <button class="modal-close" onclick="closeContactModal()">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
          <div style="width:54px;height:54px;border-radius:50%;background:${p.avatarColor};
              display:flex;align-items:center;justify-content:center;font-size:1.2rem;
              font-weight:700;color:#fff;flex-shrink:0;">${initials}</div>
          <div>
            <h3 style="margin:0;font-family:'Playfair Display',serif;">${p.name}</h3>
            <p style="margin:0.2rem 0 0;color:var(--text-secondary);font-size:0.82rem;">
              <i class="fa-solid fa-location-dot" style="color:var(--accent);"></i> ${p.city}, ${p.state}
              &nbsp;·&nbsp; ${p.priceMin ? priceFmt(p.priceMin)+' – '+priceFmt(p.priceMax) : 'Contact for pricing'}
            </p>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
          <div class="form-group">
            <label>Your Name *</label>
            <input id="cm-name" type="text" class="form-control" placeholder="Full name">
          </div>
          <div class="form-group">
            <label>Your Email *</label>
            <input id="cm-email" type="email" class="form-control" placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label>Event Date</label>
            <input id="cm-date" type="date" class="form-control">
          </div>
          <div class="form-group">
            <label>Event Type</label>
            <select id="cm-type" class="form-control">
              ${eventTypes.map(t=>`<option>${t}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Your Budget</label>
          <select id="cm-budget" class="form-control">
            <option value="">Not specified</option>
            <option>Under ₹25,000</option><option>₹25,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option><option>₹1,00,000 – ₹2,00,000</option>
            <option>Above ₹2,00,000</option>
          </select>
        </div>
        <div class="form-group">
          <label>Your Message *</label>
          <textarea id="cm-message" class="form-control" rows="3"
              placeholder="Tell us about your event, venue, and any special requirements..."></textarea>
        </div>
        <div class="btn-group" style="margin-top:0.5rem;">
          <button class="btn btn-secondary" onclick="closeContactModal()">Cancel</button>
          <button class="btn btn-primary"
              onclick="submitContactForm('${p.id}','${encodeURIComponent(p.email)}','${encodeURIComponent(p.name)}','${encodeURIComponent(p.ownerName)}')">
            <i class="fa-solid fa-paper-plane"></i> Send Inquiry
          </button>
        </div>
      </div>`;

    document.body.appendChild(el);
    el.addEventListener('click', e => { if (e.target === el) closeContactModal(); });
}

function closeContactModal() {
    document.getElementById('contactModalOverlay')?.remove();
}

function submitContactForm(photographerId, emailEnc, nameEnc, ownerEnc) {
    const name    = document.getElementById('cm-name')?.value.trim();
    const email   = document.getElementById('cm-email')?.value.trim();
    const message = document.getElementById('cm-message')?.value.trim();

    if (!name || !email || !message) {
        showToast('Please fill in name, email, and message.');
        return;
    }

    const phEmail    = decodeURIComponent(emailEnc);
    const phName     = decodeURIComponent(nameEnc);
    const phOwner    = decodeURIComponent(ownerEnc);
    const date       = document.getElementById('cm-date')?.value   || 'Not specified';
    const type       = document.getElementById('cm-type')?.value   || 'Wedding';
    const budget     = document.getElementById('cm-budget')?.value || 'Not specified';

    saveInquiry(photographerId, { senderName:name, senderEmail:email, eventDate:date, eventType:type, budget, message });

    const subject = encodeURIComponent(`Photography Inquiry from ${name} – ${type}`);
    const body    = encodeURIComponent(
        `Hi ${phOwner},\n\nI am ${name} (${email}) and I found your profile on InviteAI.\n\n` +
        `Event Date: ${date}\nEvent Type: ${type}\nBudget: ${budget}\n\nMessage:\n${message}\n\n` +
        `Looking forward to hearing from you!\n\n— ${name}`
    );
    const mailtoLink = `mailto:${phEmail}?subject=${subject}&body=${body}`;

    const box = document.getElementById('contactModalBox');
    if (box) {
        box.innerHTML = `
          <div style="text-align:center;padding:2rem 1rem;">
            <div style="font-size:3.5rem;margin-bottom:1rem;">✅</div>
            <h3 style="font-family:'Playfair Display',serif;margin-bottom:0.5rem;">Inquiry Saved!</h3>
            <p style="color:var(--text-secondary);line-height:1.65;margin-bottom:1.5rem;">
              Your inquiry to <strong>${phName}</strong> has been recorded.<br>
              Click below to send it directly via your email app.
            </p>
            <a href="${mailtoLink}" class="btn btn-primary"
                style="display:inline-flex;text-decoration:none;padding:0.85rem 2rem;
                       border-radius:8px;color:#000;margin-bottom:0.8rem;">
              <i class="fa-solid fa-envelope"></i>&nbsp; Open Email & Send
            </a>
            <br>
            <button class="btn btn-secondary" style="display:inline-flex;width:auto;margin-top:0.5rem;"
                onclick="closeContactModal()">Close</button>
          </div>`;
    }
    showToast(`Inquiry sent to ${phName}!`);
}

// ============================================================
// RENDER: REGISTRATION FORM
// ============================================================

function renderRegisterPhotographer() {
    state.view = 'register-photographer';
    $title.innerHTML = `<i class="fa-solid fa-camera-retro"></i> Register as Photographer`;

    const SPECIALTIES = [
        'Hindu Wedding','Muslim Wedding','Christian Wedding','Sikh Wedding',
        'South Indian Wedding','Western Wedding','Pre-wedding Shoot',
        'Birthday','Anniversary','Baby Shower','Housewarming',
        'Corporate Events','Destination','Outdoor','Candid','Portrait',
    ];

    setContent(`
      <button class="btn btn-secondary" style="width:auto;margin-bottom:1.5rem;padding:0.6rem 1.2rem;"
          onclick="renderPhotographers()">
        <i class="fa-solid fa-arrow-left"></i> Back to Directory
      </button>

      <div class="reg-wrap">
        <div class="page-header">
          <h2>Register Your Photography Studio</h2>
          <p>Join InviteAI's photographer network and get discovered by couples planning their dream events</p>
        </div>

        <!-- Basic Info -->
        <div class="reg-section">
          <div class="reg-section-title"><i class="fa-solid fa-user"></i> Basic Information</div>
          <div class="reg-grid-2">
            <div class="form-group">
              <label>Business / Studio Name *</label>
              <input id="rg-business" type="text" class="form-control" placeholder="e.g. Rahul Sharma Photography">
            </div>
            <div class="form-group">
              <label>Owner / Lead Photographer *</label>
              <input id="rg-owner" type="text" class="form-control" placeholder="Your full name">
            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input id="rg-email" type="email" class="form-control" placeholder="you@studio.com">
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input id="rg-phone" type="tel" class="form-control" placeholder="+91 98765 43210">
            </div>
          </div>
          <div class="form-group">
            <label>About Your Studio / Bio *</label>
            <textarea id="rg-bio" class="form-control" rows="4"
                placeholder="Describe your photography style, experience, awards, and what makes you unique..."></textarea>
          </div>
        </div>

        <!-- Location & Experience -->
        <div class="reg-section">
          <div class="reg-section-title"><i class="fa-solid fa-location-dot"></i> Location & Experience</div>
          <div class="reg-grid-2">
            <div class="form-group">
              <label>City *</label>
              <input id="rg-city" type="text" class="form-control" placeholder="e.g. Mumbai">
            </div>
            <div class="form-group">
              <label>State *</label>
              <input id="rg-state" type="text" class="form-control" placeholder="e.g. Maharashtra">
            </div>
            <div class="form-group">
              <label>Years of Experience</label>
              <input id="rg-exp" type="number" class="form-control" min="0" max="50" placeholder="e.g. 5">
            </div>
            <div class="form-group">
              <label>Events Photographed (approx.)</label>
              <input id="rg-events" type="number" class="form-control" min="0" placeholder="e.g. 80">
            </div>
          </div>
        </div>

        <!-- Specialties -->
        <div class="reg-section">
          <div class="reg-section-title"><i class="fa-solid fa-camera"></i> Specialties</div>
          <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:1rem;">Select all that apply *</p>
          <div class="specialty-checkboxes">
            ${SPECIALTIES.map(s => `
              <label class="specialty-cb">
                <input type="checkbox" name="rg-specialty" value="${s}"> ${s}
              </label>`).join('')}
          </div>
        </div>

        <!-- Pricing -->
        <div class="reg-section">
          <div class="reg-section-title"><i class="fa-solid fa-indian-rupee-sign"></i> Pricing</div>
          <div class="reg-grid-2">
            <div class="form-group">
              <label>Starting Price (₹)</label>
              <input id="rg-pricemin" type="number" class="form-control" min="0" placeholder="e.g. 25000">
            </div>
            <div class="form-group">
              <label>Highest Package (₹)</label>
              <input id="rg-pricemax" type="number" class="form-control" min="0" placeholder="e.g. 100000">
            </div>
          </div>
        </div>

        <!-- Social -->
        <div class="reg-section">
          <div class="reg-section-title"><i class="fa-solid fa-share-nodes"></i> Social & Web</div>
          <div class="reg-grid-2">
            <div class="form-group">
              <label>Instagram Handle</label>
              <input id="rg-insta" type="text" class="form-control" placeholder="your_handle (without @)">
            </div>
            <div class="form-group">
              <label>Website</label>
              <input id="rg-web" type="text" class="form-control" placeholder="www.yourstudio.com">
            </div>
          </div>
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary" onclick="renderPhotographers()">
            <i class="fa-solid fa-arrow-left"></i> Cancel
          </button>
          <button class="btn btn-primary" onclick="submitRegisterForm()">
            <i class="fa-solid fa-camera-retro"></i> Register My Studio
          </button>
        </div>
      </div>
    `);
}

function submitRegisterForm() {
    const fields = {
        name:       document.getElementById('rg-business')?.value.trim(),
        ownerName:  document.getElementById('rg-owner')?.value.trim(),
        email:      document.getElementById('rg-email')?.value.trim(),
        phone:      document.getElementById('rg-phone')?.value.trim(),
        bio:        document.getElementById('rg-bio')?.value.trim(),
        city:       document.getElementById('rg-city')?.value.trim(),
        state:      document.getElementById('rg-state')?.value.trim(),
    };

    for (const [k, v] of Object.entries(fields)) {
        if (!v) { showToast(`Please fill in the ${k} field.`); return; }
    }

    const specialties = [...document.querySelectorAll('input[name="rg-specialty"]:checked')].map(el => el.value);
    if (!specialties.length) { showToast('Please select at least one specialty.'); return; }

    const COLORS = ['#FF6B8A','#34D399','#7C3AED','#FF8C00','#C9A84C','#A78BFA','#DB2777','#0EA5E9'];
    const ph = registerPhotographer({
        ...fields,
        specialties,
        yearsExp:   parseInt(document.getElementById('rg-exp')?.value)      || 0,
        eventsShot: parseInt(document.getElementById('rg-events')?.value)   || 0,
        priceMin:   parseInt(document.getElementById('rg-pricemin')?.value) || 0,
        priceMax:   parseInt(document.getElementById('rg-pricemax')?.value) || 0,
        instagram:  document.getElementById('rg-insta')?.value.trim() || '',
        website:    document.getElementById('rg-web')?.value.trim()   || '',
        avatarInitials: (fields.ownerName||fields.name).split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase(),
        avatarColor:    COLORS[Math.floor(Math.random()*COLORS.length)],
    });

    setContent(`
      <div class="loading-screen">
        <div style="font-size:4rem;margin-bottom:1rem;">🎉</div>
        <h2 style="font-family:'Playfair Display',serif;">Welcome to InviteAI!</h2>
        <p style="color:var(--text-secondary);max-width:420px;text-align:center;line-height:1.7;">
          <strong>${ph.name}</strong> has been registered successfully.<br>
          Your profile is now live in the photographer directory.
        </p>
        <div style="display:flex;gap:0.8rem;margin-top:1.2rem;">
          <button class="btn btn-primary" style="width:auto;padding:0.8rem 2rem;"
              onclick="renderPhotographerProfile('${ph.id}')">
            <i class="fa-solid fa-eye"></i> View My Profile
          </button>
          <button class="btn btn-secondary" style="width:auto;padding:0.8rem 1.5rem;"
              onclick="renderPhotographers()">
            <i class="fa-solid fa-list"></i> Browse Directory
          </button>
        </div>
      </div>`);
    showToast(`${ph.name} registered successfully!`);
}

// ============================================================
// GLOBAL EXPORTS
// ============================================================
window.renderPhotographers       = renderPhotographers;
window.filterPhotographers       = filterPhotographers;
window.renderPhotographerProfile = renderPhotographerProfile;
window.renderRegisterPhotographer= renderRegisterPhotographer;
window.showContactModal          = showContactModal;
window.closeContactModal         = closeContactModal;
window.submitContactForm         = submitContactForm;
window.submitRegisterForm        = submitRegisterForm;
