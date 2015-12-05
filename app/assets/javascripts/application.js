// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree

function detectmob() {
   if(window.innerWidth <= 768) {
     return true;
   } else {
     return false;
   }
}

if(!detectmob()){
  $(document).ready(function(){
     var scroll_start = 0;
     var startchange = $('nav');
     var offset = startchange.offset();
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navigation_link').css('color', '#fff');
            $('.logo').css('color', '#fff');
            $('#navigation').css('background-color', '#194719');
         } else {
            $('.navigation_link').css('color', '#194719');
            $('.logo').css('color', '#194719');
            $('#navigation').css('background-color', 'transparent');
         }
     });
  });
}

$(window).load(function(){
  setTimeout(function(){ $('.alert').fadeOut() }, 1000);
});

