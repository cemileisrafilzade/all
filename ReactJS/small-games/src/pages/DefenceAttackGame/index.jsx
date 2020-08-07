import React, { useContext } from 'react';

import { DAgameContext } from '../../context/da-game';

import { UserStep } from './components';

function calcBattle(defence, attack) {
    let loosedHP = 0;
    // Iterate rows
    for (let y = 0; y < defence.length; y++) {
        // Iterate cells
        for (let x = 0; x < defence[y].length; x++) {
            // If we have attack
            if (attack[y][x].selected) {
                // And didnt have defence
                if (!defence[y][x].selected) {
                    // We increase loosed HP 
                    loosedHP++
                }
            }
        }
    }
    return loosedHP;
}

export const DefenceAttackGame = () => {

    const {
        isInProgress,
        runGame,
        p1,
        p2,
        updateGrid,
        activePlayer,
        changeAP,
        changePHP,
        refreshRound
    } = useContext(DAgameContext);

    const goNextStep = () => {
        if (activePlayer === 1) {
            changeAP(2);
        } else if (activePlayer === 2) {
            const firstBattleResult = calcBattle(p1.defence, p2.attack);
            const secondBattleResult = calcBattle(p2.defence, p1.attack);

            const P1health = p1.health - firstBattleResult;
            const P2health = p2.health - secondBattleResult;
            changePHP('p1', P1health);
            changePHP('p2', P2health);

            if (P1health && P2health) {

                refreshRound();
            } else {
                alert(P1health ? 'P1 wins' : 'P2 wins')
            }
        }
    }


    return (
        <div>
            <h1>DefenceAttackGame</h1>
            <h3>Game {isInProgress ? 'in progress' : 'not started'}</h3>
            <h4>P1 HP: {p1.health} -/- P2 HP: {p2.health}</h4>

            <button onClick={runGame}>START</button>

            {activePlayer === 1 ?
                <>
                    <h2>Player 1 turn</h2>
                    <UserStep
                        player={p1}
                        updateGrid={updateGrid.bind(null, 'p1')}
                    />
                </>
                :
                <>
                    <h2>Player 2 turn</h2>
                    <UserStep
                        player={p2}
                        updateGrid={updateGrid.bind(null, 'p2')}
                    />
                </>
            }

            <button onClick={goNextStep}>Next Step</button>
        </div>
    )
}