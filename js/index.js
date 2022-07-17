const root = document.querySelector('.main-content');
const search = document.querySelector('.search-input');
const data = getData();
let html;

const renderUI = (data) => {
    if (data.length > 0) {
        html =
            `
        <div class="tbl-header"> 
            <table class="main-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th colspan="2">Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table>
                <tbody>` +
            data
                .map(
                    (item) => `
                    <tr>
                        <th>${item.id}</th>
                        <th colspan="2">${item.name}</th>
                        <th>${item.price}$</th>
                        <th>
                            <img 
                                class="table-img" 
                                src="${item.img || './img/img-placeholder.png'}"
                                alt="product">
                        </th>
                        <th>
                        <a href="/form.html?id=${item.id
                        }" class="button-edit">Edit</a>
                            <a href="" class="button-delete">Delete</a>
                        </th>
                    </tr>`
                )
                .join('') +
            `
                </tbody>
            </table>
        </div>`;
    } else {
        html = '<p>Nothing Products</p>';
    }
    render(root, html);
    const btnsDelete = document.querySelectorAll('.button-delete');
    for (let i = 0; i < btnsDelete.length; i++) {
        btnsDelete[i].onclick = () => {
            if (confirm('Do you want to delete ?') == true) {
                data.splice(i, 1);
                setData(data);
                renderUI(data);
            }
        };
    }
};
renderUI(data);

const handleSearch = (e) => {
    const searchList = Array.from(data).filter((item) =>
        item.name.toUpperCase().includes(search.value.toUpperCase())
    );
    renderUI(searchList);
};

search.oninput = handleSearch;

document.forms['form'].onsubmit = (e) => {
    e.preventDefault();
    handleSearch();
};