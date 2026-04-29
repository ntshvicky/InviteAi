// ============================================================
// INVITEAI – SVG Character Library
// Each culture gets its own unique illustrated characters
// ============================================================

const CHARACTERS = {

// ============================================================
// HINDU – Bride in red saree, Groom in saffron sherwani + sehra
// ============================================================
hindu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) -->
  <!-- Turban -->
  <ellipse cx="80" cy="28" rx="26" ry="14" fill="#FF8C00"/>
  <ellipse cx="80" cy="34" rx="26" ry="7" fill="#E07000"/>
  <!-- Turban jewel -->
  <circle cx="80" cy="20" r="6" fill="#FFD700"/>
  <circle cx="80" cy="20" r="3" fill="#FF1744"/>
  <!-- Sehra strings -->
  <line x1="64" y1="36" x2="58" y2="68" stroke="#FFF176" stroke-width="1.5" opacity="0.9"/>
  <line x1="72" y1="38" x2="68" y2="68" stroke="#FFB3DE" stroke-width="1.5" opacity="0.9"/>
  <line x1="80" y1="39" x2="80" y2="68" stroke="#FFF176" stroke-width="1.5" opacity="0.9"/>
  <line x1="88" y1="38" x2="88" y2="68" stroke="#FFB3DE" stroke-width="1.5" opacity="0.9"/>
  <line x1="96" y1="36" x2="100" y2="68" stroke="#FFF176" stroke-width="1.5" opacity="0.9"/>
  <circle cx="58" cy="71" r="3" fill="#FFFF00"/>
  <circle cx="68" cy="71" r="3" fill="#FF88CC"/>
  <circle cx="80" cy="71" r="3" fill="#FFFF00"/>
  <circle cx="88" cy="71" r="3" fill="#FF88CC"/>
  <circle cx="100" cy="71" r="3" fill="#FFFF00"/>
  <!-- Face -->
  <ellipse cx="80" cy="55" rx="18" ry="20" fill="#C8956C"/>
  <!-- Eyes -->
  <ellipse cx="73" cy="51" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="51" rx="3" ry="3.5" fill="#2C1810"/>
  <circle cx="74" cy="50" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="88" cy="50" r="1" fill="#fff" opacity="0.7"/>
  <!-- Smile -->
  <path d="M 74 63 Q 80 69 86 63" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Sherwani -->
  <path d="M 54 74 L 48 190 L 112 190 L 106 74 Z" fill="#FFFDE7"/>
  <path d="M 68 74 L 80 88 L 92 74" fill="#FFFDE7"/>
  <!-- Gold center line + buttons -->
  <line x1="80" y1="88" x2="80" y2="185" stroke="#FFD700" stroke-width="2"/>
  <circle cx="80" cy="95" r="3" fill="#FFD700"/>
  <circle cx="80" cy="110" r="3" fill="#FFD700"/>
  <circle cx="80" cy="125" r="3" fill="#FFD700"/>
  <circle cx="80" cy="140" r="3" fill="#FFD700"/>
  <!-- Sherwani gold trim -->
  <rect x="54" y="74" width="52" height="7" rx="2" fill="#FFD700" opacity="0.6"/>
  <rect x="48" y="183" width="64" height="7" rx="2" fill="#FFD700" opacity="0.6"/>
  <!-- Arms -->
  <rect x="30" y="76" width="22" height="55" rx="10" fill="#FFFDE7"/>
  <rect x="108" y="76" width="22" height="55" rx="10" fill="#FFFDE7"/>
  <!-- Hands -->
  <ellipse cx="41" cy="133" rx="11" ry="8" fill="#C8956C"/>
  <ellipse cx="119" cy="133" rx="11" ry="8" fill="#C8956C"/>
  <!-- Churidar leg -->
  <rect x="57" y="190" width="22" height="35" rx="4" fill="#FFFDE7"/>
  <rect x="81" y="190" width="22" height="35" rx="4" fill="#FFFDE7"/>
  <!-- Juttis (shoes) -->
  <ellipse cx="68" cy="228" rx="14" ry="7" fill="#8B6914"/>
  <ellipse cx="92" cy="228" rx="14" ry="7" fill="#8B6914"/>
  <path d="M 56 225 Q 68 220 80 225" stroke="#FFD700" stroke-width="1.5" fill="none"/>
  <path d="M 80 225 Q 92 220 104 225" stroke="#FFD700" stroke-width="1.5" fill="none"/>

  <!-- BRIDE (right) -->
  <!-- Hair bun -->
  <circle cx="200" cy="20" r="20" fill="#2C1810"/>
  <!-- Flower in hair -->
  <circle cx="216" cy="12" r="7" fill="#FF5050"/>
  <circle cx="216" cy="12" r="4" fill="#FFD700"/>
  <circle cx="208" cy="8" r="5" fill="#FF7070"/>
  <circle cx="208" cy="8" r="2.5" fill="#FFD700"/>
  <!-- Bindi -->
  <circle cx="200" cy="46" r="4" fill="#FF1744"/>
  <!-- Face -->
  <ellipse cx="200" cy="56" rx="18" ry="20" fill="#F0C5A3"/>
  <!-- Eyes with kajal -->
  <ellipse cx="193" cy="52" rx="3.5" ry="4" fill="#1a1a1a"/>
  <ellipse cx="207" cy="52" rx="3.5" ry="4" fill="#1a1a1a"/>
  <circle cx="194" cy="51" r="1.2" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="51" r="1.2" fill="#fff" opacity="0.7"/>
  <!-- Smile -->
  <path d="M 194 65 Q 200 71 206 65" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Gold necklace -->
  <path d="M 184 72 Q 200 84 216 72" stroke="#FFD700" stroke-width="2.5" fill="none"/>
  <circle cx="200" cy="82" r="5" fill="#FFD700"/>
  <circle cx="200" cy="82" r="2" fill="#FF1744"/>
  <!-- Saree body -->
  <path d="M 174 74 L 164 225 L 236 225 L 226 74 Z" fill="#CC0033"/>
  <!-- Saree pallu drape -->
  <path d="M 174 74 Q 160 110 162 150 L 148 155 Q 148 110 166 74 Z" fill="#FF3355"/>
  <!-- Saree blouse -->
  <rect x="178" y="72" width="44" height="30" rx="5" fill="#FF3355"/>
  <!-- Saree gold border at bottom -->
  <path d="M 164 218 L 236 218 L 232 225 L 168 225 Z" fill="#FFD700"/>
  <!-- Left arm with bangles -->
  <rect x="150" y="74" width="22" height="52" rx="10" fill="#CC0033"/>
  <rect x="148" y="96" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="105" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="114" width="24" height="4" rx="2" fill="#FF8C00"/>
  <!-- Right arm -->
  <rect x="228" y="74" width="22" height="52" rx="10" fill="#CC0033"/>
  <rect x="226" y="96" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="226" y="105" width="24" height="4" rx="2" fill="#FFD700"/>
  <!-- Left hand with mehndi -->
  <ellipse cx="161" cy="129" rx="12" ry="8" fill="#F0C5A3"/>
  <path d="M 155 128 Q 161 124 167 128" stroke="#8B4513" stroke-width="1" fill="none" opacity="0.6"/>
  <!-- Right hand -->
  <ellipse cx="239" cy="129" rx="12" ry="8" fill="#F0C5A3"/>
  <!-- Feet with alta (red dye) -->
  <ellipse cx="180" cy="228" rx="13" ry="6" fill="#F0C5A3"/>
  <ellipse cx="220" cy="228" rx="13" ry="6" fill="#F0C5A3"/>
  <ellipse cx="180" cy="229" rx="8" ry="3" fill="#FF0000" opacity="0.3"/>
  <!-- Payal (anklet) -->
  <path d="M 169 225 Q 180 221 191 225" stroke="#FFD700" stroke-width="1.5" fill="none"/>
  <path d="M 209 225 Q 220 221 231 225" stroke="#FFD700" stroke-width="1.5" fill="none"/>

  <!-- MARIGOLD FLOWERS between them -->
  <circle cx="140" cy="160" r="8" fill="#FF9933"/>
  <circle cx="140" cy="160" r="4" fill="#FFD700"/>
  <circle cx="140" cy="175" r="6" fill="#FF7700"/>
  <circle cx="140" cy="175" r="3" fill="#FFD700"/>
  <circle cx="140" cy="188" r="5" fill="#FF9933"/>
  <circle cx="140" cy="188" r="2.5" fill="#FFD700"/>
