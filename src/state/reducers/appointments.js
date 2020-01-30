import * as types from '../actions/appointmentActions';

const initialState = {
  appointments: null,
  error: '',
  isLoading: false,
  rescheduler: '',
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.APPOINTMENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.APPOINTMENTS_SUCCESSFUL:
      const filterFutureAndUncanceledAppointments = action.payload.filter(
        appointment => {
          return (
            new Date(appointment.appointment_datetime) >=
              new Date() && !appointment.canceled
          );
        },
      );

      return {
        ...state,
        isLoading: false,
        appointments: filterFutureAndUncanceledAppointments,
      };

    case types.APPOINTMENTS_ERROR:
      return { ...state, error: action.payload };

    case types.CANCEL_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        appointments: state.appointments
          .map(appointment => {
            if (appointment.id === action.payload.id) {
              appointment.canceled = action.payload;
            }
            return appointment;
          })
          .filter(appointment => !appointment.canceled),
        rescheduler: {
          ...action.rescheduler,
          coach_id: action.payload.coach_id,
          student_id: action.payload.student_id,
        },
      };

    default:
      return state;
  }
}

export default appointmentsReducer;
