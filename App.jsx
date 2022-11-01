import React from 'react';

function App() {


    return (
        <div>

            <h1> app.js</h1>
            {/* <Looper /> */}
            <Route
                exact
                path="/home"
            >
                <Looper />

            </Route>
        </div>
    );

};

export default App;