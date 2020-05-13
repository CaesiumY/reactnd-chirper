import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUser } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUser(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveTweets(tweets));
    });
  };
}
