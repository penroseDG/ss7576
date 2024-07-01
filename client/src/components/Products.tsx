import { useDispatch, useSelector } from "react-redux"
import { addToCart, getAllProduct } from "../store/reducers/productReducer";
import { useEffect } from "react";
import "./product.css";
interface Products {
    product: {
      id: number;
      name: string;
      price: number;
      stock: number;
      description: string;
      image: string;
    };
    onAddToCart: (product: any) => void;
}
export default function Products() {
    const data: any = useSelector(state => {
        // console.log(111111, state);
        return state
    })
    // bắn dispatch lên
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [])
    // hàm thêm sản phẩm vào giỏ hàng
    const addToCartNow = (product: any) => {
        dispatch(addToCart(product))

    }
    return (
        <div >Products
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Anh</th>
                        <th>Tên </th>
                        <th>Mô tả</th>
                        <th>Gía</th>
                        <th>Số lượng trong kho</th>
                        <th>hành động</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data.productReducer.product.map((product: any, index: number) => {
                            return (
                                <tr key={product.id}>
                                    <td> {index + 1}</td>
                                    <td>
                                        <img src={product.image} alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td> <button onClick={() => addToCartNow(product)}>mua</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}