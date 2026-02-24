import React from 'react';
import Speaking from '../components/Speaking';

const SpeakingPage: React.FC = () => {
  return (
    <main className="min-h-screen py-32 px-6 md:px-20 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <Speaking />
      </div>
    </main>
  );
};

export default SpeakingPage;
