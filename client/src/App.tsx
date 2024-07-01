import Cart from './components/Cart'
import "./App.css"
import ProductList from './components/ProductList'
import Notification from './components/Notification'
import ConfirmModal from './components/ConfirmModal'
export default function App() {
  return (
    <div className='app'>App
      <ProductList></ProductList>
      <Cart></Cart>
      <Notification></Notification>
      <ConfirmModal></ConfirmModal>
    </div>
  )
}
