window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabConcent = document.querySelectorAll('.info-tabcontent');
    

    // Функция которая скрывает все табыл, принимет 1 тех. аргумент и скрывает их все полностью со страницы. 
    function hideTabContent (a) {
        for (let i = a; i < tabConcent.length; i++) { // при проходе цикла, удаляет класс ШОВ и потом добавляет класс ХАЙ.
            tabConcent[i].classList.remove('show');
            tabConcent[i].classList.add('hide');
        };
    };

    hideTabContent(1); // Что бы это работало, запускаем фукцию, так она начинает работать. Но что бы 1 елемент всегда оставался, нужно передать 1.

    function showTabContent(b) { 
        if (tabConcent[b].classList.contains('hide')) { //Если условие находит ХАЙД, то оно его удаляет и добавляет класс ШОВ.
            tabConcent[b].classList.remove('hide');
            tabConcent[b].classList.add('show');
        }
    };
    info.addEventListener('click', function(event) {
        let target = event.target; //отображает тот элемент на котоырй было произведено нажатие.
        if (target && target.classList.contains('info-header-tab')) { //Проверяется точно ли мы наали на конкретный элемент в нашем родителе.
            for (let i = 0; i < tab.length; i++) { 
                if (target == tab[i]) { //если номер кнпоки совпадает с номером блока с контентом, то услови выполняется.
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // Дальше будет скрипт таймера на странице

    let deadLine = '2022-02-11';
    
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);

            return {
                'total': t,
                'second': seconds,
                'minutes': minutes,
                'hours': hours
            };
    };
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock () {
            let t = getTimeRemaining(endtime);
            if (t.total < 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.second;

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                };

                if (hours.textContent.length == 1) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                };
                if (minutes.textContent.length == 1) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                };
                if (seconds.textContent.length == 1) {
                    seconds.textContent = '0' + t.second;
                } else {
                    seconds.textContent = t.second;
                };
            }

            
        };
    };
    setClock('timer', deadLine);


    //Модальное окно формы обратной связи под таймером

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    
    //Модальное окно формы обратной связи в блоках с контентом
    let descriptionBtn = document.querySelectorAll('.description-btn');
    //Работает независимо от количества блоков и кнопок переключения между блоками контента
    // С помощью цикла модуль сам понимает в какой кнопке необходимо добавить соответсвующий класс
    // Затем благодаря тому же циклу, понимает у какой кнопки необходимо удалить этот самый класс.
    
    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function(event) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                descriptionBtn[i].classList.remove('more-splash');
            });
        });
    };

});

