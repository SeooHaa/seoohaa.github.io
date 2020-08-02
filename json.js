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
      $('.slideR').hover(
      function(){
        $(this).animate({'marginRight':'90px'},500);
      },
      function () {
        $(this).animate({'marginRight':'0'},500);
      }
    );
});

/*--INDEX--*/

$(function() {
  $('#page1').hover(
  function(){
    $('body').animate({
      backgroundColor: "#64b397"
      },400),
      $('.slideR').animate({
        backgroundColor: "#a1d4c3","border-left-color": "#FFF"},400),
        $('.iconpr').animate({
          opacity: "100%"},400
          ),
          $('#page2').animate({
            opacity: "0%"}, 400),
            $('#page3').animate({
              opacity: "0%"}, 400),
              $('.go-list').animate({
                left: "19%"}),
                $('.go-list').animate({
                  opacity: "100%"},400)
    },
    function(){
      $('body').animate({
        backgroundColor: "#FFF"
      },400),
      $('.slideR').animate({
        backgroundColor: "","border-left-color": "gray"},400),
        $('.iconpr').animate({
          opacity: "0%"},400
          ),
          $('#page2').animate({
            opacity: "100%"}, 400),
            $('#page3').animate({
              opacity: "100%"}, 400),
                $('.go-list').animate({
                  opacity: "0%"},400)
    }
  );
});

$(function() {
  $('#page2').hover(
  function(){
    $('body').animate({
      backgroundColor: "#ffe199"
      },400),
      $('.slideR').animate({
        backgroundColor: "#ffeec7","border-left-color": "#FFF"},400),
      $('.iconwo').animate({
        opacity: "100%"},400
        ),
        $('#page1').animate({
          opacity: "0%"}, 400),
          $('#page3').animate({
            opacity: "0%"}, 400),
            $('.go-list').animate({
              left: "40%"}),
              $('.go-list').animate({
                opacity: "100%"},400)
    },
    function(){
      $('body').animate({
        backgroundColor: "#FFF"
      },400),
      $('.slideR').animate({
        backgroundColor: "","border-left-color": "gray"},300),
      $('.iconwo').animate({
        opacity: "0%"},400
        ),
        $('#page1').animate({
          opacity: "100%"}, 400),
          $('#page3').animate({
            opacity: "100%"}, 400),
              $('.go-list').animate({
                opacity: "0%"},400)
    }
  );
});

$(function() {
  $('#page3').hover(
  function(){
    $('body').animate({
      backgroundColor: "#b5b5b5"
      },400),
      $('.slideR').animate({
        backgroundColor: "#d3d3d3","border-left-color": "#FFF"},300),
        $('.iconhe').animate({
          opacity: "100%"},400
          ),
          $('#page2').animate({
            opacity: "0%"}, 400),
            $('#page1').animate({
              opacity: "0%"}, 400),
              $('.go-list').animate({
                left: "59%"}),
                $('.go-list').animate({
                  opacity: "100%"},400)
    },
    function(){
      $('body').animate({
        backgroundColor: "#FFF"
      },300),
      $('.slideR').animate({
        backgroundColor: "","border-left-color": "gray"},400),
        $('.iconhe').animate({
          opacity: "0%"},400
          ),
          $('#page2').animate({
            opacity: "100%"}, 400),
            $('#page1').animate({
              opacity: "100%"}, 400),
                $('.go-list').animate({
                  opacity: "0%"},400)
    }
  );
});