import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Header from './MainPageHeader';

function WriteMessageComponent() {




    return (
        <div className="section section-contacts">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <h2 className="text-center title">Write us a message</h2>
                    <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Your Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Your Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleMessage" className="bmd-label-floating">Your Message</label>
                            <textarea type="email" className="form-control" rows={4} id="exampleMessage" defaultValue={""} />
                        </div>
                        <div className="row">
                            <div className="col-md-4 ml-auto mr-auto text-center">
                                <button className="btn btn-primary btn-raised">
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