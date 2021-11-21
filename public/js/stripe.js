/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51JvQpFJYHR4prLP9pHToRs6VU3x6LcnKkikkyUtQiT94IeJU39q8lfI1SVnT6p0g72n6qTpFyolH9p0Y4sOQfA9a00BrLyzhBN'
);

export const bookTour = async tourId => {
  console.log('hi');

  try {
    // 1) Get the session from the API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
