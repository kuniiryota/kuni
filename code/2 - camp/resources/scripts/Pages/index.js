$(function(){
  // ↓パララックスのJS
  // new $Parallax('.Contact-Parallax', {
  //   speed: 0.4
  // });
  // 横幅取得
  // var width = function() {
  //   $(window).width();
  // };
  // $(function(){
  //   width();
  //   $(window).resize(width);
  // });

  // //の時

  // $(window).('load', function(){
  //
  // });
  // //の時
  // $(document).('ready', function(){
  //
  // });

  //readyした時にwindow幅を新しく定義＆更新
  var width = $(window).width();

  //リサイズした時にwindow幅を更新
  $(window).resize(function(){
    width = $(window).width();
  });

  // ↓ページ固定が出てくるJS
  function ScrollFix(){
    $('.Fix').addClass('isScrolled');
  }
  // ヘッダーのJS
  function PcScroll(){
    var Scroll = $(window).scrollTop();
    if (Scroll > 30){
      $('.PCHeader').addClass('isScrolled');
    }else {
      $('.MenuIcon').addClass('isScrolled');
    }
    $(window).scroll(function() {
      var Scroll = $(window).scrollTop();
      if (Scroll > 30){
        $('.PCHeader').addClass('isScrolled');
        $('.MenuIcon-Item, .MenuIcon').removeClass('isScrolled');
      }else {
        $('.PCHeader').removeClass('isScrolled');
        $('.MenuIcon-Item, .MenuIcon').addClass('isScrolled');
      }
    });
  }
  function MenuClick(){
    PcScroll();
      $('.MenuIcon').on('click', function(){
        $('.MenuIcon-Item, .SPHeader-NavGroup, html').toggleClass('isClicked');
      });
    }

    $(document).on('click', function(){
      console.log(width);
    });

    function MenuClose(){
      $('.SPHeader-NavGroup-NavItem-LinkText , .SPHeader-Logo-Link, .PCHeader-NavGroup-NavItem-Text').on('click', function(){
        $('.MenuIcon-Item, .SPHeader-NavGroup, html').removeClass('isClicked');
        // スムーススクロール
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var PCposition = target.offset().top - 110;
        var SPposition = target.offset().top;
        if ( width > 768 ) {
          console.log("pc");
          $('body,html').animate({
            scrollTop: PCposition
          }, speed, 'swing');
        }else {
          console.log("sp");
          $('body,html').animate({
            scrollTop: SPposition
          }, speed, 'swing');
        }
        return false;
      });
      $('.Contact-Btn-Text').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
      });
    }
  // 参加者の声のJS
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'slide',
    centeredSlides: true,
    autoplay: false,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
    breakpoints:{
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

  // フォームアラート
  $(function(){
  $('.Form-Inner-ListGroup-SumitI-Text').on('click', function(){
    if($('.Form-Inner-ListGroup-ListItem-Input').val() === '' || $('.Form-Inner-ListGroup-ListItem-Select').val() === '' || $('.Form-Inner-ListGroup-ListItem-Textarea').val() === ''){
      alert('必須項目を入力してください！');
      // $('#your_name').focus();
      return false;
    }
  });

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
