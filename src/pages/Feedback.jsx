import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Feedback</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Share your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <div className="mt-2">
          <label className="font-semibold">Rate our service:</label>
          <select
            className="ml-2 p-2 border rounded"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={0}>Select</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
