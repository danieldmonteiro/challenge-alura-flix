import React from "react";
import styled from "styled-components";
import { Formulario } from "./Formulario";

const ContainerVideo = styled.div`
  background-color: #191919;
  h1 {
    padding: 3.75rem 0 0.625rem 0;
    color: #fff;
    text-align: center;
    margin: 0;
    
  }
  h3 {
    padding: 1.5625rem 0 3.75rem 0;
    color: #fff;
    text-align: center;
    margin: 0;
  }
`;

export const NewVideo = () => {
  return (
    <ContainerVideo>
      <h1>NOVO VÍDEO</h1>
      <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</h3>
      <Formulario></Formulario>
    </ContainerVideo>
  );
};