</svg>`,

// ============================================================
// MUSLIM – Bride in lehenga+hijab, Groom in sherwani+taqiyah
// ============================================================
muslim: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) -->
  <!-- Taqiyah (cap) -->
  <ellipse cx="80" cy="28" rx="22" ry="12" fill="#1B5E20"/>
  <ellipse cx="80" cy="33" rx="22" ry="6" fill="#0d3d12"/>
  <!-- Face -->
  <ellipse cx="80" cy="52" rx="18" ry="20" fill="#C8956C"/>
  <!-- Short beard -->
  <path d="M 64 62 Q 80 80 96 62" fill="#4a2c0a" opacity="0.6"/>
  <!-- Eyes -->
  <ellipse cx="73" cy="48" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="48" rx="3" ry="3.5" fill="#2C1810"/>
  <!-- Smile -->
  <path d="M 74 62 Q 80 68 86 62" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Sherwani dark green -->
  <path d="M 52 71 L 45 188 L 115 188 L 108 71 Z" fill="#1B5E20"/>
  <path d="M 67 71 L 80 84 L 93 71" fill="#1B5E20"/>
  <line x1="80" y1="84" x2="80" y2="183" stroke="#D4AF37" stroke-width="2"/>
  <circle cx="80" cy="92" r="3" fill="#D4AF37"/>
  <circle cx="80" cy="107" r="3" fill="#D4AF37"/>
  <circle cx="80" cy="122" r="3" fill="#D4AF37"/>
  <rect x="45" y="71" width="70" height="7" rx="2" fill="#D4AF37" opacity="0.6"/>
  <!-- Arms -->
  <rect x="27" y="73" width="22" height="50" rx="10" fill="#1B5E20"/>
  <rect x="111" y="73" width="22" height="50" rx="10" fill="#1B5E20"/>
  <ellipse cx="38" cy="126" rx="11" ry="8" fill="#C8956C"/>
  <ellipse cx="122" cy="126" rx="11" ry="8" fill="#C8956C"/>
  <!-- Legs + shoes -->
  <rect x="55" y="188" width="22" height="38" rx="4" fill="#0d3d12"/>
  <rect x="83" y="188" width="22" height="38" rx="4" fill="#0d3d12"/>
  <ellipse cx="66" cy="229" rx="14" ry="6" fill="#3d2600"/>
  <ellipse cx="94" cy="229" rx="14" ry="6" fill="#3d2600"/>

  <!-- BRIDE (right) -->
  <!-- Hijab/dupatta -->
  <ellipse cx="200" cy="24" rx="26" ry="22" fill="#006400"/>
  <path d="M 176 28 Q 168 80 172 160 L 184 160 Q 180 80 186 28 Z" fill="#006400"/>
  <path d="M 224 28 Q 232 80 228 160 L 216 160 Q 220 80 214 28 Z" fill="#006400"/>
  <!-- Hijab gold border -->
  <path d="M 176 28 Q 200 18 224 28" stroke="#D4AF37" stroke-width="2" fill="none"/>
  <!-- Face -->
  <ellipse cx="200" cy="52" rx="16" ry="18" fill="#F0C5A3"/>
  <!-- Eyes -->
  <ellipse cx="193" cy="48" rx="3" ry="3.5" fill="#1a1a1a"/>
  <ellipse cx="207" cy="48" rx="3" ry="3.5" fill="#1a1a1a"/>
  <circle cx="194" cy="47" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="47" r="1" fill="#fff" opacity="0.7"/>
  <!-- Smile -->
  <path d="M 194 62 Q 200 68 206 62" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Lehenga (emerald green) body -->
  <path d="M 172 68 L 160 225 L 240 225 L 228 68 Z" fill="#004d00"/>
  <!-- Lehenga choli (top) -->
  <rect x="178" y="68" width="44" height="28" rx="5" fill="#006400"/>
  <!-- Gold dupatta across -->
  <path d="M 172 68 Q 200 80 228 68" stroke="#D4AF37" stroke-width="3" fill="none"/>
  <!-- Gold border bottom -->
  <path d="M 160 218 L 240 218 L 238 225 L 162 225 Z" fill="#D4AF37"/>
  <!-- Gold embroidery on lehenga -->
  <path d="M 165 180 Q 200 175 235 180" stroke="#D4AF37" stroke-width="1.5" fill="none" opacity="0.6"/>
  <path d="M 162 195 Q 200 190 238 195" stroke="#D4AF37" stroke-width="1.5" fill="none" opacity="0.6"/>
  <!-- Arms -->
  <rect x="150" y="70" width="20" height="48" rx="9" fill="#004d00"/>
  <rect x="230" y="70" width="20" height="48" rx="9" fill="#004d00"/>
  <ellipse cx="160" cy="121" rx="11" ry="8" fill="#F0C5A3"/>
  <ellipse cx="240" cy="121" rx="11" ry="8" fill="#F0C5A3"/>
  <!-- Feet -->
  <ellipse cx="182" cy="228" rx="13" ry="6" fill="#F0C5A3"/>
  <ellipse cx="218" cy="228" rx="13" ry="6" fill="#F0C5A3"/>

  <!-- Star & Crescent between them -->
  <text x="132" y="155" font-size="22" text-anchor="middle" fill="#D4AF37" opacity="0.8">☪</text>
</svg>`,

