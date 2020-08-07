import React from 'react';
import styled from 'styled-components';

import { Grid } from './Grid';

export const UserStep = ({ player, updateGrid }) => {
    return (
        <Container>
            <div>
                <h3>Set your defence</h3>
                <Grid
                    grid={player.defence}
                    selectedColor="lightgreen"
                    limit={10}
                    updateGrid={(y, x, s) => updateGrid('defence', [y, x], s)} />
            </div>
            <div>
                <h3>Set your attack</h3>
                <Grid
                    grid={player.attack}
                    limit={5}
                    selectedColor="red"
                    updateGrid={(y, x, s) => updateGrid('attack', [y, x], s)} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 30px;
`