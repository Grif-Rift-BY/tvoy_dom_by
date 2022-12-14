
  $( '#mail-form' ).on( 'submit', ( event ) => {
    event.preventDefault();
    let dataPackage = $( '#mail-form' ).serializeArray();
    $.ajax( {
      url: "../php/sendmail.php",
      type: "POST",
      data: dataPackage,
      success: ( response ) => {
        if ( response == 'OK' ) {
            $( '#mail-form' )[0].reset();
            formVisibilityToggler();
        };
      }
    } );
  } );
  $('#form-button-ok').on('click',( event ) =>{
    formVisibilityToggler();
    modal.style.display = 'none';
  })

  function formVisibilityToggler() {
    $( '#form-response' ).toggleClass('form__element-hidden');
    $( '#form-button-ok' ).toggleClass('form__element-hidden');
    $( '.user-box' ).toggleClass('form__element-hidden');
    $( '#form-button-submit' ).toggleClass('form__element-hidden');
  }