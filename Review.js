import React, { useState } from 'react';

const Review = () => {
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, comment]);
        setComment('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a review..."
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                {reviews.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            </div>
        </div>
    );
};

export default Review;
