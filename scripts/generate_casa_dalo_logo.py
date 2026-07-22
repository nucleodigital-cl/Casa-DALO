import os
from weasyprint import HTML

# Create output folder if needed
os.makedirs("casa_dalo_vector_logos", exist_ok=True)

# Define the HTML and CSS for the Emerald and Gold vector-style logo
html_content = '''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap');
  
  @page {
    size: 800px 800px;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle at 50% 45%, #163B29 0%, #0B2116 65%, #05130C 100%);
    box-sizing: border-box;
    font-family: 'Cormorant Garamond', 'Georgia', serif;
    color: #F7E4B2;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  /* Outer Luxury Frame */
  .frame-outer {
    position: absolute;
    top: 30px; left: 30px; right: 30px; bottom: 30px;
    border: 2px solid #D4AF37;
    border-radius: 16px;
    box-shadow: inset 0 0 15px rgba(212,175,55,0.15);
  }
  .frame-inner {
    position: absolute;
    top: 38px; left: 38px; right: 38px; bottom: 38px;
    border: 1px dashed rgba(226,184,87,0.4);
    border-radius: 12px;
  }

  /* Corner Filigree */
  .corner {
    position: absolute;
    width: 24px; height: 24px;
    border-color: #E2B857;
    border-style: solid;
  }
  .top-left { top: 44px; left: 44px; border-width: 3px 0 0 3px; }
  .top-right { top: 44px; right: 44px; border-width: 3px 3px 0 0; }
  .bottom-left { bottom: 44px; left: 44px; border-width: 0 0 3px 3px; }
  .bottom-right { bottom: 44px; right: 44px; border-width: 0 3px 3px 0; }

  /* Logo Content */
  .logo-container {
    padding-top: 65px;
  }

  /* SVG Artwork */
  .art-svg {
    width: 320px;
    height: 250px;
    margin: 0 auto;
    display: block;
  }

  .title {
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: 46px;
    letter-spacing: 9px;
    color: #F8E7B6;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 9px; /* center balance with letter-spacing */
  }

  .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    font-size: 21px;
    letter-spacing: 6px;
    color: #E2C275;
    text-transform: uppercase;
    margin-top: 6px;
    margin-bottom: 22px;
    margin-left: 6px;
  }

  .divider {
    width: 360px;
    height: 16px;
    margin: 0 auto 18px auto;
  }

  .tagline {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 500;
    font-size: 19px;
    color: #DCD0B1;
    letter-spacing: 1.5px;
  }

  .fairytale-badge {
    display: inline-block;
    margin-top: 25px;
    padding: 6px 20px;
    border: 1px solid rgba(212,175,55,0.4);
    border-radius: 20px;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E8CF8C;
    background: rgba(11,33,22,0.6);
  }
</style>
</head>
<body>
  <div class="frame-outer"></div>
  <div class="frame-inner"></div>
  <div class="corner top-left"></div>
  <div class="corner top-right"></div>
  <div class="corner bottom-left"></div>
  <div class="corner bottom-right"></div>

  <div class="logo-container">
    <!-- SVG Fairytale Emblem Art -->
    <svg class="art-svg" viewBox="0 0 320 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFF0BD"/>
          <stop offset="35%" stop-color="#E2B857"/>
          <stop offset="70%" stop-color="#C59329"/>
          <stop offset="100%" stop-color="#996D13"/>
        </linearGradient>
        <linearGradient id="gold-light" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#C59329"/>
          <stop offset="50%" stop-color="#FFF6D1"/>
          <stop offset="100%" stop-color="#E2B857"/>
        </linearGradient>
      </defs>

      <!-- Arch Background Line -->
      <path d="M 60 170 A 100 100 0 0 1 260 170" fill="none" stroke="url(#gold)" stroke-width="1.2" opacity="0.35" stroke-dasharray="4 3"/>

      <!-- Stars / Magic Sparkles -->
      <path d="M 160 22 L 163 35 L 176 38 L 163 41 L 160 54 L 157 41 L 144 38 L 157 35 Z" fill="url(#gold-light)"/>
      <path d="M 85 70 L 86 77 L 93 78 L 86 79 L 85 86 L 84 79 L 77 78 L 84 77 Z" fill="url(#gold-light)" transform="scale(0.7) translate(30, 20)"/>
      <path d="M 235 70 L 236 77 L 243 78 L 236 79 L 235 86 L 234 79 L 227 78 L 234 77 Z" fill="url(#gold-light)" transform="scale(0.7) translate(100, 20)"/>
      
      <circle cx="105" cy="45" r="2" fill="#FFF0BD"/>
      <circle cx="215" cy="45" r="2" fill="#FFF0BD"/>
      <circle cx="65" cy="115" r="1.5" fill="#FFF0BD"/>
      <circle cx="255" cy="115" r="1.5" fill="#FFF0BD"/>

      <!-- Tiara / Crest Crown Arch -->
      <path d="M 115 50 Q 160 30 205 50 Q 160 40 115 50 Z" fill="url(#gold)"/>
      <circle cx="160" cy="31" r="4" fill="url(#gold-light)"/>
      <circle cx="132" cy="38" r="2.5" fill="url(#gold-light)"/>
      <circle cx="188" cy="38" r="2.5" fill="url(#gold-light)"/>

      <!-- Open Book Base -->
      <!-- Cover Edge -->
      <path d="M 160 170 C 120 158 55 150 15 162 L 15 174 C 55 162 120 170 160 182 C 200 170 265 162 305 174 L 305 162 C 265 150 200 158 160 170 Z" fill="url(#gold)" opacity="0.95"/>
      <!-- Pages Fanning -->
      <path d="M 160 160 C 122 145 60 138 20 148 L 20 160 C 60 150 122 157 160 170 C 198 157 260 150 300 160 L 300 148 C 260 138 198 145 160 160 Z" fill="#FCE8B1" opacity="0.5"/>
      <path d="M 160 150 C 124 135 65 128 25 138 L 25 148 C 65 138 124 145 160 158 C 196 145 255 138 295 148 L 295 138 C 255 128 196 135 160 150 Z" fill="url(#gold-light)"/>

      <!-- Book Bookmark Ribbon -->
      <path d="M 157 162 C 157 195 145 210 135 220 L 145 220 C 153 210 163 195 163 162 Z" fill="url(#gold)"/>

      <!-- Central Sacred Fairytale Heart (Del Amor) -->
      <g transform="translate(160, 95)">
        <!-- Heart Halo Rays -->
        <g stroke="url(#gold-light)" stroke-width="1" opacity="0.4">
          <line x1="0" y1="-5" x2="0" y2="-45"/>
          <line x1="0" y1="-5" x2="-28" y2="-33"/>
          <line x1="0" y1="-5" x2="28" y2="-33"/>
          <line x1="0" y1="-5" x2="-40" y2="-12"/>
          <line x1="0" y1="-5" x2="40" y2="-12"/>
        </g>

        <!-- Outer Filigree Heart Contour -->
        <path d="M 0 28 C -38 -5 -34 -42 0 -20 C 34 -42 38 -5 0 28 Z" fill="none" stroke="url(#gold)" stroke-width="3"/>
        <path d="M 0 22 C -30 -3 -27 -34 0 -16 C 27 -34 30 -3 0 22 Z" fill="url(#gold-light)" opacity="0.25"/>

        <!-- Vintage Keyhole inside Heart -->
        <circle cx="0" cy="-4" r="4.5" fill="url(#gold)"/>
        <polygon points="-2.5,-4 2.5,-4 4,9 -4,9" fill="url(#gold)"/>

        <!-- Entwined Flourish Vines -->
        <path d="M -26 4 C -42 -15 -20 -30 -2 -22" fill="none" stroke="url(#gold-light)" stroke-width="1.5"/>
        <path d="M 26 4 C 42 -15 20 -30 2 -22" fill="none" stroke="url(#gold-light)" stroke-width="1.5"/>

        <!-- Small Floral Rosebuds -->
        <circle cx="-32" cy="-10" r="2.5" fill="url(#gold)"/>
        <circle cx="32" cy="-10" r="2.5" fill="url(#gold)"/>
        <circle cx="0" cy="-24" r="3" fill="url(#gold-light)"/>
      </g>

      <!-- Feather Quill Pen Crossing Bottom -->
      <g transform="translate(160, 168) rotate(-14)">
        <path d="M -65 0 C -25 -10 25 -12 75 -5 C 25 -1 -25 3 -65 0 Z" fill="url(#gold)"/>
        <line x1="-65" y1="0" x2="82" y2="-4" stroke="url(#gold-light)" stroke-width="1"/>
      </g>
    </svg>

    <!-- Typography -->
    <div class="title">CASA DALO</div>
    <div class="subtitle">Del Amor y Otras Lecturas</div>

    <!-- Ornate Divider -->
    <svg class="divider" viewBox="0 0 360 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="150" y2="8" stroke="url(#gold-div)" stroke-width="1"/>
      <line x1="210" y1="8" x2="350" y2="8" stroke="url(#gold-div)" stroke-width="1"/>
      <polygon points="180,2 187,8 180,14 173,8" fill="#E2B857"/>
      <circle cx="162" cy="8" r="2" fill="#E2B857"/>
      <circle cx="198" cy="8" r="2" fill="#E2B857"/>
      <circle cx="10" cy="8" r="2" fill="#E2B857"/>
      <circle cx="350" cy="8" r="2" fill="#E2B857"/>
      <defs>
        <linearGradient id="gold-div" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(226,184,87,0.1)"/>
          <stop offset="100%" stop-color="#E2B857"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="tagline">“Libros artesanales para quienes leen con el corazón”</div>

    <div class="fairytale-badge">✦ Ediciones Únicas y Personalizadas ✦</div>
  </div>
</body>
</html>
'''

# Generate a high-resolution PNG using WeasyPrint
output_path = "casa_dalo_vector_logos/casa_dalo_vector_logo.png"
HTML(string=html_content).write_png(output_path)

print(f"Generated {output_path}")
