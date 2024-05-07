import { ComponentProps, forwardRef } from "react";
import { Container } from "./styles";

type Inputprops = ComponentProps<'input'> & {
    label?: string;
    variant?: 'black' | 'dark';
};


export const Input = forwardRef<HTMLInputElement, Inputprops>(function ({label, variant = 'black', ...props}, ref ) {
    return (
      <Container $variant={variant}>
       {label && <label>{label}</label>}
       <input ref={ref} {...props}/>
      </Container>
    );
   })