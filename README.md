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

---

## 🔑 11. Belangrijk: Security-configuratie in wp-config.php

Bij het live zetten van de website moet wp-config.php worden gecontroleerd en aangevuld.
De volgende instellingen zijn essentieel voor veiligheid en stabiliteit.

✔ 11.1. Nieuwe Authentication Keys & Salts instellen

Deze MOETEN altijd worden vervangen bij een nieuwe installatie of migratie.

WordPress genereert deze automatisch via:

🔗 https://api.wordpress.org/secret-key/1.1/salt/

In wp-config.php vervang je de bestaande regels:

```
// --- Keys & Salts (vervang door echte waarden!) ---
define( 'AUTH_KEY',         'vervang_mij' );
define( 'SECURE_AUTH_KEY',  'vervang_mij' );
define( 'LOGGED_IN_KEY',    'vervang_mij' );
define( 'NONCE_KEY',        'vervang_mij' );
define( 'AUTH_SALT',        'vervang_mij' );
define( 'SECURE_AUTH_SALT', 'vervang_mij' );
define( 'LOGGED_IN_SALT',   'vervang_mij' );
define( 'NONCE_SALT',       'vervang_mij' );
```
Na vervanging worden alle sessies ongeldig gemaakt.
Gebruikers moeten opnieuw inloggen — dit is gewenst en veiliger.

✔ 11.2 Debugging uitschakelen op productie

Zorg dat debugging uit staat in een live omgeving:

// --- Debug modes uit op productie ---
define( 'WP_DEBUG', false );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

Dit voorkomt dat foutmeldingen zichtbaar worden voor bezoekers.

✔ 11.3 Aanvullende aanbevolen instellingen
// Forceer directe file writing (voorkomt FTP prompts)
define( 'FS_METHOD', 'direct' );

// Automatische updates toestaan
define( 'AUTOMATIC_UPDATER_DISABLED', false );

In functions.php wordt aangeraden om de WP-versie te verbergen:

// Verberg WordPress versie-informatie
remove_action('wp_head', 'wp_generator');
