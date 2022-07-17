const localData = [
    {
        id: 1,
        name: 'painted mascot rain coat golden yellow',
        price: 220,
        img: 'https://cdn.shopify.com/s/files/1/0133/1907/7947/products/raincoatfront_750x.jpg?v=1651866561',
        description:
            '- polyurethane coat, drawstring at hood, two-way zip closure, logo graphic printed at front, flap pockets, elasticized cuffs, raised logo appliqué at storm flap',
        stock: 14,
        created_at: '2022-01-06T17:00:00Z',
        brand: 1,
    },
    {
        id: 2,
        name: 'bizzy ss tee roses',
        price: 445,
        img: 'https://cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY6465_750x.jpg?v=1648163202',
        description:
        '- polyurethane coat, drawstring at hood, two-way zip closure, logo graphic printed at front, flap pockets, elasticized cuffs, raised logo appliqué at storm flap',
        stock: 17,
        created_at: '2022-01-06T17:00:00Z',
        brand: 1,
    },
    {
        id: 3,
        name: 'corduroy ss shirt lime',
        price: 231,
        img: 'https://cdn.shopify.com/s/files/1/0133/1907/7947/products/FEb18Flat-04_750x.jpg?v=1644530795',
        description:
        '- polyurethane coat, drawstring at hood, two-way zip closure, logo graphic printed at front, flap pockets, elasticized cuffs, raised logo appliqué at storm flap',
        stock: 19,
        created_at: '2022-01-06T17:00:00Z',
        brand: 3,
    },
    {
        id: 4,
        name: 'mascot ss tee navy pinstripe',
        price: 342,
        img: 'https://cdn.shopify.com/s/files/1/0133/1907/7947/products/mayflat-05_750x.jpg?v=1651516861',
        description:
        '- polyurethane coat, drawstring at hood, two-way zip closure, logo graphic printed at front, flap pockets, elasticized cuffs, raised logo appliqué at storm flap',
        stock: 4,
        created_at: '2022-01-06T17:00:00Z',
        brand: 4,
    },
];

const setData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
};

const getData = () => {
    let data;
    if (localStorage.getItem('data')) {
        data = JSON.parse(localStorage.getItem('data'));
    } else {
        data = [...localData];
        setData(data);
    }
    return data;
};

const render = (element, html) => {
    element.innerHTML = html;
};

const getQueryParams = (query) => {
    let match;
    const pl = /\+/g;
    const search = /([^&=]+)=?([^&]*)/g;
    (decode = function (s) {
        return decodeURIComponent(s.replace(pl, ' '));
    }),
        (query = window.location.search.substring(1));

    urlParams = {};
    while ((match = search.exec(query))) {
        urlParams[decode(match[1])] = decode(match[2]);
    }

    return urlParams;
};