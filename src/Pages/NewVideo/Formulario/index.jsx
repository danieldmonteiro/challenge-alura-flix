import styled from "styled-components";
import { Form, Select, message } from "antd";
import { Link } from "react-router-dom";
import { Campo, CampoSelect } from "../../../components/Campo";
import { Boton } from "../../../components/Boton";
import { AreaTexto } from "../../../components/AreaTexto";
import { createNuevoVideo, listDataCarrusel } from "../../../Api/Apicito";
import {
  CampoAreaTexto,
  CampoCategoria,
  //CampoSeguridad,
  CampoTitulo,
  CampoUrlImagen,
  CampoUrlVideo,
} from "../../../components/Validations";
//CSS
import "./Formulario.css";
import { useContext, useState } from "react";
import { DataCarruselContext } from "../../../Context";
//import { Option } from "antd/es/mentions";
const { Option } = Select;
const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 0px 25px 50px 25px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.75rem;
  margin-bottom: 2.6rem;
  @media (max-width: 430px) {
    /* Cuando la pantalla sea más pequeña que 430px */
    flex-direction: column; /* Cambia a diseño de columna */
  }
`;

const ContainerBtnLeft = styled.div`
  display: flex;
  gap: 1.875rem;
  
  @media (max-width: 430px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ContainerBtnRight = styled.div`
  @media (max-width: 430px) {
    display: none;
  }
`;

export const Formulario = () => {
  const [form] = Form.useForm();
  // const { dataCarrusel } = listDataCarrusel();
  const dataCarrusel = useContext(DataCarruselContext);
  // console.log(dataCarrusel[0].id);
  const dCat = Object.entries(dataCarrusel);
  // console.log(dCat);
  const HandleOnSubmit = async (values) => {
    let datosAEnviar = {
      titulo: values.titulo,
      urlVideos: values.linkVideo,
      urlImagen: values.linkImg,
      categoria: values.formacion, //1696394174106
      descripcion: values.descripcion,
      id: ("V"+Date.now()),
    };
    console.log(datosAEnviar);
    const category = dataCarrusel.find(
      (data) => data.id === datosAEnviar.categoria
    );
    console.log(category);
    if (category) {
      let isDuplicate = false;
      // Utiliza Array.some() para verificar se há algum duplicado, devolver true or false
      isDuplicate = category.videos.some((video) => {
        return (
          datosAEnviar.urlImagen === video.urlImagen.trim() ||
          datosAEnviar.urlVideos === video.urlVideos.trim() ||
          datosAEnviar.titulo === video.titulo.trim()
        );
      });
      console.log("É duplicado, ", isDuplicate);
      if (!isDuplicate) {
        category.videos.push(datosAEnviar);
        console.log(category.videos);

        const response = await createNuevoVideo(category);
        console.log(response); // Resposta do POST
        message.success("Vídeo enviado corretamente!");
      } else {
        message.error("Formulário com dados duplicados");
      }
    } else {
      
      message.error("Categoria não encontrada!");
    }
  };

  const HandleOnFinishFailed = () => {
    message.error("Formulário incorreto");
  };

  const HandleOnReset = () => {
    form.resetFields();
  };

  return (
    <FormContainer
      form={form}
      onFinish={HandleOnSubmit}
      onFinishFailed={HandleOnFinishFailed}
      autoComplete="off"
    >
      <InputContainer>
        <Campo
          name="titulo"
          rules={CampoTitulo}
          textPlaceholder={"Digite o título"}
          tamanio={"large"}
          clase={"custom-campo"}
          maxLength={50}
        ></Campo>
        <Campo
          name="linkVideo"
          rules={CampoUrlVideo}
          textPlaceholder={"Digite o link do vídeo"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <Campo
          name="linkImg"
          rules={CampoUrlImagen}
          textPlaceholder={"Digite o link da imagem do vídeo"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo>
        <CampoSelect
          placeholder={"Selecione uma categoria"}
          clase={"custom-campo-select"}
          rules={CampoCategoria}
          name={"formacion"}
          tamanio="large"
        >
          {dCat.map(([key, value]) => (
            // console.log(value.id, "valor", value.formacion),
            <Option key={value.id}>{value.formacion}</Option>
          ))}
        </CampoSelect>
        <AreaTexto
          name="descripcion"
          rules={CampoAreaTexto}
          textPlaceholder={"Sobre o que é esse vídeo?"}
          size={"large"}
          showCount={true}
          maxLength={100}
        ></AreaTexto>
        {/* <Campo
          name="seguridad"
          rules={CampoSeguridad}
          textPlaceholder={"Código de segurança"}
          tamanio={"large"}
          clase={"custom-campo"}
        ></Campo> */}
      </InputContainer>
      <ContainerBtn>
        <ContainerBtnLeft>
          <Boton 
            size={"large"}
            text={"GUARDAR"}
            type={"primary"}
            htmlTipo={"submit"}
          ></Boton>
          <Boton
            size={"large"}
            text={"LIMPAR"}
            type={"default"}
            htmlTipo={"button"}
            onClick={HandleOnReset}
          ></Boton>
        </ContainerBtnLeft>
        {/* <ContainerBtnRight>
          <Link to={"/newcategory"}>
            <Boton
              size={"large"}
              text={"Nova Categoria"}
              type={"primary"}
            ></Boton>
          </Link>
        </ContainerBtnRight> */}
      </ContainerBtn>
    </FormContainer>
  );
};
/*
  const dataCategories = Object.values(dataCarrusel);
 {dataCategories.map((options, index) => (
      <Option key={index} value={options.formacion}>
       {options.formacion}
      </Option>
  ))} 
*/
/*
//y como haria si quiero acceder a los objetos de los videos como urlImagen?
{dCat.map(([key, value]) => (
  <div key={key}>
    <h1>{value.formacion}</h1>
    {value.videos.map((video) => (
      <img src={video.urlImagen} alt="" />
    ))}
  </div>
))}

////////////////////////////////////
{dCat.map(([key, value]) => (
              console.log(key, "valor" , value),
            <Option key={key}>{value.videos.map((video) => (<p>{video.urlImagen}</p>))}</Option>
          ))}
*/

/*
<Campo
            name="categoria"
            rules={[
              { required: true, message: "Por favor ingresa una categoría" },
            ]}
            textPlaceholder={"Escoja una categoría"}
            tamanio={"large"}
            clase={"custom-campo"}
          ></Campo>
          */
