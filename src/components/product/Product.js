/** @format */

// const Product = () => {
//     const price = '99$'; throw expersion
//     return (
//         <div>
//             <p>product Name: Java Scrip</p>
//             <p>Price:{price }</p>

//     </div>
//     )}

// export default Product;

// Dynamic props
import styles from './product.module.css'
import { DeleteOutlined } from '@ant-design/icons'

const Product = ({
  onChangeproduct,
  onDecrement,
  onIncrement,
  onDelete,
  product
}) => {
  //   console.log(props)
  return (
    <div className={styles.Product}>
      <p>product Name:{product.title}</p>
      <p>product Price:{product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <input
        className={styles.input}
        onChange={onChangeproduct}
        value={product.title}
      />
      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 ? styles.remove : styles.dec
        }`}
      >
        {product.quantity > 1 ? '-' : <DeleteOutlined />}
      </button>
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </div>
  )
}
export default Product
