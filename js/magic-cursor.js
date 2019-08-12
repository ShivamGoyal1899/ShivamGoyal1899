(function (jQuery) {
  "use strict";
  function custom_cursor(event, e, $h_el) {
    var $mouse = jQuery('#mouse-cursor'),
        $el = $mouse.find('.mc-b');
  
    if(event == 'init') {
      jQuery('.navigation .menu > li > a').each(function() {
        if(!jQuery(this).attr('data-magic-cursor')) {
          jQuery(this).attr('data-magic-cursor', 'link')
        }
      });
      jQuery('a').each(function() {
        if(!jQuery(this).attr('data-magic-cursor')) {
          jQuery(this).attr('data-magic-cursor', 'link-small')
        }
      });
    } else if(event == 'move') {
      var scroll_top = jQuery(window).scrollTop(),
          top = e.pageY-scroll_top,
          left = e.pageX;
  
      $mouse.css({
        'top': top,
        'left': left
      });
    } else if(event == 'show') {
      $mouse.removeClass('hide');
    } else if(event == 'hide') {
      $mouse.addClass('hide');
    } else if(event == 'hover') {
      var type = '',
          label = '',
          old_label = '';
      if(type = $h_el.attr('data-magic-cursor')) {
        type = $h_el.attr('data-magic-cursor');
      }
      if((type == 'link-w-text') && (label = $h_el.attr('data-magic-cursor-text'))) {
        label = $h_el.attr('data-magic-cursor-text'),
        old_label = $el.find('span').text(label);
        if(old_label != label) {
          $el.find('span').text(label);
        }
      }

      //if(!$el.hasClass(type)) {
        $el.addClass(type);
      //}
    } else if(event == 'leave') {
      $el.attr('class', 'mc-b');
    }
  }

  jQuery(document).on('ready', function (e) {
    custom_cursor('init', '', jQuery(this));
  }).on('load mousemove', function (e) {
    custom_cursor('show', '', jQuery(this));
    custom_cursor('move', e, jQuery(this));
  }).on('mouseenter mouseover', '[data-magic-cursor]', function() {
    custom_cursor('hover', '', jQuery(this));
  }).on('mouseleave', '[data-magic-cursor]', function() {
    custom_cursor('leave', '', jQuery(this));
  }).on('mouseleave', function() {
    custom_cursor('hide', '', jQuery(this));
  }).on('mousedown', function() {
    custom_cursor('hover', '', jQuery(this));
  });

})(jQuery);