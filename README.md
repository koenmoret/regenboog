# 📘 README – Installatie & Implementatie van *De Regenboog* WordPress Website

Deze README beschrijft hoe de WordPress-site van **De Regenboog** lokaal ontwikkeld, overgezet en live geïnstalleerd moet worden.  
Alle benodigde plugins, WordPress-versies, PHP-versies en child-theme instellingen worden hieronder toegelicht.

---

## 📦 1. Systeemvereisten

| Component | Vereiste |
|----------|----------|
| **WordPress versie** | 6.9 |
| **PHP versie** | PHP **8.1** of hoger (aanbevolen 8.2) |
| **Webserver** | Apache of Nginx |
| **Database** | MySQL/MariaDB (bij voorkeur MariaDB 10.4+) |
| **Opslagruimte** | Minimaal 2GB |

---

## 🧩 2. Geïnstalleerde plugins

| Plugin | Functie |
|--------|---------|
| Akismet Anti-spam | Spamfilter |
| Contact Form 7 | Formulieren |
| FluentSMTP | SMTP-afhandeling |
| Smush | Afbeeldingoptimalisatie |
| Spectra | Gutenberg-blokken |
| Wordfence Security | Veiligheidsplugin |
| Yoast SEO | Zoekmachine-optimalisatie |

---

## 🧱 3. Structuur van het project

```
/wp-content
/themes
/astra
/regenboog-child
functions.php
style.css
js/
custom.js
header-animations.js
assets/
```
---

## 🔧 4. Installatie-handleiding

### 4.1 Voorbereiding
1. Installeer WordPress 6.9.
2. Zet PHP op versie 8.1+.
3. Maak een database aan (UTF8MB4).

### 4.2 Bestanden uploaden
1. Plaats **regenboog-child** in `/wp-content/themes/`.
2. Installeer en activeer **Astra**.
3. Activeer *Regenboog Child Theme* in WordPress.

---

## 🌐 5. URL-aanpassingen (local → live)

Vervang:

https://localhost/regenboog 


Door de productie-URL.


Bestanden waar vaak aanpassingen nodig zijn:

- style.css  
- functions.php   
- /assets/js/*.js  

### Automatisch (via WP-CLI)

wp search-replace 'http://localhost/regenboog' 'https://www.jouwsite.nl'


---

## 🗃️ 6. Database-migratie

1. Exporteer lokale database.  
2. Importeer op productie.  
3. Run search-replace.  
4. Permalinks opslaan.

---

## 🎨 7. Child-theme functionaliteiten

- Custom hero-sectie  
- Fade-in animaties  
- SVG iconen  
- Responsive layout tweaks  
- Buttons & typografie  

---

## 🔐 8. Veiligheid

- Configureer Wordfence volledig  
- Zorg voor automatische back-ups  
- Gebruik goede file-permissions (755 / 644)  

---

## 🚀 9. Optimalisatie

- Smush instellen voor afbeeldingen  
- Eventueel Redis object cache  
- Hosting caching inschakelen  

---

## 🔧 10. Troubleshooting

**Wit scherm?**  
→ Controleer PHP versie of theme errors.

**Kapotte afbeeldingen?**  
→ URL's zijn nog lokaal → zoek & vervang.

