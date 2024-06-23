import React from "react";
import styled from "styled-components";
import deletar from "../../../assets/deletar.png";
import editar from "../../../assets/editar.png";
import "../VideoCard/btnCardVideo.css";

const ImagenAlura = styled.img`
  width: 424px;
  height: 247px;

  @media (max-width: 500px) {
    width: 84vw;
    height: 210px;
  }
`;

const BtnCardVideo = styled.div`
  width: 424px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  // @media (max-width: 500px) {
  //   width: 84vw;
  //   height: 210px;
  }
`;

// function deletarCard (id) {
//   setCard (ImageCard.filter(colaborador => colaborador.id !== id));
// };

function testeDeletar () {
  console.log ("teste deletar");
}

export const ImageCard = (props) => {
  return (
    <>
      <ImagenAlura
        src={props.urlV}
        alt="Imagem Alura"
        style={{ border: `${props.colorV}` }}
      ></ImagenAlura>
      <BtnCardVideo
        style={{ border: `${props.colorV}` }}
      >
        <span id="btnDeletar" onClick={() => {
                    deletarCard({ testeDeletar })
                }}>
        <img src={deletar} alt="deletar"/>
        <p>DELETAR</p>
        </span>
        <span id="btnEditar" onClick={() => {
                    editarCard({  })
                }}>
        <img src={editar} alt="editar"/>
        <p>EDITAR</p>
        </span>
      </BtnCardVideo>
    </>
  );
};