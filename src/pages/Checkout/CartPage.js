function CartPage(props) {

  function handleRemoveFromCart(index) {
    const newCart = [...props.cart];
    newCart.splice(index, 1);
    props.setCart(newCart);
  }

  return (
    <>
      <h2>Your Cart</h2>

      <div>
        {props.cart.map((product, index) => (
          <div key={index}>
            <h3>{product.ProductOption}</h3>
            <p>{product.tshirtMaterial}</p>
            <p>{product.sizeCount} x {product.sizes}</p>
            <p>{product.productColor}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleRemoveFromCart(index)}>Remove from Cart</button>
          </div>
        ))}
      </div>

    </>
  )
}

export default CartPage;