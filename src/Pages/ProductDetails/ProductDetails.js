import { useParams } from 'react-router-dom';
import PagesHeader from '../PagesHeader/PagesHeader';

const ProductDetails = () => {
    const {productId} = useParams();

    return (
        <div>
        <PagesHeader></PagesHeader>
            <h1>The Product Details:{productId}</h1>
        </div>
    );
};

export default ProductDetails;