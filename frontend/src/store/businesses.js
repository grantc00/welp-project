import { csrfFetch } from "./csrf";

const SET_BUSINESSES = "businesses/SET_BUSINESSES";

// actions ------------------------------------

const setBusinesses = (businesses) => ({
  type: SET_BUSINESSES,
  payload: businesses,
});

const addBusiness = (businesses) => ({
  type: SET_BUSINESSES,
  payload: businesses,
});

// Selectors ---------------------------------

export const getBusinesses = () => async (dispatch) => {
  const response = await csrfFetch(`/api/business`);

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

// create business ---------------

export const createBusiness =
  ({ ownerId, title, description, address }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/business`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerId: ownerId,
        title: title,
        description: description,
        address: address,
      }),
    });

    const data = await response.json();
    dispatch(addBusiness(data.businesses));
  };

// Delete business ---------------------------------

export const deleteBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ businessId }),
  });

  const data = await response.json();
  dispatch(setBusinesses(data));
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
