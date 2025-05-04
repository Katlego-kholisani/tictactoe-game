const StatusMessage = ({ winner, isXNext, squares }) => {
    const noMovesLeft = squares.every(sq => sq !== null);
    const nextPlayer = isXNext ? 'X' : 'O';

    const renderStatusMessage = () => {
        if (winner) {
            return <span className="text-green">Winner: {winner}</span>;
        }
        if (noMovesLeft) {
            return <span className="text-orange">Game Tied!</span>;
        }
        return <span className="text-orange">Next Player: {nextPlayer}</span>;
    };

    return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