// ============================================================
// CHRISTIAN – Bride in white gown, Groom in black suit
// ============================================================
christian: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) -->
  <!-- Hair -->
  <ellipse cx="80" cy="26" rx="20" ry="14" fill="#4a2c0a"/>
  <!-- Face -->
  <ellipse cx="80" cy="48" rx="18" ry="20" fill="#F5C5A3"/>
  <!-- Eyes -->
  <ellipse cx="73" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <circle cx="74" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="88" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 74 58 Q 80 64 86 58" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Black suit jacket -->
  <path d="M 52 66 L 44 195 L 116 195 L 108 66 Z" fill="#1a1a2e"/>
  <!-- White shirt + bow tie -->
  <path d="M 68 66 L 80 80 L 92 66" fill="#fff"/>
  <rect x="74" y="66" width="12" height="25" fill="#fff"/>
  <!-- Bow tie -->
  <path d="M 74 68 L 68 74 L 74 80 L 80 74 Z" fill="#8B0000"/>
  <path d="M 86 68 L 92 74 L 86 80 L 80 74 Z" fill="#8B0000"/>
  <!-- Pocket square -->
  <polygon points="94,72 102,72 100,82" fill="#fff"/>
  <!-- Arms -->
  <rect x="26" y="68" width="22" height="52" rx="10" fill="#1a1a2e"/>
  <rect x="112" y="68" width="22" height="52" rx="10" fill="#1a1a2e"/>
  <!-- Cuffs -->
  <rect x="26" y="112" width="22" height="8" rx="4" fill="#fff"/>
  <rect x="112" y="112" width="22" height="8" rx="4" fill="#fff"/>
  <ellipse cx="37" cy="123" rx="11" ry="7" fill="#F5C5A3"/>
  <ellipse cx="123" cy="123" rx="11" ry="7" fill="#F5C5A3"/>
  <!-- Trousers -->
  <rect x="55" y="195" width="24" height="36" rx="4" fill="#0d0d1a"/>
  <rect x="81" y="195" width="24" height="36" rx="4" fill="#0d0d1a"/>
  <!-- Shoes -->
  <ellipse cx="67" cy="234" rx="14" ry="6" fill="#111"/>
  <ellipse cx="93" cy="234" rx="14" ry="6" fill="#111"/>

  <!-- BRIDE (right) -->
  <!-- Veil -->
  <path d="M 178 18 Q 200 8 222 18 L 232 200 Q 200 210 168 200 Z" fill="#fff" opacity="0.4"/>
  <!-- Hair -->
  <ellipse cx="200" cy="22" rx="22" ry="16" fill="#5a3825"/>
  <!-- Hair flowers -->
  <circle cx="216" cy="14" r="5" fill="#FFB7C5"/>
  <circle cx="216" cy="14" r="2.5" fill="#fff"/>
  <!-- Face -->
  <ellipse cx="200" cy="48" rx="18" ry="20" fill="#FDDCBC"/>
  <!-- Eyes -->
  <ellipse cx="193" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="207" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <circle cx="194" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 194 58 Q 200 64 206 58" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Pearl necklace -->
  <path d="M 184 68 Q 200 78 216 68" stroke="#E8D5B0" stroke-width="3" fill="none"/>
  <!-- Wedding gown bodice -->
  <rect x="182" y="66" width="36" height="35" rx="8" fill="#fff"/>
  <!-- Lace detail -->
  <rect x="182" y="66" width="36" height="8" rx="4" fill="#F5F0E8"/>
  <!-- Ball gown skirt -->
  <path d="M 172 100 Q 155 160 148 230 L 252 230 Q 245 160 228 100 Z" fill="#fff"/>
  <!-- Skirt layers -->
  <path d="M 168 140 Q 200 148 232 140" stroke="#E8D5B0" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M 158 180 Q 200 190 242 180" stroke="#E8D5B0" stroke-width="2" fill="none" opacity="0.5"/>
  <!-- Arms -->
  <rect x="155" y="68" width="24" height="45" rx="10" fill="#fff"/>
  <rect x="221" y="68" width="24" height="45" rx="10" fill="#fff"/>
  <ellipse cx="167" cy="116" rx="12" ry="8" fill="#FDDCBC"/>
  <ellipse cx="233" cy="116" rx="12" ry="8" fill="#FDDCBC"/>
  <!-- Bouquet in left hand -->
  <circle cx="152" cy="120" r="12" fill="#FF6B8A"/>
  <circle cx="148" cy="114" r="7" fill="#FF4466"/>
  <circle cx="158" cy="112" r="6" fill="#FFB3C6"/>
  <circle cx="143" cy="120" r="5" fill="#FF8FAB"/>
  <rect x="148" y="130" width="8" height="15" rx="3" fill="#2d5a27"/>

  <!-- Cross between them -->
  <rect x="136" y="128" width="8" height="30" rx="2" fill="#8B6914" opacity="0.7"/>
  <rect x="128" y="136" width="24" height="7" rx="2" fill="#8B6914" opacity="0.7"/>
</svg>`,

// ============================================================
// SIKH – Bride in red anand karaj, Groom in navy+saffron turban
// ============================================================
sikh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) -->
  <!-- Navy turban large -->
  <ellipse cx="80" cy="26" rx="28" ry="16" fill="#000080"/>
  <ellipse cx="80" cy="33" rx="28" ry="8" fill="#00006a"/>
  <!-- Turban layers (pagh) -->
  <path d="M 54 24 Q 80 14 106 24" stroke="#1919b3" stroke-width="3" fill="none" opacity="0.5"/>
  <path d="M 54 28 Q 80 20 106 28" stroke="#1919b3" stroke-width="3" fill="none" opacity="0.5"/>
  <!-- Kalgi (jewel) -->
  <path d="M 80 16 Q 85 8 88 14" stroke="#FFD700" stroke-width="2" fill="none"/>
  <circle cx="89" cy="12" r="3" fill="#FFD700"/>
  <!-- Face -->
  <ellipse cx="80" cy="54" rx="18" ry="20" fill="#C8956C"/>
  <!-- Sikh beard -->
  <path d="M 63 62 Q 80 88 97 62 Q 90 82 80 85 Q 70 82 63 62 Z" fill="#4a2c0a" opacity="0.7"/>
  <!-- Mustache -->
  <path d="M 70 60 Q 75 57 80 60 Q 85 57 90 60" stroke="#3d2400" stroke-width="2" fill="none"/>
  <!-- Eyes -->
  <ellipse cx="73" cy="50" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="50" rx="3" ry="3.5" fill="#2C1810"/>
  <!-- Smile -->
  <path d="M 73 63 Q 80 69 87 63" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Sherwani (saffron) -->
  <path d="M 50 73 L 42 192 L 118 192 L 110 73 Z" fill="#FF8C00"/>
  <path d="M 66 73 L 80 87 L 94 73" fill="#FF8C00"/>
  <line x1="80" y1="87" x2="80" y2="187" stroke="#000080" stroke-width="2"/>
  <circle cx="80" cy="95" r="3" fill="#000080"/>
  <circle cx="80" cy="110" r="3" fill="#000080"/>
  <circle cx="80" cy="125" r="3" fill="#000080"/>
  <rect x="42" y="73" width="76" height="7" rx="2" fill="#000080" opacity="0.5"/>
  <!-- Arms -->
  <rect x="24" y="75" width="22" height="52" rx="10" fill="#FF8C00"/>
  <rect x="114" y="75" width="22" height="52" rx="10" fill="#FF8C00"/>
  <ellipse cx="35" cy="130" rx="11" ry="8" fill="#C8956C"/>
  <ellipse cx="125" cy="130" rx="11" ry="8" fill="#C8956C"/>
  <!-- Legs -->
  <rect x="54" y="192" width="24" height="36" rx="4" fill="#FF8C00"/>
  <rect x="82" y="192" width="24" height="36" rx="4" fill="#FF8C00"/>
  <ellipse cx="66" cy="231" rx="14" ry="6" fill="#8B6914"/>
  <ellipse cx="94" cy="231" rx="14" ry="6" fill="#8B6914"/>

  <!-- BRIDE (right) -->
  <!-- Dupatta/chunni (saffron over head) -->
  <path d="M 176 16 Q 200 6 224 16 L 234 90 Q 200 96 166 90 Z" fill="#FF8C00" opacity="0.7"/>
  <!-- Hair -->
  <ellipse cx="200" cy="24" rx="22" ry="14" fill="#2C1810"/>
  <!-- Face -->
  <ellipse cx="200" cy="50" rx="18" ry="20" fill="#D4A882"/>
  <!-- Bindi -->
  <circle cx="200" cy="40" r="4" fill="#FF1744"/>
  <!-- Eyes -->
  <ellipse cx="193" cy="46" rx="3" ry="3.5" fill="#1a1a1a"/>
  <ellipse cx="207" cy="46" rx="3" ry="3.5" fill="#1a1a1a"/>
  <circle cx="194" cy="45" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="45" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 193 60 Q 200 66 207 60" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Gold choker -->
  <path d="M 184 69 Q 200 79 216 69" stroke="#FFD700" stroke-width="3" fill="none"/>
  <!-- Anand karaj lehenga (deep red) -->
  <path d="M 172 72 L 160 228 L 240 228 L 228 72 Z" fill="#8B0000"/>
  <!-- Lehenga choli -->
  <rect x="178" y="70" width="44" height="30" rx="5" fill="#A00000"/>
  <!-- Gold border -->
  <path d="M 160 220 L 240 220 L 238 228 L 162 228 Z" fill="#FFD700"/>
  <path d="M 172 72 Q 200 82 228 72" stroke="#FFD700" stroke-width="3" fill="none"/>
  <!-- Gold patterns on lehenga -->
  <path d="M 165 170 Q 200 164 235 170" stroke="#FFD700" stroke-width="1.5" fill="none" opacity="0.5"/>
  <path d="M 163 190 Q 200 184 237 190" stroke="#FFD700" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- Arms with red bangles -->
  <rect x="150" y="72" width="22" height="50" rx="10" fill="#8B0000"/>
  <rect x="148" y="94" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="103" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="112" width="24" height="4" rx="2" fill="#FF8C00"/>
  <rect x="228" y="72" width="22" height="50" rx="10" fill="#8B0000"/>
  <rect x="226" y="94" width="24" height="4" rx="2" fill="#FFD700"/>
  <ellipse cx="161" cy="125" rx="12" ry="8" fill="#D4A882"/>
  <ellipse cx="239" cy="125" rx="12" ry="8" fill="#D4A882"/>
  <!-- Feet -->
  <ellipse cx="182" cy="231" rx="13" ry="6" fill="#D4A882"/>
  <ellipse cx="218" cy="231" rx="13" ry="6" fill="#D4A882"/>

  <!-- Khanda symbol between them -->
  <text x="140" y="158" font-size="20" text-anchor="middle" fill="#FFD700" opacity="0.8">☬</text>
</svg>`,

