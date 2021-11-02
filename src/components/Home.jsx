import webDevice from '../images/webDevice.png';
import { CommonPages } from '../pages/CommonPages';
// import './Home.css';
export const Home = () => {
    return (
        <>
          <CommonPages
            name="Lorem ipsum dolor sit consectetur"
            img={webDevice}
            visit="/services"
            btn="get started"
           /> 
        </>
    )
}
