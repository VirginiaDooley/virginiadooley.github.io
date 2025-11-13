import React from "react";

const VoterInfoAppDetail: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Voter Information App</h1>
      <p className="mb-6 text-lg text-gray-700">
        The Voter Information App is designed to help UK users find accurate and up-to-date information about voting locations, registration, and election dates. It features an intuitive interface, real-time updates, and accessibility options to ensure everyone can participate in the democratic process.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Find your polling place</li>
        <li>View upcoming election dates</li>
        <li>Find your candidates</li>
        <li>Get notified when there are changes to elections in your postcode</li>
        <li>Mobile-friendly and accessible design</li> 
      </ul>
    <a
      href="https://github.com/VirginiaDooley/virginiadooley.github.io"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      View on GitHub
    </a>
    <a
      href="mailto:vcdooley@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Get support
    </a>
    </div>
  );
};

export default VoterInfoAppDetail;
