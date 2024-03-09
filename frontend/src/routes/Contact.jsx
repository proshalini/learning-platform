import React from 'react'

export default function Contact() {

    return (
        <div>
            <main>
                <section className="py-5">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <p className="lead">Have questions or feedback? We'd love to hear from you!</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-light py-4">
                <div className="container text-center">
                    <p>&copy; 2024 Coursera. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

