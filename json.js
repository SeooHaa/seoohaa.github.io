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

$(function() {
  $(".menu-hamburger").click(function() {
    $(".global-menu").toggle();
  });
});
