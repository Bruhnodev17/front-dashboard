import { InputMask } from "@react-input/mask";
import { ButtonIcon } from "../../components/button-icon";
import { Input } from "../../components/input";
import { Title } from "../../components/title";
import { Header, Main, Section, Filters, InputGroup, Balance, ChartContainer, ChartContent, ChartAction, Aside, SearchTransaction, } from "./styles";
import { Card } from "../../components/card";
import { Transaction } from "../../components/transaction";
import { TransactionGroup } from "../../components/transaction/styles";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { CreateTransactionDialog } from "../../components/create-transaction-dialog ";
import { CategoriesPieChart } from "../../components/categories-pie-chart";
import { FinancialEvolutionbarChart } from "../../components/financial-evolution-bar-chart";

export function Home() {
    return (
        <>
            <Header>
                <h1> {"<Da$hBoard/>"}</h1>
                <div>
                <CreateTransactionDialog />
                    <CreateCategoryDialog />
                </div>
            </Header>
            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo"
                            subtitle="Receitas e despesas no período" />
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                            />

                            <ButtonIcon />
                        </InputGroup>
                    </Filters>

                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Saldo" amount={1000000} variant="incomes" />
                        <Card title="Saldo" amount={1000000} variant="expenses" />
                    </Balance>

                    <ChartContainer>
                        <header>
                            <Title title="Gastos" subtitle="Despesas por categoria no período"
                            />
                        </header>

                        <ChartContent>
                            <CategoriesPieChart/>
                        </ChartContent>
                    </ChartContainer>

                    <ChartContainer>
                        <header>
                            <Title title="Evolução Financeira" subtitle="Saldo, Receitas e Gastos no ano"
                            />

                            <ChartAction>
                                <InputMask
                                    component={Input}
                                    mask="dd/mm/yyyy"
                                    replacement={{ y: /\d/ }}
                                    variant="black"
                                    label="Ano"
                                    placeholder="aaaa"
                                />
                                <ButtonIcon />

                            </ChartAction>
                        </header>

                        <ChartContent>
                        <FinancialEvolutionbarChart />
                        </ChartContent>
                    </ChartContainer>


                </Section>

                <Aside>
                    <header>
                        <Title title="Transações" subtitle="Receitas e Gastos no período"></Title>
                        <SearchTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar transação..."
                            />
                            <ButtonIcon />
                        </SearchTransaction>
                    </header>
                    <TransactionGroup>

                        <Transaction id={1} amount={20000} date="09/09/2024"
                            category={{ title: "Alimentação", color: "#ff33bb" }}
                            title="Mercado" />
                        <Transaction id={1} amount={20000} date="09/09/2024"
                            category={{ title: "Alimentação", color: "#ff33bb" }}
                            title="Mercado" />
                        <Transaction id={1} amount={20000} date="09/09/2024"
                            category={{ title: "Alimentação", color: "#ff33bb" }}
                            title="Mercado" />

                    </TransactionGroup>
                </Aside>
            </Main>
        </>
    )
}