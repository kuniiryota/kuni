$(function(){
  // ↓パララックスのJS
  // new $Parallax('.Contact-Parallax', {
  //   speed: 0.4
  // });

  // 横幅取得
  var width = function() {
    var CheckWidth = $(window).width();
  };
  $(function(){
    width();
    $(window).resize(width);
  });
  // ↓ページ固定が出てくるJS
  function ScrollFix(){
    $('.Fix').addClass('isScrolled');
  }
  // ヘッダーのJS
  function MenuClick(){
    $('.SPHeader-MenuIcon').on('click', function(){
      $('.SPHeader-MenuIcon-Item, .SPHeader-NavGroup, html').toggleClass('isClicked');
    });
  }
  function MenuClose(){
    $('.SPHeader-NavGroup-NavItem-LinkText , .SPHeader-Logo-Link, .PCHeader-NavGroup-NavItem-Text').on('click', function(){
      $('.SPHeader-MenuIcon-Item, .SPHeader-NavGroup, html').removeClass('isClicked');
      // スムーススクロール
      var speed = 600;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var PCposition = target.offset().top - 90;
      var SPposition = target.offset().top - 70;
      if ( width > 768 ) {
        $('body,html').animate({
          scrollTop: PCposition
        }, speed, 'swing');
      }else {
        $('body,html').animate({
          scrollTop: SPposition
        }, speed, 'swing');
      }
      return false;
    });
  }
  // 参加者の声のJS
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    effect: 'slide',
    centeredSlides: true,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints:{
      1200:{
        spaceBetween: 30,
      },
      1000:{
        spaceBetween: 20,
      },
      900:{
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      500:{
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    }
  });
  function ProgramClick(){
    $('.Curriculum-Inner-ListGroup-ListItem__Top').on('click', function(){
      $('.Curriculum-Inner-ListGroup-ListItem-Arrow').toggleClass('isClicked');
    });
  }
  // FAQのJS
  function TogglePulldown(){
    $('.FAQ-Inner-ListGroup-ListItem').on('click', function(){
      $(this).find('.FAQ-Inner-ListGroup-ListItem-Art , .FAQ-Inner-ListGroup-ListItem__Bottom').toggleClass('isClicked');
    });

  }
  // プログラムアコーディオン
  var myAccrodion0 = new $Accordion({
    trigger: '.Curriculum-Inner-ListGroup > :nth-child(1) .Curriculum-Inner-ListGroup-ListItem__Top',
    listener: '.Curriculum-Inner-ListGroup > :nth-child(1) .Curriculum-Inner-ListGroup-ListItem__Bottom',
    speed: .6,
  });
  // FAQアコーディオン
  var myAccrodion1 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(1)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(1) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });
  var myAccrodion2 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(2)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(2) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });
  var myAccrodion3 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(3)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(3) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });
  var myAccrodion4 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(4)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(4) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });
  var myAccrodion5 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(5)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(5) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });
  var myAccrodion6 = new $Accordion({
    trigger: '.FAQ-Inner-ListGroup > :nth-child(6)',
    listener: '.FAQ-Inner-ListGroup > :nth-child(6) .FAQ-Inner-ListGroup-ListItem__Bottom',
    speed: 0.23,
  });

  // 実行
  $(window).on('load scroll', function(){
    let y = $(this).scrollTop();
    if ( y > 5){
      ScrollFix()
    }else {
      $('.Fix').removeClass('isScrolled');
    }
  });
  MenuClick();
  MenuClose();
  TogglePulldown();
  ProgramClick()
});
