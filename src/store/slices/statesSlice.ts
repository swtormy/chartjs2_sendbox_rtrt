import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

type States = {
    data: KPI[]
}
type KPI = {
    kpi: string,
    datasets: Dataset[]
}
type Dataset = {
    name: string,
    color: string,
    type: string,
    dataset: number[]
}

const initialState: States = {
    data: [
        {
            kpi: 'Revenue',
            datasets: [
                {
                    name: 'Actual',
                    color: 'black',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 11405, max: 12412 })),
                },
                {
                    name: 'Budget',
                    color: 'gray',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 11405, max: 12412 })),
                },
                {
                    name: 'Forecast',
                    color: '#F7CE46',
                    type: "bar",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 11405, max: 12412 })),
                }
            ]
        },
        {
            kpi: 'Base',
            datasets: [
                {
                    name: 'Actual',
                    color: 'black',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 21433243, max: 22033243 })),
                },
                {
                    name: 'Budget',
                    color: 'gray',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 21433243, max: 22033243 })),
                },
                {
                    name: 'Forecast',
                    color: '#F7CE46',
                    type: "bar",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 21433243, max: 22033243 }))
                }
            ]
        },
        {
            kpi: 'Costs',
            datasets: [
                {
                    name: 'Actual',
                    color: 'black',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 12313130, max: 14313130 })),
                },
                {
                    name: 'Budget',
                    color: 'gray',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 12313130, max: 14313130 })),
                },
                {
                    name: 'Forecast',
                    color: '#F7CE46',
                    type: "bar",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 12313130, max: 14313130 })),
                }
            ]
        },
        {
            kpi: 'EBITDA',
            datasets: [
                {
                    name: 'Actual',
                    color: 'black',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 2313130, max: 4313130 })),
                },
                {
                    name: 'Budget',
                    color: 'gray',
                    type: "line",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 2313130, max: 4313130 })),
                },
                {
                    name: 'Forecast',
                    color: '#F7CE46',
                    type: "bar",
                    dataset: [1,2,3,4,5,6,7,8,9,10,11,12].map(() => faker.datatype.number({ min: 2313130, max: 4313130 })),
                }
            ]
        },
    ]
}

export const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {}
})

export const { } = statesSlice.actions
export default statesSlice.reducer