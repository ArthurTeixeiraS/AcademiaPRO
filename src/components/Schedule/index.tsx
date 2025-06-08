import { useNavigate } from "react-router-dom";
import { DivBox, DivHeader } from './styles';
import { ButtonLabel } from '../styles';
import {useState} from 'react';

export function MainSchedule() {
    const navigate = useNavigate()

    const newSchedule = () => {
        navigate('/newSchedule')
    }
    return(
        <>
        <DivHeader>
            <h1>{'Agenda'}</h1>
        </DivHeader>
        <DivBox onSubmit={newSchedule} >
            <h1>
                Criar novo agendamento
            </h1>
            <ButtonLabel type='submit'> Vamos lá! </ButtonLabel>
        </DivBox>
        </>

    )
}