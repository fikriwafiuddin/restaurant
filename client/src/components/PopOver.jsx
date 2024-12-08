function PopOver({ item }) {
  return (
    item && (
      <div
        className={`${
          item ? "" : "hidden"
        } fixed z-10 top-0 left-0 bottom-0 right-0 bg-black/30 flex justify-center items-center`}
      >
        <div className="bg-white w-64 h-24">
          <div className="">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    )
  )
}

export default PopOver
