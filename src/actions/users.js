export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUser(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
