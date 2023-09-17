import SingleProduct from "@/common/components/ecommerce/SingleProduct/SingleProduct";
import axios from "axios";

const product = ({ singleProduct }) => {
    return (
        <SingleProduct singleProduct=
            {singleProduct} />
    )
}

export const getServerSideProps = async ({ params }) => {
    
    const url = `http://localhost:3000/api/products/${params.id}`;
    const res = await axios.get(url);
    const data = res.data;

    return {
        props: {
            singleProduct: data,
        },
    };
};

export default product