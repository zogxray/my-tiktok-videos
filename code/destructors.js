const list = [
    {id: 1, tags: ['regular']},
    {id: 2, tags: ['regular']},
    {id: 3, tags: ['regular', 'one another regular']}
]

const newList = [
    ...list.map((item, index) => ({
        ...item,
        tags: !index && [
            'for first first',
            ...item.tags
        ] || [
            ...item.tags,
            'for others last'
        ]
    })),
    {
        ...list[0], 
        id: 4
    },
    {
        ...list[0], 
        id: 5,
        tags: [...list.reduce((acc, val) => acc.concat([...val.tags]), [])]
    }
]

console.info(newList)
