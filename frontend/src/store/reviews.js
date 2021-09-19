import { csrfFetch } from "./csrf";
// constants
const SET_REVIEW = "reviews/ADD_REVIEW";
const SET_REVIEWS = "reviews/SET_REVIEWS";
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";
// actions ------------------------------------

const addReview = (review) => ({
  type: SET_REVIEW,
  payload: review,
});

const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  payload: reviews,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

// Selectors ---------------------------------

export const createReview =
  ({ userId, businessId, rating, answer }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        businessId: businessId,
        rating: rating,
        answer: answer,
      }),
    });

    const data = await response.json();
    dispatch(addReview(data.review));
  };

// get all reviews
export const getReviews = () => async (dispatch) => {
  const response = await csrfFetch(`/api/review`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      let errs = Object.values(data.errors);
      return errs;
    } else {
      dispatch(setReviews(data));
    }
    return data;
  } else {
    return "response not okay, try again later";
  }
};

// delete review

export const deleteReviews = (reviewId) => async (dispatch) => {
  // const response = await fetch(`/api/review/${reviewId}/delete`);

  const response = await csrfFetch(`/api/review/${reviewId}/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reviewId }),
  });

  const data = await response.json();
  dispatch(setReviews(data));
};

export const editReview =
  ({ reviewId, userId, businessId, rating, answer }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/review/${reviewId}/edit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        businessId: businessId,
        rating: rating,
        answer: answer,
      }),
    });

    const data = await response.json();
    dispatch(updateReview(data));
  };

// reducer ---------------------------------

const initialState = { review: null, reviews: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEW:
      return { ...state, review: action.payload };
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };
    case UPDATE_REVIEW:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
}
