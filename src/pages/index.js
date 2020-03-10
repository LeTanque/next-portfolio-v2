// import FogBanner from "../components/FogBanner";
import ProfileScroll from "../components/ProfileScroll";

const Index = () => <ProfileScroll />


Index.getInitialProps = async function () {
    return { 
        transitionType: 'none',
        timeout: 0
    }
}

export default Index;
