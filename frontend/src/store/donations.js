// Action Types
const RECEIVE_DONATIONS = "donations/RECEIVE_DONATIONS";
const RECEIVE_DONATION = "donations/RECEIVE_DONATION";
const REMOVE_DONATION = "donations/REMOVE_DONATION";

// Selectors
export const getDonation = (donationId) => (state) =>
  state.donations[donationId] || null;
export const getDonations = () => (state) =>
  Object.values(state.donations || {});

// Action Creators
const receiveDonations = (donations) => ({
  type: RECEIVE_DONATIONS,
  donations,
});

const receiveDonation = (donation) => ({
  type: RECEIVE_DONATION,
  donation,
});

const removeDonation = (donationId) => ({
  type: REMOVE_DONATION,
  donationId,
});

// Thunk Action Creators
export const fetchDonations = () => async (dispatch) => {
  try {
    const response = await fetch("/api/donations");
    const data = await response.json();
    dispatch(receiveDonations(data));
  } catch (error) {
    console.error("Error fetching donations:", error);
  }
};

export const createDonation = (donationData) => async (dispatch) => {
  try {
    const response = await fetch("/api/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ donation: donationData }),
    });
    const data = await response.json();
    dispatch(receiveDonation(data));
  } catch (error) {
    console.error("Error creating donation:", error);
  }
};

export const updateDonation =
  (donationId, donationData) => async (dispatch) => {
    try {
      const response = await fetch(
        `/api/donations/${donationId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ donation: donationData }),
        }
      );
      const data = await response.json();
      dispatch(receiveDonation(data));
    } catch (error) {
      console.error("Error updating donation:", error);
    }
  };

export const deleteDonation = (donationId) => async (dispatch) => {
  try {
    await fetch(`/api/donations/${donationId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    dispatch(removeDonation(donationId));
  } catch (error) {
    console.error("Error deleting donation:", error);
  }
};

// Reducer
const donationsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DONATIONS:
      const newDonations = {};
      action.donations.forEach((donation) => {
        newDonations[donation.id] = donation;
      });
      return { ...state, ...newDonations };

    case RECEIVE_DONATION:
      return { ...state, [action.donation.id]: action.donation };

    case REMOVE_DONATION:
      const { [action.donationId]: _, ...remainingDonations } = state;
      return remainingDonations;

    default:
      return state;
  }
};

export default donationsReducer;
