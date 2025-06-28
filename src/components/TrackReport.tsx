import React, { useState } from 'react';
import { Search, FileText, Clock, CheckCircle, AlertCircle, Eye } from 'lucide-react';

interface TrackReportProps {
  setCurrentView: (view: string) => void;
}

const TrackReport: React.FC<TrackReportProps> = ({ setCurrentView }) => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const reports = JSON.parse(localStorage.getItem('reports') || '[]');
      const foundReport = reports.find((r: any) => r.id === referenceNumber);
      
      if (foundReport) {
        setReport(foundReport);
      } else {
        setError('Report not found. Please check your reference number and try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'text-blue-600 bg-blue-100';
      case 'under-review': return 'text-yellow-600 bg-yellow-100';
      case 'in-progress': return 'text-orange-600 bg-orange-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <FileText className="h-5 w-5" />;
      case 'under-review': return <Eye className="h-5 w-5" />;
      case 'in-progress': return <Clock className="h-5 w-5" />;
      case 'resolved': return <CheckCircle className="h-5 w-5" />;
      default: return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Report</h1>
          <p className="text-lg text-gray-600">
            Enter your reference number to check the status of your report
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference Number
              </label>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  placeholder="Enter your reference number (e.g., SR12345678)"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors disabled:opacity-50"
                >
                  <Search className="h-5 w-5" />
                  <span>{loading ? 'Searching...' : 'Search'}</span>
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800">{error}</span>
              </div>
            </div>
          )}
        </div>

        {/* Report Details */}
        {report && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Report Details</h2>
                  <p className="text-blue-100">Reference: {report.id}</p>
                </div>
                <div className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${getStatusColor(report.status)}`}>
                  {getStatusIcon(report.status)}
                  <span className="font-medium capitalize">{report.status.replace('-', ' ')}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Timeline */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Report Submitted</p>
                      <p className="text-sm text-gray-600">
                        {new Date(report.dateSubmitted).toLocaleDateString()} at {new Date(report.dateSubmitted).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  
                  {report.status !== 'submitted' && (
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Eye className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Under Review</p>
                        <p className="text-sm text-gray-600">Your report is being reviewed by our team</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Report Summary */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Incident Type</h4>
                  <p className="text-gray-600 capitalize">{report.incidentType?.replace('-', ' ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Date of Incident</h4>
                  <p className="text-gray-600">{report.date || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">{report.location || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Preference</h4>
                  <p className="text-gray-600 capitalize">{report.contactPreference}</p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                <p className="text-blue-800 mb-4">
                  Thank you for your patience. Our team is committed to handling your report with care and confidentiality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setCurrentView('support')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Access Support Services
                  </button>
                  <button
                    onClick={() => setCurrentView('resources')}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    View Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Lost Your Reference Number?</h4>
              <p className="text-gray-600 text-sm mb-3">
                If you've lost your reference number, you can submit a new report or contact our support team.
              </p>
              <button
                onClick={() => setCurrentView('report')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Submit New Report →
              </button>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Need Immediate Help?</h4>
              <p className="text-gray-600 text-sm mb-3">
                If you're in immediate danger or need urgent support, please reach out to emergency services or crisis hotlines.
              </p>
              <button
                onClick={() => setCurrentView('support')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Get Support Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackReport;