import React, { useState} from 'react';


function WriteMessageComponent() {

    const [feedback, setFeedback] = useState({
        Name: "",
        Email: "",
        Description:""
    });
    const sentDataAPI = "https://localhost:44345/api/SiteReviews";

    const handleInput = (event) => {
        setFeedback({
            ...feedback,
            [event.target.name]: event.target.value
        });
    };



    const getInputs = (event) => {
        console.log(feedback);
        console.log(JSON.stringify(feedback));
        
        fetch(sentDataAPI, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(
                feedback )
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const refresh = () => {
        window.location.reload(false);
    }

    return (
        <div className="section section-contacts">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <h2 className="text-center title">Give us Feedback!</h2>
                    <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                    <form className="contact-form" method="POST">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Your Name</label>
                                    <input type="text" id="Name" name="Name" className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Your Email</label>
                                    <input type="email" id="Email" name="Email" className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="bmd-label-floating">Your Message</label>
                            <textarea type="text" className="form-control" rows={4} id="Description" name="Description" defaultValue={""} onChange={handleInput} />
                        </div>
                        <div className="row">
                            <div className="col-md-4 ml-auto mr-auto text-center">
                                <button type="button" href="" className="btn btn-primary btn-raised" onClick={getInputs}>
                                    Send Message
                        </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default WriteMessageComponent;