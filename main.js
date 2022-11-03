function create_game(player1,hour,player2){
    return `
    <li> 
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>  
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
`
}

let delay = -0.4;  

function create_card(date,day,games){
    delay += 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s"> <!--Espaço onde ficarão os cartões de jogos-->
    <h2>${date} <span>${day}</span> </h2>
        <ul> <!--Ul é para uma lista não ordernada, li para os seu itens-->
            ${games}
        </ul>
    </div>    
`
}

document.querySelector('#cards').innerHTML = 

        create_card("24/11", "quinta", 
            create_game("suica","07:00","cameroon") + 
            create_game("portugal","13:00","gana") +
            create_game("brazil","16:00","serbia")
        ) +

        create_card("28/11", "segunda", 
            create_game("korea","10:00","gana") +
            create_game("brazil","13:00","suica") +
            create_game("portugal","16:00","uruguai"))