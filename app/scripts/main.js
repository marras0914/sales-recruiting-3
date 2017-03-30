// preloader
$(window).on('load', function(){
    $('.spinner_hol').fadeIn('fast');
    $('.spinner svg').css('visibility', 'visible');

    function animate() {
        TweenMax.set('.house-icon-line', {drawSVG: 0});
        TweenMax.to('.house-icon-line', 3, {drawSVG: true});
        TweenMax.to('.house-icon-line', 3, {drawSVG: '100% 100%', delay: 3});
    }

    animate();
    setTimeout(function(){
        $('.spinner_hol').fadeOut('slow', function(){
            $('.spinner svg').css('visibility', 'hidden');
            
        });
    }, 1000);
});

$(function() {
    // ios8 test
    var isIOS8 = function() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
    }

    if( isIOS8() == true ){
        $('.spinner_hol').css('display', 'none');
    }
});

$(function() {

        $('#fullpage').fullpage({

            //Navigation
            menu: false,
            lockAnchors: false,
            anchors: ['Home', 'Operations', 'Technology', 'Marketing', 'Servicing', 'Contact-Us'],
            navigation: false,
            navigationPosition: 'left',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
           
            fixedElements: '.nav-wrapper, .menu, .form-contact, .logo-wrapper, .video-overlay',
            responsiveWidth: 768,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide-2',

            //events
            onLeave: function(index, nextIndex, direction){

                if(index == 2 && nextIndex == 1 ){
                   
                    $('video').get(0).play();
                    $('#fp-nav').css('display', 'none');
                    $('.logo-wrapper').css('display', 'block');
                }

                if(index == 2 && nextIndex == 3  ){
                    $('.block-1').addClass('active'),
                    $('.map-wrapper').addClass('active');
                }

                if(index == 3 && nextIndex != 3  ){
                    $('.block-1').removeClass('active'),
                    $('.map-wrapper').removeClass('active');
                }

                if(index == 10 && nextIndex == 11 ){
                   
                    $('#fp-nav').css('display', 'none'); 

                }

            },

           
            afterLoad: function(anchorLink, index){
                if(index == 1 || index >= 11){
               
                }
                if(index == 1 ){
                    $('video').get(0).play();
                    $('.local a[href="#Operations"]').addClass('active');
                    $('nav .nav-title a').css('text-shadow', 'none');
                }else{
                    $('.logo-wrapper').css('display', 'none');
                    $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
                }
                if(index == 2){
                    $('.local a[href="#Operations"]').addClass('active');
                    $('.logo-wrapper').css('display', 'none');
                }else{
                    $('.local a[href="#Operations"]').removeClass('active');
                }
                if(index == 3){
                    $('.local a[href="#Technology"]').addClass('active');
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                }else{
                    $('.local a[href="#Technology"]').removeClass('active');
                }
                if(index == 4){
                    $('.local a[href="#Marketing"]').addClass('active');
                }else{
                    $('.local a[href="#Marketing"]').removeClass('active');
                }

                if(index == 5){
                    $('.local a[href="#Servicing"]').addClass('active');
                }else{
                    $('.local a[href="#Servicing"]').removeClass('active');
                }
               
            },
           
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
            afterRender: function () {
                $('#nav-icon').click(function(){
                    $(this).toggleClass('open'),
                    $('.menu').toggleClass('active'),
                    $('.nav-local').toggleClass('active');
                });

              
                $('video').get(0).play();
                $('video').get(1).pause();


                $('#contact-button, .nav-contact').click(function(){
                    $('.form-contact').addClass('active');
                });
                $('.form-contact .close').click(function(){
                    $('.form-contact').removeClass('active');
                });

                $('#sec-4 .play-button, #sec-4 .video-overlay').click(function(){
                    $('#video-sec-4').toggleClass('active');
                    $('video').get(2).play();
                    if(!$('#video-sec-4').hasClass('active')){
                        $('video').get(2).pause();
                    }
                });

                $('#sec-3 .max-play, #sec-3 .video-overlay').click(function(){
                    $('#video-sec-3').toggleClass('active');
                    $('video').get(1).play();
                    if(!$('#video-sec-3').hasClass('active')){
                        $('video').get(1).pause();
                    }
                });

                $('.close-video').click(function(){
                    $('video').get(0).pause();
                    $('video').get(1).pause();
                    $('video').get(2).pause();
                    $('.video-overlay').removeClass('active');
                });
            }
      
        	// scrollOverflow: true,
        	// normalScrollElements: '.history-block'
        });
});

