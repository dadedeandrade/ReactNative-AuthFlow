import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../context/AuthContext";

interface Categorie {
  id: string;
  name: string;
}

const useCategories = () => {
  const getCategories = () => {
    const result = axios.get<Categorie[]>(API_URL + "/categories");

    return result;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categories: data?.data,
    isCategoriesError: isError,
    isCategoriesLoading: isLoading,
  };
};

export default useCategories;