// ============================================================
// WESTERN – Bride in white ball gown, Groom in grey suit
// ============================================================
western: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) -->
  <ellipse cx="80" cy="28" rx="20" ry="14" fill="#3d2c1e"/>
  <ellipse cx="80" cy="48" rx="18" ry="20" fill="#FDDCBC"/>
  <ellipse cx="73" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <circle cx="74" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="88" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 74 58 Q 80 64 86 58" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Grey suit -->
  <path d="M 52 66 L 44 192 L 116 192 L 108 66 Z" fill="#4a5568"/>
  <path d="M 68 66 L 80 80 L 92 66" fill="#fff"/>
  <rect x="74" y="66" width="12" height="26" fill="#fff"/>
  <!-- Tie -->
  <path d="M 78 68 L 74 78 L 80 95 L 86 78 L 82 68 Z" fill="#C9A84C"/>
  <rect x="26" y="68" width="22" height="50" rx="10" fill="#4a5568"/>
  <rect x="112" y="68" width="22" height="50" rx="10" fill="#4a5568"/>
  <rect x="26" y="110" width="22" height="8" rx="4" fill="#fff"/>
  <rect x="112" y="110" width="22" height="8" rx="4" fill="#fff"/>
  <ellipse cx="37" cy="122" rx="11" ry="7" fill="#FDDCBC"/>
  <ellipse cx="123" cy="122" rx="11" ry="7" fill="#FDDCBC"/>
  <rect x="55" y="192" width="24" height="38" rx="4" fill="#2d3748"/>
  <rect x="81" y="192" width="24" height="38" rx="4" fill="#2d3748"/>
  <ellipse cx="67" cy="233" rx="14" ry="6" fill="#111"/>
  <ellipse cx="93" cy="233" rx="14" ry="6" fill="#111"/>

  <!-- BRIDE (right) -->
  <!-- Veil flowing back -->
  <path d="M 180 14 Q 200 6 220 14 L 238 200 L 162 200 Z" fill="#fff" opacity="0.3"/>
  <!-- Updo hair -->
  <ellipse cx="200" cy="22" rx="22" ry="15" fill="#7B5E3F"/>
  <path d="M 182 20 Q 200 14 218 20 Q 210 10 200 8 Q 190 10 182 20" fill="#5a3825"/>
  <circle cx="214" cy="14" r="5" fill="#FFB7C5"/>
  <circle cx="214" cy="14" r="2.5" fill="#fff"/>
  <ellipse cx="200" cy="48" rx="18" ry="20" fill="#FDDCBC"/>
  <ellipse cx="193" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="207" cy="44" rx="3" ry="3.5" fill="#2C1810"/>
  <circle cx="194" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="43" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 194 58 Q 200 64 206 58" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Strapless white gown -->
  <rect x="182" y="66" width="36" height="26" rx="8" fill="#fff"/>
  <path d="M 168 92 Q 148 160 142 235 L 258 235 Q 252 160 232 92 Z" fill="#fff"/>
  <!-- Gown details -->
  <path d="M 168 120 Q 200 130 232 120" stroke="#E8D5B0" stroke-width="1.5" fill="none" opacity="0.6"/>
  <path d="M 157 165 Q 200 177 243 165" stroke="#E8D5B0" stroke-width="1.5" fill="none" opacity="0.6"/>
  <rect x="155" y="68" width="24" height="42" rx="10" fill="#fff"/>
  <rect x="221" y="68" width="24" height="42" rx="10" fill="#fff"/>
  <ellipse cx="167" cy="113" rx="12" ry="8" fill="#FDDCBC"/>
  <ellipse cx="233" cy="113" rx="12" ry="8" fill="#FDDCBC"/>
  <!-- Bouquet -->
  <circle cx="153" cy="116" r="13" fill="#FFB7C5"/>
  <circle cx="148" cy="109" r="8" fill="#FF8FAB"/>
  <circle cx="160" cy="108" r="7" fill="#FF6B8A"/>
  <rect x="149" y="128" width="8" height="14" rx="3" fill="#2d5a27"/>

  <!-- Rings / hearts between them -->
  <circle cx="140" cy="150" r="8" fill="none" stroke="#C9A84C" stroke-width="2.5"/>
  <circle cx="140" cy="165" r="8" fill="none" stroke="#C9A84C" stroke-width="2.5"/>
  <text x="140" y="185" font-size="14" text-anchor="middle" fill="#C9A84C" opacity="0.8">♥</text>
