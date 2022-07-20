import { useEffect, useState } from "react";

const useAllFruits = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/fruits";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useAllFruits;
