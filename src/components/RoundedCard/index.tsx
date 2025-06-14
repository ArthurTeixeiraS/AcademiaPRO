import { CardContainer } from "./styles";

type CardProps = {
  width?: string; 
  height?: string;
  backgroundColor?: string;
  color?: string;
  isLarge?: boolean;
  children: React.ReactNode;
};

// Esse componente é customizavel, da pra passar os parametros e customizar ele como prefirir
export function RoundedCard({ 
    width = "40rem", 
    height = "40%", 
    backgroundColor = '#fffffff', 
    color = '#000000', 
    isLarge = false,
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
    </CardContainer>
  );
}