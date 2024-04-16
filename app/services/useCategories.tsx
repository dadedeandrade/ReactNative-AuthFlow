import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../context/AuthContext";

const useCategories = () => {
  const getCategories = () => {
    const result = axios.get(API_URL + "/categories");

    return result;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { data, isError, isLoading };
};

export default useCategories;
