import React from 'react';

class LetsGo extends React.Component {
    render() {
        const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        };
    
        const gridItemStyle = {
        backgroundColor: '#ccc',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        };

        const imageStyle = {
            width: '100%',
            marginBottom: '10px',
        };
    
        return (
            <div style={gridContainerStyle}>
            <div style={gridItemStyle}>
                <img src="path_to_image1.jpg" alt="Image 1" style={imageStyle} />
                <span>Text 1</span>
            </div>
            <div style={gridItemStyle}>
                <img src="path_to_image2.jpg" alt="Image 2" style={imageStyle} />
                <span>Text 2</span>
            </div>
            <div style={gridItemStyle}>
                <img src="path_to_image3.jpg" alt="Image 3" style={imageStyle} />
                <span>Text 3</span>
            </div>
            </div>
        );
        }
    }

export default LetsGo;
