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

  $('button[data-filter=".flyers"]').click();

$('[data-fancybox="images"]').fancybox({
  buttons: [
    'share',
    'thumbs',
    'close'
  ]
});