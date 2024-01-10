import CategoriesService from "../services/CategoriesService";
import { useEffect, useState } from "react";

interface Category {
  id: string;
  name: string;
}
export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsloading(true);
        const categoriesList = await CategoriesService.listCategories();
        setCategories(categoriesList);
      } catch {
      } finally {
        setIsloading(false);
      }
    }
    loadCategories();
  }, []);

  return { categories, isLoading };
}
