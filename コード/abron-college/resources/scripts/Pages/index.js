$(function(){

  // ↓ スクロールしたときのヘッダーの動き ↓//
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() <= 50) {
      $('.HeaderLayer, .HeaderLayer-Header-LinkImg, .HeaderLayer-Header-NavGroup-NavItem-LinkText').removeClass('isScrolled');
    } else {
      $('.HeaderLayer, .Main-Question-TextGroup-QuestionText, .HeaderLayer-Header-NavGroup-NavItem-LinkText ,.HeaderLayer-Header-LinkImg').addClass('isScrolled');
    }
  });

  $(window).on('load', function(){
    setTimeout(function(){
      $('.RoadDisplay').addClass('isRoaded');
    }, 3000);

    var offsetTopArr = (function(){
      var arr = [
        $('.Passing1').eq(0),
        $('.Passing2').eq(0),
        (innerWidth > 768) ? $('.Passing3').eq(2) : $('.Passing3').eq(0),
        $('.Passing4').eq(0),
        $('.Passing5').eq(0),
        $('.Passing6').eq(0),
        $('.Passing7').eq(0),
        $('.Passing8').eq(0),
        $('.Passing9').eq(0),
        $('.Passing10').eq(0),
        $('.Passing99').eq(0),
      ];
      arr = arr.map(function(value){
        return value.offset().top;
      });
      return arr;
    }());
    console.log(offsetTopArr);

    [
      $('.Passing1, .Main-Message-HeadLine-TitleText, .Main-Message-HeadLine-TitleText-Span, .Main-Message-TextGroup-TitleText, .Main-Message-TextGroup-MainText'),
      $('.Passing2, .Main-Service-HeadLine-TitleText, .Main-Service-HeadLine-TitleText-Span'),
      $('.Passing3, .Main-Feature-HeadLine-TitleText, .Main-Feature-HeadLine-TitleText-Span'),
      $('.Passing4, .Main-Admisson-HeadLine-TitleText, .Main-Admisson-HeadLine-TitleText-Span'),
      $('.Passing5, .Passing5 > *'),
      $('.Passing6, .Passing6 > *'),
      $('.Passing7, .Passing7 > *'),
      $('.Passing8, .Passing8 > *'),
      $('.Passing9, .Main-Question-HeadLine-TitleText, .Main-Question-HeadLine-TitleText-Span'),
      $('.Passing10, .Main-Contact-HeadLine-TitleText, .Main-Contact-HeadLine-TitleText-Span'),
      $('.Passing99, .Main-News-Headline-TitleText, .Main-News-Headline-SubText'),
    ].forEach(function(value, index){
      $(window).on('scroll',function(){
        var Offset = offsetTopArr[index];
        var Scroll = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if ( Scroll + WindowHeight/100*99 > Offset ){
          // console.log('Offset: '+Offset);
          value.addClass('isScrolled');
        }
      });
    });
    processBigimageAnimation();

    (function(){
      //  プライバシーポリシーでリンクを押したときの動き  //
      $('body,html').stop().scrollTop(0);

      var href= $(this).attr("href");
      if(href == "#FEATURE"){
        href = (innerWidth >= 1040) ? "#FEATURE-PC" : "#FEATURE-SP";
      }
      scrollToHrefElement(href, 50);

      // ↓ ヘッダー内のアイテムスクロール ↓//
      $('.HeaderLayer-Header-NavGroup-NavItem-LinkText, .HeaderLayer-HeaderSp-NavGroup-NavItem-LinkText, .Footer-Inner-NavGroup-NavItem-LinkText').on('click', function(){
        var width = $(window).width();
        var MinusScrollTop = (width > 768) ? 100 : 30;
        var id = $(this).attr('href');
        if(id == "#FEATURE"){
          id = (innerWidth >= 1040) ? "#FEATURE-PC" : "#FEATURE-SP";
        }
        scrollToHrefElement(id, MinusScrollTop);
      });
    }());
    $('.Footer-Inner-ScrollTopBtn, .HeaderLayer-Header__Left').click(function(){
      $('html, body').animate({
        scrollTop : 0
      }, 600);
    });

    var width = $(window).width();
    // ↓ 強みのスライドショー ↓//
    var mySwiper3 = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 2.1,
      spaceBetween: 20,
      effect: 'slide',
      centeredSlides: true,
      autoplay: false,
      pagination: {
        el:'.Flow-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1.2,
        },
      }
    });
  });

  // ↓ SPメニューをクリックした時 ↓//
  $('.HeaderLayer-HeaderSp__Center').on('click', function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').toggleClass('isClicked');
  });
  // ↓ SPメニューの中身をクリックした時 ↓//
  $('.HeaderLayer-HeaderSp-NavGroup-NavItem-LinkText').on('click', function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').removeClass('isClicked');
  });
  $('.HeaderLayer-HeaderSp-LinkImg').on('click', function(){
    $('.HeaderLayer-HeaderSp-MenuIcon-Item, .HeaderLayer-HeaderSp__Right, html').removeClass('isClicked');
  });
  // ↓スクロールを押したときの動き↓//
  $('.Main-BigImg-Scroll').on('click', function(){
      var position = $('#MISSION').offset().top;
      $('html, body').animate({
        scrollTop : position
      }, 600);
  });

  // ↓ステップアップ派遣スタートの青色部分を押したときの動き↓//
  $('.Main-Admisson-AdmissonGroup-Item-TextGroup-MainText-Span').on('click', scrollToOfferService());

  // ↓Q&Aのプルダウンの動き↓//
  $('.Main-Question-TextGroup-QuestionText').on('click', function(e){
    $(e.currentTarget).toggleClass('isShown');
  });

  // ↓Featureのscrollテキストをデバイスのサイズによって表示切り替えをする↓//
  $(window).resize(switchDisplayScrollText());

  // ↓プライバシーポリシーの動き↓//
  $('.Main-Contact-Form-FormItem-TextGroup-PrivacyPolicy').on('click',togglePrivacyPolicy());

  // ↓ヘッダーのトップへ戻る↓//
  $('.HeaderLayer-Header-LinkImg, .HeaderLayer-HeaderSp-LinkImg').on('click',scrollTop());

  // ↓フッターのトップへ戻る↓//
  $('.Footer-Inner-ScrollTopBtn').on('click', scrollTop());
  $('a[href^="#"]').on('click',function() {
      var href= $(this).attr("href");
      if(href == "#FEATURE"){
        href = (innerWidth >= 1040) ? "#FEATURE-PC" : "#FEATURE-SP";
      }
      scrollToHrefElement(href, 50);
  });
  $('.Footer-Inner-Logo').click(function(){
    scrollTop()
  });
});


