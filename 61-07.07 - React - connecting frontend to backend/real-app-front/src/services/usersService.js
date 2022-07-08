import httpService from "./httpService";

export function createUser(user) {
  return httpService.post("/users", user);
}

const usersService = {
  createUser,
};

export default usersService;
