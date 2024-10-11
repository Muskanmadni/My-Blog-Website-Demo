import Link from "next/link"
import { Container } from "./containers"
export function Header(){
    return(
      <div>
        <div className="header">
            <ul className="header-buttons">
              <header className="heading">The Curiosity Corner</header>
              <Link href={"/"}>
              <li>Home</li>
              </Link>

              <Link href={"/About-us"}>
              <li>About-us</li>
              </Link>

              <Link href={"/Contact-us"}>
              <li>Contact-us</li>
              </Link>
            </ul>
          </div>
        </div>

    )
 }
export function MainHeading(){
  return(
    <div>
      <div className="Main-heading">Top Trends</div>
    </div>
  )
} 

export function Home(){
  return(
    <div>
      <Container/>
    </div>
  )
}


