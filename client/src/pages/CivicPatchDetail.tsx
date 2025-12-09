import React from "react";


const CivicPatchDetail: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">CivicPatch</h1>
      <p className="mb-6 text-lg text-gray-700">
        CivicPatch is an open-source, distributed data collection framework aimed at collecting contact information for local representatives.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Visualize data collection progress</li>
        <li>Implement address search and representative results</li>
        <li>Responsive design</li>
      </ul>
    <a
      href="https://github.com/CivicPatch/civicpatch.org"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      View on GitHub
    </a>
    <a
      href="https://civicpatch.org/"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      Learn More
    </a>
    </div>
  );
};

export default CivicPatchDetail;
