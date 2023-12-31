import { FoodBoutiqueAPI } from './bourique-api.js';
import Swal from 'sweetalert2';

const foodApi = new FoodBoutiqueAPI();

const form = document.querySelector('form[name="email_address"]');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements['footer-input-email'];
  const emailValue = emailInput.value;

  try {
    const response = await foodApi.subscribeToNewsletter({ email: emailValue });
    emailInput.value = '';

    let successMessage = 'Successfully subscribed!';
    if (response && response.data && response.data.message) {
      successMessage = response.data.message;
    }

    Swal.fire({
      icon: 'success',
      title: successMessage,
      showConfirmButton: true,
      confirmButtonColor: '#6D8434',
      showCancelButton: false,
      customClass: {
        popup: 'small-popup',
        title: 'custom-title',
        icon: 'custom-icon',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    error;

    let errorMessage = 'There was an error subscribing. Please try again.';

    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
      showConfirmButton: true,
      confirmButtonColor: '#6D8434',
      showCancelButton: false,
      customClass: {
        popup: 'small-popup',
        title: 'custom-title',
        icon: 'custom-icon',
      },
    });
  }
});

// import { FoodBoutiqueAPI } from './bourique-api.js';
// import Swal from 'sweetalert2';

// const FoodAp = new FoodBoutiqueAPI();

// const form = document.querySelector('form[name="E-mail"]');

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');

// email.addEventListener('input', function (event) {
//   if (email.validity.valid) {
//     emailError.textContent = '';
//     emailError.className = 'error';
//   } else {
//     showError();
//   }
// });

// form.addEventListener('submit', function (event) {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = 'You need to enter an e-mail address.';
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = 'Entered value needs to be an e-mail address.';
//   } else if (email.validity.tooShort) {
//     emailError.textContent = `Email shouid be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//   }
//   emailError.className = 'error active';
// }

// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const email = event.currentTarget.elements['email'];
//   const EmailValue = email.value;

//   try {
//     const resp = await FoodAp.subscribeToNewsletter({ email: EmailValue });
//     email.value = '';

//     let Messag = 'Thanks for subscribing!';
//     if (resp && resp.data && resp.data.message) {
//       Messag = resp.data.message;
//     }

//     Swal.fire({
//       icon: 'good',
//       title: Messag,
//       showConfirmButton: true,
//       confirmButtonColor: '#6D8434',
//       showCanceButton: false,
//       usuallyClass: {
//         popup: 'small-popup',
//         title: 'usually-title',
//         icon: 'usually-icon',
//       },
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     error;

//     let Messagerror = 'Error. Try again.';

//     if (error.resp && error.resp.data && error.resp.data.message) {
//       Messagerror = error.resp.data.message;
//     }

//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       showConfirmButton: true,
//       confirmButtonColor: '#6D8434',
//       showCanceButton: false,
//       text: Messagerror,
//       usuallyClass: {
//         popup: 'small-popup',
//         title: 'usually-title',
//         icon: 'usually-icon',
//       },
//     });
//   }
// });
