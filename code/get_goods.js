import axios from 'axios'

const goods = "https://\
cabinet-api.rozetka.com.ua\
/v1/goods/get-goods-details";

const products_ids = [
    '252878871',
    '252880881'
];

const params = new URLSearchParams()
params.append(
        'front-type',
        'xl'
     );
params.append(
        'product_ids', 
        products_ids.join(',')
    );
params.append(
        'lang',
        'ru'
    );

const url = `${goods}?${params.toString()}`;

axios.get(url)
    .then(data => {
        console.info(data.data)
    })
    .catch(error => console.error(error))
    