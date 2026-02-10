
import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../constants';
import { apiService } from '../services/api';
import { AppointmentData, FormStatus } from '../types';
import Button from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [feedback, setFeedback] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      const response = await apiService.submitAppointment(formData);
      setStatus(FormStatus.SUCCESS);
      setFeedback(response.message);
      // Auto close after success
      setTimeout(onClose, 3000);
    } catch (err) {
      setStatus(FormStatus.ERROR);
      setFeedback("Something went wrong. Please try calling us directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8 md:p-12">
          {status === FormStatus.SUCCESS ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Appointment Requested</h2>
              <p className="text-slate-600">{feedback}</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2">Book Your Visit</h2>
              <p className="text-slate-500 mb-8">Take the first step towards a healthier smile. No stress, just care.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
                    <select 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Checkup">General Checkup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                {status === FormStatus.ERROR && (
                  <p className="text-red-500 text-sm">{feedback}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full mt-4" 
                  disabled={status === FormStatus.SUBMITTING}
                >
                  {status === FormStatus.SUBMITTING ? 'Requesting...' : 'Request Appointment'}
                </Button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  By clicking, you agree to be contacted for appointment scheduling.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
