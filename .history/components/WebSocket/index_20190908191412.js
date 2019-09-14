import React from 'react';

class Socket extends React.Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
    }

    connect(){
        let that = this; 

        let connection = new Promise ((resolve, reject) => {
            let socket = new WebSocket('ws://localhost:3030/');   //open WebSocket connection         

            console.log(socket);
            
            resolve(socket);
        }, (reason) => {
            console.error(reason);
        }).then((socket) => {
            socket.addEventListener('open', function (event) { //on open, send our identifying info
                //socket.send(JSON.stringify({type:"identification", name: name, color: color}));
                that.props.setConnection(socket);  //plus, pass the connection up to our parent's state

            }, {once: true});
            socket.addEventListener('error', function (event) {
                console.log('error: '+event.data); 
            });
        }).catch((reason) => {
            console.error(reason);
        })

        return(<div></div>);
    }

    render(){return(<div>{this.connect()}</div>)};

}

export default Socket;