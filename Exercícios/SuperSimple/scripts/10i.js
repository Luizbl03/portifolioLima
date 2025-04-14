let calc = localStorage.getItem('calc') || " ";
        document.querySelector('.js-display').innerHTML = calc;
        //displayLog();
        atualiza = (val) => {
            calc += val;
            displayLog();
            localStorage.setItem('calc', calc);
            
        }

        displayLog = ()=>{
            document.querySelector('.js-display')
            .innerHTML = calc;
        }

        function safeEval(expression) {
            const sanitized = expression.replace(/[^0-9+\-*/.()]/g, '');
  
            return new Function(`return ${sanitized}`)();
        }