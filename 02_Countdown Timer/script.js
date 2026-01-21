        let totalSeconds = 0;
        let timer = null;
        let running = false;

        const display = document.getElementById('timer');
        const startBtn = document.getElementById('start');
        const pauseBtn = document.getElementById('pause');
        const resetBtn = document.getElementById('reset');


        function updateDisplay(){
            let hrs = Math.floor(totalSeconds/3600);
            let mins = Math.floor((totalSeconds %3600)/60);
            let secs = totalSeconds%60;

            hrs = hrs < 10 ? "0" + hrs : hrs;
            mins = mins < 10 ? "0" + mins : mins;
            secs = secs < 10 ? "0" + secs : secs;

            display.textContent = `${hrs}:${mins}:${secs}`;
        };

        function startCountdown(){
            if(totalSeconds <= 0){
                alert('Please Enter a Valid Number!')
                return;
            }
            running = true;
           timer = setInterval(()=>{
                totalSeconds--;
                updateDisplay();

                if(totalSeconds <=0){
                    clearInterval(timer);
                    alert('⏰ Time is Up!');
                    running = false;
                    startBtn.disabled = false;
                    pauseBtn.disabled = true;
                    resetBtn.disabled = false;
                }
            }, 1000);
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            resetBtn.disabled = false;
        }

        startBtn.addEventListener('click', ()=>{
            if(!running){
                const h = parseInt(document.getElementById('hours').value) || 0;
                const m = parseInt(document.getElementById('minutes').value) || 0;
                const s = parseInt(document.getElementById('seconds').value) || 0;
                totalSeconds = h *3600 + m *60 + s;
                updateDisplay();
                startCountdown();
            }
        } )

        pauseBtn.addEventListener('click', ()=>{
            clearInterval(timer);
            running = false;
            startBtn.disabled = false;
            pauseBtn.disabled = true;
        })

        resetBtn.addEventListener('click', ()=>{
            clearInterval(timer);
            totalSeconds = 0;
            updateDisplay();
            running = false;
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            resetBtn.disabled = true;
        })
        updateDisplay();

