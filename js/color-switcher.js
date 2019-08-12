"use strict";

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function change_scheme($type) {
  var pathname = location.pathname;

  if($type == 'click') {
    if(getCookie('color_scheme') == 'dark') {
      if(
        pathname == '/rezo/about-me/' ||
        pathname == '/rezo/left-menu/' ||
        pathname == '/rezo/splitscreen/' ||
        pathname == '/rezo/photographer/' ||
        pathname == '/rezo/blogger/' ||
        pathname == '/rezo/services/' ||
        pathname == '/rezo/services-2/' ||
        pathname == '/rezo/team/' ||
        pathname == '/rezo/contact-me/' ||
        pathname == '/rezo/contact-me-2/'
      ) {
        jQuery('body').removeClass('loaded');
        location.href = pathname.slice(0, -1)+'-dark/';
        return false;
      } else if(pathname == '/' || pathname == '/rezo/') {
        jQuery('body').removeClass('loaded');
        location.href = '/rezo/main-dark/';
        return false;
      }
    } else {
      if(
        pathname == '/rezo/main-dark/' ||
        pathname == '/rezo/about-me-dark/' ||
        pathname == '/rezo/left-menu-dark/' ||
        pathname == '/rezo/splitscreen-dark/' ||
        pathname == '/rezo/photographer-dark/' ||
        pathname == '/rezo/blogger-dark/' ||
        pathname == '/rezo/services-dark/' ||
        pathname == '/rezo/services-2-dark/' ||
        pathname == '/rezo/team-dark/' ||
        pathname == '/rezo/contact-me-dark/' ||
        pathname == '/rezo/contact-me-2-dark/'
      ) {
        jQuery('body').removeClass('loaded');
        location.href = pathname.slice(0, -6)+'/';
        return false;
      }
    }
  }

  if(getCookie('color_scheme') == 'dark') {
    jQuery('.site-logo a').attr('href', '/main-dark/');
  }

  jQuery('#menu-item-782 > a, .menu-item-782 > a').each(function() {
    var hostname = '//'+jQuery(this).context.hostname;

    if(getCookie('color_scheme') == 'dark') {
      jQuery(this).attr('href', '/rezo/main-dark/');
    } else {
      jQuery(this).attr('href', '/rezo/');
    }
  });

  if(getCookie('color_scheme') == 'dark') {
    jQuery('.scheme-switcher').addClass('active');
    jQuery('body').removeClass('light-scheme').addClass('dark-scheme');
    jQuery('.site-header').removeClass('dark-color').addClass('light-color');

    jQuery('.navigation a, .side-navigation a').each(function() {
      var hostname = '//'+jQuery(this).context.hostname,
      pathname = jQuery(this).context.pathname;

      if(
        pathname == '/rezo/about-me/' ||
        pathname == '/rezo/left-menu/' ||
        pathname == '/rezo/splitscreen/' ||
        pathname == '/rezo/photographer/' ||
        pathname == '/rezo/blogger/' ||
        pathname == '/rezo/services/' ||
        pathname == '/rezo/services-2/' ||
        pathname == '/rezo/team/' ||
        pathname == '/rezo/contact-me/' ||
        pathname == '/rezo/contact-me-2/'
      ) {
        jQuery(this).attr('href', pathname.slice(0, -1)+'-dark/');
      }
    });
  } else {
    jQuery('.scheme-switcher').removeClass('active');
    jQuery('body').addClass('light-scheme').removeClass('dark-scheme');
    jQuery('.site-header').addClass('dark-color').removeClass('light-color');

    jQuery('.navigation a, .side-navigation a').each(function() {
      var hostname = '//'+jQuery(this).context.hostname,
      pathname = jQuery(this).context.pathname;

      if(
        pathname == '/rezo/about-me-dark/' ||
        pathname == '/rezo/left-menu-dark/' ||
        pathname == '/rezo/splitscreen-dark/' ||
        pathname == '/rezo/photographer-dark/' ||
        pathname == '/rezo/blogger-dark/' ||
        pathname == '/rezo/services-dark/' ||
        pathname == '/rezo/services-2-dark/' ||
        pathname == '/rezo/team-dark/' ||
        pathname == '/rezo/contact-me-dark/' ||
        pathname == '/rezo/contact-me-2-dark/'
      ) {
        jQuery(this).attr('href', pathname.slice(0, -6)+'/');
      }
    });
  }
}
change_scheme('init');

jQuery(document).ready(function () {
  jQuery('.scheme-switcher').on('click', function() {
    if(jQuery(this).hasClass('active')) {
      setCookie('color_scheme', 'light', {path: '/rezo/'});
      jQuery('.scheme-switcher').removeClass('active');
    } else {
      setCookie('color_scheme', 'dark', {path: '/rezo/'});
      jQuery('.scheme-switcher').addClass('active');
    }
    change_scheme('click');
  });
});