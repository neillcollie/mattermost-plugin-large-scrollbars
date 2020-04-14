export const Top = () => {
    const style = {
        top: '0',
        left: '0',
        position: 'absolute',
        width: '100%',
        height: '100px',
        backgroundColor: 'red',
        color: 'white',
    };

    return (
        <div style={style}>
            {'Top Header'}
        </div>
    );
};

export const Left = () => {
    const style = {
        top: '100px',
        left: '0',
        position: 'absolute',
        width: '150px',
        height: '100%',
        backgroundColor: 'green',
        color: 'white',
    };

    return (
        <div style={style}>
            {'Left Header'}
        </div>
    );
};
