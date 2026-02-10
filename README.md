# Lumina Dental - Premium Landing Page

This is a high-conversion, professional website template designed for modern dental clinics. It follows the "Apple Aesthetic" (clean lines, bold typography, massive whitespace) and incorporates behavioral psychology to reduce patient fear and build authority.

## 🚀 Deployment Guide (Top to Bottom)

Follow these steps to take this project from your local machine to a live URL.

### 1. Prerequisites
- **Node.js & npm**: Installed on your machine for local development and building.
- **Git**: For version control and easy deployment to platforms like Vercel or Netlify.
- **Hosting Account**: Create an account on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub](https://github.com).

### 2. Configuration & Branding
Before deploying, ensure the site reflects your clinic's details:
- **Constants**: Open `constants.ts` and update `CLINIC_INFO`, `SERVICES`, and `REVIEWS`.
- **Images**: Place your actual clinic photos in `public/assets/images/`. Update the paths in `constants.ts` (e.g., `doctor.jpg`, `tech-room.jpg`).
- **Favicon**: Replace the default favicon in the root directory with your brand logo.

### 3. Environment Variables
If you integrate AI features (like the Gemini API) or external services:
- Create a `.env` file in the root.
- Add `API_KEY=your_google_gemini_api_key_here`.
- Ensure your hosting provider has this key set in their **Environment Variables** settings.

### 4. Local Development & Build
Run the following commands in your terminal:
```bash
# Install dependencies (if you added a package.json)
npm install

# Run locally to test
npm run dev

# Create a production build
npm run build
```
*Note: Since this project uses native ESM and Import Maps, you can also serve the `index.html` directly using any static server.*

### 5. Push to Production (Vercel/Netlify)
The most reliable "top to bottom" method:
1. **Push to GitHub**: Create a new repository and push your code.
2. **Connect Hosting**: 
   - Log into Vercel/Netlify.
   - Click "New Project" and select your GitHub repository.
3. **Configure Settings**:
   - **Framework Preset**: Other (or Vite if you added a Vite config).
   - **Build Command**: `npm run build` (if applicable).
   - **Output Directory**: `dist` (or `.` if you are serving source files).
4. **Deploy**: Click "Deploy." Your site will be live on a global CDN in seconds.

---

## How to Edit This Site

### 1. Update Clinic Information
All primary clinic details (Name, Phone, WhatsApp, Address, Doctor Info) are located in `constants.ts`. 
1.  **Open** the file `constants.ts`.
2.  **Edit** the values inside `CLINIC_INFO`.
    *   *Example:* Change `name: "Lumina Dental"` to `name: "Your Clinic Name"`.
3.  **Update** the `SERVICES` list to match your actual treatments.
4.  **Replace** the `REVIEWS` array with real testimonials from your Google My Business or other platforms.

### 2. Replace Images
The site uses placeholder images. You must replace them with your own high-quality photos to build trust.
1.  **Place your photos** in the `public/assets/images` folder (create it if it doesn't exist) or use any public URL.
2.  **Update References in `constants.ts`**:
    *   Look for `imagePath` under `CLINIC_INFO.doctor`.
    *   Replace `"./assets/images/doctor.jpg"` with your actual file path or URL (e.g., `"assets/images/my-photo.jpg"`).
3.  **Update Map Placeholder**:
    *   In `constants.ts`, update `mapPlaceholder` with a screenshot of your clinic's location on a map.
4.  **Update Tech/Office Photos**:
    *   Open `App.tsx`.
    *   Search for `img src=`.
    *   Replace the `src` value with your specific image path (e.g., `assets/images/clinic-interior.jpg`).
    *   *Tip:* Use professional, brightly lit, high-resolution photos.

### 3. Configure Backend / Forms
The forms currently use a simulated backend in `services/api.ts` for demonstration.

**Option A: The Easiest Way (Formspree)**
1.  Go to [Formspree.io](https://formspree.io/) and create a free account.
2.  Create a new form and copy your unique **Project ID** or **Endpoint URL**.
3.  Open `components/BookingModal.tsx`.
4.  Replace the `handleSubmit` logic to `fetch` your Formspree URL:
    ```javascript
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    ```

**Option B: Custom Backend**
1.  Navigate to `services/api.ts`.
2.  Inside `submitAppointment`, remove the `setTimeout` simulation.
3.  Add your own `fetch()` call to your API endpoint (Node.js, Python, PHP, etc.).

### 4. Update WhatsApp Link
This controls the "Direct Message" button.
1.  Open `constants.ts`.
2.  Find the `whatsapp` field inside `CLINIC_INFO`.
3.  **Format:** Use your country code + phone number with **NO** plus signs, dashes, or spaces.
    *   *Correct:* `"15551234567"` (for US +1 555-123-4567)
    *   *Incorrect:* `"+1 (555) 123-4567"`

- `/components`: Reusable UI elements like buttons, modals, and sections.
- `/services`: Logic for API calls and backend communication.
- `App.tsx`: The main layout assembly.
- `constants.ts`: The central "Source of Truth" for site text and info.
- `types.ts`: TypeScript definitions for data safety.

## Behavioral Design Features
- **Fear Neutralization**: Copy emphasizes "Painless," "Gentle," and "Stress-Free."
- **Authority Bias**: Highlighting 15+ years experience and specific doctor credentials.
- **Apple UI Rules**: Large headlines, simple sentences, and high-contrast primary buttons.
- **Visual Flow**: Top-to-bottom hierarchy from "Hero" (Benefit) to "Offer" (Risk Reversal) to "Contact" (Action).