import { useState } from "react"
import Sidebar from "../components/Sidebar"

function Notifications() {
  // Contoh data notifikasi
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Pemesanan Bahan",
      description: "Bahan baku telah dipesan dan akan tiba besok.",
      read: false,
    },
    {
      id: 2,
      title: "Laporan Keuangan",
      description: "Laporan keuangan bulan lalu telah siap untuk ditinjau.",
      read: false,
    },
    {
      id: 3,
      title: "Pembaruan Sistem",
      description: "Sistem akan diperbarui pada malam hari.",
      read: true,
    },
    {
      id: 4,
      title: "Jadwal Rapat",
      description: "Rapat dengan supplier akan diadakan pada hari Jumat.",
      read: false,
    },
    // Tambahkan data notifikasi lainnya sesuai kebutuhan
  ])

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Notifikasi Admin</h2>
          </header>
          <main>
            <h3 className="text-2xl font-semibold mt-6">Daftar Notifikasi</h3>
            <table className="min-w-full mt-4 bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Judul</th>
                  <th className="border px-4 py-2">Deskripsi</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification) => (
                  <tr key={notification.id}>
                    <td className="border px-4 py-2">{notification.id}</td>
                    <td className="border px-4 py-2">{notification.title}</td>
                    <td className="border px-4 py-2">
                      {notification.description}
                    </td>
                    <td className="border px-4 py-2">
                      {notification.read ? "Dibaca" : "Belum Dibaca"}
                    </td>
                    <td className="border px-4 py-2">
                      {!notification.read && (
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Tandai Dibaca
                        </button>
                      )}
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

export default Notifications
