import { useContext } from "react"
import { Icon } from "./Icons"
import { MenuContext } from "../context/MenuContext"

function Filter() {
  const { menu, changeMenu } = useContext(MenuContext)
  const filter = ["drink", "food", "bundles", "addons"]

  const RenderedFilter = () => {
    return filter.map((value) => (
      <button
        onClick={() => changeMenu(value)}
        key={value}
        type="button"
        className="grid place-content-center"
      >
        <div
          className={`${
            menu == value ? "bg-orange-600" : "bg-gray-50"
          } rounded-2xl p-4`}
        >
          <Icon name={value} color={menu == value ? "#fff" : "#5f6368"} />
        </div>
        <span className="font-bold text-gray-500">{value}</span>
      </button>
    ))
  }

  return (
    <div className="mt-4 flex justify-between gap-4">
      <RenderedFilter />
    </div>
  )
}

export default Filter
