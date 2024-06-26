import {styled} from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
       
        > div {
        display: grid;
        grid-template-columns: 80% auto;
        grid-gap: 0.5rem;
    }
    }  

    footer{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.75rem;
    }

`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > label{
        color: ${theme.colors.white};
        font-size: 0.625rem;
    }

    select{
        height: 2.25rem;
        border-radius: 0.25rem;
        padding: 0 0.75rem;
        background-color: ${theme.colors.black};
        color: ${theme.colors.neutral};
        border: 1px solid transparent;
        transform: all 100ms;

        &:focus{
            border-color: ${theme.colors.primary};
        }
    }
`

