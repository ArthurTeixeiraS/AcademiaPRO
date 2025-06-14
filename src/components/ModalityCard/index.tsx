import { useNavigate } from "react-router-dom"
import { getModalitiesFromLocalStoragem, removeModalityFromLocalStorage } from "../utils/LocalStorage/ModalityUtils"
import { RoundedCard } from "../RoundedCard";
import { CardInfo } from "../utils/CardStyles";
import { ButtonLabel, ButtonRow } from "../utils/styleButton";

export function ModalityCard() {
    const modalities = getModalitiesFromLocalStoragem()
    const navigate = useNavigate();

    const formatPubico = (publico : string): string => {
        switch (publico.toLowerCase()){
            case 'infantil':
                return 'Infântil';
            case 'adulto':
                return 'Jovem-Adulto';
            case 'idoso':
                return 'Idoso';
            default:
                return publico;
        }
    }

    const handleDelete = (id: string) => {
        if(window.confirm('Tem certeza que deseja excluir esta Modalidade?')){
            const success = removeModalityFromLocalStorage(id);
            if(success){
                window.location.reload()
            } else {
                alert('Erro ao remover modalidade.')
            }
        }
    }

    return (
        <>
            {modalities.map((modality) => (
                <RoundedCard width="30rem" height="22rem" key={modality.id}>
                    <div>
                        <h2>{modality.nome}</h2>
                    </div>
                    <CardInfo>
                        <span>🧾</span>
                        {/* A principio isso aqui vai dar um error cabuloso no Console, mas convenientemente, funciona */}
                        <p
                            className="card-text"
                            title={modality.descricao}
                        >
                            {modality.descricao.length > 50 
                            ? `${modality.descricao.substring(0, 50)}...` 
                            : modality.descricao
                            }
                        </p>
                    </CardInfo>
                    <CardInfo>
                        <span>👤</span>
                        {modality.capacidade} pessoa(as)
                    </CardInfo>
                    <CardInfo>
                        <span>🎯</span>
                        <strong>{formatPubico(modality.publicoAlvo)}</strong>
                    </CardInfo>

                    <ButtonRow>
                        <ButtonLabel onClick={() => navigate(`/EditModality/${modality.id}`)}>
                            Editar
                        </ButtonLabel>
                        <ButtonLabel 
                            $variant="danger"
                            onClick={() => {handleDelete(modality.id)}}>
                            Excluir
                        </ButtonLabel>
                    </ButtonRow>
                </RoundedCard>
            ))}
        </>
    )   
}