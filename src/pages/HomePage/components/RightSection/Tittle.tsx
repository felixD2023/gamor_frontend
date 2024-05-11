import { NumberStyed, TittleStyled } from "./StyledComponents";

interface TittleProps{
	number:string,
	text:string,
}

const Tittle = ( props:TittleProps) => {
  return (
    <div style={{ display: "flex", alignItems: "end", height: "20px" }}>
      <NumberStyed>{props.number}.</NumberStyed>
      <TittleStyled>
        <strong>{props.text}</strong>
      </TittleStyled>
    </div>
  );
};

export default Tittle;
