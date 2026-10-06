import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof ReservationData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required';
    if (!formData.date) newErrors.date = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#E9E0D3] text-[#24211E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B58A52] block mb-3">
            Table Planning & Gatherings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2A211C] tracking-tight leading-tight mb-4">
            Make Your Next Visit Count.
          </h2>
          <p className="text-sm sm:text-base text-[#716A61] max-w-xl mx-auto font-normal leading-relaxed">
            Planning a family dinner, celebration, or business coffee on Allama Iqbal Avenue? Let us know your preferred time and party size.
          </p>
        </div>

        {/* Reservation Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#2A211C]/10 p-6 sm:p-10">
          {submitted ? (
            <div className="py-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A211C] font-normal mb-3">
                Request Prepared
              </h3>
              <p className="text-sm text-[#716A61] max-w-lg mx-auto leading-relaxed mb-6">
                Thanks — your request has been prepared. Connect this form to your preferred booking service or backend to send it to Coffee Castle.
              </p>

              {/* Prepared request summary */}
              <div className="bg-[#F6F1E8] rounded-lg p-5 max-w-md mx-auto text-left text-xs text-[#24211E] mb-8 space-y-1.5 border border-[#2A211C]/10">
                <p>
                  <strong>Guest Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Contact:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Date & Time:</strong> {formData.date} at {formData.time}
                </p>
                <p>
                  <strong>Party Size:</strong> {formData.guests}
                </p>
                {formData.message && (
                  <p>
                    <strong>Special Note:</strong> {formData.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      date: '',
                      time: '19:00',
                      guests: '2 Guests',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 border border-[#2A211C]/20 text-xs font-semibold uppercase tracking-wider text-[#2A211C] hover:bg-[#F6F1E8] rounded"
                >
                  Create Another Request
                </button>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="px-6 py-2.5 bg-[#B58A52] text-[#171716] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#9E733D] hover:text-white"
                >
                  Call Coffee Castle (051-4908443)
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="res-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Tariq Mehmood"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52] ${
                        errors.name ? 'border-red-500' : 'border-[#2A211C]/15'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="res-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 0300-1234567"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52] ${
                        errors.phone ? 'border-red-500' : 'border-[#2A211C]/15'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="res-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52] ${
                        errors.date ? 'border-red-500' : 'border-[#2A211C]/15'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label
                    htmlFor="res-time"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border border-[#2A211C]/15 rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52]"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="14:00">02:00 PM (Afternoon)</option>
                      <option value="17:00">05:00 PM (Tea & Coffee)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="22:00">10:00 PM (Late Dining)</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="res-guests"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#716A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border border-[#2A211C]/15 rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Table for Two)</option>
                      <option value="3-4 Guests">3-4 Guests (Standard Table)</option>
                      <option value="5-8 Guests">5-8 Guests (Family Table)</option>
                      <option value="9+ Guests">9+ Guests (Large Group Gathering)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="res-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2A211C] mb-2"
                  >
                    Special Requests or Table Preference (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-[#716A61] absolute left-3.5 top-3.5 pointer-events-none" />
                    <textarea
                      id="res-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Prefer outdoor lawn seating / celebrating a birthday"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-[#F6F1E8]/50 border border-[#2A211C]/15 rounded text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#B58A52]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#2A211C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#716A61]">
                  <Info className="w-4 h-4 shrink-0 text-[#B58A52]" />
                  <span>Frontend reservation request interface with client validation.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#2A211C] text-[#F6F1E8] hover:bg-[#B58A52] hover:text-[#171716] transition-all text-xs font-semibold tracking-wider uppercase rounded shadow-md"
                >
                  Request a Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
