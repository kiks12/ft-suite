
import { UserContext } from "@/hooks/UserContext"
import { useContext } from "react"

import Container80 from "../general/container-80"
import AvatarMenuButton from "./avatarMenuButton"

export default function Header() {

  const { user } = useContext(UserContext);

  return (
    <header className="h-18 border border-t-0 border-r-0 border-l-0 flex items-center p-5">
      <Container80>
        <div className="w-full flex justify-between items-center">

          <div>
            <span>
              <i>Logo</i>
            </span>
          </div>

          <AvatarMenuButton />
        </div>
      </Container80>
    </header>
  )
}