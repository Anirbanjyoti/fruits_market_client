import { useEffect, useState } from "react";

const useSingleFruit = (productId) => {
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/fruits/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [productId]);
  return [fruit, setFruit];
};
export default useSingleFruit;
