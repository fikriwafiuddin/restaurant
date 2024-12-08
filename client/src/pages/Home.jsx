import { useContext } from "react"
import Filter from "../components/Filter"
import { MenuContext } from "../context/MenuContext"
import Product from "../components/Product"
import Searchbar from "../components/Searchbar"
import ButtonCart from "../components/ButtonCart"
import PopOver from "../components/PopOver"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"
import Cart from "../components/Cart"

function Home() {
  const { listMenu } = useContext(MenuContext)
  const [item, setItem] = useState(null)
  const navigate = useNavigate()

  const RenderedListMenu = () => {
    return (
      listMenu &&
      listMenu.map((value) => (
        <Product
          key={value.id}
          image={value.image}
          name={value.name}
          price={value.price}
          handleClick={setItem}
        />
      ))
    )
  }

  return (
    <>
      <PopOver item={item} />
      <main className="px-3 py-4 pb-24 bg-gray-50">
        <div className="flex justify-end gap-2 max-w-5xl mx-auto">
          <div className="max-w-[500px] mx-auto">
            <Searchbar />
            <Banner />
            <Filter />
            <div className="mt-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-y-4 justify-items-center">
              <RenderedListMenu />
            </div>
            <ButtonCart handleClick={() => navigate("/cart")} />
          </div>
          <div className="hidden md:block relative border-2 rounded px-4 pt-2">
            <h1 className="font-bold text-gray-600">Keranjang</h1>
            <Cart />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
