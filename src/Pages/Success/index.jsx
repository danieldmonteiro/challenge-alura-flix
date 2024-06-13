import styled from "styled-components";

const ContainerStyle = styled.div`
  height: 71vh;
  background-color: #191919;
  display: flex;
  h1 {
    margin: 0;
    color: white;
    width: 100%;
    text-align: center;
    align-self: center;
  }
`;

export const Success = () => {
  return (
    <ContainerStyle>
      <h1>Formulário enviado com sucesso!</h1>
    </ContainerStyle>
  );
};
