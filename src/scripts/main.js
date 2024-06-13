document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const positionY = window.scrollY;

        if (positionY < heroHeight) {
            hiddenHeader();
        } else {
            revealHeader();
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const currentTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${currentTab}]`)
            hideAllTabs();
            tab.classList.add('shows__list--active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--active');
        })
    }

    //Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', OpenOrCloseAnswer);
    }
})

function hiddenHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--hidden');
}

function revealHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--hidden');
}

function OpenOrCloseAnswer(element) {
    const classAdd = 'FAQ__questions__item--open'
    const FatherFigure = element.target.parentNode

    FatherFigure.classList.toggle(classAdd);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active')
    }
}


function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--active');
    }
}