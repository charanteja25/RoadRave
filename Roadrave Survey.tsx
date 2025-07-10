import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Users, Car, MapPin, Shield, Star, MessageCircle } from 'lucide-react';

const RoadRaveSurvey = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});

  const updateResponse = (key, value) => {
    setResponses(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleMultiSelect = (key, value) => {
    const current = responses[key] || [];
    const updated = current.includes(value) 
      ? current.filter(item => item !== value)
      : [...current, value];
    updateResponse(key, updated);
  };

  const LikertScale = ({ question, responseKey }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">{question}</h3>
      <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
        {['Very Unlikely', 'Unlikely', 'Neutral', 'Likely', 'Very Likely'].map((option, index) => (
          <label key={index} className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name={responseKey}
              value={index + 1}
              checked={responses[responseKey] === index + 1}
              onChange={() => updateResponse(responseKey, index + 1)}
              className="mb-2"
            />
            <span className="text-sm text-white text-center">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const sections = [
    // ...existing code...
  ];

  const currentSectionData = sections[currentSection];

  return (
    <div 
      className={`min-h-screen ${currentSectionData.background} transition-all duration-500 ease-in-out`}
      style={{
        backgroundImage: currentSectionData.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm">Progress</span>
            <span className="text-white text-sm">{currentSection + 1} / {sections.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Section Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {currentSectionData.title}
          </h2>
          
          <div className="min-h-96">
            {currentSectionData.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSection ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{currentSection === sections.length - 2 ? 'Submit' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadRaveSurvey;
