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
      name: "National Police Service",
      phone: "999 or 112",
      description: "Emergency police services for immediate danger situations",
      available: "24/7"
    },
    {
      name: "Gender Violence Recovery Centre",
      phone: "0709 674 674",
      description: "24/7 crisis support and counseling for GBV survivors",
      available: "24/7"
    },
    {
      name: "Childline Kenya",
      phone: "116",
      description: "Free helpline for children in distress or danger",
      available: "24/7"
    }
  ];

  const supportServices = [
    {
      id: 1,
      name: "Coalition on Violence Against Women (COVAW)",
      category: "counseling",
      address: "Nairobi, Kenya - Multiple locations",
      phone: "0722 186 202",
      website: "www.covaw.or.ke",
      services: ["Counseling Services", "Legal Aid", "Safe Houses", "Economic Empowerment"],
      hours: "Mon-Fri 8AM-5PM",
      description: "Leading organization providing comprehensive support to survivors of gender-based violence across Kenya."
    },
    {
      id: 2,
      name: "Federation of Women Lawyers Kenya (FIDA)",
      category: "legal",
      address: "Nairobi, Mombasa, Kisumu, Eldoret",
      phone: "0722 751 272",
      website: "www.fidakenya.org",
      services: ["Legal Representation", "Legal Aid", "Court Accompaniment", "Legal Education"],
      hours: "Mon-Fri 8AM-5PM",
      description: "Provides free legal services to women and children, specializing in family law and GBV cases."
    },
    {
      id: 3,
      name: "Nairobi Women's Hospital - Gender Violence Recovery Centre",
      category: "medical",
      address: "Hurlingham, Nairobi",
      phone: "0709 674 674",
      website: "www.nairobiwomenshospital.org",
      services: ["Medical Care", "Counseling", "Legal Support", "Safe Shelter"],
      hours: "24/7 Emergency Services",
      description: "Comprehensive medical and psychosocial support for survivors of sexual and gender-based violence."
    },
    {
      id: 4,
      name: "Usikimye",
      category: "counseling",
      address: "Nairobi, Kenya",
      phone: "0800 720 553",
      website: "www.usikimye.or.ke",
      services: ["Crisis Counseling", "Support Groups", "Referral Services", "Community Outreach"],
      hours: "Mon-Fri 8AM-6PM",
      description: "Provides psychosocial support and counseling services to survivors of sexual violence."
    },
    {
      id: 5,
      name: "Wangu Kanja Foundation",
      category: "advocacy",
      address: "Nairobi, Kenya",
      phone: "0722 794 411",
      website: "www.wangukanja.org",
      services: ["Advocacy", "Legal Support", "Awareness Campaigns", "Policy Reform"],
      hours: "Mon-Fri 9AM-5PM",
      description: "Advocates for justice and policy reform while supporting survivors of gender-based violence."
    },
    {
      id: 6,
      name: "Cradle - The Children Foundation",
      category: "children",
      address: "Nairobi, Kenya",
      phone: "0722 296 173",
      website: "www.cradle.co.ke",
      services: ["Child Protection", "Counseling", "Legal Support", "Rehabilitation"],
      hours: "Mon-Fri 8AM-5PM",
      description: "Protects children from abuse and provides comprehensive support services."
    },
    {
      id: 7,
      name: "Ujamaa Centre",
      category: "housing",
      address: "Nairobi, Kenya",
      phone: "0722 518 674",
      website: "www.ujamaacentre.org",
      services: ["Safe Shelter", "Counseling", "Skills Training", "Reintegration Support"],
      hours: "24/7 Intake",
      description: "Provides safe accommodation and rehabilitation services for women and children survivors."
    },
    {
      id: 8,
      name: "Kimbilio Trust",
      category: "housing",
      address: "Nairobi, Kenya",
      phone: "0722 671 681",
      website: "www.kimbilio.org",
      services: ["Emergency Shelter", "Counseling", "Legal Aid", "Economic Empowerment"],
      hours: "24/7 Emergency",
      description: "Offers safe shelter and comprehensive support to women and children fleeing violence."
    },
    {
      id: 9,
      name: "Msichana Empowerment Kuria",
      category: "advocacy",
      address: "Migori County, Kenya",
      phone: "0722 123 456",
      website: "www.msichana.org",
      services: ["FGM Prevention", "Education Support", "Legal Aid", "Community Mobilization"],
      hours: "Mon-Fri 8AM-5PM",
      description: "Focuses on ending FGM and supporting girls' education in Kuria community."
    },
    {
      id: 10,
      name: "Centre for Rights Education and Awareness (CREAW)",
      category: "legal",
      address: "Nairobi, Kenya",
      phone: "0722 386 317",
      website: "www.creawkenya.org",
      services: ["Legal Aid", "Human Rights Education", "Policy Advocacy", "Research"],
      hours: "Mon-Fri 8AM-5PM",
      description: "Promotes and protects women's human rights through legal aid and advocacy."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Heart className="h-5 w-5" /> },
    { id: 'counseling', name: 'Counseling & Support', icon: <Users className="h-5 w-5" /> },
    { id: 'legal', name: 'Legal Services', icon: <Shield className="h-5 w-5" /> },
    { id: 'medical', name: 'Medical Services', icon: <Heart className="h-5 w-5" /> },
    { id: 'housing', name: 'Housing & Shelter', icon: <MapPin className="h-5 w-5" /> },
    { id: 'children', name: 'Children Services', icon: <Users className="h-5 w-5" /> },
    { id: 'advocacy', name: 'Advocacy & Rights', icon: <MessageCircle className="h-5 w-5" /> }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Services in Kenya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find local support services, counseling, legal aid, and resources across Kenya to help you on your journey to safety and healing.
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

        {/* County-specific Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">County-Specific Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Nairobi County</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Nairobi Women's Hospital GVRC</li>
                <li>• COVAW Nairobi Office</li>
                <li>• FIDA Kenya Headquarters</li>
                <li>• Ujamaa Centre</li>
                <li>• Kimbilio Trust</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Mombasa County</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• FIDA Mombasa Branch</li>
                <li>• Coast General Hospital</li>
                <li>• Mombasa Women's Group</li>
                <li>• Pwani University Legal Aid</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Kisumu County</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• FIDA Kisumu Branch</li>
                <li>• Jaramogi Oginga Odinga Hospital</li>
                <li>• Lake Region Women's Network</li>
                <li>• Kisumu Medical & Education Trust</li>
              </ul>
            </div>
          </div>
        </div>

        {/* National Resources */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">National Resources & Hotlines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Government Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• National Gender and Equality Commission</li>
                <li>• Ministry of Public Service and Gender</li>
                <li>• National Council for Children's Services</li>
                <li>• Judiciary Gender Justice Department</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Safety Planning</h3>
              <p className="text-gray-600 mb-3">
                Creating a safety plan is important for anyone experiencing violence. Consider:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Identifying safe places in your community</li>
                <li>• Keeping important documents secure</li>
                <li>• Building a trusted support network</li>
                <li>• Knowing emergency contact numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServices;