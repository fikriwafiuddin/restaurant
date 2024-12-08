import PropTypes from "prop-types"

const Table = ({ config, data }) => {
  const RenderedHeaders = () => {
    return config.map((col) => (
      <th key={col.label} className="py-2 px-4 border">
        {col.label}
      </th>
    ))
  }

  const RenderedRows = () => {
    return (
      <>
        {data.map((order) => {
          return (
            <tr key={order.id}>
              {config.map((col) => (
                <td key={col.label} className="py-2 px-4 border">
                  {col.render(order)}{" "}
                </td>
              ))}
            </tr>
          )
        })}
      </>
    )
  }

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <RenderedHeaders />
        </tr>
      </thead>
      <tbody>
        <RenderedRows />
      </tbody>
    </table>
  )
}

Table.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
}

export default Table
