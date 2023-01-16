import React from 'react'
import Bio from './Bio';
import ProfileImage from './ProfileImage';
function App() {
    return (
        <div className="wrapper">
            <ProfileImage className='photo' />
            <Bio className="bio" />
        </div>
    );
}

export default App;