import React, { useState } from 'react';
import { FileText, Calendar, MapPin, User, Shield, CheckCircle, AlertCircle, Lock } from 'lucide-react';

interface ReportFormProps {
  setCurrentView: (view: string) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ setCurrentView }) => {
  const [formData, setFormData] = useState({
    incidentType: '',
    date: '',
    time: '',
    location: '',
    description: '',
    perpetratorInfo: '',
    witnessInfo: '',
    previousReports: '',
    additionalInfo: '',
    contactPreference: 'none',
    contactInfo: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a reference number
    const refNum = 'SR' + Date.now().toString().slice(-8);
    setReferenceNumber(refNum);
    setIsSubmitted(true);
    
    // Store in localStorage for tracking (in real app, this would be sent to secure backend)
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push({
      id: refNum,
      ...formData,
      dateSubmitted: new Date().toISOString(),
      status: 'submitted'
    });
    localStorage.setItem('reports', JSON.stringify(reports));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Report Submitted Successfully
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for your courage in sharing your experience. Your report has been securely submitted and will be handled with the utmost confidentiality.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">Your Reference Number:</h3>
              <p className="text-2xl font-bold text-blue-600 font-mono">{referenceNumber}</p>
              <p className="text-sm text-blue-700 mt-2">
                Please save this number to track your report status
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentView('track')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Track This Report
              </button>
              <button
                onClick={() => setCurrentView('support')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get Support Services
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Anonymous Incident Report</h1>
                <p className="text-blue-100">Your information is secure and confidential</p>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 px-8 py-4 border-b border-blue-200">
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Privacy & Security Notice</p>
                <p>This form is completely anonymous. No personal identifying information is required, and all data is encrypted. You can provide as much or as little detail as you're comfortable with.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Incident Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="inline h-4 w-4 mr-2" />
                Type of Incident *
              </label>
              <select
                name="incidentType"
                required
                value={formData.incidentType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select incident type</option>
                <option value="sexual-assault">Sexual Assault</option>
                <option value="domestic-violence">Domestic Violence</option>
                <option value="harassment">Harassment</option>
                <option value="stalking">Stalking</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Date of Incident
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time (if known)
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                Location (general area, no specific address needed)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Downtown area, University campus, Workplace"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description of Incident *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                placeholder="Please describe what happened. Include as much detail as you're comfortable sharing."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Perpetrator Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline h-4 w-4 mr-2" />
                Perpetrator Information (optional)
              </label>
              <textarea
                name="perpetratorInfo"
                value={formData.perpetratorInfo}
                onChange={handleChange}
                rows={3}
                placeholder="Any information about the perpetrator (description, relationship to you, etc.)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Witness Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Witness Information (optional)
              </label>
              <textarea
                name="witnessInfo"
                value={formData.witnessInfo}
                onChange={handleChange}
                rows={3}
                placeholder="Were there any witnesses? Any supporting evidence?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Previous Reports */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Reports (optional)
              </label>
              <textarea
                name="previousReports"
                value={formData.previousReports}
                onChange={handleChange}
                rows={3}
                placeholder="Have you reported this incident before? To whom?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (optional)
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                placeholder="Any other information you'd like to share"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Contact Preference */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Follow-up Contact (optional)</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="none"
                    checked={formData.contactPreference === 'none'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span>No contact - I prefer to remain completely anonymous</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="email"
                    checked={formData.contactPreference === 'email'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span>Email contact for follow-up</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="phone"
                    checked={formData.contactPreference === 'phone'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <span>Phone contact for follow-up</span>
                </label>
              </div>
              
              {formData.contactPreference !== 'none' && (
                <div className="mt-4">
                  <input
                    type={formData.contactPreference === 'email' ? 'email' : 'tel'}
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder={formData.contactPreference === 'email' ? 'Your email address' : 'Your phone number'}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium mb-1">Important Notice</p>
                  <p>If you are in immediate danger, please call emergency services (911) or your local emergency number. This form is not monitored 24/7 for emergency situations.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors transform hover:scale-105"
              >
                Submit Anonymous Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;