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
const useAnimals = () => {
  const getAnimals = () => {
    const result = axios.get<Animal[]>(API_URL + "/animals/");

    return result;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });

  return {
    animals: data?.data,
    isAnimalsError: isError,
    isAnimalsLoading: isLoading,
  };
};

export default useAnimals;
