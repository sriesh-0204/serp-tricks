(function ($) {
  "use strict";

	/*----------------------------------------------------------
		Initialize all widget js in elementor init hook
	------------------------------------------------------------*/
	$(window).on("elementor/frontend/init", function () {

		// Service Slider One
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-service-slider-widget.default",
			function ($scope) {
				activeServiceSliderOne($scope);
			}
		);

		// Team Slider One
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-team-slider-one-widget.default",
			function ($scope) {
				activeTeamSliderOne($scope);
			}
		);

		// Team Slider Two
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-team-slider-two-widget.default",
			function ($scope) {
				activeTeamSliderTwo($scope);
			}
		);

		// Team Slider Three
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-team-slider-three-widget.default",
			function ($scope) {
				activeTeamSliderThree($scope);
			}
		);

		// Testimonial Slider One
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-testimonial-slider-one.default",
			function ($scope) {
				activeTestimonialSliderOne($scope);
			}
		);

		// Testimonial Slider Two
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-testimonial-slider-two.default",
			function ($scope) {
				activeTestimonialSliderTwo($scope);
			}
		);

		// About Widget Client Logos Slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-about-widget.default",
			function ($scope) {
				activeAboutWidgetClientLogos($scope);
			}
		);

		// Marquee Slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-marquee-widget.default",
			function ($scope) {
				activeMarqueeSlider($scope);
			}
		);

		// Blog Slider One
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-blog-slider-one-widget.default",
			function ($scope) {
				activeBlogSliderOne($scope);
			}
		);

		// Blog Slider Two
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-blog-slider-two-widget.default",
			function ($scope) {
				activeBlogSliderTwo($scope);
			}
		);

		// Blog Slider Three
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bizmaster-blog-slider-three-widget.default",
			function ($scope) {
				activeBlogSliderThree($scope);
			}
		);
	});

	// JS for rtl
	var rtlEnable = $("html").attr("dir");
	var SlickRtlValue = !(typeof rtlEnable === "undefined" || rtlEnable === "ltr");

	/*----------------------------
		Testimonial Slider One
	* --------------------------*/
	function activeTestimonialSliderOne($scope) {
		var el = $scope.find(".testimonial-slider");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}

		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: elSettings.items,
			slidesToScroll: 1,
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			arrows: elSettings.nav === "yes",
			appendArrows: $scope.find(".slick-carousel-controls .slider-nav"),
			prevArrow: '<div class="prev-arrow testimonial-1-prev-icon slick-prev">' + elSettings.navleft + "</div>",
			nextArrow: '<div class="next-arrow testimonial-1-next-icon slick-next">' + elSettings.navright + "</div>",
			centerPadding: "0",
			cssEase: "linear",
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Testimonial Slider Two
	* --------------------------*/
	function activeTestimonialSliderTwo($scope) {
		var el = $scope.find(".testi-slider-2");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}

		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: elSettings.items,
			slidesToScroll: 1,
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			arrows: elSettings.nav === "yes",
			prevArrow: '<button type="button" class="slick-prev">' + elSettings.navleft + "</button>",
			nextArrow: '<button type="button" class="slick-next">' + elSettings.navright + "</button>",
			centerPadding: "0",
			cssEase: "linear"
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Service Slider
	* --------------------------*/
	function activeServiceSliderOne($scope) {
		var el = $scope.find(".service-slider2");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Team Slider One
	* --------------------------*/
	function activeTeamSliderOne($scope)  {
		var el = $scope.find(".team-carousel");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Team Slider Two
	* --------------------------*/
	function activeTeamSliderTwo($scope)  {
		var el = $scope.find(".team-slider2");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}

		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Team Slider Three
	* --------------------------*/
	function activeTeamSliderThree($scope)  {
		var el = $scope.find(".team-slider3");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}

		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		About Widget Client Logos
	* --------------------------*/
	function activeAboutWidgetClientLogos($scope) {
		var el = $scope.find(".about-client-logos");
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplaySpeed: 8000,
			autoplay: true,
			centerMode: false,
			arrows: false,
			centerPadding: "0",
			cssEase: "linear"
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Blog Slider One
	* --------------------------*/
	function activeBlogSliderOne($scope) {
		var el = $scope.find(".blog-slider");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Blog Slider Two
	* --------------------------*/
	function activeBlogSliderTwo($scope) {
		var el = $scope.find(".blog-slider-2");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: elSettings.nav === "yes",
			appendArrows: $scope.find(".blog-slick-carousel-controls"),
			prevArrow: '<button class="slick-arrow default" aria-label="Previous" type="button" aria-disabled="false">' + elSettings.navleft + "</button>",
			nextArrow: '<button class="slick-arrow default" aria-label="Next" type="button" aria-disabled="false">' + elSettings.navright + "</button>",
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	/*----------------------------
		Blog Slider Three
	* --------------------------*/
	function activeBlogSliderThree($scope) {
		var el = $scope.find(".blog-slider");
		var elSettings = el.data("settings");
		if (
			elSettings.items === "0" || 
			elSettings.items === "" || 
			typeof elSettings.items == "undefined"
		) {
			return;
		}
		let $selector = "#" + el.attr("id");
		let sliderSettings = {
			infinite: elSettings.loop === "yes",
			slidesToShow: parseInt(elSettings.items),
			slidesToScroll: 1,
			arrows: false,
			dots: elSettings.dots === "yes",
			autoplaySpeed: parseInt(elSettings.autoplaytimeout),
			autoplay: elSettings.autoplay === "yes",
			centerMode: elSettings.center === "yes",
			centerPadding: "0",
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		wowSlickInit($selector, sliderSettings);
	}

	//slick init function
	function wowSlickInit($selector, settings, animateOut = false) {
		$($selector).slick(settings);
	}

	/*----------- 07. Global Slider ----------*/
	$(".global-carousel").each(function () {
		var carouselSlide = $(this);

		// Collect Data
		function d(data) {
			return carouselSlide.data(data);
		}

		// Custom Arrow Button
		var prevButton =
				'<button type="button" class="slick-prev"><i class="' +
				d("prev-arrow") +
				'"></i></button>',
			nextButton =
				'<button type="button" class="slick-next"><i class="' +
				d("next-arrow") +
				'"></i></button>';

		// Function For Custom Arrow Btn
		$("[data-slick-next]").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$($(this).data("slick-next")).slick("slickNext");
			});
		});

		$("[data-slick-prev]").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$($(this).data("slick-prev")).slick("slickPrev");
			});
		});

		// Check for arrow wrapper
		if (d("arrows") == true) {
			if (!carouselSlide.closest(".arrow-wrap").length) {
				carouselSlide.closest(".container").parent().addClass("arrow-wrap");
			}
		}

		carouselSlide.slick({
			dots: d("dots") ? true : false,
			fade: d("fade") ? true : false,
			arrows: d("arrows") ? true : false,
			speed: d("speed") ? d("speed") : 1000,
			sliderNavfor: d("slidernavfor") ? d("slidernavfor") : false,
			autoplay: d("autoplay") == false ? false : true,
			infinite: d("infinite") == false ? false : true,
			slidesToShow: d("slide-show") ? d("slide-show") : 1,
			adaptiveHeight: d("adaptive-height") ? true : false,
			centerMode: d("center-mode") ? true : false,
			autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
			centerPadding: d("center-padding") ? d("center-padding") : "0",
			focusOnSelect: d("focuson-select") == false ? false : true,
			pauseOnFocus: d("pauseon-focus") ? true : false,
			pauseOnHover: d("pauseon-hover") ? true : false,
			variableWidth: d("variable-width") ? true : false,
			vertical: d("vertical") ? true : false,
			verticalSwiping: d("vertical") ? true : false,
			prevArrow: d("prev-arrow")
				? prevButton
				: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: d("next-arrow")
				? nextButton
				: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
			rtl: $("html").attr("dir") == "rtl" ? true : false,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
						arrows: d("xl-arrows") ? true : false,
						dots: d("xl-dots") ? true : false,
						slidesToShow: d("xl-slide-show")
							? d("xl-slide-show")
							: d("slide-show"),
						centerMode: d("xl-center-mode") ? true : false,
						centerPadding: d("xl-center-padding") ? d("xl-center-padding") : "0",
					},
				},
				{
					breakpoint: 1400,
					settings: {
						arrows: d("ml-arrows") ? true : false,
						dots: d("ml-dots") ? true : false,
						slidesToShow: d("ml-slide-show")
							? d("ml-slide-show")
							: d("slide-show"),
						centerMode: d("ml-center-mode") ? true : false,
						centerPadding: d("ml-center-padding") ? d("ml-center-padding") : "0",
					},
				},
				{
					breakpoint: 1200,
					settings: {
						arrows: d("lg-arrows") ? true : false,
						dots: d("lg-dots") ? true : false,
						slidesToShow: d("lg-slide-show")
							? d("lg-slide-show")
							: d("slide-show"),
						centerMode: d("lg-center-mode")
							? d("lg-center-mode")
							: false,
							centerPadding: d("lg-center-padding") ? d("lg-center-padding") : "0",
					},
				},
				{
					breakpoint: 992,
					settings: {
						arrows: d("md-arrows") ? true : false,
						dots: d("md-dots") ? true : false,
						slidesToShow: d("md-slide-show")
							? d("md-slide-show")
							: 1,
						centerMode: d("md-center-mode")
							? d("md-center-mode")
							: false,
						centerPadding: 0,
					},
				},
				{
					breakpoint: 768,
					settings: {
						arrows: d("sm-arrows") ? true : false,
						dots: d("sm-dots") ? true : false,
						slidesToShow: d("sm-slide-show")
							? d("sm-slide-show")
							: 1,
						centerMode: d("sm-center-mode")
							? d("sm-center-mode")
							: false,
						centerPadding: 0,
					},
				},
				{
					breakpoint: 576,
					settings: {
						arrows: d("xs-arrows") ? true : false,
						dots: d("xs-dots") ? true : false,
						slidesToShow: d("xs-slide-show")
							? d("xs-slide-show")
							: 1,
						centerMode: d("xs-center-mode")
							? d("xs-center-mode")
							: false,
						centerPadding: 0,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});
	});

	/*----------- 08. Custom Animaiton For Slider ----------*/
	$('[data-ani-duration]').each(function () {
		var durationTime = $(this).data('ani-duration');
		$(this).css('animation-duration', durationTime);
	});
	
	$('[data-ani-delay]').each(function () {
		var delayTime = $(this).data('ani-delay');
		$(this).css('animation-delay', delayTime);
	});
	
	$('[data-ani]').each(function () {
		var animaionName = $(this).data('ani');
		$(this).addClass(animaionName);
		$('.slick-current [data-ani]').addClass('slider-animated');
	});
	
	$('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$(slick.$slides).find('[data-ani]').removeClass('slider-animated');
		$(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
	});

	/*------------------------------
		counter section activation
    -------------------------------*/
	function counterupInit($scope) {
		$scope.counterUp({
			delay: 20,
			time: 3000
		});
	}

    // Call On Load
	if ($(".indicator-active").length) {
		$(".indicator-active").indicator();
	}

    /*============================================
		Marquee Active
	==============================================*/
	function activeMarqueeSlider($scope)  {
		var el = $scope.find(".marquee_mode");
		let $selector = "#" + el.attr("id");
		if ($($selector).length) {
			$($selector).marquee({
				speed: 100,
				gap: 0,
				delayBeforeStart: 0,
				direction: 'left',
				duplicated: true,
				pauseOnHover: true,
				startVisible:true,
			});
		}
	}

    /*----------- 15. Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    // Active specifix
    $('.filter-active-cat1').imagesLoaded(function () {
        var $filter = '.filter-active-cat1',
        $filterItem = '.filter-item',
        $filterMenu = '.filter-menu-active';

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: '.cat1',
                masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
                }
            });

            // filter items on button click
            $($filterMenu).on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                filter: filterValue
                });
            });

            // Menu Active Class 
            $($filterMenu).on('click', 'button', function (event) {
                event.preventDefault();
                $(this).addClass('active');
                $(this).siblings('.active').removeClass('active');
            });
        };
    });

  //Odometer
  if ($(".single-counterup-01").length) {
    $(".single-counterup-01").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  }

  //Masonary Gallery
  var $caseStudyThreeContainer = $(".grid");
  if ($caseStudyThreeContainer.length > 0) {
    $(".grid").imagesLoaded(function () {
      var caseMasonry = $caseStudyThreeContainer.isotope({
        itemSelector: ".grid-item", // use a separate class for itemSelector, other than .col-
        masonry: {
          gutter: 0,
        },
      });
      $(document).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        caseMasonry.isotope({
          filter: filterValue,
        });
      });
    });
    $(document).on("click", "button", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  }

	$(document).ready(function () {

		/*--------------------
			wow js init
		---------------------*/
		new WOW().init();

		/*---------------------------------
			* Magnific Popup
		* --------------------------------*/
		$(".video-play-btn, .video-play-btn-02, .video-play-btn-hover, .play-video-btn, .button-video").magnificPopup({
			type: "video",
			removalDelay: 400,
			preloader: false
		});

		// Nice select
		// $("select").niceSelect();
	});
})(jQuery);
