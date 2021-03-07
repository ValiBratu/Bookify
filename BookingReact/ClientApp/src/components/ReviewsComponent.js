import React, { useState, useEffect } from 'react';

function ReviewsComponent() {

    const ReviewsAPI = "https://localhost:44345/api/SiteReviews";

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch(ReviewsAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setReviews(data);

            })
            .catch(err => console.log(err))

    }, []);


    return (
        <div className="section text-center">
            <h2 className="title">Newest Reviews</h2>
            <div className="team">
                <div className="row">
                    {reviews.slice(reviews.length-3, reviews.length).map((review, i) => (

                    <div className="col-md-4" key={ i}>
                        <div className="team-player">
                            <div className="card card-plain">
                                    <h4 className="card-title">{review.name }
                          <br />
                                        <small className="card-description text-muted">{ review.email}</small>
                                </h4>
                                <div className="card-body">
                                        <p className="card-description">{ review.description}</p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="" className="btn btn-link btn-just-icon"><i className="fa fa-twitter" /></a>
                                    <a href="" className="btn btn-link btn-just-icon"><i className="fa fa-instagram" /></a>
                                    <a href="" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    );

}

export default ReviewsComponent;