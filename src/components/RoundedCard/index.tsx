import { CardContainer } from "./styles";

type CardProps = {
  width?: string; 
  height?: string;
  children: React.ReactNode;
};

export function RoundedCard({ width = "100px", height = "auto", children }: CardProps) {
  return (
    <CardContainer $width={width} $height={height}>
      {children}
    </CardContainer>
  );
}