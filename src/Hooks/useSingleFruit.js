import { useEffect, useState } from "react";

const useSingleFruit = (productId) => {
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `https://safe-waters-70331.herokuapp.com/fruits/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [productId]);
  return [fruit, setFruit];
};
export default useSingleFruit;
