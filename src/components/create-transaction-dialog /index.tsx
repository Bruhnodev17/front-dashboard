import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Container, Content, CurrencyInput, RadioForm, RadioGroup } from "./styles";
import { Input } from "../input";
import { InputGroup } from "../create-category-dialog/styles";
import { InputMask } from "@react-input/mask";

export function CreateTransactionDialog() {
    const [open, setOpen] = useState(false)

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [])

    const onSubmit = useCallback(() => {
        handleClose();
    }, [])

    return (

        <Dialog open={open} onOpenChange={setOpen} trigger={<Button >Nova transação</Button>}>

            <Container>
                <Title title="Nova transação" subtitle="Crie uma nova transação para seu controle financeiro" />

                <form>
                <Content>
                    <InputGroup>
                        <label>Categoria</label>
                        <select>
                            <option value="null">Selecione uma categoria...</option>
                        </select>
                    </InputGroup>
                    <Input label="Nome" placeholder="Nome da transação..." />

                    <InputGroup>
                    <label>Valor</label>
                        <CurrencyInput label="Valor" placeholder="R$ 0,00" format="currency" currency="BRL" />
                    </InputGroup>
                </Content>

                    <InputMask
                        component={Input}
                        mask="dd/mm/yyyy"
                        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                        variant="black"
                        label="Data"
                        placeholder="dd/mm/aaaa"
                    />

                    <RadioForm>
                        <RadioGroup>
                            <input type="radio" id="income" value="income" name="type"/>
                            <label htmlFor="income">Receitas</label>
                        </RadioGroup>
                        <RadioGroup>
                            <input type="radio" id="expense" value="expense" name="type"/>
                            <label htmlFor="expense">Gastos</label>
                        </RadioGroup>
                    </RadioForm>

                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button onClick={onSubmit} type="button">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}