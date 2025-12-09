import React from "react";

const CivicDataTechDetail: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Civic Data Tech</h1>
      <p className="mb-6 text-lg text-gray-700">
        Civic Data Tech is a collaborative initiative uniting organizations, companies, and civic-minded individuals dedicated to enhancing access to vital civic information.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Operational and Governance</li>
        <li>Fundraising support</li>
        <li>Technical assistance</li>
      </ul>
   
    <a
      href="https://unified.me/organization/27721/posts?invite=civicdata"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      Join on Unified
    </a>
    <a
      href="mailto:info@civicdata.tech"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      Get Involved
    </a>
    <a
      href="https://civicdatatech.github.io/civicdatatech/"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      Learn More
    </a>
    </div>
  );
};

export default CivicDataTechDetail;
