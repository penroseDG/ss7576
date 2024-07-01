// nơi để lấy dữ liệu
// hàm lấy tất cả thông tin sản phẩm
import axios from "axios"
export const getProducts= async () =>{
    const response:any = axios.get("http://localhost:8080/products")
    return response.data
};
// hàm thêm sản phẩm vào trong giỏ hàng
