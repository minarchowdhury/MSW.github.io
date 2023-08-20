(function($) {
    $(function() {


            $('#phone-nav').click(function() {
                $('body').toggleClass('nav-expand');
                $('body').toggleClass('navexpand');
                $(this).toggleClass('active');
            });


            // Phone nav click function
            /*  $('.menu-icon-wrap').click(function () {
                  $("body").toggleClass("navShown");
                  $(".nav-wrap").fadeIn()
              });*/

            $(".main-nav ul > li").find("ul").parent("li").addClass("show");
            $(".main-nav ul > li").find("ul").parent("li").addClass("has-sub-nav");
            $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function(e) {
                e.preventDefault();
                $(".main-nav ul > li").find("> ul:visible").slideUp()
                $(".main-nav ul > li").removeClass("active")
                if ($(this).parent().find("> ul:visible").length) {
                    $(this).removeClass("active")
                    $(this).parent().find("> ul").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parent().find("> ul").slideDown()
                }
            })


            //  venue-carousel function 
            if ($('#hero-slide').length) {
                $('#hero-slide').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }
            // End venue-carousel function 

            //FAQs Accordion Function
            $(".accordion-item").each(function() {
                var $this = $(this);
                $this.find(" > h5").on("click touch", function() {
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    if ($this.find(".accordion-text:visible").length) {
                        $(".accordion-item").removeClass("active")
                        $(".accordion-item .accordion-text").slideUp();
                    } else {
                        $this.addClass("active")
                        $(".accordion-item .accordion-text").slideUp();
                        $this.find(" > .accordion-text").slideDown();
                    }
                })
            })

            if ($(window).width() <= 768) {
                $(".accordion-nav").each(function() {
                    var $this = $(this);
                    $this.on("click touch", function() {
                        $(".accordion-nav").removeClass("active");
                        $(".accordion-content").slideUp();
                        if ($this.parent().find(".accordion-content:visible").length) {
                            $(".accordion-item").removeClass("active");
                            $(".accordion-content").slideUp();
                        } else {
                            $this.addClass("active");
                            $this.parent().find(" > .accordion-content").slideDown();
                        }
                    })
                })

            }


        }) // End ready function.


    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.carousel-wrap').each(function() {
            var $carousel = $(this);
            / Initializes a slick carousel only on mobile screens /
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            } else {
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        prevArrow: $('.billing-solutions-section .prev-btn'),
                        nextArrow: $('.billing-solutions-section .next-btn'),
                    });
                }
            }
        });
    });
    // End the solutin card carousel





})(jQuery)