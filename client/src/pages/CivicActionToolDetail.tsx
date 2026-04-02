import React from "react";

const CivicActionToolDetail: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">VoiceAbroad</h1>
      <p className="mb-6 text-lg text-gray-700">
        VoiceAbroad is a web app designed to encourage Americans living abroad to call their reps and sustain civic engagement through features that encourage community connection, wellness and momentum.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Track your civic streak</li>
        <li>Create a group and engage as a collective</li>
        <li>Mobile-friendly and accessible design</li>
      </ul>
      <a
      href="https://voter-tracker-django-45zwqkxq7x.replit.app"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4"
    >
      Try it out.
    </a>
      <p className="text-gray-500 italic">
        This project is currently in beta. Suggestions welcome. 
      </p>
    </div>
  );
};

export default CivicActionToolDetail;
