import "../pages/style.css";
import Lobby from "../components/lobby.js";
import Head from 'next/head';

const Index = () => (<div>
    <Head>
        <title>La Pipoette</title>
    </Head>
    <div>
        <Lobby />
    </div>
    
</div>);

export default Index;
