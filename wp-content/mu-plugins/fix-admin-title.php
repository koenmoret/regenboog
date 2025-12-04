<?php
/* Plugin Name: Fix Null Admin Title (PHP 8.1+) */
add_filter('admin_title', function ($admin_title, $title) {
    if ($admin_title === null) {
        $admin_title = (string) $title;
    }
    return (string) $admin_title;
}, 20, 2);
