const selectAndLogElements = () => {
    const pElements = document.getElementsByTagName('p');
    const headerElement = document.getElementById('header');
    const bodyTextElements = document.getElementsByClassName('body-text');

    const headerQueryElement = document.querySelector('#header');
    const bodyTextQueryElements = document.querySelectorAll('.body-text');

    const bodyElement = document.querySelector('body');

    console.log(bodyElement);
    console.log(bodyElement.querySelector('h1'));

    console.log(pElements);
    console.log(headerElement);
    console.log(bodyTextElements);
    console.log(headerQueryElement);
    console.log(bodyTextQueryElements);

    console.log(headerQueryElement.parentNode);
    console.log(headerQueryElement.parentElement.querySelector('p'));
    // console.log(headerQueryElement.childNodes[0].querySelector('p'));
    console.log(headerQueryElement.children);
    console.log(headerQueryElement.nextElementSibling);
    console.log(headerQueryElement.previousElementSibling);
};

const changeText = (elementId, newText) => {
    const element = document.getElementById(elementId);
    // element.innerHTML = newText;
    element.innerText = newText;
    // element.textContent = newText;
};

const readText = (elementId) => {
    const element = document.getElementById(elementId);
    return element.innerText;
    // console.log('innerText', element.innerText);
    // console.log('textContent', element.textContent);
};

const changeAttributes = () => {
    const inputElement = document.getElementById('nameInput');
    inputElement.getAttribute('type');
    inputElement.setAttribute('type', 'password');
    inputElement.removeAttribute('type');
};

const changeClassesAndStyles = () => {
    const inputElement = document.getElementById('nameInput');
    inputElement.classList.add('red');
    inputElement.classList.remove('my-input');
    inputElement.classList.toggle('another');

    console.log(inputElement.classList.contains('red'));
    // console.log(inputElement.getAttribute('class'));
    console.log(inputElement.classList);

    console.log(inputElement.style.display);
};

const addRemoveElements = () => {
    const bodyElement = document.querySelector('body');
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Click me!';
    
    bodyElement.appendChild(buttonElement);

    // bodyElement.removeChild(buttonElement);
    // bodyElement.remove();
}

const bodyElement = document.querySelector('body');
const buttonElement = document.createElement('button');
buttonElement.innerText = 'Click me!';

const onClick = () => {
    changeText('header', 'Button is clicked');
    const inputElement = document.querySelector('#nameInput');
    inputElement.classList.add('red');
};

buttonElement.addEventListener('click', onClick);

buttonElement.addEventListener('click', () => {
    console.log('clicked!');
});

buttonElement.removeEventListener('click', onClick)

bodyElement.appendChild(buttonElement);