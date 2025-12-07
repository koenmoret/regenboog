<?php

// Voeg titel "Menu" toe boven het mobiele menu
add_filter('wp_nav_menu_items', 'regenboog_add_mobile_menu_title', 20, 2);

function regenboog_add_mobile_menu_title($items, $args) {
    // Alleen voor het Astra mobiele menu
    if (isset($args->theme_location) && $args->theme_location === 'mobile_menu') {
        $title = '<li class="menu-title-regenboog">Menu</li>';
        // Titel bovenaan plaatsen
        return $title . $items;
    }
    return $items;
}

add_action('wp_enqueue_scripts', function () {
    // Child theme style.css, laadt na Astra door dependency op 'astra-theme-css'
    wp_enqueue_style(
        'astra-child-style',
        get_stylesheet_uri(),
        array('astra-theme-css'),
        wp_get_theme()->get('Version')
    );

    // Optioneel: extra custom.css als je die ooit toevoegt
    $custom = get_stylesheet_directory() . '/style.css';
    if (file_exists($custom)) {
        wp_enqueue_style(
            'astra-child-custom',
            get_stylesheet_directory_uri() . '/style.css',
            array('astra-child-style'),
            filemtime($custom)
        );
    }
}, 20);

function my_child_theme_scripts() {
    // Laad menu.js
    wp_enqueue_script(
        'menu',
        get_stylesheet_directory_uri() . '/js/menu.js',
        array(), // afhankelijkheden, bijv. array('jquery')
        false,
        true // in de footer
    );

    // Laad custom.js
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/js/custom.js',
        array(), // afhankelijkheden, bijv. array('jquery')
        filemtime(get_stylesheet_directory() . '/js/custom.js'), // versie voor cache-busting
        true // in de footer
    );
}
add_action('wp_enqueue_scripts', 'my_child_theme_scripts');

function allow_svg_uploads( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_uploads' );


function regenboog_enqueue_gsap() {
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
        array(),
        null,
        true
    );

    wp_enqueue_script(
        'regenboog-header-animations',
        get_stylesheet_directory_uri() . '/js/header-animations.js',
        array('gsap'),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'regenboog_enqueue_gsap');