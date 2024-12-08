import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import { formatCurrency } from "../helpers/formatCurrency"
import { useNavigate } from "react-router-dom"

function Cart() {
  const { listMenu } = useContext(MenuContext)
  const navigate = useNavigate()
  return (
    <div className="bg-white">
      <div className="pt-5 px-6 relative min-h-screen">
        <div className="flex items-center gap-5">
          <button onClick={() => navigate("/")} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-gray-700">Keranjang</h2>
        </div>
        <div className="grid gap-4 mt-4">
          {listMenu.map((value) => (
            <div key={value.id} className="flex justify-between">
              <div className="flex gap-2">
                <div className="size-20 rounded-2xl overflow-hidden">
                  <img src={value.image} alt={value.name} />
                </div>
                <div className="flex flex-col gap-2 leading-none">
                  <span className="font-bold text-gray-700">{value.name}</span>
                  <span className="text-orange-600 font-medium">
                    Rp {formatCurrency(value.price)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="bg-gray-100 w-7 h-7 text-lg rounded-lg"
                  type="button"
                >
                  -
                </button>
                <span>01</span>
                <button
                  className="bg-orange-600 text-white w-7 h-7 text-lg rounded-lg"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute  bottom-0 left-0 right-0 pb-10 px-5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-black/70">Kode Diskon</span>
            <div className="flex items-center">
              <button
                className="bg-gray-100 px-3 py-1 text-sm font-medium rounded-md text-gray-400"
                id="button_diskon"
                type="button"
              >
                Masukkan kode diskon
              </button>
              <label className="font-bold ml-2" htmlFor="button_diskon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-bold">Total</span>
            <span className="text-2xl text-orange-600 font-bold">
              Rp 100.000
            </span>
          </div>
          <button
            className="w-full bg-orange-600 text-white text-lg font-medium py-3 mt-2 rounded-lg"
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
