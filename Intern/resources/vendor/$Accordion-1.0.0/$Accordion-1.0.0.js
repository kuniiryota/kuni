function $Accordion(options){

  let speed = options.speed || 0.25;
  let trigger = $(options.trigger);
  let listener = $(options.listener);

  let status = 0; //0: closed, 1: opened
  let listener_height = listener.innerHeight();

  let _this = this;

  _this.open = function(){
    listener.css({
      height: listener_height + 'px',
      opacity: 1,
    });
    status = 1;
  };

  _this.close = function(){
    listener.css({
      height: 0 + 'px',
      opacity: 0,
    });
    status = 0;
  };

  _this.isOpened = function(){
    if(status == 0){
      return false;
    } else if(status == 1){
      return true;
    }
  };

  (function init(){
    listener.css({
      transition: 'all '+ speed +'s linear',
      overflow: 'hidden'
    });
    _this.close();
    trigger.on('click', function(event){
      if(_this.isOpened()){
        _this.close();
      } else{
        _this.open();
      }
    });
  }());

  return _this;
}
