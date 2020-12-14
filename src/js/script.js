console.info('%cSite designed and developed by Dental Design - dental-design.marketing', 'color: black' );

/*-----------------------------------------------------------------------------------*/
/* FORCE PAGE RELOAD TO STOP SAFARI & EDGE PAGE CHACHE */
/*-----------------------------------------------------------------------------------*/

window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload()
  }
};


/*-----------------------------------------------------------------------------------*/
/* RESPONSIVE NAV */
/*-----------------------------------------------------------------------------------*/

jQuery('.sub-menu').parent().addClass('menu-item-has-children');

var parent = jQuery('.navigation .menu-item');

parent.find('a').attr('aria-expanded', 'false');
parent.find('.sub-menu').attr('aria-hidden', 'true');

parent.find('a').hover(function(){
  jQuery(this).attr('aria-expanded', 'true');
  jQuery(this).next().attr('aria-hidden', 'false');
},function(){
  jQuery(this).attr('aria-expanded', 'false');
  jQuery(this).next().attr('aria-hidden', 'true');
});

var customToggle = document.getElementById('navToggle');

var navigation = responsiveNav("#headerNav", {
  customToggle: "#navToggle", // Selector: Specify the ID of a custom toggle
  enableFocus: true,
  enableDropdown: true,
  openDropdown: '<span class="hidden">Open sub menu</span>',
  closeDropdown: '<span class="hidden">Close sub menu</span>',
  // open: function () {
  //     customToggle.innerHTML = '<div class="burger__inner"></div><span class="hidden">Close menu</span>';
  // },
  // close: function () {
  //     customToggle.innerHTML = '<div class="burger__inner"></div><span class="hidden">Open menu</span>';
  // },
  
  resizeMobile: function () {
  customToggle.setAttribute( 'aria-controls', 'headerNav' );
  },
  
  resizeDesktop: function () {
  customToggle.removeAttribute( 'aria-controls' );
  },
  
});