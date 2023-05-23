import React from 'react'
import Pokemon from '../assets/Pokemon-gameofmasters.png'
import PokeTowers from '../assets/PokeTowers.png'

export default function Projects() {
    return (
        <div>
            <h1 class="h1">My Projects</h1>

            <div class="proj">
                <div>
                    <a class="proj" href="https://github.com/DragmonX/Pokemon---The-Game-Of-Masters">
                    <img class="projimg" src={Pokemon} width="650" height="400" alt='pokemon-game-of-the-masters'/></a>
                </div>
                <div>
                    <a id="proj" href="https://github.com/DragmonX/PokeTowers-Legends">
                    <img class="projimg" src={PokeTowers} width="650" height="400" alt='pokeTowers-legends'/></a>
                </div>
            </div>
        </div>
    )
}
