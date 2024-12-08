import { formatCurrency } from "../helpers/formatCurrency"

function Product({ image, name, price, handleClick }) {
  return (
    <div
      onClick={() => handleClick({ image, name, price })}
      role="button"
      className="w-32"
    >
      <div className="size-32 rounded-2xl overflow-hidden">
        <img src={image} alt={name} />
      </div>
      <div className="grid px-1">
        <span className="font-bold text-gray-600">{name}</span>
        <small className="font-medium text-orange-600">
          Rp {formatCurrency(price)}
        </small>
      </div>
    </div>
  )
}

export default Product
