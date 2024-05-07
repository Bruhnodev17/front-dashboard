import { Container } from "./styles";

type Titleprops = {
    title: string;
    subtitle: string;
}

export function Title({title, subtitle}: Titleprops){
    return(
        <Container>
            <h2>{title}</h2>
            <span>{subtitle}</span>
        </Container>
    )
}