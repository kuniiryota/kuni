function $Parallax(query, options){
  let speed = options.speed || 0.25;

  // スクロール画面
  let window_height = window.innerHeight;

  // 画像そのもの
  let img = $(query);
  // 枠
  let frame = $(query).parent();
  frame.css({
    position: 'relative',
    top: '0',
    left: '0',
  });
  let frame_top = frame.offset().top;
  let frame_height = frame.innerHeight();
  let frame_bottom = frame_top + frame_height;

  img.css({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: frame_height + ((frame_height + window_height) * speed) + 'px',
  });
  let img_top = img.offset().top;
  let img_height = img.innerHeight();
  let img_bottom = img_top + img_height;

  (function init(){
    update();
  }());

  function update(){

    // スクロール画面
    let scroll_top = window.scrollY;
    let scroll_bottom = scroll_top + window_height;

    if(scroll_bottom > frame_top && scroll_top < frame_bottom){
        scroll_bottom == frame_top && scroll_top == frame_bottom
        let scrollAmount = -1 * (scroll_top + frame_height - frame_top) * speed;
        $(img).css('top', scrollAmount * speed+ "px");
    }

  }

  $(window).on('scroll', function(event){
    update();
  });
  return this;
}
