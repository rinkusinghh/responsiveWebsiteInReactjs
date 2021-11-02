import { NavLink } from 'react-router-dom'
import '.././components/Home.css';

export const CommonPages = (props) => {
    return (
        <>
           <section id="header" className="">
                <div className="container-fluid _sectionNavBg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 p-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column _firstBlock">
                                    <h1 className="_mainHeading">
                                        { props.name } <strong className="_strongText">rinkusingh</strong>
                                    </h1>
                                    <h2 className="_secondaryHeading my-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={ props.visit } className="_btnGetStarted">
                                            { props.btn }
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 _secondBlock">
                                    <img 
                                    src={ props.img } 
                                    alt="webDeviceImg" 
                                    className="_imgFixed _webDeviceAnimated"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}
