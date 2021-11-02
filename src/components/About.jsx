import programmer from '../images/programmer.png';
import { CommonPages } from '../pages/CommonPages';
// import './Home.css';
export const About = () => {
    return (
        <>
          <CommonPages
            name="Lorem ipsum dolor sit consectetur"
            img={programmer}
            visit="/contact"
            btn="contact"
           /> 
        </>
    )
}
