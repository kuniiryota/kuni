$(function(){
  var width = $(window).width();
  // ↓ SPメニューをクリックした時 ↓//
  $('.HeaderLayer-HeaderSp__Center').click(function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').toggleClass('isClicked');
  });
  // ↑ SPメニューをクリックした時 ↑//

  // ↓ SPメニューの中身をクリックした時 ↓//
  $('.HeaderLayer-HeaderSp-NavGroup-NavItem-LinkText').click(function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').removeClass('isClicked');
  });
  $('.HeaderLayer-HeaderSp-LinkImg').click(function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').removeClass('isClicked');
  });
  // ↑ SPメニューの中身をクリックした時 ↑//

  // ↓ロード時の動き↓//
  setTimeout(function(){
    $('.RoadDisplay-MainText').addClass('isRoaded');
  }, 2000);
  setTimeout(function(){
    $('.RoadDisplay__Middle').addClass('isRoaded');
  }, 2200);
  setTimeout(function(){
    $('.RoadDisplay').addClass('isRoaded');
  }, 3000);
  // ↑ロード時の動き↑ //

  // ↓フッターのトップへ戻る↓//
  $('.Footer-Inner-ScrollTopBtn').click(function(){
    var speed = 600;
    $('html, body').animate({
      scrollTop : 0
    },speed);
  });
  // ↑フッターのトップへ戻る↑ //

  var headerHight = $('.HeaderLayer').outerHeight();
  $('.HeaderLayer-Header-NavGroup-NavItem-LinkText, .HeaderLayer-HeaderSp-NavGroup-NavItem-LinkText').click(function(){

	});
});