function scrollToHrefElement(queryStr, MinusScrollTop){
  if(queryStr){
    $('body,html').stop().animate({
      scrollTop: $(queryStr).offset().top - MinusScrollTop
    }, 600);
  }
}

// function scrollToMission(){
//   var width = $(window).width();
//   var position = $('.Main-Message').offset().top;
//   // var MinusScrollTop = (width > 768) ? 90 : 60;
//   $('html, body').animate({
//     scrollTop : position
//   }, 600);
// }

function scrollToOfferService(){
  var width = $(window).width();
  var position = $('.Main-Service-OfferSevice').offset().top;
  var MinusScrollTop = (width > 768) ? 60 : 100;

  $('html, body').animate({
    scrollTop : position - MinusScrollTop
  }, 600);
}

// ↓Featureのscrollテキストをデバイスのサイズによって表示切り替えをする↓//
function switchDisplayScrollText(){
  if ( $(window).width() < 1040 ){
    $('.FeatureScroll-Text, .FeatureScroll').addClass('isScrolled');
  }else {
    $('.FeatureScroll-Text, .FeatureScroll').removeClass('isScrolled');
  }
}

function togglePrivacyPolicy(){
  //クリック時にinputにチェックをいれたり解除したり...
  var isChecked = $('.Main-Contact-Form-FormItem-TextGroup-PrivacyPolicy-Item-Input').prop('checked');
  if(isChecked){
    $('.Main-Contact-Form-FormItem-Btn').removeClass('isClicked');
    $('.Main-Contact-Form-FormItem-TextGroup-PrivacyPolicy-Item-Input').prop('checked', false);
  } else{
    $('.Main-Contact-Form-FormItem-Btn').addClass('isClicked');
    $('.Main-Contact-Form-FormItem-TextGroup-PrivacyPolicy-Item-Input').prop('checked', true);
  }
}

function scrollTop(){
   $('html, body').animate({
     scrollTop : 0
   }, 500);
}

// ↓ BigImgスライドショー↓//
function processBigimageAnimation(){
  var slide = $('.Main-BigImg-SlideGroup');
  var slideItem =$('.Main-BigImg-SlideGroup-SildItem');
  var totalNum = slideItem.length - 1;
  var IntarvalTime = 6000;
  var actNum = 0;
  var nowSlide;
  var NextSlide;

  slideItem.eq(0).addClass('isShown');
  setInterval(function() {
    nowSlide = slideItem.eq(actNum);
    nowSlide.removeClass('isShown');
    NextSlide = (actNum < totalNum) ? slideItem.eq(++actNum) : slideItem.eq(actNum = 0);
    NextSlide.addClass('isShown');
  }, IntarvalTime);
}
