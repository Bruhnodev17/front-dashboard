import { useCallback, useEffect, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Container, Content, CurrencyInput, ErrorMessage, RadioForm, RadioGroup } from "./styles";
import { Input } from "../input";
import { InputGroup } from "../create-category-dialog/styles";
import { InputMask } from "@react-input/mask";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { useForm } from "react-hook-form";
import { CreateTransactionData } from "../../validators/types";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTransactionSchema } from "../../validators/schemas";

export function CreateTransactionDialog() {
    const { categories, fetchCategories } = useFetchAPI()
    const [open, setOpen] = useState(false)

    const { register, reset, formState: { errors }, handleSubmit } = useForm<CreateTransactionData>({
        defaultValues: {
            categoryId: "null",
            title: "",
            amount: "",
            date: dayjs().format("DD/MM/YYYY"),
            type: "income"
        },
        resolver: zodResolver(createTransactionSchema),
    })

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const handleClose = useCallback(() => {
        reset()
        setOpen(false);
    }, [reset])

    const onSubmit = useCallback(() => {
        handleClose();
    }, [handleClose])

    return (

        <Dialog open={open} onOpenChange={setOpen} trigger={<Button >Nova transação</Button>}>

            <Container>
                <Title title="Nova transação" subtitle="Crie uma nova transação para seu controle financeiro" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Content>
                        <InputGroup>
                            <label>Categoria</label>
                            <select {...register("categoryId")}>
                                <option value="null">Selecione uma categoria...</option>
                                {categories?.length &&
                                    categories.map((item) => (
                                        <option key={item._id} value={item._id}>{item.title}</option>
                                    ))}
                            </select>
                            {errors.categoryId && (
                                <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
                            )}
                        </InputGroup>
                        <Input label="Nome" placeholder="Nome da transação..." {...register("title")}
                            error={errors.title?.message} />
                        <InputGroup>
                            <label>Valor</label>
                            <CurrencyInput label="Valor" placeholder="R$ 0,00" format="currency" currency="BRL"
                                {...register("amount")} />

                            {errors.categoryId && (
                                <ErrorMessage>{errors.amount?.message}</ErrorMessage>
                            )}
                        </InputGroup>
                    </Content>

                    <InputMask
                        component={Input}
                        mask="dd/mm/yyyy"
                        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                        variant="black"
                        label="Data"
                        placeholder="dd/mm/aaaa"
                        error={errors.date?.message}
                        {...register("date")}
                    />

                    <RadioForm>
                        <RadioGroup>
                            <input type="radio" id="income" value="income" {...register("type")} />
                            <label htmlFor="income">Receitas</label>
                        </RadioGroup>
                        <RadioGroup>
                            <input type="radio" id="expense" value="expense" {...register("type")} />
                            <label htmlFor="expense">Gastos</label>
                        </RadioGroup>
                        {errors.type && (<ErrorMessage>{errors.type.message}</ErrorMessage>)}
                    </RadioForm>

                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button type="submit">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}