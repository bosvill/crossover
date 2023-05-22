import React from 'react';

class LetsGo extends React.Component {
    render() {
        const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '70px',
        padding: '70px',
        };
    
        const gridItemStyle = {
        backgroundColor: '#4a4a49',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        color: 'white',
        };

        const imageStyle = {
            width: '100%',
            marginBottom: '10px',
        };

        const textStyle = {
            marginLeft: '10px',
        };

        const heading1Style = {
            color: '#edb47c',
            textAlign: 'center',
        };

        const heading3Style = {
            color: '#54514e',
            textAlign: 'center',
        };

        const buttonContainerStyle = {
            display: 'flex',
            justifyContent: 'center', // Zentrierung in der Horizontalen
            marginTop: '20px', // Abstand nach oben
        };

        const buttonStyle = {
            backgroundColor: '#4a4a49', 
            color: '#fff',
            border: 'none',
            borderRadius: '7px',
            padding: '10px 20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s', 
        };
    
        const buttonHoverStyle = {
            backgroundColor: '#666', 
        };
    
        return (
            <div>
                <h1 style={heading1Style}>LET'S GO</h1>
                <br></br>
                <h5 style={heading3Style}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br></br> 
                Vero id nulla ab temporibus officia velit soluta ullam dicta.</h5>
            <div style={gridContainerStyle}>
            <div style={gridItemStyle}>
                <img src="../public/lets1.jpg" alt="Image 1" style={imageStyle} />
                <br></br>
                <h3 style={textStyle}>Lorem ipsum</h3>
                <br></br>
                <span style={textStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing...</span>
                <br></br>
                <br></br>
            </div>
            <div style={gridItemStyle}>
                <img src="../public/lets2.jpg" alt="Image 2" style={imageStyle} />
                <br></br>
                <h3 style={textStyle}>Lorem ipsum</h3>
                <br></br>
                <span style={textStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing...</span>
                <br></br>
                <br></br>
            </div>
            <div style={gridItemStyle}>
                <img src="../public/lets3.jpg" alt="Image 3" style={imageStyle} />
                <br></br>
                <h3 style={textStyle}>Lorem ipsum</h3>
                <br></br>
                <span style={textStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing...</span>
                <br></br>
                <br></br>
            </div>
            </div>
            <div style={buttonContainerStyle}>
        <button
            style={buttonStyle}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#666';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = '#4a4a49';}}
            >SHOW MORE
        </button>
        </div>
            </div>
        );
        }
    }

export default LetsGo;
