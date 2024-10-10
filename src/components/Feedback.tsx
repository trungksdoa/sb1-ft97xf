import React from 'react';

const Feedback: React.FC = () => {
  return (
    <div className="feedback card">
      <h2>Provide Feedback</h2>
      <form>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating">
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows={4} placeholder="Share your experience with our services"></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;