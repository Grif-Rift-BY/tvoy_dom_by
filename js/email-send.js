
$( '#mail-form' ).on( 'submit', ( event ) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию.
  const dataPackage = $( '#mail-form' ).serializeArray(); // Собираем данные с полей формы
  $.ajax( {
    url: "../php/sendmail.php", // Путь к скрипту отправки письма
    type: "POST",
    data: dataPackage,
    success: ( response ) => {
      if ( response == 'OK' ) {
          $( '#mail-form' )[0].reset(); // Сброс формы
          formVisibilityToggler(); // Переключение формы для показа подтверждения
      };
    }
  } );
} );
$('#form-button-ok').on('click',() =>{
  formVisibilityToggler(); // Переключение формы к начальному виду.
  modal.style.display = 'none'; // Закрытие формы по нажатию кнопки ОК
})

function formVisibilityToggler() {
  $( '#form-response' ).toggleClass('form__element-hidden');
  $( '#form-button-ok' ).toggleClass('form__element-hidden');
  $( '.user-box' ).toggleClass('form__element-hidden');
  $( '#form-button-submit' ).toggleClass('form__element-hidden');
}