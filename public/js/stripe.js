/* eslint-disable */ s;
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51JvQpFJYHR4prLP9pHToRs6VU3x6LcnKkikkyUtQiT94IeJU39q8lfI1SVnT6p0g72n6qTpFyolH9p0Y4sOQfA9a00BrLyzhBN'
);

export const bookTour = async tourId => {
  // 1) Get the session from the API
  const session = await axios(
    `http://127.0.0.1:3000/api/v1/users/bookings/checkout-session/${}`
  );

  console.log(session)
  // 2) Create checkout form + charge credit card
};
