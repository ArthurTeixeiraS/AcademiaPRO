import { CardContainer } from "./styles";

type CardProps = {
  width?: string; 
  height?: string;
  children: React.ReactNode;
};

export function RoundedCard({ width = "40rem", height = "40%", children }: CardProps) {
  return (
    <CardContainer $width={width} $height={height}>
      {children}
    </CardContainer>
  );
}