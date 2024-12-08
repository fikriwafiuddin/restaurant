import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

function Header({ title }) {
  const navigate = useNavigate()
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div>
        <button
          onClick={() => navigate("/notifications")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Notifikasi
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
