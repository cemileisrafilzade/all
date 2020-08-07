import React from 'react';
import styled from 'styled-components';



export const Grid = ({ grid, updateGrid, selectedColor, limit }) => {

    console.log(grid);

    const selectedCount = grid.reduce((total, row) => {
        return total + row.reduce((innerTotal, cell) => {
            return innerTotal += Number(cell.selected)
        }, 0);
    }, 0);

    const toggleCell = (y, x, status) => {
        if (selectedCount < limit || !status) {
            updateGrid(y, x, status)
        }
    }

    return (
        <Container>
            <Inner>
                {grid.map((row, y) => (
                    <Row key={y}>
                        {row.map(({ selected }, x) => (
                            <Cell
                                className={selected ? 'active' : ''}
                                style={{
                                    background: selected ? selectedColor : 'white'
                                }}
                                key={x}
                                onClick={() => toggleCell(y, x, !selected)} />
                        ))}
                    </Row>
                ))}
            </Inner>
            <h4>{selectedCount}/{limit} warriors left</h4>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Inner = styled.div`
    border: 1px solid grey;
`

const Row = styled.div`
    display: flex;
`

const Cell = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid grey;

    &.active {
        background: lightgreen;
    }
`