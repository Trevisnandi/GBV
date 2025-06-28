import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Heart, Users, Shield, Search, ExternalLink } from 'lucide-react';

interface SupportServicesProps {
  setCurrentView: (view: string) => void;
}

const SupportServices: React.FC<SupportServicesProps> = ({ setCurrentView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const emergencyContacts = [
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      description: "24/7 confidential support for domestic violence survivors",
      available: "24/7"
    },
    {
      name: "RAINN National Sexual Assault Hotline",
      phone: "1-800-656-4673",
      description: "24/7 support for sexual assault survivors",
      available: "24/7"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
      available: "24/7"
    }
  ];

  const supportServices = [
    {
      id: 1,
      name: "Women's Crisis Center",
      category: "counseling",
      address: "123 Main Street, Downtown",
      phone: "(555) 123-4567",
      website: "www.womenscrisis.org",
      services: ["Individual Counseling", "Group Therapy", "Legal Advocacy", "Emergency Shelter"],
      hours: "Mon-Fri 9AM-5PM, Emergency 24/7",
      description: "Comprehensive support services for women experiencing domestic violence and sexual assault."
    },
    {
      id: 2,
      name: "Legal Aid Society",
      category: "legal",
      address: "456 Justice Ave, Legal District",
      phone: "(555) 987-6543",
      website: "www.legalaid.org",
      services: ["Restraining Orders", "Divorce/Custody", "Immigration", "Housing"],
      hours: "Mon-Fri 8AM-6PM",
      description: "Free legal services for survivors of domestic violence and sexual assault."
    },
    {
      id: 3,
      name: "Safe Haven Shelter",
      category: "housing",
      address: "Confidential Location",
      phone: "(555) 456-7890",
      website: "www.safehavenshelter.org",
      services: ["Emergency Shelter", "Transitional Housing", "Case Management", "Children's Services"],
      hours: "24/7 Intake",
      description: "Safe, confidential housing for survivors and their children."
    },
    {
      id: 4,
      name: "Healing Together Support Groups",
      category: "counseling",
      address: "789 Community Center Dr",
      phone: "(555) 234-5678",
      website: "www.healingtogether.org",
      services: ["Survivor Support Groups", "Art Therapy", "Trauma Recovery", "Peer Support"],
      hours: "Various times, call for schedule",
      description: "Peer-led support groups and therapeutic activities for survivors."
    },
    {
      id: 5,
      name: "Financial Empowerment Center",
      category: "financial",
      address: "321 Economic Way, Business District",
      phone: "(555) 345-6789",
      website: "www.financialempowerment.org",
      services: ["Financial Counseling", "Job Training", "Credit Repair", "Benefits Assistance"],
      hours: "Mon-Fri 9AM-5PM",
      description: "Financial literacy and empowerment services for survivors."
    },
    {
      id: 6,
      name: "Children's Advocacy Center",
      category: "children",
      address: "654 Child-Friendly Lane",
      phone: "(555) 567-8901",
      website: "www.childrenadvocacy.org",
      services: ["Child Counseling", "Family Therapy", "School Advocacy", "Play Therapy"],
      hours: "Mon-Fri 8AM-6PM",
      description: "Specialized services for children who have experienced or witnessed violence."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Heart className="h-5 w-5" /> },
    { id: 'counseling', name: 'Counseling & Therapy', icon: <Users className="h-5 w-5" /> },
    { id: 'legal', name: 'Legal Services', icon: <Shield className="h-5 w-5" /> },
    { id: 'housing', name: 'Housing & Shelter', icon: <MapPin className="h-5 w-5" /> },
    { id: 'financial', name: 'Financial Support', icon: <MessageCircle className="h-5 w-5" /> },
    { id: 'children', name: 'Children Services', icon: <Heart className="h-5 w-5" /> }
  ];

  const filteredServices = supportServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find local support services, counseling, legal aid, and resources to help you on your journey to safety and healing.
          </p>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <Phone className="h-6 w-6 mr-2" />
            Emergency Contacts - Available 24/7
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-gray-900 mb-2">{contact.name}</h3>
                <p className="text-lg font-bold text-red-600 mb-2">{contact.phone}</p>
                <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                  {contact.available}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium capitalize">
                    {service.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{service.address}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm font-medium">{service.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{service.hours}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Services Offered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.services.map((s, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={`tel:${service.phone}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://${service.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Website</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Online Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• National Coalition Against Domestic Violence</li>
                <li>• RAINN (Rape, Abuse & Incest National Network)</li>
                <li>• Love Is Respect (Teen Dating Abuse)</li>
                <li>• The Hotline (National Domestic Violence Hotline)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Safety Planning</h3>
              <p className="text-gray-600 mb-3">
                Creating a safety plan is important for anyone experiencing violence. Our resources can help you:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Plan for emergencies</li>
                <li>• Identify safe places to go</li>
                <li>• Gather important documents</li>
                <li>• Build a support network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServices;