import * as types from '../actions/bookingActions';

const initialState = {
  coach_id: null,
  timePicker: false,
  date: null,
  select: {},
  error: '',
  isLoading: false,
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOOKING_APPOINTMENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.BOOKING_APPOINTMENT_ERROR:
      return { ...state, error: action.payload };

    case types.BOOKING_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
      };

    case types.SAVE_DATE:
      return {
        ...state,
        timePicker: !state.timePicker,
        date: action.payload,
      };

    case types.SAVE_SELECT:
      const copyOfSelect = { ...state.select };

      copyOfSelect[action.payload.target.name] =
        action.payload.target.value;

      return {
        ...state,
        select: copyOfSelect,
      };

    default:
      return state;
  }
}

export default bookingReducer;