</svg>`,

// ============================================================
// SOUTH INDIAN – Bride in silk Kanjivaram, Groom in dhoti
// ============================================================
southIndian: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 240">
  <!-- GROOM (left) – dhoti + angavastram + tilak -->
  <ellipse cx="80" cy="30" rx="20" ry="18" fill="#4a2c0a"/>
  <!-- Vibhuti/Tilak on forehead -->
  <rect x="76" y="26" width="8" height="3" rx="1" fill="#fff"/>
  <circle cx="80" cy="25" r="2" fill="#FF1744"/>
  <ellipse cx="80" cy="52" rx="18" ry="20" fill="#C8956C"/>
  <ellipse cx="73" cy="48" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="87" cy="48" rx="3" ry="3.5" fill="#2C1810"/>
  <path d="M 73 62 Q 80 68 87 62" stroke="#9A6040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- White dhoti shirt -->
  <rect x="58" y="70" width="44" height="35" rx="5" fill="#FFFFF0"/>
  <!-- Angavastram (saffron) draped over shoulder -->
  <path d="M 58 70 Q 40 90 35 130" stroke="#FF8C00" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.85"/>
  <!-- Dhoti (white) -->
  <path d="M 55 105 L 45 220 L 115 220 L 105 105 Z" fill="#FFFFF0"/>
  <!-- Gold border on dhoti -->
  <path d="M 45 213 L 115 213 L 112 220 L 48 220 Z" fill="#FFD700"/>
  <!-- Arms -->
  <rect x="30" y="72" width="22" height="45" rx="10" fill="#FFFFF0"/>
  <rect x="108" y="72" width="22" height="45" rx="10" fill="#FFFFF0"/>
  <ellipse cx="41" cy="120" rx="11" ry="8" fill="#C8956C"/>
  <ellipse cx="119" cy="120" rx="11" ry="8" fill="#C8956C"/>
  <!-- Feet with kolappodi (dots) -->
  <ellipse cx="65" cy="223" rx="13" ry="6" fill="#C8956C"/>
  <ellipse cx="95" cy="223" rx="13" ry="6" fill="#C8956C"/>

  <!-- BRIDE (right) – Kanjivaram silk saree -->
  <!-- Hair long with flowers -->
  <ellipse cx="200" cy="22" rx="20" ry="16" fill="#2C1810"/>
  <path d="M 218 25 L 222 120 Q 210 125 208 120 L 213 25" fill="#2C1810"/>
  <!-- Jasmine flowers in hair (gajra) -->
  <circle cx="217" cy="16" r="4" fill="#fff"/>
  <circle cx="223" cy="20" r="4" fill="#fff"/>
  <circle cx="226" cy="28" r="4" fill="#fff"/>
  <circle cx="224" cy="36" r="3" fill="#fff"/>
  <!-- Bindi gold -->
  <circle cx="200" cy="42" r="4" fill="#FFD700"/>
  <!-- Pottu red dot -->
  <circle cx="200" cy="42" r="2" fill="#FF1744"/>
  <ellipse cx="200" cy="54" rx="18" ry="20" fill="#D4A882"/>
  <ellipse cx="193" cy="50" rx="3.5" ry="4" fill="#1a1a1a"/>
  <ellipse cx="207" cy="50" rx="3.5" ry="4" fill="#1a1a1a"/>
  <circle cx="194" cy="49" r="1" fill="#fff" opacity="0.7"/>
  <circle cx="208" cy="49" r="1" fill="#fff" opacity="0.7"/>
  <path d="M 194 63 Q 200 69 206 63" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Gold thali/mangalsutra -->
  <path d="M 184 72 Q 200 84 216 72" stroke="#FFD700" stroke-width="2.5" fill="none"/>
  <circle cx="200" cy="82" r="5" fill="#FFD700"/>
  <!-- Kanjivaram saree (deep red+gold) -->
  <path d="M 172 73 L 161 228 L 239 228 L 228 73 Z" fill="#8B0000"/>
  <!-- Saree pallu with checks pattern -->
  <path d="M 172 73 Q 158 110 155 160 L 143 158 Q 146 108 164 73 Z" fill="#A00000"/>
  <!-- Gold border bottom & top -->
  <path d="M 161 220 L 239 220 L 237 228 L 163 228 Z" fill="#FFD700"/>
  <!-- Gold zari border pattern on saree -->
  <path d="M 165 150 Q 200 145 235 150" stroke="#FFD700" stroke-width="3" fill="none" opacity="0.5"/>
  <path d="M 163 175 Q 200 170 237 175" stroke="#FFD700" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M 163 200 Q 200 195 237 200" stroke="#FFD700" stroke-width="2" fill="none" opacity="0.5"/>
  <!-- Blouse -->
  <rect x="178" y="71" width="44" height="28" rx="5" fill="#A00000"/>
  <!-- Arms with gold bangles -->
  <rect x="150" y="73" width="22" height="48" rx="10" fill="#8B0000"/>
  <rect x="148" y="92" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="101" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="148" y="110" width="24" height="4" rx="2" fill="#FFD700"/>
  <rect x="228" y="73" width="22" height="48" rx="10" fill="#8B0000"/>
  <rect x="226" y="92" width="24" height="4" rx="2" fill="#FFD700"/>
  <ellipse cx="161" cy="124" rx="12" ry="8" fill="#D4A882"/>
  <ellipse cx="239" cy="124" rx="12" ry="8" fill="#D4A882"/>
  <ellipse cx="182" cy="231" rx="13" ry="6" fill="#D4A882"/>
  <ellipse cx="218" cy="231" rx="13" ry="6" fill="#D4A882"/>
  <path d="M 170 228 Q 182 223 194 228" stroke="#FFD700" stroke-width="1.5" fill="none"/>

  <!-- Lamp/Diya between them -->
  <path d="M 135 175 Q 140 165 145 175 L 143 185 L 137 185 Z" fill="#FF8C00"/>
  <ellipse cx="140" cy="185" rx="6" ry="3" fill="#8B6914"/>
  <path d="M 140 168 Q 138 158 140 150" stroke="#FFD700" stroke-width="2" fill="none" opacity="0.8"/>
</svg>`,

// ============================================================
// BIRTHDAY – Party person with cake, balloons, crown
// ============================================================
birthday: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240">
  <!-- Balloons -->
  <ellipse cx="50" cy="60" rx="22" ry="28" fill="#FF6B6B"/>
  <ellipse cx="100" cy="40" rx="22" ry="28" fill="#FFD700"/>
  <ellipse cx="150" cy="55" rx="22" ry="28" fill="#4CAF50"/>
  <line x1="50" y1="88" x2="80" y2="150" stroke="#FF6B6B" stroke-width="1.5"/>
  <line x1="100" y1="68" x2="100" y2="150" stroke="#FFD700" stroke-width="1.5"/>
  <line x1="150" y1="83" x2="120" y2="150" stroke="#4CAF50" stroke-width="1.5"/>
  <!-- Stars on balloons -->
  <text x="50" y="65" font-size="18" text-anchor="middle" fill="#fff" opacity="0.6">★</text>
  <text x="100" y="45" font-size="18" text-anchor="middle" fill="#fff" opacity="0.6">★</text>
  <text x="150" y="60" font-size="18" text-anchor="middle" fill="#fff" opacity="0.6">★</text>

  <!-- Person -->
  <!-- Birthday crown -->
  <polygon points="75,95 85,78 95,92 105,75 115,92 125,78 130,95" fill="#FFD700"/>
  <circle cx="85" cy="78" r="4" fill="#FF1744"/>
  <circle cx="105" cy="75" r="4" fill="#4CAF50"/>
  <circle cx="125" cy="78" r="4" fill="#2196F3"/>
  <!-- Head -->
  <circle cx="100" cy="120" r="28" fill="#F5C5A3"/>
  <!-- Confetti on face/party -->
  <!-- Eyes (happy) -->
  <path d="M 88 116 Q 91 112 94 116" stroke="#2C1810" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 106 116 Q 109 112 112 116" stroke="#2C1810" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Big smile -->
  <path d="M 86 128 Q 100 142 114 128" stroke="#C47A5A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Rosy cheeks -->
  <circle cx="84" cy="128" r="7" fill="#FFB3B3" opacity="0.5"/>
  <circle cx="116" cy="128" r="7" fill="#FFB3B3" opacity="0.5"/>
  <!-- Party shirt -->
  <rect x="70" y="148" width="60" height="55" rx="8" fill="#7C3AED"/>
  <!-- Confetti on shirt -->
  <rect x="78" y="158" width="6" height="6" rx="1" fill="#FFD700" transform="rotate(20,81,161)"/>
  <rect x="96" y="162" width="6" height="6" rx="1" fill="#FF6B6B" transform="rotate(-15,99,165)"/>
  <rect x="112" y="155" width="6" height="6" rx="1" fill="#4CAF50" transform="rotate(30,115,158)"/>
  <!-- Arms up celebrating -->
  <path d="M 70 152 Q 45 140 38 120" stroke="#7C3AED" stroke-width="18" stroke-linecap="round" fill="none"/>
  <path d="M 130 152 Q 155 140 162 120" stroke="#7C3AED" stroke-width="18" stroke-linecap="round" fill="none"/>
  <!-- Hands -->
  <ellipse cx="35" cy="116" rx="12" ry="10" fill="#F5C5A3"/>
  <ellipse cx="165" cy="116" rx="12" ry="10" fill="#F5C5A3"/>

  <!-- Birthday cake -->
  <rect x="68" y="203" width="64" height="32" rx="6" fill="#FF9999"/>
  <rect x="68" y="195" width="64" height="12" rx="4" fill="#FFD700"/>
  <!-- Cake layers -->
  <rect x="68" y="210" width="64" height="3" fill="#fff" opacity="0.5"/>
  <!-- Candles -->
  <rect x="83" y="186" width="7" height="12" rx="2" fill="#FF6B6B"/>
  <rect x="97" y="182" width="7" height="16" rx="2" fill="#4CAF50"/>
  <rect x="111" y="186" width="7" height="12" rx="2" fill="#2196F3"/>
  <!-- Flames -->
  <ellipse cx="87" cy="184" rx="4" ry="5" fill="#FFD700"/>
  <ellipse cx="101" cy="180" rx="4" ry="5" fill="#FFD700"/>
  <ellipse cx="115" cy="184" rx="4" ry="5" fill="#FFD700"/>
