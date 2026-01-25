        const containerE1 = document.querySelector('.container');

        // creation of 35 Divs automatically

        for(let index = 0; index < 35; index++){
            const colorContainerE1 = document.createElement('div');
            colorContainerE1.classList.add('color-container');
            containerE1.appendChild(colorContainerE1);
        };

        const colorContainerE1s = document.querySelectorAll('.color-container');
// to generate colors for all 35 Divs

        function generateColors(){
            colorContainerE1s.forEach((colorContainerE1)=>{
                const newColorCode = randomColors();
                colorContainerE1.style.background = "#" + newColorCode;
                colorContainerE1.innerHTML = "#" + newColorCode;
            })
        }
        generateColors();

// to generate Random Colors for all 35 Divs
        function randomColors(){
            const chars = "0123456789bcdef";
            const colorLength = 6;
            let colorCode = ""
            for(let i = 0; i < colorLength; i++){
                const randomNum = Math.floor(Math.random()*chars.length);
                colorCode +=chars[randomNum];
            }
            return colorCode;
        }
