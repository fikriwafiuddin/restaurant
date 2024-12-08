const openModal = document.getElementById("open")
const modalPembayaran = document.getElementById("modal-pembayaran")
const formPembayaran = document.getElementById("form-pembayaran")
const modalKembalian = document.getElementById("modal-kembalian")
const kembalian = document.getElementById("kembalian")
const tutupKembalian = document.getElementById("tutup-kembalian")

openModal.addEventListener("click", () => {
  modalPembayaran.classList.remove("hidden")
})

formPembayaran.addEventListener("submit", (e) => {
  e.preventDefault()
  const jumlahBayar = document.getElementById("jumlah-bayar").value
  const metodePembayaran = document.getElementById("metode-pembayaran").value
  const totalPembayaran = document
    .querySelector(".font-bold")
    .textContent.replace("Rp ", "")

  if (jumlahBayar >= 50000) {
    if (metodePembayaran === "tunai") {
      const kembalianValue = parseInt(jumlahBayar) - 50000
      kembalian.textContent = `Kembalian: Rp ${kembalianValue}`
      modalPembayaran.classList.add("hidden")
      modalKembalian.classList.remove("hidden")
    } else {
      alert(
        `Pembayaran berhasil dengan metode ${metodePembayaran} sebesar Rp ${jumlahBayar}`
      )
      modalPembayaran.classList.add("hidden")
    }
  } else {
    alert("Jumlah bayar tidak cukup")
  }
})

tutupKembalian.addEventListener("click", () => {
  modalKembalian.classList.add("hidden")
})
