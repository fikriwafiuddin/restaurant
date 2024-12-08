import { useLocation } from "react-router-dom"
import { Icon } from "./Icons"

function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  const navigation = [
    {
      name: "Home",
      url: "/",
      iconSolid: <Icon name={"homeSolid"} />,
      iconOutline: <Icon name={"homeOutline"} />,
    },
    {
      name: "Orders",
      url: "/orders",
      iconSolid: <Icon name={"orderSolid"} />,
      iconOutline: <Icon name={"orderOutline"} />,
    },
    {
      name: "My List",
      url: "/MyList",
      iconSolid: <Icon name={"myListSolid"} />,
      iconOutline: <Icon name={"myListOutline"} />,
    },
    {
      name: "Profile",
      url: "/profile",
      iconSolid: <Icon name={"profileSolid"} />,
      iconOutline: <Icon name={"profileOutline"} />,
    },
  ]

  const RenderedNavigation = () => {
    return navigation.map((value) => (
      <li key={value.name}>
        <a
          href={value.url}
          className={`${
            currentPath == value.url && "text-orange-600"
          } grid place-items-center`}
        >
          {currentPath == value.url ? value.iconSolid : value.iconOutline}
          <span>{value.name}</span>
        </a>
      </li>
    ))
  }
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 px-6 py-4 bg-white">
      <ul className="flex justify-between">
        <RenderedNavigation />
      </ul>
    </nav>
  )
}

export default Navbar
