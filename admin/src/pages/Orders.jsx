import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Table from "../components/Table"

function Orders() {
  const orders = [
    {
      id: 1,
      cashier: "John Doe",
      totalAmount: "$25",
      time: "2023-10-01",
    },
    {
      id: 2,
      cashier: "Jane Smith",
      totalAmount: "$30",
      time: "2023-10-02",
    },
    {
      id: 3,
      cashier: "Alice Johnson",
      totalAmount: "$15",
      time: "2023-10-03",
    },
    {
      id: 4,
      cashier: "Bob Brown",
      totalAmount: "$40",
      time: "2023-10-04",
    },
    {
      id: 5,
      cashier: "Charlie Davis",
      totalAmount: "$20",
      time: "2023-10-05",
    },
    {
      id: 6,
      cashier: "Diana Prince",
      totalAmount: "$35",
      time: "2023-10-06",
    },
    {
      id: 7,
      cashier: "Ethan Hunt",
      totalAmount: "$50",
      time: "2023-10-07",
    },
    {
      id: 8,
      cashier: "Fiona Gallagher",
      totalAmount: "$22",
      time: "2023-10-08",
    },
    {
      id: 9,
      cashier: "George Clooney",
      totalAmount: "$18",
      time: "2023-10-09",
    },
    {
      id: 10,
      cashier: "Hannah Montana",
      totalAmount: "$27",
      time: "2023-10-10",
    },
  ]

  const config = [
    {
      label: "Order ID",
      render: (data) => data.id,
    },
    {
      label: "Cashier",
      render: (data) => data.cashier,
    },
    {
      label: "Total Amount",
      render: (data) => data.totalAmount,
    },
    {
      label: "Time",
      render: (data) => data.time,
    },
  ]

  return (
    <div className="bg-gray-100">
      <div className="flex h-screen box-border">
        <Sidebar />

        <div className="flex-1 p-6 overflow-y-auto">
          <Header title="Orderan" />

          <main className="mt-6">
            <Table config={config} data={orders} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Orders
