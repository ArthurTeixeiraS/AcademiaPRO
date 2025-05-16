import { HeaderContainer } from "./styles"
import { Link } from "react-router-dom"
import academiaProLogo from '../../assets/imgAcademiaPRO.png'

export function Header() {

    return(
        <>
          <HeaderContainer>
            <div className="logo">
                <h1>
                    <Link to={'/'} className="logoName">
                        <img src={academiaProLogo} width={100} height={100} />
                    </Link>
                </h1>
            </div>              
          </HeaderContainer>  
        </>
    )
}