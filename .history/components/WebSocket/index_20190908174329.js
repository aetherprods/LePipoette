import React from 'react';

class WebSocket extends React.Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    componentWillMount(){
        let connection = new Promise ((resolve, reject) => {
            let socket = new WebSocket('ws://localhost:3030/');   //open WebSocket connection         


            socket.addEventListener('open', function (event) { //on open, send our identifying info
                socket.send(JSON.stringify({type:"identification", name: name, color: color}));
                that.props.setConnection(socket);  //plus, pass the connection up to our parent's state
                resolve(socket);
            }, {once: true});
            socket.addEventListener('error', function (event) {
                console.log('error: '+event.data); 
            });
        });
    }

    connect() {
        
        console.log("connected");
        
    }

    render() {
        return(<div>test
            {this.connect()}
        </div>);
    }
}

export default WebSocket;