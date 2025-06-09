import styled from 'styled-components';

//Revisar isso aqui (onde é usado e pra que);
export const DivBox = styled.div`  
  max-width: 100%; 
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  min-width: 120px;
  
`
export const BoxUser = styled(DivBox)`
  width: 500px;
  max-width: 100%;
`

export const ClassBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`
export const GroupBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`


