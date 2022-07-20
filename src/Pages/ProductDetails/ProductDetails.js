import { useParams } from "react-router-dom";
import useSingleFruit from "../../Hooks/useSingleFruit";
import PagesHeader from "../PagesHeader/PagesHeader";
import './ProductDetails.css'

const ProductDetails = () => {
  const { productId } = useParams();
  const [fruit] = useSingleFruit(productId);

  return (
    <div>
      <PagesHeader></PagesHeader>
      <div className="productDetails">
        <div>
          <img src={fruit.img} alt="images"></img>
        </div>
        <div>
          <h3>Name: {fruit.name}</h3>
          <h4>Price {fruit.price}</h4>
          <p>{fruit.description}</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
