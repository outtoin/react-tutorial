import React from 'react'

class App extends React.Component {
    sayHey(){
        alert('Hey!');
    }

    render() {
        return ( 
            <div>
                <h1> Hello SW.Lee </h1>
                <h2> Welcome </h2>
                <button onClick={this.sayHey}>Click Me</button>
            </div>
        );
    }
}

export default App;