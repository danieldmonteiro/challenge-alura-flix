import styled from "styled-components";
import { ImageCard } from "./VideoCard";
import { SliderComponent } from "./SliderComponent";

import { listDataCarrusel } from "../../Api/Apicito";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { DataCarruselContext } from "../../Context";


const EspecialidadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  //flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    p {
      margin: 0;
    }
  }
  h1 {
    width: 24rem;
    //margin: 0;
    margin-bottom: 1rem;
    margin-top: 3rem;
    text-align: center;
    //    background: #6bd1ff;
    border: none;
    border-radius: 13px;
    padding: 12px 22px;
    font-size: 25px;
    @media (max-width: 390px) {
      font-size: 20px;
      width: 50%;
    }
  }
`;

const LinkContainer = styled(Link)`
  width: 424px !important;
  height: 247px !important;
`;

export const Carrusel = (props) => {
  
  const dataCarrusel = useContext(DataCarruselContext);
  const categoryData = dataCarrusel[props.data] || {};

  return (
    <>
      <EspecialidadContainer>
        <h1 style={{ backgroundColor: `${categoryData.color}` }}>
          {categoryData.formacion}
        </h1>
        
      </EspecialidadContainer>
      <SliderComponent>
        {categoryData.videos
          ? categoryData.videos.map((video) => (
              <LinkContainer key={video.id}>
                <ImageCard
                  key={video.id}
                  colorV={`2px solid ${categoryData.color}`}
                  urlV={video.urlImagen}
                />
              </LinkContainer>
            ))
          : null}
      </SliderComponent>
    </>
  );
};
