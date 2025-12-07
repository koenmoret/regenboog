<?php
/**
 * Custom Footer – Regenboog (Astra Child)
 */
if ( ! defined('ABSPATH') ) exit;
?>

    </div><!-- #content -->
</div><!-- #page -->

<footer class="rb-footer" role="contentinfo">
  <div class="rb-footer__inner">

    <!-- Kolom 1: Logo -->
    <div class="rb-footer__brand">
      <img
        src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo-regenboog-white.svg"
        alt="De Regenboog"
        class="rb-footer__logo">
    </div>

    <!-- Kolom 2: Menu -->
    <nav class="rb-footer__links" aria-label="Footer">

      <div class="rb-footer__links-inner">

      <?php
      wp_nav_menu([
        'theme_location' => 'footer_menu',
        'container'      => false,
        'menu_class'     => 'rb-footer__menu',
        'fallback_cb'    => false
      ]);
      ?>

      </div>
    </nav>

    <!-- Kolom 3: Contact -->
    <div class="rb-footer__contact">
      <div class="rb-footer__contact-inner">


        <div class="rb-footer__line">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/agenda.svg"
               alt="" aria-hidden="true" class="rb-icon">
          <span>Agenda</span>
        </div>

        <p class="rb-footer__line">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/marker.svg"
               alt="" aria-hidden="true" class="rb-icon">
          <span>De Grote Pekken 11</span>
        </p>

        <p class="rb-footer__line">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/phone.svg"
               alt="" aria-hidden="true" class="rb-icon">
          <a href="tel:0318200115">0318 200 115</a>
        </p>  
      </div>
    </div>

    <!-- Kolom 4: Live / Socials -->
    <div class="rb-footer__socials">
<<<<<<< HEAD

      <div class="rb-footer__socials-inner">
      <a class="rb-footer__live" href="/live">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/camera.svg"

=======
       <a class="rb-footer__live" href="/live">
        <img src="http://localhost/regenboog/wp-content/uploads/2025/12/camera.png"
>>>>>>> 05cfa78 (update footer)
             alt="" aria-hidden="true" class="rb-icon rb-icon--btn">
        Live stream
      </a>

      <ul class="rb-footer__social" aria-label="Social media">

        <li>
          <a class="is-circle" href="https://youtube.com" target="_blank" rel="noopener">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/youtube.svg" alt="YouTube" class="rb-icon">
          </a>
        </li>

        <li>
          <a class="is-circle" href="https://vimeo.com" target="_blank" rel="noopener">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/vimeo.svg" alt="Vimeo" class="rb-icon">
          </a>
        </li>

        <li>
          <a class="is-circle" href="https://facebook.com" target="_blank" rel="noopener">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/facebook.svg" alt="Facebook" class="rb-icon">
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>

  <div class="rb-footer__bottom">
    <small>© <?php echo date('Y'); ?> De Regenboog</small>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
