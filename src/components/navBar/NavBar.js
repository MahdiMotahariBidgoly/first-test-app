/** @format */
import styles from './navBar.module.css'
const NavBar = props => {
  return (
    <header className={styles.navBar}>
      <h1>frontHook.ir Shopping</h1>
      <span>{props.totalItems}</span>
    </header>
  )
}
export default NavBar
