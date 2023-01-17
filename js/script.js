	
	 /*static bar*/
 $(document).scroll(function() {

      var y = $(this).scrollTop();

      if (y > 100) {

        $('.staticbar').fadeIn();

      } else {

        $('.staticbar').fadeOut();

      }

    });
	 /*static bar End*/
	 
	
	

$(".regular3").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		arrows:true,
	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });

//footer menu
$( ".footerdropdown1" ).click(function() {
     $(".footermenu1").animate({
      height: "toggle"
     
    });
});
$( ".footerdropdown2" ).click(function() {
     $(".footermenu2").animate({
      height: "toggle"
     
    });
});$( ".footerdropdown3" ).click(function() {
     $(".footermenu3").animate({
      height: "toggle"
     
    });
});$( ".footerdropdown4" ).click(function() {
     $(".footermenu4").animate({
      height: "toggle"
     
    });
});

//Date picker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

//Detail slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	 autoplay:true,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
	 
});
$('.slider-nav').slick({
  slidesToShow: 5,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
	arrows:false,
	
});
	