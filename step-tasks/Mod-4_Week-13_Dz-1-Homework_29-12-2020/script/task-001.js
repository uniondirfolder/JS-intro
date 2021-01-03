/**Задание 1
Создать html-страницу с трекбаром.
Предоставить пользователю возможность изменять положение
синего указателя. 
 */

const trackbars = document.querySelectorAll('.trackbar');
for (let i = 0; i < trackbars.length; i++) {
    let trackbar = trackbars[i];

    const button = trackbar.querySelector('.track-button');
    if (button && button instanceof HTMLElement) {
        let dragging = false;

        const parentWidth = trackbar.offsetWidth;
        const elementWidth = button.offsetWidth;

        let clickOffset = 0;
        button.addEventListener('mousedown', () => {
            clickOffset = (event.pageX - button.offsetLeft - 8) - (elementWidth / 2);
            dragging = true;
        });
        document.body.addEventListener('mouseup', () => { dragging = false; });
        document.body.addEventListener('mousemove', event => {
            if (dragging) {
                let currentPosition = (event.pageX - button.offsetLeft - 8) - (elementWidth / 2);
                let elementPosition = parseInt(window.getComputedStyle(button).getPropertyValue('left'));

                let nextPosition = elementPosition + currentPosition - clickOffset;

                if (nextPosition < 0) nextPosition = 0;
                if (nextPosition >= parentWidth - elementWidth) nextPosition = parentWidth - elementWidth;

                if (elementPosition == nextPosition + 2) return false;
                nextPosition = nextPosition + 'px';

                button.style.left = nextPosition;
                let color =
                    `hsl(${(120 - ((
                        (100 - Math.floor(elementPosition * 100 / (parentWidth - elementWidth))
                        )
                    ) * 1.2)
                    ).toString(10)},70%,60%)`;

                button.style.setProperty('--next-bg-color', color);

                trackbar.setAttribute('complete', Math.floor(elementPosition * 100 / (parentWidth - elementWidth)));
                if (trackSelector = trackbar.querySelector('.track-selector'))
                    trackSelector.style.width = Math.floor(elementPosition * parentWidth / (parentWidth - elementWidth)) + 'px';

                if (trackPercentage = trackbar.querySelector('.track-percentage'))
                    trackPercentage.innerHTML = Math.floor(elementPosition * 100 / (parentWidth - elementWidth)) + '%';


            }
        });
        document.body.addEventListener('mouseleave', () => { dragging = false; });
    }
}


/**ANOTHER */
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}