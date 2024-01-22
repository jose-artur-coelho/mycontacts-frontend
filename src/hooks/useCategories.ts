import CategoriesService from "../services/CategoriesService";
import { useEffect, useState } from "react";
import useSafeAsyncAction from "./useSafeAsyncAction";

interface Category {
  id: string;
  name: string;
}
export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsloading] = useState(true);
  const safeAsyncAction = useSafeAsyncAction();
  useEffect(() => {
    async function loadCategories() {
      try {
        setIsloading(true);
        const categoriesList = await CategoriesService.listCategories();

        safeAsyncAction(() => setCategories(categoriesList));
      } catch {
      } finally {
        setIsloading(false);
      }
    }
    loadCategories();
  }, [safeAsyncAction]);

  return { categories, isLoading };
}
