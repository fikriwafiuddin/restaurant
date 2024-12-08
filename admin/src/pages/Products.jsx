import Chart from "../components/Chart"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Products() {
  const products = [
    {
      id: 1,
      name: "Pizza Margherita",
      price: "$10",
      category: "Main Course",
      quantitySold: 30,
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: "$8",
      category: "Salad",
      quantitySold: 20,
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      price: "$12",
      category: "Main Course",
      quantitySold: 25,
    },
    {
      id: 4,
      name: "Tiramisu",
      price: "$6",
      category: "Dessert",
      quantitySold: 15,
    },
    {
      id: 5,
      name: "Grilled Salmon",
      price: "$15",
      category: "Main Course",
      quantitySold: 10,
    },
    {
      id: 6,
      name: "Margarita",
      price: "$5",
      category: "Drink",
      quantitySold: 50,
    },
    {
      id: 7,
      name: "Pasta Primavera",
      price: "$11",
      category: "Main Course",
      quantitySold: 18,
    },
    {
      id: 8,
      name: "Chocolate Cake",
      price: "$7",
      category: "Dessert",
      quantitySold: 22,
    },
    {
      id: 9,
      name: "Lemonade",
      price: "$3",
      category: "Drink",
      quantitySold: 40,
    },
    {
      id: 10,
      name: "Garlic Bread",
      price: "$4",
      category: "Appetizer",
      quantitySold: 35,
    },
  ]

  const labels = products.map((product) => product.name)
  const numbers = products.map((product) => product.quantitySold)
  const label = "Quantity Sold"
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Produk" />

          <main className="mt-6">
            <a
              href="/add-product"
              className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah Produk +
            </a>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{product.id}</td>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">{product.price}</td>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex gap-1 ">
                        <button
                          type="button"
                          className="bg-red-600 hover:bg-red-700 px-2 py-1 text-sm text-white rounded duration-300"
                        >
                          hapus
                        </button>
                        <button
                          type="button"
                          className="bg-blue-700 hover:bg-blue-800 px-2 py-1 text-sm text-white rounded duration-300"
                        >
                          hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Chart labels={labels} numbers={numbers} label={label} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products
