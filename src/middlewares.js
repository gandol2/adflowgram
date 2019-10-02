export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("You need to login perform this action");
  }
  return;
};
