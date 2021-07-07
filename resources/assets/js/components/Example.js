import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const date = new Date(2021, 1, 20);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">{ date.toString() }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

ReactDOM.render(<Example />, document.getElementById('example'));
