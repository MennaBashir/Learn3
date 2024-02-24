import { useSelector, useDispatch } from "react-redux";
import { deleteFromChart, clear } from "../rtk/cart-slice";
function Cart() {
    const state1 = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const Total = state1.reduce((acc,product)=>{
        acc+=product.price * product.quantity;
        return acc;
    },0)
    return (
        <>
            <div className="container">
                <h1 className="my-3">Welcome to Cart</h1>
                <button onClick={() => dispatch(clear())} className="btn btn-primary">Clear Cart</button>
                <h5>Total Price: {Math.ceil(Total)}$</h5>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state1.map((e) => {
                            return (
                            <tr key={e.id}>
                            <td>{e.title}</td>
                            <td><img src={e.image} alt="..." style={{ width: "100px", height: "100px" }} /></td>
                            <td>{e.price}$</td>
                            <td>{e.quantity}</td>
                            <td><button onClick={() => dispatch(deleteFromChart(e))} className="btn btn-danger">Delete</button></td>
                        </tr>
                        )})
                        }

                    </tbody>
                   
                </table>
            </div>
        </>
    );
}
export default Cart;