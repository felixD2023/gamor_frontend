import { TittleStyled } from "./StyledComponents"


interface GameProps{
    name:string
}

const Game = (props:GameProps) => {
  return (
    <div style={{margin:"15px 0px 20px 15px"}}>
        <TittleStyled style={{cursor:"pointer"}}><strong>{props.name}</strong></TittleStyled>
    </div>
  )
}

export default Game
