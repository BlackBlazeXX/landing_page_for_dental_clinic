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
- **Images**: Place your actual clinic photos in `./assets/images/`. Update the paths in `constants.ts` (e.g., `doctor.jpg`, `tech-room.jpg`).
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
- Open `constants.ts`.
- Change `CLINIC_INFO` values to match your clinic.
- Update `SERVICES` list to match your actual offerings.
- Replace `REVIEWS` with real testimonials from your Google My Business page.

### 2. Replace Images
The site uses placeholders. To use your actual clinic photos:
- In `App.tsx`, search for `img src=...`.
- Replace the URL with your hosted image link or local path.
- Recommended: Use professional, brightly lit, high-resolution photos of the clinic and doctor.

### 3. Configure Backend / Forms
The forms currently use a simulated backend in `services/api.ts`.
- **To add real email notifications:** You will need a backend service (like Node.js with Nodemailer or a service like Formspree/EmailJS).
- Replace the code inside `apiService` in `services/api.ts` with a `fetch()` call to your API endpoint.

### 4. Update WhatsApp Link
- In `constants.ts`, update `whatsapp: "+15550001234"` (use international format without the `+` or spaces for the link logic).

## Folder Structure
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