import aluraflix from "../../assets/aluraflix.svg";
import styled from "styled-components";
import { Boton } from "../Boton";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const StyleNav = styled.nav`
  background-color: #000;
  border-bottom: 3px solid #257be5;
  display: flex;
  padding: 15px 32px; //(arriba y abajo)px (derecha y izquierda)px
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const ContainerImg = styled.div``;
export const Nav = () => {
  const location = useLocation();
  // const mudarCorBotaoNewVideo =
  //   location.pathname === "/newvideo" || location.pathname === "/newcategory";
  return (
    <>
      <StyleNav>
        <Link to={"/"}>
          <ContainerImg>
            <img src={aluraflix} alt="Logo" />
          </ContainerImg>
        </Link>
        {/* {mudarCorBotaoNewVideo === true ? (
          <></>
        ) : ( */}
        <span id="botoes">
          <Link to={"/"}>
            <Boton
              type={"link"}
              text={"HOME"}
              size={"large"}
              estilo={"custom-button"}
            ></Boton>
          </Link>
          <Link to={"/newvideo"}>
            <Boton
              type={"link"}
              text={"NOVO VÍDEO"}
              size={"large"}
              estilo={"custom-button"}
            ></Boton>
          </Link>
        </span>
        {/* )} */}
      </StyleNav>
    </>
  );
};

