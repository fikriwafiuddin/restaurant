import { useState } from "react"

function AddProduct() {
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      name: productName,
      description: description,
      price: price,
      image: image,
    }
    console.log("Produk baru ditambahkan:", newProduct)
    setProductName("")
    setDescription("")
    setPrice("")
    setImage(null)
  }

  return (
    <main className="bg-white p-5">
      <a href="/products" className="bg-gray-100 px-3 py-2 rounded">
        Kembali
      </a>
      <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md mt-4">
        <h1 className="text-2xl font-bold mb-4">Tambah Produk</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nama Produk:
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Deskripsi:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Harga:
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gambar Produk:
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Tambah Produk
          </button>
        </form>
      </div>
    </main>
  )
}

export default AddProduct
