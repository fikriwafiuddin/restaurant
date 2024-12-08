import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Report() {
  // Contoh data laporan pengeluaran dan pemasukan
  const laporan = [
    { bulan: "Januari", pemasukan: 5000000, pengeluaran: 3000000 },
    { bulan: "Februari", pemasukan: 6000000, pengeluaran: 4000000 },
    { bulan: "Maret", pemasukan: 7000000, pengeluaran: 2000000 },
    // Tambahkan data bulan lainnya sesuai kebutuhan
  ]

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Laporan" />
          <main>
            <table className="min-w-full mt-4 bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Bulan</th>
                  <th className="border px-4 py-2">Pemasukan</th>
                  <th className="border px-4 py-2">Pengeluaran</th>
                </tr>
              </thead>
              <tbody>
                {laporan.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.bulan}</td>
                    <td className="border px-4 py-2">
                      {item.pemasukan.toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">
                      {item.pengeluaran.toLocaleString()}
                    </td>
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

export default Report
