export type MealTypeProps = {
    hour: string;
    meal: string;
    style: 'SUCCESS' | 'DANGER'
}

export type MealListTypeProps = Array<{
    title: string,
    data: MealTypeProps[]
}>;

export const data : MealListTypeProps = [
    {
        title: '12.08.22',
        data: [
            {
                hour: '20:00',
                meal: 'X-tudo', 
                style: 'DANGER'
            },
            {
                hour: '16:00',
                meal: 'Whey protein com leite',
                style: 'SUCCESS' 
            },
            {
                hour: '12:30',
                meal: 'Salada cesar com frango',
                style: 'SUCCESS' 
            },
        ],
    },
    {
        title: '11.08.22',
        data: [
            {
                hour: '20:00',
                meal: 'X-tudo', 
                style: 'DANGER'
            },
            {
                hour: '16:00',
                meal: 'Whey protein com leite',
                style: 'SUCCESS' 
            },
            {
                hour: '12:30',
                meal: 'Salada cesar com frango',
                style: 'SUCCESS' 
            },
        ],
    },
] 