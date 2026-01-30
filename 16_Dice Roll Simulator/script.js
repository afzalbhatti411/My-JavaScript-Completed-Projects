        const diceDisplay = document.getElementById("diceDisplay");
        const rollButton = document.getElementById("rollButton");


        function getRandomNumber() {
            return Math.floor(Math.random() * 6) + 1;
        }

        function rollDice() {
            const result = getRandomNumber();
            const diceFaces = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

            diceDisplay.classList.add("roll-animation");
            
            setTimeout(() => {
                diceDisplay.innerText = diceFaces[result];
                diceDisplay.classList.remove("roll-animation");
            }, 200);
        }

        rollButton.addEventListener("click", rollDice);
