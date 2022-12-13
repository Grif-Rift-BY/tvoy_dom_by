  $( '#MAIL-FORM' ).on( 'submit', ( event ) => {
    event.preventDefault();
    let dataPackage = $( '#MAIL-FORM' ).serializeArray();
    console.log( 'MAIL dataPackage = ', dataPackage );
  } );