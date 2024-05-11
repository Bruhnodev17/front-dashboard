import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/format-currency";

const apiData = [
    {
        _id: "1",
        title: "Alimentação",
        amount: 3000,
        color: "#ffbb33"
    },
    {
        _id: "2",
        title: "Compras",
        amount: 15000,
        color: "#00ff"
    },
    {
        _id: "3",
        title: "streaming",
        amount: 6000,
        color: "#ff33bb"
    },
]

export type CategoryProps ={
    id: string;
    title: string;
    color: string;
}

type ChartData = {
    id: string;
    label: string;
    externalId: string;
    value: number;
    color: string;
}

type CategoriesPieChartprops ={
    onClick: (category: CategoryProps) => void;
}

export function CategoriesPieChart({onClick}: CategoriesPieChartprops) {
    const data = useMemo<ChartData[]>(() => {
        const chartData = apiData.map((item) => ({
            id: item.title,
            label: item.title,
            externalId: item._id,
            value: item.amount,
            color: item.color,
        }))
        return chartData
    }, []);

    return (
        <ResponsivePie 
        onClick={({data}) => onClick({
            id: data.externalId,
            title: data.id,
            color: data.color
        })}
            data={data} enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={({ data }) => data.color}
            margin={{ top: 20 }}
            valueFormat={formatCurrency}
            theme={{
                text: {
                    fontFamily: "Lexend",
                    fontSize: 10,
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.white,
                        fontFamily: "Lexend",
                        fontSize: 12,
                        borderRadius: 4,
                    }
                }
            }}
            legends={[
                {
                    anchor: "top",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemWidth: 120,
                    itemHeight: 16,
                    itemTextColor: theme.colors.neutral,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 10,
                    symbolShape: "circle"
                }
            ]}
        />
    )
}