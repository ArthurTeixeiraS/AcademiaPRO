import { HeaderContainer } from "./styles"
import { Link } from "react-router-dom"
import academiaProLogo from '../../assets/react.svg'

export function Header() {

    return(
        <>
          <HeaderContainer>
            <div className="logo">
                <h1>
                    <Link to={'/'} className="logoName">
                        <img src={academiaProLogo} width={70} height={70} />
                        Academia<span>Pro</span>
                    </Link>
                </h1>
            </div>              
          </HeaderContainer>  
        </>
    )
}