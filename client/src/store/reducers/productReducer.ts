import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../../service/product.service";

// hàm đi lấy tất cả sản phẩm
export const getAllProduct: any = createAsyncThunk(
    "product/getAllProduct",
    getProducts
);
// hàm đi thêm sản phẩm
// export const addCart: any = createAsyncThunk(
//     "product/addCart",
//     async (product) => {
//         const response = await axios.post(
//             "http://localhost:8080/cart",
//             product
//         );
//         return response.data;
//     }
// );
const productReducer = createSlice({
    name: "product",
    initialState: {
        product: [],
        cart: [],
    },
    reducers: {
        // chứa những thành động
        addToCart: (state, action) => {
            //
            console.log("đi mua hàng", action.payload);
            let newProduct={...action.payload,quantity:1}
            // kiểm tra xem giỏ hàng có sản phẩm đấy chưa
            // nếu có tăng số lượng
            // nếu không có thì mới thêm vào.
        },
    },
    extraReducers: (buider) => {
        buider
            .addCase(getAllProduct.pending, (state, action) => {
                console.log("trạng thái chờ xử lý");
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                console.log("có lỗi sảy ra!");
            });
        // .addCase(addCart.fulfilled, (state, action) => {
        //     // LOGIC XỬ LÝ KHI THÊM VÀO GIỎ HÀNG
        //     console.log("ĐI MUA HÀNG THÀNH CÔNG!");
        // })
        // .addCase(addCart.rejected, (state, action) => {
        //     // CÓ LỖI KHI MUA HÀNG
        //     console.log("QUÁ TRÌNH MUA HÀNG THẤT BẠI");
        // });
    },
});
export const { addToCart } = productReducer.actions;
export default productReducer.reducer;