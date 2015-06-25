  $(document).ready(function () {
      $('.toggle').click(function () {

          var collapse_content_selector = $(this).attr('href');

          var toggle_switch = $(this);
          $(collapse_content_selector).toggle(function () {
              if ($(this).css('display') == 'none') {

                  toggle_switch.html('Zmien password');
              } else {
                  //change the button label to be 'Hide'
                  toggle_switch.html('Nie zmieniaj passwordu');
              }
          });
      });


      $('.nav-toggle').click(function () {

          var collapse_content_selector = $(this).attr('href');

          var toggle_switch = $(this);
          $(collapse_content_selector).toggle(function () {
              if ($(this).css('display') == 'none') {

                  toggle_switch.html('Zmien email');
              } else {
                  //change the button label to be 'Hide'
                  toggle_switch.html('Nie zmieniaj emaila');
              }
          });
      });

  });