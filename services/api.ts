
import { AppointmentData, ContactData } from '../types';

/**
 * In a real production environment, these functions would call your Node/Express/Python backend.
 * The logic below is structured to be easily replaced with fetch() calls.
 */

export const apiService = {
  /**
   * Submits an appointment request
   */
  async submitAppointment(data: AppointmentData): Promise<{ success: boolean; message: string }> {
    console.log('Backend received appointment:', data);
    
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Basic Validation
    if (!data.name || !data.phone || !data.service) {
      throw new Error("Missing required fields");
    }

    // This is where you would call:
    // const response = await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) });
    
    return { 
      success: true, 
      message: "Thank you! We will call you within 30 minutes to confirm your slot." 
    };
  },

  /**
   * Submits a general contact inquiry
   */
  async submitContact(data: ContactData): Promise<{ success: boolean; message: string }> {
    console.log('Backend received message:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (!data.email.includes('@')) {
      throw new Error("Invalid email address");
    }

    return { 
      success: true, 
      message: "Message sent. Our team will get back to you shortly." 
    };
  }
};
