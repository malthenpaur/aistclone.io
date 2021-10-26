$(function(){
    let arr = [];


    let feedback = fetch("feedback.json").then(
        response => {
            return response.json();
        }
    );

    feedback.then(data => {
        
        let len = []
        for( let key in data){
            len.push(key)
        }

        while(arr.length != 3){
            arr = [];
            $(".d-block").each(function(){
                let ranNumb = Math.floor(Math.random() * len.length)
                arr.push(data[ranNumb])
                arr = arr.filter((x, i, a) => a.indexOf(x) === i)
            })
        }
        $(".d-block").each(function(index){
            this.textContent = arr[index].feedback;

        })

        $(".person-name").each(function(index){
            this.textContent = arr[index].name
            
        })
        
        $(".person-position").each(function(index){
            this.textContent = arr[index].position
            
        })



        $('.inner-carousel').slick({
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000, 
           
          });

    })



    $("#myCarousel").on('setPosition', function () {

        $(".d-block").not(".slick-cloned > .d-block-div > .d-block").each(function(index){
            this.textContent = arr[index].feedback;
        });

        threeDots();
        threeDotsSibling()
        
    })


    $('#myCarousel').on('beforeChange', function () {

        threeDotsSibling()
        
    })












    function threeDots(){
        let active = $(".slick-active > .d-block-div > .d-block"); 
        let activeH = $(".d-block-div").height();
        while(active.outerHeight() > activeH){
            active.text(function(index, tx){
                return tx.replace(/\W*\s(\S)*$/, "...")
            })
        }
    }

    function threeDotsSibling(){
        let active = $(".slick-active + .slick-slide > .d-block-div > .d-block"); 
        let activeH = $(".d-block-div").height();
        while(active.outerHeight() > activeH){
            active.text(function(index, tx){
                return tx.replace(/\W*\s(\S)*$/, "...")
            })
        }
    }
})


