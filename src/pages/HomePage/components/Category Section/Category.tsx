import {
  CategoryContainerStyled,
  CategoryName,
  ColoredBackground,
  Decorator,
  ImageBackground,
  ReferenceNumber,
  ReferenceText,
} from "./StyledComponents";

//icons
import "primeicons/primeicons.css";

//colors
import { colorList } from "../../../../themes/Theme";

//redux
import { setCategoryActive } from "../../../../Redux/categoriesSlice";
import { useDispatch } from "react-redux";

interface CategoryProps {
  name: string;
  image: string;
  number: number;
  isActive: boolean;
}

const Category = (props: CategoryProps) => {
    const dispatch = useDispatch();



  return (
    <CategoryContainerStyled onClick={()=>dispatch(setCategoryActive(props.name))}>
        <ImageBackground image={props.image} active={props.isActive}><ColoredBackground/></ImageBackground>
      <div
        style={{
          width: "80%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex:2,
        }}
      >
        {props.number === 8 ? (
          <ReferenceText>VIEW ALL</ReferenceText>
        ) : (
          <ReferenceNumber>0{props.number} <Decorator color={colorList[props.number-1]}>/</Decorator></ReferenceNumber>
        )}

        <CategoryName>{props.name}</CategoryName>
        <div
          className="pi pi-arrow-right"
          style={{ fontSize: "10px", width: "10px", height: "10px" }}
        />
      </div>
    </CategoryContainerStyled>
  );
};

export default Category;
