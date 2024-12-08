import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Staff() {
  // Contoh data karyawan
  const employees = [
    { id: 1, name: "Andi", role: "Pelayan", shift: "Pagi", salary: 3000000 },
    { id: 2, name: "Budi", role: "Cashier", shift: "Siang", salary: 3500000 },
    { id: 3, name: "Cici", role: "Koki", shift: "Malam", salary: 4000000 },
    { id: 4, name: "Dewi", role: "Admin", shift: "Pagi", salary: 4500000 },
    // Tambahkan data karyawan lainnya sesuai kebutuhan
  ]

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Daftar Karyawan" />
          <main>
            <h3 className="text-2xl font-semibold mt-6">Karyawan</h3>
            <table className="min-w-full mt-4 bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Nama</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Shift</th>
                  <th className="border px-4 py-2">Gaji</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="border px-4 py-2">{employee.id}</td>
                    <td className="border px-4 py-2">{employee.name}</td>
                    <td className="border px-4 py-2">{employee.role}</td>
                    <td className="border px-4 py-2">{employee.shift}</td>
                    <td className="border px-4 py-2">
                      {employee.salary.toLocaleString()}
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

export default Staff
