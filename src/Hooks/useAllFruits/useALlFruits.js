import { useEffect, useState } from "react";

const useAllFruits = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://safe-waters-70331.herokuapp.com/fruits";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useAllFruits;
