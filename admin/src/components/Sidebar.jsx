import { useLocation } from "react-router-dom"

function Sidebar() {
  const location = useLocation()
  const currentPath = location.pathname
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Produk",
      url: "/products",
    },
    {
      label: "Orderan",
      url: "/orders",
    },
    {
      label: "Laporan",
      url: "/report",
    },
    {
      label: "Staff",
      url: "/staff",
    },
    {
      label: "Bahan Baku",
      url: "/stock",
    },
  ]

  const RenderedLinks = () => {
    return links.map((value) => (
      <a
        key={value.label}
        href={value.url}
        className={`block py-2.5 px-4 text-gray-700 ${
          value.url == currentPath && "bg-gray-200"
        } hover:bg-gray-200`}
      >
        {value.label}
      </a>
    ))
  }

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
      </div>
      <nav className="mt-6">
        <RenderedLinks />
      </nav>
    </div>
  )
}

export default Sidebar
