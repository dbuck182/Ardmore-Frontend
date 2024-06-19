import React from 'react';

import BusinessList from './BusinessList';

const Homepage = () => {
    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-bold">
                Black Squirrel discount
            </h1>
            <BusinessList />
        </div>
    )
}

export default Homepage;