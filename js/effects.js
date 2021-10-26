$(function() {

    $(document).on("scroll", function(){
        $(".menu").addClass("menu-shadow")
        if($(document).scrollTop() == 0){
            $(".menu").removeClass("menu-shadow")
        }
    })

    $(".under-slide").on("mousemove" , function(event){
        $(".over-slide").css({"transform" : `translateX(${event.pageX}px)`});      
        $(".over-image").css({"transform" : `translateX(${-event.pageX}px)`});
        
    })


    $(".hover-image").on("mouseover", function(event){

        let element = $(event.target.children[0]);
        $(".start-image").addClass("strimg-none");
        element.addClass("scale-up");
        
    }) 

    $(".hover-image").on("mouseout", function(){
        $(".start-image").removeClass("strimg-none")
        $(".scaled-down").removeClass("scale-up")
    })

    if($(".benefits").width() < 992){
        $("#grey-image").attr("src", "images/customer-bg-m.png")
    }else{
        $("#grey-image").attr("src", "images/customer-bg.webp")
    }

    $(window).on("resize", function(){
        if($(".benefits").width() < 992){
            $("#grey-image").attr("src", "images/customer-bg-m.png")
        }else{
            $("#grey-image").attr("src", "images/customer-bg.webp")
        }
    })

  });