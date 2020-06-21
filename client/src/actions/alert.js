import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT, SET_ALERT_INIT } from "./types";

export const setAlert = (msg, alertType, timeout = 1000) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: { id, alertType: "none" },
      }),
    timeout
  );
};

export const setAlertInit = () => (dispatch) => {
  dispatch({
    type: SET_ALERT_INIT,
  });
};
