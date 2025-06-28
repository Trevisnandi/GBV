import React, { useState } from 'react';
import { BookOpen, Shield, Heart, Phone, FileText, Users, AlertTriangle, CheckCircle, Download, ExternalLink } from 'lucide-react';

interface ResourcesProps {
  setCurrentView: (view: string) => void;
}

const Resources: React.FC<ResourcesProps> = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('safety');

  const tabs = [
    { id: 'safety', name: 'Safety Planning', icon: <Shield className="h-5 w-5" /> },
    { id: 'legal', name: 'Legal Rights', icon: <FileText className="h-5 w-5" /> },
    { id: 'healing', name: 'Healing & Recovery', icon: <Heart className="h-5 w-5" /> },
    { id: 'support', name: 'Support Systems', icon: <Users className="h-5 w-5" /> }
  ];

  const safetyPlanningContent = {
    title: "Creating Your Safety Plan",
    description: "A safety plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave.",
    sections: [
      {
        title: "Personal Safety",
        items: [
          "Identify safe areas in your home with exits and avoid rooms with weapons",
          "Keep a bag with important items ready in case you need to leave quickly",
          "Establish a code word with friends/family to signal you need help",
          "Trust your instincts - if you feel unsafe, act on those feelings"
        ]
      },
      {
        title: "Communication Safety",
        items: [
          "Use a safe computer or phone that your abuser cannot access",
          "Create new email accounts on a secure device",
          "Clear your browser history and use private browsing",
          "Consider using a friend's phone or computer for sensitive communications"
        ]
      },
      {
        title: "Important Documents",
        items: [
          "Keep copies of ID, Social Security cards, and birth certificates",
          "Store financial records, insurance papers, and legal documents safely",
          "Take photos of important documents and store them securely",
          "Keep emergency cash and credit cards in a safe place"
        ]
      }
    ]
  };

  const legalRightsContent = {
    title: "Understanding Your Legal Rights",
    description: "Knowledge of your legal rights can help you make informed decisions about your safety and future.",
    sections: [
      {
        title: "Protection Orders",
        items: [
          "Restraining orders can provide legal protection from your abuser",
          "Emergency orders can be obtained quickly in dangerous situations",
          "Violation of protection orders is a criminal offense",
          "You don't need a lawyer to file for a protection order"
        ]
      },
      {
        title: "Criminal Law",
        items: [
          "Domestic violence and sexual assault are crimes",
          "You have the right to report crimes to police",
          "You can press charges even if you're married to the abuser",
          "Victim advocates can help you through the legal process"
        ]
      },
      {
        title: "Family Law",
        items: [
          "You may be entitled to spousal support and child support",
          "Domestic violence can affect custody and visitation decisions",
          "You can file for divorce or separation",
          "Legal aid services may be available at no cost"
        ]
      }
    ]
  };

  const healingContent = {
    title: "Healing and Recovery",
    description: "Healing from trauma takes time. These resources can support your journey toward recovery and wellness.",
    sections: [
      {
        title: "Understanding Trauma",
        items: [
          "Trauma responses are normal reactions to abnormal situations",
          "Healing is not linear - there will be good days and difficult days",
          "PTSD symptoms can include flashbacks, nightmares, and anxiety",
          "Professional help can provide tools for managing trauma responses"
        ]
      },
      {
        title: "Self-Care Strategies",
        items: [
          "Practice mindfulness and grounding techniques",
          "Maintain routines that bring comfort and stability",
          "Engage in physical activities that feel safe and enjoyable",
          "Connect with supportive friends and family members"
        ]
      },
      {
        title: "Professional Support",
        items: [
          "Trauma-informed therapy can help process experiences",
          "Support groups connect you with other survivors",
          "Medication may help with anxiety or depression",
          "Many therapists specialize in domestic violence and sexual assault"
        ]
      }
    ]
  };

  const supportSystemsContent = {
    title: "Building Support Systems",
    description: "Strong support systems are crucial for healing and maintaining safety. Learn how to build and maintain supportive relationships.",
    sections: [
      {
        title: "Identifying Supportive People",
        items: [
          "Look for people who listen without judgment",
          "Seek those who respect your decisions and boundaries",
          "Find people who believe your experiences",
          "Choose supporters who prioritize your safety"
        ]
      },
      {
        title: "Professional Support",
        items: [
          "Counselors and therapists provide professional guidance",
          "Victim advocates help navigate systems and resources",
          "Support group facilitators create safe spaces for sharing",
          "Medical professionals address physical and mental health needs"
        ]
      },
      {
        title: "Community Resources",
        items: [
          "Local domestic violence organizations offer various services",
          "Faith communities may provide spiritual support",
          "Community centers often have support groups and activities",
          "Online communities can provide 24/7 support and information"
        ]
      }
    ]
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'safety': return safetyPlanningContent;
      case 'legal': return legalRightsContent;
      case 'healing': return healingContent;
      case 'support': return supportSystemsContent;
      default: return safetyPlanningContent;
    }
  };

  const currentContent = getTabContent();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational resources, safety planning tools, and information to support your journey toward safety and healing.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
            <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">In Crisis?</h3>
            <p className="text-red-700 text-sm mb-4">If you're in immediate danger, call 911 or your local emergency number.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Emergency Resources
            </button>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Support?</h3>
            <p className="text-blue-700 text-sm mb-4">Connect with local support services and professional help.</p>
            <button
              onClick={() => setCurrentView('support')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Find Support
            </button>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Ready to Report?</h3>
            <p className="text-green-700 text-sm mb-4">Submit an anonymous report in a safe, confidential way.</p>
            <button
              onClick={() => setCurrentView('report')}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Report Incident
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8 py-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{currentContent.description}</p>
            </div>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Download Resources */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Downloadable Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Safety Planning Checklist</p>
                      <p className="text-sm text-gray-600">Printable safety planning guide</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Legal Rights Guide</p>
                      <p className="text-sm text-gray-600">Know your legal options</p>
                    </div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* External Resources */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.thehotline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">The National Domestic Violence Hotline</h3>
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-600">24/7 support, information, and resources for survivors</p>
            </a>
            <a
              href="https://www.rainn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">RAINN</h3>
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-600">National Sexual Assault Hotline and resources</p>
            </a>
            <a
              href="https://www.loveisrespect.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Love Is Respect</h3>
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-600">Support for teens and young adults in abusive relationships</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;