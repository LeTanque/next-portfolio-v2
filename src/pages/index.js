import FogBanner from "../components/FogBanner";


const Index = () => <FogBanner />


Index.getInitialProps = async function () {
    return { 
        transitionType: 'none',
        timeout: 0
    }
}

export default Index;
