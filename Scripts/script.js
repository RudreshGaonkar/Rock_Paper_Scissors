let score = JSON.parse(localStorage.getItem('score')); // coverts get to js code.

        if(score === null) // after removing data from localStorage it will be null . So if its null than we have to give score a defualt value.
        {
            score = {
                wins : 0,
                losses : 0,
                ties : 0
            };
        }

        updateScoreElement();

        function computerChoice()
        {
            const randomNum = Math.random();
            let computerMove = '';
            if(randomNum >= 0 && randomNum < 1/3)
            {
                computerMove = 'rock';
            }
            else if(randomNum >= 1/3 && randomNum < 2/3)
            {
                computerMove = 'paper';
            }
            else if(randomNum >=2/3 && randomNum < 1)
            {
                computerMove = 'scissors';
            }
            return computerMove;
        }

        function gameresult(playerMove)
        {
            let computerMove = computerChoice();

            let result = '';
            
            if(playerMove === 'rock')
            {
                if(computerMove === 'rock')
                {
                    result = 'Tie';
                }
                else if(computerMove === 'paper')
                {
                    result = 'You lose';
                }
                else if(computerMove === 'scissors')
                {
                    result = 'You won';
                }
            }

            else if(playerMove === 'paper')
            {
                if(computerMove === 'rock')
                {
                    result = 'You won';
                }
                else if(computerMove === 'paper')
                {
                    result = 'Tie';
                }
                else if(computerMove === 'scissors')
                {
                    result = 'You lose';
                }
            }

            else if(playerMove === 'scissors')
            {
                if(computerMove === 'rock')
                {
                    result = 'You lose';
                }
                else if(computerMove === 'paper')
                {
                    result = 'You won';
                }
                else if(computerMove === 'scissors')
                {
                    result = 'Tie';
                }
            }

            updateScore(result, computerMove, playerMove);
        }

        function updateScore(result, computerMove, playerMove) // Also displays
        {
            if(result === 'You won')
            {
                score.wins++;
            }
            else if(result === 'You lose')
            {
                score.losses++;
            }
            else if(result === 'Tie')
            {
                score.ties++;
            }

            localStorage.setItem('score', JSON.stringify(score)); //LocalStorage only supports string.

            document.querySelector(".js-result").innerHTML = result;

            document.querySelector(".js-moves").innerHTML = `You: 
                    <img src="images/${playerMove}-emoji.png" class="move-icon"> |
                    <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">: Computer `;

            updateScoreElement();

        }

        function updateScoreElement()
        {
            document.querySelector(".js-score").innerHTML = `Wins : ${score.wins} | Losses : ${score.losses} | Ties : ${score.ties}`;
        }

        function resetScore()
        {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();

            document.querySelector(".js-result").innerHTML = ' ';

            document.querySelector(".js-moves").innerHTML = ` `
        }