</svg>`,

// ============================================================
// ANNIVERSARY – Romantic couple silhouette with hearts
// ============================================================
anniversary: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 230">
  <!-- Floating hearts background -->
  <text x="30" y="50" font-size="20" fill="#FF6B8A" opacity="0.3">♥</text>
  <text x="180" y="40" font-size="16" fill="#FFD700" opacity="0.4">♥</text>
  <text x="210" y="80" font-size="12" fill="#FF6B8A" opacity="0.3">♥</text>
  <text x="20" y="120" font-size="14" fill="#FFD700" opacity="0.3">♥</text>

  <!-- Man (left) -->
  <circle cx="85" cy="55" r="22" fill="#C8956C"/>
  <!-- Hair -->
  <ellipse cx="85" cy="38" rx="22" ry="12" fill="#3d2c1e"/>
  <!-- Eyes -->
  <ellipse cx="78" cy="52" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="92" cy="52" rx="3" ry="3.5" fill="#2C1810"/>
  <!-- Smile -->
  <path d="M 78 64 Q 85 70 92 64" stroke="#9A6040" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Suit -->
  <path d="M 55 76 L 46 200 L 124 200 L 115 76 Z" fill="#1a1a2e"/>
  <path d="M 71 76 L 85 90 L 99 76" fill="#fff"/>
  <rect x="79" y="76" width="12" height="28" fill="#fff"/>
  <path d="M 82 78 L 78 88 L 85 100 L 92 88 L 88 78 Z" fill="#8B0000"/>
  <rect x="26" y="78" width="24" height="48" rx="10" fill="#1a1a2e"/>
  <rect x="110" y="78" width="24" height="48" rx="10" fill="#1a1a2e"/>
  <ellipse cx="38" cy="128" rx="12" ry="8" fill="#C8956C"/>
  <ellipse cx="122" cy="128" rx="12" ry="8" fill="#C8956C"/>

  <!-- Woman (right) -->
  <!-- Hair -->
  <ellipse cx="165" cy="42" rx="24" ry="18" fill="#5a3825"/>
  <path d="M 144 50 L 140 130 Q 150 134 155 128 L 152 50" fill="#5a3825"/>
  <circle cx="180" cy="32" r="6" fill="#FF6B8A"/>
  <circle cx="180" cy="32" r="3" fill="#fff"/>
  <ellipse cx="165" cy="58" rx="20" ry="22" fill="#F5C5A3"/>
  <ellipse cx="158" cy="54" rx="3" ry="3.5" fill="#2C1810"/>
  <ellipse cx="172" cy="54" rx="3" ry="3.5" fill="#2C1810"/>
  <path d="M 158 68 Q 165 74 172 68" stroke="#C47A5A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Red evening gown -->
  <rect x="148" y="78" width="34" height="28" rx="6" fill="#8B0000"/>
  <path d="M 140 106 Q 122 165 118 230 L 212 230 Q 208 165 190 106 Z" fill="#8B0000"/>
  <path d="M 140 140 Q 165 150 190 140" stroke="#FFD700" stroke-width="1.5" fill="none" opacity="0.5"/>
  <rect x="122" y="78" width="24" height="46" rx="10" fill="#8B0000"/>
  <rect x="184" y="78" width="24" height="46" rx="10" fill="#8B0000"/>
  <ellipse cx="134" cy="127" rx="12" ry="8" fill="#F5C5A3"/>
  <ellipse cx="196" cy="127" rx="12" ry="8" fill="#F5C5A3"/>

  <!-- LARGE HEART between/connecting them -->
  <path d="M 120 105 Q 108 90 100 100 Q 92 110 120 135 Q 148 110 140 100 Q 132 90 120 105 Z" fill="#FF1744" opacity="0.85"/>

  <!-- Champagne glasses -->
  <path d="M 38 128 L 34 155 L 30 158 L 46 158 L 42 155 Z" fill="#C9A84C" opacity="0.7"/>
  <path d="M 202 128 L 198 155 L 194 158 L 210 158 L 206 155 Z" fill="#C9A84C" opacity="0.7"/>
  <line x1="38" y1="155" x2="202" y2="155" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>
</svg>`,

// ============================================================
// NEW YEAR – Party duo with champagne and fireworks
// ============================================================
newYear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220">
  <!-- Firework bursts -->
  <circle cx="40" cy="40" r="25" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="4,6" opacity="0.7"/>
  <circle cx="160" cy="35" r="20" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="4,6" opacity="0.7"/>
  <text x="40" y="45" font-size="28" text-anchor="middle" fill="#FFD700" opacity="0.8">✦</text>
  <text x="160" y="40" font-size="22" text-anchor="middle" fill="#FF6B6B" opacity="0.8">✦</text>
  <text x="100" y="25" font-size="18" text-anchor="middle" fill="#64FFDA" opacity="0.7">★</text>

  <!-- Person -->
  <!-- Party hat -->
  <polygon points="75,62 100,20 125,62" fill="#FF4081"/>
  <rect x="75" y="60" width="50" height="8" rx="4" fill="#FFD700"/>
  <circle cx="100" cy="20" r="6" fill="#FFD700"/>
  <circle cx="85" cy="36" r="3" fill="#fff" opacity="0.7"/>
  <circle cx="108" cy="30" r="3" fill="#fff" opacity="0.7"/>
  <!-- Head -->
  <circle cx="100" cy="90" r="28" fill="#F5C5A3"/>
  <!-- Happy eyes closed (celebration) -->
  <path d="M 88 86 Q 91 82 94 86" stroke="#2C1810" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 106 86 Q 109 82 112 86" stroke="#2C1810" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Big laugh smile -->
  <path d="M 86 98 Q 100 115 114 98" stroke="#C47A5A" stroke-width="2.5" fill="#FFDCC0" stroke-linecap="round"/>
  <!-- Rosy cheeks -->
  <circle cx="83" cy="96" r="8" fill="#FFB3B3" opacity="0.5"/>
  <circle cx="117" cy="96" r="8" fill="#FFB3B3" opacity="0.5"/>
  <!-- Festive outfit -->
  <rect x="68" y="118" width="64" height="60" rx="8" fill="#1a1a2e"/>
  <!-- Gold stars on outfit -->
  <text x="100" y="150" font-size="14" text-anchor="middle" fill="#FFD700" opacity="0.7">★</text>
  <text x="82" y="162" font-size="10" text-anchor="middle" fill="#FFD700" opacity="0.6">★</text>
  <text x="118" y="160" font-size="10" text-anchor="middle" fill="#FFD700" opacity="0.6">★</text>
  <!-- Arms up -->
  <path d="M 68 122 Q 44 108 36 84" stroke="#1a1a2e" stroke-width="20" stroke-linecap="round" fill="none"/>
  <path d="M 132 122 Q 156 108 164 84" stroke="#1a1a2e" stroke-width="20" stroke-linecap="round" fill="none"/>
  <ellipse cx="33" cy="80" rx="13" ry="10" fill="#F5C5A3"/>
  <ellipse cx="167" cy="80" rx="13" ry="10" fill="#F5C5A3"/>
  <!-- Champagne glass left -->
  <path d="M 22 60 L 18 85 L 14 88 L 30 88 L 26 85 Z" fill="#C9A84C" opacity="0.8"/>
  <ellipse cx="22" cy="60" rx="8" ry="6" fill="#C9A84C" opacity="0.4"/>
  <!-- Champagne glass right -->
  <path d="M 178 55 L 174 80 L 170 83 L 186 83 L 182 80 Z" fill="#C9A84C" opacity="0.8"/>
  <ellipse cx="178" cy="55" rx="8" ry="6" fill="#C9A84C" opacity="0.4"/>
  <!-- Confetti -->
  <rect x="55" y="70" width="6" height="6" rx="1" fill="#FF6B6B" transform="rotate(20,58,73)"/>
  <rect x="130" y="65" width="6" height="6" rx="1" fill="#4CAF50" transform="rotate(-25,133,68)"/>
  <rect x="145" y="90" width="6" height="6" rx="1" fill="#2196F3" transform="rotate(40,148,93)"/>
  <rect x="44" y="95" width="6" height="6" rx="1" fill="#FF9800" transform="rotate(-15,47,98)"/>
  <!-- "2025" text -->
  <text x="100" y="205" font-size="22" font-weight="bold" text-anchor="middle" fill="#FFD700" font-family="sans-serif" opacity="0.9">2025</text>
