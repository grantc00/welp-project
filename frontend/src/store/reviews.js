// constants
const SET_REVIEW = "reviews/ADD_REVIEW";
const SET_REVIEWS = "reviews/SET_REVIEWS";

// actions ------------------------------------

const addReview = (review) => ({
  type: SET_REVIEW,
  payload: review,
});

const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  payload: reviews,
});

// Selectors ---------------------------------

export const createReview = (userId, reviewValues) => async (dispatch) => {
  const response = await fetch(`/api/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewValues),
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      let errs = Object.values(data.errors);
      return errs;
    } else {
      dispatch(addReview(data));
    }
    return data;
  } else {
    return response.errors;
  }
};

// get all reviews
export const getReviews = (businessId) => async (dispatch) => {
  const response = await fetch(`/api/review/${businessId}`);

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

// reducer ---------------------------------

const initialState = { review: null, reviews: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEW:
      return { ...state, review: action.payload };
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
}
