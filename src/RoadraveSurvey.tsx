import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Car,
  Shield,
  Star,
} from "lucide-react";

const RoadRaveSurvey = () => {
  const sections = [
    {
      title: "Welcome to RoadRave",
      background:
        "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      questions: [],
    },
    {
      title: "Personal Information",
      background:
        "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
      questions: [
        {
          type: "input",
          label: "What's your age?",
          key: "age",
          inputType: "number",
        },
        {
          type: "select",
          label: "Which best describes you?",
          key: "occupation",
          options: [
            "Student",
            "Working Professional",
            "Freelancer",
            "Retired",
            "Other",
          ],
        },
        {
          type: "select",
          label: "Which region of the UK do you live in?",
          key: "region",
          options: [
            "London",
            "South East",
            "South West",
            "Midlands",
            "North",
            "Scotland",
            "Wales",
            "Northern Ireland",
          ],
        },
      ],
    },
    {
      title: "Event Attendance & Pain Points",
      background:
        "bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      questions: [
        {
          type: "radio",
          label:
            "How often do you attend live events (concerts, festivals, sports) in a year?",
          key: "eventFrequency",
          options: ["Never", "1-2", "3-5", "6+"],
        },
        {
          type: "radio",
          label:
            "When you attend an event, do you usually go alone or with others?",
          key: "attendancePattern",
          options: [
            "Always alone",
            "Mostly alone",
            "Mostly with friends/family",
            "Always with friends/family",
          ],
        },
        {
          type: "radio",
          label: `Have you ever missed an event because you didn't have anyone to go with?`,
          key: "missedEvents",
          options: ["Yes", "No"],
        },
        {
          type: "checkbox",
          label:
            "What is your biggest challenge when planning to attend an event? (Select all that apply)",
          key: "challenges",
          options: [
            "Finding travel companions",
            "High travel/accommodation cost",
            "Scheduling or timing",
            "Parking/transport info",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Current Travel & Logistics",
      background:
        "bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      questions: [
        {
          type: "radio",
          label: "When traveling to events, how do you usually get there?",
          key: "travelMethod",
          options: [
            "Drive alone",
            "Ride with friends",
            "Public transport",
            "Rideshare/taxi",
            "Other",
          ],
        },
        {
          type: "radio",
          label: `Would you consider sharing the ride (and splitting costs) with someone you don't know who is going to the same event?`,
          key: "carpoolWillingness",
          options: ["Yes", "No"],
        },
        {
          type: "checkbox",
          label:
            "What concerns do you have about carpooling with other event-goers? (Select all that apply)",
          key: "carpoolConcerns",
          options: [
            "Safety/trust",
            "Scheduling/sync",
            "Vehicle comfort",
            "No concerns",
            "Other",
          ],
        },
        {
          type: "radio",
          label:
            "Have you used any ride-sharing or carpool apps (like BlaBlaCar) in the past?",
          key: "rideshareExperience",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "RoadRave Features & Interest",
      background:
        "bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
      questions: [
        {
          type: "likert",
          label:
            "How likely would you be to use an app that creates private chat groups for verified attendees of the same event?",
          key: "chatGroupInterest",
        },
        {
          type: "checkbox",
          label:
            "Which of the following features would make an event-planning app useful to you? (Select all that apply)",
          key: "usefulFeatures",
          options: [
            "Verified attendee group chat",
            "Carpool/ride coordination",
            "Hotel/accommodation booking",
            "Parking and toll info",
            "Emergency/safety tools (e.g. panic button)",
            "Rewards/discounts",
            "Other",
          ],
        },
        {
          type: "radio",
          label:
            "Would the availability of real-time travel tracking and cost-splitting encourage you to carpool to events?",
          key: "trackingEncouragement",
          options: ["Yes", "No"],
        },
        {
          type: "radio",
          label:
            "If you were using a carpool service to an event, would features like emergency contact sharing or a panic button make you more comfortable?",
          key: "safetyFeatures",
          options: ["Yes", "No"],
        },
        {
          type: "radio",
          label:
            "How much would you trust a community app where members have verified event tickets? (1 = Not at all, 5 = Completely)",
          key: "trustLevel",
          options: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      title: "Pricing & Willingness to Pay",
      background:
        "bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
      questions: [
        {
          type: "radio",
          label:
            "Would you be willing to pay for a service that simplifies event travel (e.g. connecting you with co-travelers, booking, etc.)?",
          key: "willingToPay",
          options: ["Yes", "No"],
        },
        {
          type: "radio",
          label: "If yes, which pricing model do you prefer?",
          key: "pricingModel",
          options: [
            "One-time fee per event",
            "Monthly subscription",
            "Free with optional premium features",
          ],
        },
        {
          type: "select",
          label: `What is the maximum you'd be willing to pay per month for a premium version of such an app?`,
          key: "maxMonthlyPrice",
          options: ["Free only", "£1-£3", "£4-£6", "£7-£10", "£11-£15", "£16+"],
        },
        {
          type: "checkbox",
          label:
            "Which premium perks would interest you? (Select all that apply)",
          key: "premiumPerks",
          options: [
            "Priority ride-matching",
            "Special discounts (events/travel)",
            "Exclusive group invites",
            "Extra rewards points",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Your Feedback",
      background:
        "bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')",
      questions: [
        {
          type: "textarea",
          label:
            "What additional features or changes would make you more likely to use an app like RoadRave?",
          key: "additionalFeatures",
        },
        {
          type: "textarea",
          label:
            "Any other comments or concerns about using a community-based event travel app?",
          key: "otherComments",
        },
        {
          type: "input",
          label: "Would you like to be part of our beta testing? (Optional)",
          key: "email",
          inputType: "email",
        },
      ],
    },
    {
      title: "Thank You!",
      background:
        "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 bg-cover bg-center relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
      questions: [],
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  type Responses = {
    [key: string]: string | number | string[] | undefined;
  };
  const [responses, setResponses] = useState<Responses>({});

  // Google Apps Script Web App Integration
  // Replace with your deployed Apps Script Web App URL:
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxu0E1wHFVr5u2isG0pNz_PndAftkw731dfbSS3jNgj3fBa8_Uh2MBcEz3Qpe0DJFP3/exec";

  const saveToGoogleSheet = async () => {
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(responses),
      });
      alert("Responses submitted to Google Sheet!");
    } catch (error) {
      alert("Failed to submit responses to Google Sheet.");
    }
  };

  const updateResponse = (key: string, value: string | number | string[]) => {
    setResponses((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const nextSection = React.useCallback(() => {
    setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  }, [sections.length]);
  const prevSection = React.useCallback(() => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleMultiSelect = (key: string, value: string) => {
    const current: string[] = Array.isArray(responses[key])
      ? (responses[key] as string[])
      : [];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    updateResponse(key, updated);
  };

  const currentSectionData = sections[currentSection];

  // Renderers for each question type (DARK, FILLED LETTERS)
  interface Question {
    type: string;
    label: string;
    key: string;
    inputType?: string;
    options?: (string | number)[];
  }

  // Helper to render question label (no bullet/dot)
  const renderQuestionLabel = (label: string) => (
    <span className="block text-orange-400 font-extrabold mb-3 text-lg">
      {label}
    </span>
  );

  // Custom Santiago font (Google Fonts)
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Santiago:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const santiagoFont = { fontFamily: "'Santiago', sans-serif" };

  const renderQuestion = (q: Question, idx: number, total: number) => {
    switch (q.type) {
      case "input":
        return (
          <div
            className="bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <input
              type={q.inputType || "text"}
              placeholder={q.label}
              value={responses[q.key] || ""}
              onChange={(e) => updateResponse(q.key, e.target.value)}
              className="w-full p-3 rounded-lg bg-black text-orange-300 placeholder-orange-700 border-2 border-orange-500 font-bold focus:ring-2 focus:ring-orange-400"
              style={santiagoFont}
            />
          </div>
        );
      case "textarea":
        return (
          <div
            className="bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <textarea
              value={responses[q.key] || ""}
              onChange={(e) => updateResponse(q.key, e.target.value)}
              placeholder={q.label}
              className="w-full p-3 rounded-lg bg-black text-orange-300 placeholder-orange-700 border-2 border-orange-500 h-32 font-bold focus:ring-2 focus:ring-orange-400"
              style={santiagoFont}
            />
          </div>
        );
      case "select":
        return (
          <div
            className="bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <select
              value={responses[q.key] || ""}
              onChange={(e) => updateResponse(q.key, e.target.value)}
              className="w-full p-3 rounded-lg bg-black text-orange-300 border-2 border-orange-500 font-bold focus:ring-2 focus:ring-orange-400"
              style={santiagoFont}
            >
              <option value="" className="text-orange-700">
                Select an option
              </option>
              {q.options?.map((opt) => (
                <option
                  value={opt}
                  key={opt}
                  className="text-orange-400 font-bold"
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );
      case "radio":
        return (
          <div
            className="bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <div className="space-y-2">
              {q.options?.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center space-x-2 cursor-pointer select-none py-2 px-2 rounded hover:bg-orange-900/30"
                  style={{ userSelect: "none" }}
                >
                  <input
                    type="radio"
                    name={q.key}
                    value={opt}
                    checked={String(responses[q.key]) === String(opt)}
                    onChange={(e) =>
                      updateResponse(
                        q.key,
                        typeof opt === "number"
                          ? Number(e.target.value)
                          : e.target.value,
                      )
                    }
                    className="text-orange-400 accent-orange-500 focus:ring-2 focus:ring-orange-400"
                    style={{ marginRight: "0.5rem" }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div
            className="bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <div className="space-y-2">
              {q.options?.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center space-x-2 cursor-pointer select-none py-2 px-2 rounded hover:bg-orange-900/30"
                  style={{ userSelect: "none" }}
                >
                  <input
                    type="checkbox"
                    checked={
                      Array.isArray(responses[q.key]) &&
                      (responses[q.key] as string[]).includes(opt as string)
                    }
                    onChange={() => handleMultiSelect(q.key, opt as string)}
                    className="accent-orange-500 focus:ring-2 focus:ring-orange-400 border-2 border-orange-400 rounded-sm w-5 h-5"
                    style={{ marginRight: "0.5rem" }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        );
      case "likert":
        return (
          <div
            className="space-y-4 bg-black rounded-lg p-6 mb-4"
            key={q.key}
            style={santiagoFont}
          >
            {renderQuestionLabel(q.label)}
            <div className="flex flex-row justify-between items-center gap-2">
              {[1, 2, 3, 4, 5].map((val, index) => (
                <label
                  key={val}
                  className="flex flex-col items-center cursor-pointer w-20"
                >
                  <input
                    type="radio"
                    name={q.key}
                    value={val}
                    checked={Number(responses[q.key]) === val}
                    onChange={(e) =>
                      updateResponse(q.key, Number(e.target.value))
                    }
                    className="mb-2 accent-orange-500 focus:ring-2 focus:ring-orange-400"
                  />
                  <span className="text-sm text-orange-300 text-center font-bold">
                    {
                      [
                        "Very Unlikely",
                        "Unlikely",
                        "Neutral",
                        "Likely",
                        "Very Likely",
                      ][index]
                    }
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Keyboard navigation for left/right arrows (must be at top level, not inside render)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSection();
      } else if (e.key === "ArrowLeft") {
        prevSection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, nextSection, prevSection]);

  return (
    <div
      className={`min-h-screen ${currentSectionData.background} transition-all duration-500 ease-in-out font-sans relative`}
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: currentSectionData.backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px) brightness(0.85)",
        }}
      />
      {/* Overlay for further dimming, but lighter for more vibrancy */}
      <div
        className="absolute inset-0 bg-black/30"
        style={{ zIndex: -1 }}
      ></div>

      {/* Content Card overlays the background, always centered and dark for contrast */}
      <div className="relative z-20 flex justify-center items-center min-h-screen px-2 py-8">
        <div className="w-full max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-base font-semibold tracking-wide drop-shadow-lg">
                Progress
              </span>
              <span className="text-white text-base font-semibold tracking-wide drop-shadow-lg">
                {currentSection + 1} / {sections.length}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentSection + 1) / sections.length) * 100}%`,
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  currentSection === 0
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                Previous
              </button>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={nextSection}
                  disabled={currentSection === sections.length - 1}
                  className={`px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    currentSection === sections.length - 1
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600 text-white"
                  }`}
                >
                  Next
                </button>
                {/* Show Save button on last section before Thank You */}
                {currentSection === sections.length - 2 && (
                  <button
                    type="button"
                    onClick={saveToGoogleSheet}
                    className="ml-4 px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-500 hover:bg-green-600 text-white"
                  >
                    Save Responses
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start relative bg-gray-900/95 rounded-3xl shadow-2xl p-0 md:p-10">
            {/* Left Arrow removed as requested */}

            {/* Section Content */}
            <div className="flex-1">
              <h2
                className="text-5xl md:text-6xl font-black text-white text-center mb-10 drop-shadow-2xl tracking-tight"
                style={{
                  letterSpacing: "0.03em",
                  textShadow: "0 2px 8px #000",
                }}
              >
                {currentSectionData.title}
              </h2>
              <div className="min-h-96">
                {/* Render landing and thank you as static, others as questions */}
                {currentSection === 0 && (
                  <div className="text-center space-y-8">
                    <div className="bg-gray-900 rounded-2xl p-8 mx-auto max-w-2xl shadow-2xl border-4 border-white/10">
                      <h1
                        className="text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
                        style={{ textShadow: "0 2px 8px #000" }}
                      >
                        🎉 RoadRave
                      </h1>
                      <p
                        className="text-3xl text-white mb-6 font-bold drop-shadow-2xl"
                        style={{ textShadow: "0 2px 8px #000" }}
                      >
                        Connect with fellow event-goers, share rides, and make
                        every journey as exciting as the destination!
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <Users className="w-12 h-12 text-white mx-auto mb-2" />
                          <h3 className="font-extrabold text-white text-xl">
                            Find Travel Buddies
                          </h3>
                          <p className="text-lg text-gray-200">
                            Connect with verified event attendees
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <Car className="w-12 h-12 text-white mx-auto mb-2" />
                          <h3 className="font-extrabold text-white text-xl">
                            Share Rides
                          </h3>
                          <p className="text-lg text-gray-200">
                            Split costs and reduce environmental impact
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <Shield className="w-12 h-12 text-white mx-auto mb-2" />
                          <h3 className="font-extrabold text-white text-xl">
                            Safe & Verified
                          </h3>
                          <p className="text-lg text-gray-200">
                            Ticket verification and safety features
                          </p>
                        </div>
                      </div>
                      <p
                        className="text-2xl text-white mt-8 font-bold drop-shadow-2xl"
                        style={{ textShadow: "0 2px 8px #000" }}
                      >
                        Help us build the perfect event travel companion by
                        sharing your thoughts and experiences!
                      </p>
                    </div>
                  </div>
                )}
                {currentSection === sections.length - 1 && (
                  <div className="text-center space-y-8">
                    <div className="bg-gray-900 rounded-2xl p-8 mx-auto max-w-2xl shadow-2xl border-4 border-white/10">
                      <h1
                        className="text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
                        style={{ textShadow: "0 2px 8px #000" }}
                      >
                        🎉 Thank You!
                      </h1>
                      <p
                        className="text-3xl text-white mb-6 font-bold drop-shadow-2xl"
                        style={{ textShadow: "0 2px 8px #000" }}
                      >
                        Your feedback is incredibly valuable to us. We&apos;re
                        excited to build RoadRave with insights from people like
                        you!
                      </p>
                      <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <h3 className="text-3xl font-extrabold text-white mb-3">
                          What&apos;s Next?
                        </h3>
                        <p className="text-gray-200 text-xl">
                          We&apos;ll be analyzing all responses, incorporating
                          your suggestions into the development of RoadRave. If
                          you provided your email, we&apos;ll keep you updated
                          on our progress and beta testing opportunities.
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <Star className="w-12 h-12 text-yellow-400" />
                        <Star className="w-12 h-12 text-yellow-400" />
                        <Star className="w-12 h-12 text-yellow-400" />
                        <Star className="w-12 h-12 text-yellow-400" />
                        <Star className="w-12 h-12 text-yellow-400" />
                      </div>
                      <p className="text-lg text-gray-200 mt-4 font-bold">
                        Follow us on social media for updates on RoadRave&apos;s
                        development!
                      </p>
                    </div>
                  </div>
                )}
                {currentSection !== 0 &&
                  currentSection !== sections.length - 1 && (
                    <div
                      className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-4 border-orange-600/40"
                      style={{
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        ...santiagoFont,
                      }}
                    >
                      <ul className="list-disc pl-8">
                        {currentSectionData.questions.map((q, idx) => (
                          <li key={q.key} className="mb-2">
                            {renderQuestion(
                              q,
                              idx,
                              currentSectionData.questions.length,
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </div>

            {/* Right Arrow removed as requested */}
          </div>

          {/* Dots only, no mobile nav arrows */}
          <div className="flex justify-center items-center mt-8 max-w-4xl mx-auto">
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSection ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadRaveSurvey;
