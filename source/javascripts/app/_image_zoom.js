//= require ../lib/_jquery

;(function () {
  'use strict';

  $(function () {
    $('.content img').each(function () {
      const $img = $(this);

      $img.on('click', function (e) {
        e.preventDefault();
        window.open($img.attr('src'), '_blank', 'rel="noopener"');
      });
    });
  });

})();
