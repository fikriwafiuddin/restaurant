import { useState } from "react"
import { createContext } from "react"

const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("drink")
  const listMenu = {
    drink: [
      {
        id: "101",
        image:
          "./images/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash.jpg",
        name: "Teh",
        price: 50000,
      },
      {
        id: "102",
        image: "./images/paulo-felipe-assis-NCbfPjjFJtA-unsplash.jpg",
        name: "Kopi",
        price: 60000,
      },
      {
        id: "103",
        image: "./images/Banana Avocado Smoothie Recipe _ Foodal.jpeg",
        name: "Jus Alpukat",
        price: 75000,
      },
      {
        id: "104",
        image:
          "./images/Watermelon Slushie Recipe (Only 4 Ingredients!) - From My Bowl.jpeg",
        name: "Jus Semangka",
        price: 74000,
      },
      {
        id: "105",
        image:
          "./images/11 Jugos y licuados que te quitan la ansiedad y te ayudan a bajar de peso.jpeg",
        name: "Es Jeruk",
        price: "55000",
      },
    ],
    food: [
      {
        id: "201",
        image: "./images/chad-montano-MqT0asuoIcU-unsplash.jpg",
        name: "Pizza",
        price: 100000,
      },
    ],
  }

  const changeMenu = (type) => setMenu(type)

  return (
    <MenuContext.Provider
      value={{ listMenu: listMenu[menu], menu, changeMenu }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider }
