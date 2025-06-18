import { CardContainer, GoToPageButton, HoverContent } from "./styles";
import { Link } from "react-router-dom";

type CardProps = {
  width?: string; 
  height?: string;
  backgroundColor?: string;
  color?: string;
  isLarge?: boolean;
  children: React.ReactNode;
  linkTo?: string;
};

// Esse componente é customizavel, da pra passar os parametros e customizar ele como prefirir
export function RoundedCard({ 
    width = "40rem", 
    height = "40%", 
    backgroundColor = '#fffffff', 
    color = '#000000', 
    isLarge = false,
    linkTo,
    children }: CardProps
  ) {
  return (
    <CardContainer 
        $width={width} 
        $height={height} 
        $backgroundColor={backgroundColor} 
        $color={color}
        $isLarge={isLarge}
    >
      {children}
       {linkTo && (
        <HoverContent>
          <Link to={linkTo}>
            <GoToPageButton>Ir para página</GoToPageButton>
          </Link>
        </HoverContent>
      )}
    </CardContainer>
  );
}