</svg>`,

// ============================================================
// HOUSEWARMING – Happy family at new home door
// ============================================================
housewarming: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 230">
  <!-- House -->
  <!-- Roof -->
  <polygon points="30,100 120,30 210,100" fill="#8B3A0F"/>
  <!-- Chimney -->
  <rect x="145" y="48" width="18" height="35" rx="3" fill="#7C3412"/>
  <!-- House walls -->
  <rect x="40" y="98" width="160" height="108" rx="4" fill="#FEF3C7"/>
  <!-- Door -->
  <rect x="95" y="135" width="50" height="71" rx="5" fill="#8B4513"/>
  <circle cx="138" cy="172" r="4" fill="#FFD700"/>
  <path d="M 95 155 L 145 155" stroke="#7a3a0a" stroke-width="1.5" opacity="0.5"/>
  <!-- Windows -->
  <rect x="52" y="112" width="38" height="32" rx="4" fill="#93C5FD"/>
  <rect x="150" y="112" width="38" height="32" rx="4" fill="#93C5FD"/>
  <!-- Window cross bars -->
  <line x1="71" y1="112" x2="71" y2="144" stroke="#fff" stroke-width="1.5"/>
  <line x1="52" y1="128" x2="90" y2="128" stroke="#fff" stroke-width="1.5"/>
  <line x1="169" y1="112" x2="169" y2="144" stroke="#fff" stroke-width="1.5"/>
  <line x1="150" y1="128" x2="188" y2="128" stroke="#fff" stroke-width="1.5"/>
  <!-- Flower pots by door -->
  <rect x="82" y="190" width="14" height="16" rx="2" fill="#8B4513"/>
  <circle cx="89" cy="187" r="9" fill="#22C55E"/>
  <circle cx="85" cy="182" r="5" fill="#FF6B8A"/>
  <rect x="143" y="190" width="14" height="16" rx="2" fill="#8B4513"/>
  <circle cx="150" cy="187" r="9" fill="#22C55E"/>
  <circle cx="154" cy="182" r="5" fill="#F59E0B"/>
  <!-- "Home Sweet Home" banner -->
  <rect x="55" y="62" width="130" height="22" rx="4" fill="#FF8C00"/>
  <text x="120" y="78" font-size="10" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="bold">🏡 HOME SWEET HOME</text>
  <!-- Path to door -->
  <path d="M 95 206 Q 120 212 145 206 L 150 230 L 90 230 Z" fill="#D4A017" opacity="0.4"/>

  <!-- Family figures in front -->
  <!-- Dad -->
  <circle cx="68" cy="165" r="14" fill="#C8956C"/>
  <rect x="58" y="178" width="20" height="32" rx="5" fill="#1E40AF"/>
  <!-- Mom -->
  <circle cx="100" cy="162" r="13" fill="#F0C5A3"/>
  <!-- Hair bow -->
  <path d="M 90 153 Q 100 148 110 153" fill="#FF6B8A" stroke="none"/>
  <path d="M 172" y="162" r="13"/>
  <rect x="90" y="174" width="20" height="36" rx="5" fill="#DC2626"/>
  <!-- Kid small -->
  <circle cx="132" cy="172" r="10" fill="#FDDCBC"/>
  <rect x="126" y="181" width="14" height="24" rx="4" fill="#10B981"/>

  <!-- Stars / confetti -->
  <text x="30" y="90" font-size="14" fill="#FFD700" opacity="0.7">✦</text>
  <text x="200" y="88" font-size="12" fill="#FF6B8A" opacity="0.6">✦</text>
  <text x="215" y="140" font-size="10" fill="#FFD700" opacity="0.5">★</text>
</svg>`,

// ============================================================
// BABY SHOWER – Cute baby with stars and teddy
// ============================================================
babyShower: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230">
  <!-- Stars floating -->
  <text x="25" y="45" font-size="18" fill="#C4B5FD" opacity="0.5">★</text>
  <text x="158" y="35" font-size="14" fill="#F9A8D4" opacity="0.5">✦</text>
  <text x="175" y="75" font-size="12" fill="#C4B5FD" opacity="0.4">★</text>
  <text x="15" y="90" font-size="12" fill="#F9A8D4" opacity="0.4">✦</text>
  <text x="170" y="130" font-size="10" fill="#C4B5FD" opacity="0.4">★</text>

  <!-- Baby crib/cradle -->
  <path d="M 28 148 Q 100 135 172 148 L 175 190 Q 100 205 25 190 Z" fill="#FDF2FF"/>
  <path d="M 28 148 Q 100 136 172 148" stroke="#D8B4FE" stroke-width="3" fill="none"/>
  <!-- Crib legs -->
  <rect x="40" y="188" width="12" height="28" rx="4" fill="#E9D5FF"/>
  <rect x="148" y="188" width="12" height="28" rx="4" fill="#E9D5FF"/>
  <!-- Crib rail bows -->
  <circle cx="70" cy="148" r="4" fill="#F9A8D4"/>
  <circle cx="100" cy="143" r="4" fill="#C4B5FD"/>
  <circle cx="130" cy="148" r="4" fill="#F9A8D4"/>

  <!-- Baby inside crib -->
  <!-- Baby blanket -->
  <ellipse cx="100" cy="172" rx="52" ry="22" fill="#FDE8FF"/>
  <!-- Baby head -->
  <circle cx="100" cy="153" r="22" fill="#FDD5B1"/>
  <!-- Baby hair sprout -->
  <path d="M 100 133 Q 98 125 100 120 Q 102 125 100 133" fill="#D4956C" stroke="none"/>
  <!-- Big sparkly eyes -->
  <circle cx="91" cy="150" r="6" fill="#2C1810"/>
  <circle cx="109" cy="150" r="6" fill="#2C1810"/>
  <circle cx="93" cy="148" r="2" fill="#fff"/>
  <circle cx="111" cy="148" r="2" fill="#fff"/>
  <!-- Rosy cheeks -->
  <circle cx="85" cy="157" r="6" fill="#FFB3C6" opacity="0.6"/>
  <circle cx="115" cy="157" r="6" fill="#FFB3C6" opacity="0.6"/>
  <!-- Baby smile -->
  <path d="M 93 161 Q 100 168 107 161" stroke="#C47A5A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Baby hands peeking out -->
  <ellipse cx="55" cy="168" rx="10" ry="8" fill="#FDD5B1"/>
  <ellipse cx="145" cy="168" rx="10" ry="8" fill="#FDD5B1"/>

  <!-- Teddy bear beside crib -->
  <circle cx="30" cy="152" r="13" fill="#D4956C"/>
  <circle cx="21" cy="143" r="7" fill="#D4956C"/>
  <circle cx="39" cy="143" r="7" fill="#D4956C"/>
  <circle cx="23" cy="142" r="3" fill="#A0522D"/>
  <circle cx="37" cy="142" r="3" fill="#A0522D"/>
  <circle cx="30" cy="152" r="4" fill="#A0522D"/>
  <circle cx="26" cy="150" r="1.5" fill="#2C1810"/>
  <circle cx="34" cy="150" r="1.5" fill="#2C1810"/>
  <path d="M 27 155 Q 30 158 33 155" stroke="#2C1810" stroke-width="1.2" fill="none"/>
  <!-- Teddy bow tie -->
  <path d="M 26 162 L 22 167 L 26 172 L 30 167 Z" fill="#FF6B8A"/>
  <path d="M 34 162 L 38 167 L 34 172 L 30 167 Z" fill="#FF6B8A"/>

  <!-- Mobile hanging above -->
  <line x1="100" y1="10" x2="100" y2="35" stroke="#D8B4FE" stroke-width="2"/>
  <line x1="70" y1="35" x2="130" y2="35" stroke="#D8B4FE" stroke-width="2"/>
  <text x="70" y="52" font-size="16" text-anchor="middle">🌙</text>
  <text x="100" y="50" font-size="14" text-anchor="middle">⭐</text>
  <text x="130" y="52" font-size="16" text-anchor="middle">☁️</text>
  <line x1="70" y1="35" x2="70" y2="40" stroke="#D8B4FE" stroke-width="1.5"/>
  <line x1="100" y1="35" x2="100" y2="38" stroke="#D8B4FE" stroke-width="1.5"/>
  <line x1="130" y1="35" x2="130" y2="40" stroke="#D8B4FE" stroke-width="1.5"/>
