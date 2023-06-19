import MainHeader from '../../components/MainHeader';
import MainMenu from '../../components/MainMenu';
import About from './About';
export default function Page(){
    return(
        <>
            <MainMenu />
            <MainHeader />
            <About />
        </>
    )
}