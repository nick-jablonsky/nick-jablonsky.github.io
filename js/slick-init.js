$(document).ready(function(){
	$('.slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:2,
        slidesToScroll:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:false,
                    slidesToShow: 1,
                    slidesToScroll:1,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
                    slidesToShow:1,
                    slidesToScroll:1,
				}
			}
		]
	});
});

