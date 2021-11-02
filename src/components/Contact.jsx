import { useState } from 'react'

export const Contact = () => {

    const [ data, setData ] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const inputHandler = (e) => {

        const { name, value } = e.target;

        // setData((previous) => {
        //    return {
        //        ...previous, [name]: value,
        //    };
        // });
        
        setData({...data, [name]: value});
    };

    const submitForm = (e) => {
        e.preventDefault();

        alert(`My name is ${data.name}
        and my mobile no. is : ${data.phone}
        , and my email is ${data.email},
        here is what I want to say. ${data.message}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    contact us
                </h1>
            </div>
            <div className="container _contactForm">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submitForm}>
                            <div className="mb-2">
                                <label
                                    htmlFor=""
                                    className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id=""
                                    name="name"
                                    value={data.name}
                                    onChange={inputHandler}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor=""
                                    className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id=""
                                    name="email"
                                    value={data.email}
                                    onChange={inputHandler}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor=""
                                    className="form-label">
                                    phone
                                </label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    id=""
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputHandler}
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor=""
                                    className="form-label">
                                    Textarea
                                </label>
                                <textarea
                                    className="form-control"
                                    id=""
                                    rows="2"
                                    name="message"
                                    value={data.message}
                                    onChange={inputHandler}
                                    placeholder="Type here to message">
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button
                                    className="btn btn-success mb-5"
                                    type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
