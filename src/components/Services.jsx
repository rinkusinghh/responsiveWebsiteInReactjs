import { Cards } from "../pages/Cards"
import { ServicesData } from "../pages/ServicesData"

export const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    our Services
                </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-3">
                               {
                                    ServicesData.map((value, index) => {
                                        return <Cards 
                                        key={index} 
                                        img={value.img} 
                                        title={value.title}
                                        content={value.content}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
