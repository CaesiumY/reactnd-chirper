export const RECEIVE_USER = "RECEIVE_USER";

export function receiveUser(users) {
  return {
    type: RECEIVE_USER,
    users,
  };
}
