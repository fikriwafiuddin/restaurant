import Chart from "../components/Chart"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Income() {
  const labels = ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"]
  const numbers = [1500000, 2000000, 1800000, 2200000]
  const label = "Pendapatan (IDR)"
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Pendapatan" />

          <main className="mt-6">
            <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
              <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>

                <span className="text-xs font-medium"> 67.81% </span>
              </div>

              <div>
                <strong className="block text-sm font-medium text-gray-500">
                  Profit
                </strong>

                <p>
                  <span className="text-2xl font-medium text-gray-900">
                    $404.32
                  </span>

                  <span className="text-xs text-gray-500"> from $240.94 </span>
                </p>
              </div>
            </article>

            <div className="flex gap-4 mt-2">
              <button
                type="button"
                className="bg-white rounded p-2 border border-gray-100"
              >
                Tahun Ini
              </button>
              <button
                type="button"
                className="bg-white rounded p-2 border border-gray-100"
              >
                Bulan Ini
              </button>
              <button
                type="button"
                className="bg-white rounded p-2 border border-gray-100"
              >
                Minggu Ini
              </button>
            </div>
            <Chart labels={labels} numbers={numbers} label={label} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Income
