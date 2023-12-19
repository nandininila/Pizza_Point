import axios from "axios";
import SingleProduct from "../../common/components/ecommerce/SingleProduct/SingleProduct";
import { frontendOrigin } from "../../common/types/utils/const";

const product = ({ singleProduct }) => {
    return (
        <SingleProduct singleProduct=
            {singleProduct} />
    )
}

export const getServerSideProps = async ({ params }) => {
    
    const url = `${frontendOrigin}/api/products/${params.id}`;
    const res = await axios.get(url);
    const data = res.data;

    return {
        props: {
            singleProduct: data,
        },
    };
};

export default product