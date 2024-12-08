import Chart from "../components/Chart"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Home() {
  const labels = ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"]
  const numbers = [1500000, 2000000, 1800000, 2200000]
  const label = "Pendapatan (IDR)"

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Home" />

          <main className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Staff</h3>
                <p className="text-2xl">{40}</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Pendapatan</h3>
                <p className="text-2xl">Rp 1.000.000.000</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Produk</h3>
                <p className="text-2xl">10</p>
              </div>
            </div>

            <Chart labels={labels} numbers={numbers} label={label} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
