var $grid = $('.grid').isotope({
    itemSelector: '.grid-item'
  });
  
  // change is-checked class on buttons
  var $buttonGroup = $('.button-group');
  $buttonGroup.on('click', 'button', function (event) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $(event.currentTarget);
    $button.addClass('is-checked');
    var filterValue = $button.attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $('button[data-filter=".2022"]').click();

$('[data-fancybox="images"]').fancybox({
  buttons: [
    // 'share',
    'thumbs',
    'close'
  ]
});



// read more

function readMore(e) {
  var btnText = e;
  var p = e.previousElementSibling;
  var dots = p.querySelector('.dots');
  var moreText = p.querySelector(".read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//slick-slider 

$(document).ready(function(){
  $('.slider').slick({
    //  centerMode: true,
      centerPadding: '0',
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
       arrows: true,
       responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      dots: false,
      arrows: true,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      arrows: true,
    }
  },
  {
    breakpoint: 550,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      arrows: true,
    }
  }
]
  });
});

//slick




$(document).ready(function () {
  $('.scroll').on("click", function(e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    $("html, body").animate({
      'scrollTop': $(dest).offset().top - 86
    }, 1000);
    $('.navbar-collapse').collapse('hide');
  });
  
});

$(document).ready(function(){
  $('.slider-team').slick({
    //  centerMode: true,
      centerPadding: '0',
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
       arrows: false,
       responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      dots: false,
      arrows: true,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
    }
  },
  {
    breakpoint: 550,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      arrows: true,
    }
  }
]
  });
});
