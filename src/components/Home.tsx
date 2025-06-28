import React from 'react';
import { Shield, Users, MessageCircle, Heart, ArrowRight, Lock, Clock, MapPin } from 'lucide-react';

interface HomeProps {
  setCurrentView: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentView }) => {
  const features = [
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Anonymous & Secure",
      description: "Your privacy is our priority. Report incidents completely anonymously with end-to-end encryption."
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "24/7 Availability",
      description: "Submit reports and access support services anytime, anywhere. Help is always available."
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: "Local Support",
      description: "Connect with local support services, counselors, and resources in your area."
    }
  ];

  const stats = [
    { number: "1,000+", label: "Survivors Helped" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Confidential" },
    { number: "50+", label: "Partner Organizations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Voice, Your Choice, Your
            <span className="text-blue-600"> Safety</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A safe, confidential platform for reporting gender-based violence and accessing support services. 
            You are not alone, and your story matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentView('report')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Report Incident</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentView('support')}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-300 flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <Heart className="h-5 w-5" />
              <span>Get Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MG SafeReport?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with survivors in mind, our platform prioritizes safety, privacy, and accessibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're ready to report an incident or need immediate support, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentView('report')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Start Anonymous Report
            </button>
            <button
              onClick={() => setCurrentView('track')}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Track Existing Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;