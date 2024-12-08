import Sidebar from "../components/Sidebar"

function IngredientsList() {
  // Contoh data bahan makanan
  const ingredients = [
    { id: 1, name: "Beras", quantity: 50, unit: "kg", yield: 100 }, // Prediksi 100 porsi
    { id: 2, name: "Ayam", quantity: 30, unit: "kg", yield: 60 }, // Prediksi 60 porsi
    { id: 3, name: "Sayuran", quantity: 20, unit: "kg", yield: 80 }, // Prediksi 80 porsi
    { id: 4, name: "Minyak Goreng", quantity: 10, unit: "liter", yield: 200 }, // Prediksi 200 porsi
    // Tambahkan data bahan lainnya sesuai kebutuhan
  ]

  const handleContactSupplier = () => {
    // Logika untuk menghubungi supplier
    alert("Menghubungi supplier untuk membeli stok bahan.")
  }

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Daftar Bahan Makanan</h2>
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleContactSupplier}
              >
                Hubungi Supplier
              </button>
            </div>
          </header>
          <main>
            <table className="min-w-full mt-4 bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Nama</th>
                  <th className="border px-4 py-2">Kuantitas</th>
                  <th className="border px-4 py-2">Satuan</th>
                  <th className="border px-4 py-2">Prediksi Porsi</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ingredient) => (
                  <tr key={ingredient.id}>
                    <td className="border px-4 py-2">{ingredient.id}</td>
                    <td className="border px-4 py-2">{ingredient.name}</td>
                    <td className="border px-4 py-2">{ingredient.quantity}</td>
                    <td className="border px-4 py-2">{ingredient.unit}</td>
                    <td className="border px-4 py-2">{ingredient.yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  )
}

export default IngredientsList
