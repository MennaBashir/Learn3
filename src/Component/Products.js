import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../rtk/product-slice";
import { useEffect } from "react";
import {addToChart} from "../rtk/cart-slice";
function Products() {
    const state = useSelector(state => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])
    return (
        <div className="container row gap-2 mt-4 ms-3">
            {state.map((el) => {
                return (
                    <div key={el.id} className="card col-3" >
                        <img src={el.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">{el.description}</p>
                            <p>{el.price} $</p>
                            <button  className="btn btn-primary" onClick={()=>dispatch(addToChart(el))}>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;