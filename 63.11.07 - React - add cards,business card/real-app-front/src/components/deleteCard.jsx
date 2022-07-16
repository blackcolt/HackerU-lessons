import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../services/cardsService";

const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function deleteCard() {
      await cardsService.deleteCard(id);
      navigate("/my-cards");
    }

    deleteCard();
  });

  return null;
};

export default DeleteCard;
