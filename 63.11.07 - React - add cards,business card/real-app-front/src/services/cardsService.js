import httpService from "./httpService";

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAll() {
  return httpService.get("/cards/my-cards");
}

export function deleteCard(id) {
  return httpService.delete(); // TODO
}

const cardsService = {
  createCard,
  getAll,
  deleteCard,
};

export default cardsService;
