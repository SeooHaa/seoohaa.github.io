if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $(function(){
        var body = document.body;
        var cursor = document.createElement("div");
        var stalker = document.createElement("div");
        cursor.id = "cursor";
        stalker.id = "stalker";
        body.appendChild(cursor);
        body.appendChild(stalker);
        body.addEventListener("mousemove", function(e) {
              cursor.style.left = e.clientX + "px";
              cursor.style.top = e.clientY + "px";
              stalker.style.left = e.clientX + "px";
              stalker.style.top = e.clientY + "px";
        }, false);
    });
}

$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('nav').removeClass('open');      
  }
});
