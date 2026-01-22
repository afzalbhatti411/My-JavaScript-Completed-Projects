        let count = 0;
        const value = document.getElementById('counterLabel');

        function updateDisplay(){
            value.innerHTML = count;

            if(count > 0){
                value.style.color = "green"
            } else if (count < 0){
                value.style.color = "red"
            } else{
                value.style.color = "black"
            }
        }

        document.getElementById('decreaseBtn').onclick = function(){
            count-=1;
            updateDisplay()
        }

        document.getElementById('resetBtn').onclick = function(){
            count =0;
            updateDisplay()
        }

        document.getElementById('increaseBtn').onclick = function(){
            count+=1;
            updateDisplay()
        }

