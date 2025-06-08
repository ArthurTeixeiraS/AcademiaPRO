import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import { User } from "../../components/User";


export function MainUsers() {
    const navigate = useNavigate()

    const newUser = () => {
        navigate('/NewUser')
    }
    return(
        <>
        <TopBar placeholder="Pesquisar por alunos"></TopBar>
        <User></User>
        </>)
        }