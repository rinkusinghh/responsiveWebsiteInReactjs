import { NavLink } from 'react-router-dom'

export const Cards = ({img, title, content}) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={img} className="card-img-top" alt="webDeviceImg" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> {content} </p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
