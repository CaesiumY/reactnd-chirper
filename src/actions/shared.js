import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUser } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUser(users));
    });
  };
}
