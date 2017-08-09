/***********************************
* @author matthewtesterman
* @file custom.js
* @description Applies JQuery and plugin to the scroll of the page.
************************************/

//Global Variables
lastScrollTop = 0;
windowHeight = $(window).height();
var position = 0;
lastScrollTop = $(this).scrollTop();
var isFirst = true;
var isActive = false;
var locked = false;
var sections = ['#section-intro','#section-who-i-am','#section-my-philosophy','#section-my-skills','#section-my-skills2','#section-my-skills3'];

$(function() {
  //Upon loading set current position.
  position = Math.round($(this).scrollTop() / $(window).height());
  $(window).scroll(function(event){

    //If the scroll is at the destination allow it to be scrollable again.
    //GO down
    if ($(this).scrollTop() > lastScrollTop + 5 && !locked)
    {
      locked = true;
      position = position + 1;
      if (position < sections.length)
      {
        if (position >= sections.length)
        {
          position = sections.length - 1;
        }
        $('html, body').animate({scrollTop: $(sections[position]).offset().top}, 1000, function() {
          locked = false;
        });
      }
    }
    if ($(this).scrollTop() < lastScrollTop - 5 && !locked)
    {
      locked = true;
      position = position - 1;
      if (position < 0)
      {
        position = 0;
        locked = false;
      }

      else
      {
        $('html, body').animate({scrollTop: $(sections[position]).offset().top}, 1000, function() {
          locked = false;
        });
      }
    }
    lastScrollTop = $(this).scrollTop();
  });  
  currentScroll = 0;
});
