const form = document.forms['form'];
const title = document.querySelector('.main-right__title');
const pcInput = document.querySelector('input[name=product_code]');
const nameInput = document.querySelector('input[name=name]');
const descInput = document.querySelector('textarea.form-control');
const priceInput = document.querySelector('input[name=price]');
const brandInput = document.querySelector('select.form-control');
const btnSubmit = document.querySelector('.btn-submit');
const id = getQueryParams().id ? parseInt(getQueryParams().id) : null;
const data = getData();
let text = 'Add product';

if (id) {
    text = 'Edit product';
    title.innerText = text;
    btnSubmit.value = text;
    const product = Array.from(data).find((item) => item.id === id);
    pcInput.value = product.product_code;
    nameInput.value = product.name;
    descInput.value = product.description;
    priceInput.value = product.price;
    brandInput.value = product.brand;
}

form.onsubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    if (id) {
        formData.id = id;
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1, formData);
    } else {
        const nextId = data[data.length - 1].id + 1;
        formData.id = nextId;
        data.push(formData);
    }
    setData(data);
    alert(text + ' successfully !');
    window.location = '/index.html';
};