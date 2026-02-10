window.scrollTo({top: 0, behavior: 'smooth'});
const burgerButton = document.querySelector('.burger-btn');
const markupMobMenu = document.querySelector('.mobile-menu');
const mobMenuClose = document.querySelector('.mobile-menu-close');

markupMobMenu.style.opacity = '0';
burgerButton.addEventListener('click', () => {
  markupMobMenu.classList.toggle('active');
  const isActive = markupMobMenu.classList.contains('active');
  if (isActive) {
    markupMobMenu.style.opacity = '1';
    markupMobMenu.style.pointerEvents = 'all';
    markupMobMenu.style.backgroundColor = '#fff';
    markupMobMenu.style.zIndex = '10';
    markupMobMenu.style.transition = 'opacity 0.3s ease';
  }
});

function closeMobileMenu() {
  markupMobMenu.classList.remove('active');
  markupMobMenu.style.opacity = '0';
    markupMobMenu.style.pointerEvents = 'none';
    markupMobMenu.style.backgroundColor = 'transparent';
    markupMobMenu.style.zIndex = '-1';
    markupMobMenu.style.transition = 'opacity 0.3s ease';
}

mobMenuClose.addEventListener('click', () => {
    closeMobileMenu();
});

const portfolioMobMenu = document.getElementById('mob_portfolio');
portfolioMobMenu.addEventListener('click', () => {
    closeMobileMenu();
});

const contactPopup = document.getElementById('contact');
const mobContact = document.getElementById('mob_contact');
const pcContact = document.querySelector('.contact_js');

mobContact.addEventListener('click', () => {
    closeMobileMenu();
    visibleContactPopup();
});

pcContact.addEventListener('click', () => {
    visibleContactPopup();
});

function visibleContactPopup() {
    contactPopup.classList.add('active');
    contactPopup.style.opacity = '1';
    contactPopup.style.pointerEvents = 'all';
    contactPopup.style.zIndex = '20';
    contactPopup.style.transition = 'opacity 0.3s ease';
}

const btnClosePopup = document.querySelector('.popup-x');

btnClosePopup.addEventListener('click', () => {
    contactPopup.classList.remove('active');
    contactPopup.style.opacity = '0';
    contactPopup.style.pointerEvents = 'none';
    contactPopup.style.zIndex = '-1';
    contactPopup.style.transition = 'opacity 0.3s ease';
});
const cleanForm = document.getElementById('my_form').reset();
const formContacts = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const inputName = document.querySelector('#user-name');
const inputPhone = document.querySelector('#fild-tel');
const inputEmail = document.querySelector('#fild-email');
const textareaEl = document.querySelector('#user-comment');
const inputCeckbox = document.querySelector('#user-privacy');
const formEl = document.querySelector('.popup-form');

formEl.addEventListener('submit', async (e) => {
    e.preventDefault(); // Забороняємо стандартну відправку
    const formContacts = new FormData(formEl); // Збираємо дані
    await fetch('/api/submit', {
        method: 'POST',
        body: formContacts
    });
    alert('Форму надіслано!');
        formEl.reset(); 
});

function onInputChange(event) {
    
    formContacts[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formContacts));
};

function onFormSubmit(event) {
    event.preventDefault();
     if (formContacts.name === '' || formContacts.phone === '' || formContacts.email === '' || !inputCeckbox.checked) {
        alert('Fill please all fields');
        return false;
    }
    
    console.log(formContacts);
    event.currentTarget.reset();
     
    formContacts.name = '';
    formContacts.email = '';
    formContacts.phone = ''; 
  
};

formEl.addEventListener('input', onInputChange);
formEl.addEventListener('submit', onFormSubmit);

const popupBtn = document.querySelector('.popup-button');

function closeContacts() {
    popupBtn.classList.remove('active');
    popupBtn.style.opacity = '0';
    popupBtn.style.pointerEvents = 'none';
    popupBtn.style.backgroundColor = 'transparent';
    popupBtn.style.zIndex = '-1';
    popupBtn.style.transition = 'opacity 0.3s ease';
}

const formSubscribe = document.querySelector('.form-footer');
formSubscribe.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    formSubscribe.reset();
});

const inputSubscribe = document.querySelector('.form-input');
const formData = {
    email: '',
};
function onSubscribeChange(event) {
    
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
function onSubscribeSubmit(event) {
    event.preventDefault();
     if (formData.email === ''){
         alert('Fill please all fields');
        return false;
    }
    
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state'); 
    formData.email = '';
}


// if (savedFormData) {
//     const parsedFormData = JSON.parse(savedFormData);   
//     formContacts.email = parsedFormData.email || '';
//     formContacts.phone = parsedFormData.phone || '';
//     formContacts.name = parsedFormData.name || '';
//     inputName.value = formContacts.name;
//     inputPhone.value = formContacts.phone;
//     inputEmail.value = formContacts.email;
//     textareaEl.value = formContacts.message;  
// };



  