</svg>`,

};

// Map template subcategories/categories to character keys
function getCharacterKey(theme) {
    if (theme.category === 'Birthday') return 'birthday';
    if (theme.category === 'Anniversary') return 'anniversary';
    if (theme.category === 'New Year') return 'newYear';
    if (theme.category === 'Housewarming') return 'housewarming';
    if (theme.category === 'Baby Shower') return 'babyShower';
    // Wedding by subcategory
    const sub = (theme.sub || '').toLowerCase();
    if (sub.includes('muslim')) return 'muslim';
    if (sub.includes('christian')) return 'christian';
    if (sub.includes('sikh')) return 'sikh';
    if (sub.includes('south')) return 'southIndian';
    if (sub.includes('western')) return 'western';
    return 'hindu'; // Default for Hindu, neutral
}

// Ritual/deity motifs per culture (shown at top of card and video)
const RITUAL_MOTIFS = {
    hindu: {
        greeting: '॥ श्री गणेशाय नमः ॥',
        subGreeting: 'Seeking the blessings of Lord Ganesha',
        symbol: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="120" height="120">
            <!-- Ganesha simplified illustration -->
            <!-- Large ears -->
            <ellipse cx="30" cy="75" rx="22" ry="30" fill="#FF8C00"/>
            <ellipse cx="130" cy="75" rx="22" ry="30" fill="#FF8C00"/>
            <ellipse cx="30" cy="75" rx="14" ry="22" fill="#FFB347"/>
            <ellipse cx="130" cy="75" rx="14" ry="22" fill="#FFB347"/>
            <!-- Head -->
            <ellipse cx="80" cy="72" rx="42" ry="48" fill="#FF8C00"/>
            <!-- Forehead tilak -->
            <ellipse cx="80" cy="46" rx="6" ry="3" fill="#fff"/>
            <ellipse cx="80" cy="46" rx="3" ry="1.5" fill="#FF1744"/>
            <!-- Third eye bindi -->
            <circle cx="80" cy="52" r="4" fill="#FF1744"/>
            <!-- Trunk (curved down-left) -->
            <path d="M 68 90 Q 50 105 60 120 Q 68 130 80 118" stroke="#E07000" stroke-width="12" fill="none" stroke-linecap="round"/>
            <!-- Modak (sweet) in trunk tip -->
            <circle cx="82" cy="116" r="9" fill="#FFFDE7"/>
            <path d="M 76 113 Q 82 108 88 113" stroke="#FFD700" stroke-width="1.5" fill="none"/>
            <!-- Eyes -->
            <ellipse cx="65" cy="70" rx="9" ry="10" fill="#fff"/>
            <ellipse cx="95" cy="70" rx="9" ry="10" fill="#fff"/>
            <circle cx="65" cy="70" r="5" fill="#2C1810"/>
            <circle cx="95" cy="70" r="5" fill="#2C1810"/>
            <circle cx="66.5" cy="68.5" r="2" fill="#fff"/>
            <circle cx="96.5" cy="68.5" r="2" fill="#fff"/>
            <!-- Smile -->
            <path d="M 66 88 Q 80 96 94 88" stroke="#C47A5A" stroke-width="2" fill="none" stroke-linecap="round"/>
            <!-- Crown/mukut -->
            <path d="M 44 48 Q 55 30 80 26 Q 105 30 116 48" fill="#FFD700"/>
            <polygon points="80,18 85,30 80,28 75,30" fill="#FF1744"/>
            <polygon points="62,42 60,26 65,30 68,24" fill="#FFD700"/>
            <polygon points="98,42 100,26 95,30 92,24" fill="#FFD700"/>
            <!-- Body (partial) -->
            <ellipse cx="80" cy="140" rx="30" ry="20" fill="#FF8C00"/>
            <!-- 4 arms hint -->
            <path d="M 50 120 Q 36 108 30 96" stroke="#FF8C00" stroke-width="10" stroke-linecap="round" fill="none"/>
            <path d="M 110 120 Q 124 108 130 96" stroke="#FF8C00" stroke-width="10" stroke-linecap="round" fill="none"/>
            <!-- Lotus at bottom -->
            <ellipse cx="80" cy="155" rx="28" ry="8" fill="#FF6B8A" opacity="0.6"/>
        </svg>`,
        color: '#FF8C00'
    },
    muslim: {
        greeting: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        subGreeting: 'In the name of Allah, the Most Gracious, the Most Merciful',
        symbol: `<div style="font-size:80px;color:#D4AF37;text-shadow:0 0 20px rgba(212,175,55,0.6);">☪</div>`,
        color: '#D4AF37'
    },
    christian: {
        greeting: 'To God Be the Glory',
        subGreeting: 'What God has joined together, let no one separate',
        symbol: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="80" height="100">
            <rect x="42" y="10" width="16" height="110" rx="6" fill="#C9A84C"/>
            <rect x="15" y="40" width="70" height="16" rx="6" fill="#C9A84C"/>
            <!-- Glow -->
            <rect x="42" y="10" width="16" height="110" rx="6" fill="#FFD700" opacity="0.3"/>
            <rect x="15" y="40" width="70" height="16" rx="6" fill="#FFD700" opacity="0.3"/>
        </svg>`,
        color: '#C9A84C'
    },
    sikh: {
        greeting: 'ੴ ਸਤਿ ਨਾਮੁ',
        subGreeting: 'Ek Onkar – One God · Anand Karaj Ceremony',
        symbol: `<div style="font-size:60px;color:#000080;font-family:sans-serif;font-weight:bold;text-shadow:0 0 20px rgba(0,0,128,0.4);">☬</div>`,
        color: '#FF8C00'
    },
    western: {
        greeting: 'Together Forever',
        subGreeting: 'A love story for the ages',
        symbol: `<div style="font-size:70px;text-shadow:0 0 20px rgba(201,168,76,0.5);">💍</div>`,
        color: '#C9A84C'
    },
    southIndian: {
        greeting: 'ஶ்ரீ கணேசாய நமஃ',
        subGreeting: 'Seeking the divine blessings · Muhurtham',
        symbol: `<div style="font-size:70px;text-shadow:0 0 20px rgba(255,140,0,0.5);">🪔</div>`,
        color: '#FF8C00'
    },
    birthday: {
        greeting: "It's Time to Celebrate!",
        subGreeting: 'Wishing you joy, laughter, and love',
        symbol: `<div style="font-size:80px;">🎂</div>`,
        color: '#FCD34D'
    },
    anniversary: {
        greeting: 'Celebrating Years of Love',
        subGreeting: 'Every love story is beautiful, but ours is my favourite',
        symbol: `<div style="font-size:80px;">💕</div>`,
        color: '#FFD700'
    },
    newYear: {
        greeting: 'Happy New Year!',
        subGreeting: 'New beginnings, new dreams, new adventures',
        symbol: `<div style="font-size:80px;">🎆</div>`,
        color: '#FFD700'
    },
    housewarming: {
        greeting: 'Welcome to Our New Home!',
        subGreeting: 'Home is where love lives and memories are made',
        symbol: `<div style="font-size:80px;">🏡</div>`,
        color: '#FED7AA'
    },
    babyShower: {
        greeting: 'A New Little One is Coming!',
        subGreeting: 'Join us as we celebrate this beautiful new blessing',
        symbol: `<div style="font-size:80px;">👶</div>`,
        color: '#D8B4FE'
    },
};

function getRitualKey(theme) {
    const key = getCharacterKey(theme);
    return RITUAL_MOTIFS[key] || RITUAL_MOTIFS.hindu;
}
