$(function(){
  function MenuClick(){
    $('.SPHeader-MenuIcon').on('click', function(){
      $('.SPHeader-MenuIcon-Item, .SPHeader-NavGroup, html').toggleClass('isClicked');
    });
  }
  function MenuClose(){
    $('.SPHeader-NavGroup-NavItem-LinkText , .SPHeader-Logo-Link').on('click', function(){
      $('.SPHeader-MenuIcon-Item, .SPHeader-NavGroup, html').removeClass('isClicked');
      // スムーススクロール
      var speed = 600;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  }

  MenuClick();
  MenuClose();
});
