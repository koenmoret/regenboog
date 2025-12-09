<?php
// --- Database ---
define('DB_NAME', 'regenboog');
define('DB_USER', 'root');
define('DB_PASSWORD', '');          // XAMPP default is leeg
define('DB_HOST', '127.0.0.1');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

// --- Keys & Salts (vervang door echte!) ---
define('AUTH_KEY',         '');
define('SECURE_AUTH_KEY',  '');
define('LOGGED_IN_KEY',    '');
define('NONCE_KEY',        '');
define('AUTH_SALT',        '');
define('SECURE_AUTH_SALT', '');
define('LOGGED_IN_SALT',   '');
define('NONCE_SALT',       '');

// Tabelprefix (mag je zelf kiezen)
$table_prefix = 'rb_';

// Development
define('WP_DEBUG', true);

if (!defined('ABSPATH')) define('ABSPATH', __DIR__ . '/');
require_once ABSPATH . 'wp-settings.php';
