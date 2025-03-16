import React, { useState } from "react";

const ReportIssue = () => {
  const [issue, setIssue] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully!");
    setIssue("");
    setImage(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Report an Issue</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Describe the issue..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          className="mt-2"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;
