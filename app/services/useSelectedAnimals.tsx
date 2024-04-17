import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../context/AuthContext";

export interface Animal {
  age: number;
  categoryId: number;
  id: string;
  img: string;
  name: string;
}
export interface AnimalDetails extends Animal {
  description?: string;
  phone?: string;
  email?: string;
}
interface UseAnimalsProps {
  animalId: string;
}
const useSelectedAnimals = (props: UseAnimalsProps) => {
  const getAnimals = () => {
    const result = axios.get<AnimalDetails>(
      API_URL + "/animals/" + props.animalId
    );

    return result;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["selectedAnimals"],
    queryFn: getAnimals,
  });

  return {
    selectedAnimalDetails: data?.data,
    isSelectedAnimalsError: isError,
    isSelectedAnimalsLoading: isLoading,
  };
};

useSelectedAnimals.defaultProps = {
  animalId: "",
};

export default useSelectedAnimals;
