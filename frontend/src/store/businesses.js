const SET_BUSINESSES = "businesses/SET_BUSINESSES";

// actions ------------------------------------

const setBusinesses = (businesses) => ({
  type: SET_BUSINESSES,
  payload: businesses,
});

// Selectors ---------------------------------

export const getBusinesses = () => async (dispatch) => {
  const response = await fetch(`/api/business`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      let errs = Object.values(data.errors);
      return errs;
    } else {
      dispatch(setBusinesses(data));
    }
    return data;
  } else {
    return "response not okay, try again later";
  }
};

// reducer ---------------------------------

const initialState = { businesses: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUSINESSES:
      return { ...state, businesses: action.payload };
    default:
      return state;
  }
}
