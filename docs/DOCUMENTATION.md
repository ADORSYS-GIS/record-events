# Event Form Application - System Documentation

## Overview

This is a React-based event form application that allows users to create and share event packages. The application features internationalization (i18n), form validation, and secure key management.

## System Architecture

### Core Components

1. **App (src/App.tsx)**
   - Root component that handles application state
   - Manages language switching
   - Handles error and loading states
   - Renders the main application UI

2. **EventForm (src/components/EventForm.tsx)**
   - Main form component for event creation
   - Handles form submission and validation
   - Manages form state and user input
   - Integrates with media capture functionality

3. **Key Management (src/hooks/useKeyInitialization.ts)**
   - Handles cryptographic key generation and management
   - Manages key storage and retrieval
   - Provides key status and error handling

4. **Label Management (src/hooks/useLabelManagement.ts)**
   - Manages form field labels and translations
   - Handles label loading and caching
   - Supports internationalization

### Key Features

- **Internationalization (i18n)**
  - Supports multiple languages (English and French)
  - Dynamic language switching
  - Translation files in `src/locales/`

- **Form Handling**
  - Dynamic form generation based on label configuration
  - Client-side validation
  - Support for various input types (text, number, date, select, media)

- **Security**
  - Secure key management using Web Crypto API
  - Secure storage of sensitive data
  - Data encryption for sensitive information

- **Media Handling**
  - Image capture functionality
  - Media validation and preview
  - Integration with device camera

## Data Flow

1. **Initialization**
   - App loads and initializes keys and labels
   - Loading states are shown during initialization
   - Errors are caught and displayed if initialization fails

2. **Form Interaction**
   - User fills out the form fields
   - Input validation occurs on blur and submit
   - Form state is updated with user input

3. **Form Submission**
   - Form data is validated
   - Media is captured and processed
   - Event package is created and signed
   - Package is compressed and made available for download

## Error Handling

- **Initialization Errors**
  - Key generation failures
  - Network errors when loading labels
  - Storage access issues

- **Form Errors**
  - Required field validation
  - Input format validation
  - File type and size validation

- **Submission Errors**
  - Network connectivity issues
  - Package creation failures
  - Storage quota exceeded

## Localization

The application supports multiple languages through the `i18next` library. Translation files are located in `src/locales/` with separate files for each supported language.

## Dependencies

- **Core**
  - React 18
  - TypeScript
  - Vite

- **UI**
  - Tailwind CSS
  - Headless UI
  - Hero Icons

- **State Management**
  - React Hooks
  - React Context (for theme/language)

- **Form Handling**
  - React Hook Form
  - Yup (validation)

- **Internationalization**
  - i18next
  - react-i18next

- **Security**
  - Web Crypto API
  - Custom key management utilities

## Development Setup

1. **Prerequisites**
   - Node.js 16+
   - npm or yarn
   - Git

2. **Installation**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm install
   ```

3. **Development Server**

   ```bash
   npm run dev
   ```

   Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Production Build**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `dist` directory.

## Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test:watch

# Generate test coverage report
npm test:coverage
```

## Deployment

The application can be deployed to any static file hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Security Considerations

- All sensitive operations use secure cryptographic APIs
- Keys are stored securely in IndexedDB
- No sensitive data is logged to the console in production
- HTTPS is required for all network requests in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

[Your License Here]
