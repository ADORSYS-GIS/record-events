# EventApp Project Structure Analysis

## 📋 Overview

**EventApp** is a Progressive Web App (PWA) for decentralized event reporting with blockchain verification. Built with React 19, TypeScript, and Tailwind CSS.

## 🏗️ Core Architecture

### Entry Points
- **`src/main.tsx`** - App entry point with React setup and i18n provider
- **`src/App.tsx`** - Main orchestrator managing screen transitions and state

### Key Technologies
- React 19, TypeScript, Tailwind CSS
- Vite 7, IndexedDB, Web Crypto API
- react-i18next, PWA capabilities

## 🔐 Security & Key Management

### Hooks
- **`src/hooks/useKeyInitialization.ts`** - Manages cryptographic key generation and status
- **`src/hooks/useProofOfWork.ts`** - Handles PoW challenges for service authorization

### Services (`src/services/keyManagement/`)
- **`keyManagement.ts`** - Main orchestrator for key operations
- **`storageSetup.ts`** - IndexedDB schema for secure key storage
- **`storeKey.ts`** - Store/retrieve keys from IndexedDB
- **`checkKeyPairExists.ts`** - Verify existing keys
- **`generateKey.ts`** - Generate ECDSA key pairs

### Crypto
- **`src/crypto/pow.ts`** - Proof of Work implementation with SHA-256

## 🏷️ Label & Form Management

### Hooks
- **`src/hooks/useLabelManagement.ts`** - Fetches and caches label configurations

### Core System
- **`src/labels/label-manager.ts`** - Label definitions and management
  - Supports text, number, enum, boolean types
  - Bilingual support (EN/FR)
  - Validation constraints
  - Mock relay integration

### Types
- **`src/types/event.ts`** - TypeScript interfaces for EventPackage, EventAnnotation, EventMedia

## 📦 Data Processing & Export

### Utilities
- **`src/utils/event-packer.ts`** - Creates and validates event packages
- **`src/utils/zip-exporter.ts`** - ZIP file creation and download

### Key Functions
- `createEventPackage()` - Builds structured event data
- `validateFormData()` - Form validation against labels
- `exportEventPackageAsZip()` - Creates downloadable ZIP files

## 🌐 Internationalization

### Configuration
- **`src/i18n.ts`** - i18next setup with language detection
- **`src/locales/en/translation.json`** - English translations
- **`src/locales/fr/translation.json`** - French translations

## 🎨 UI Components

### Core Components
- **`src/components/WelcomeScreen.tsx`** - Landing page with language selection
- **`src/components/OnboardingFlow.tsx`** - Multi-step user onboarding
- **`src/components/Dashboard.tsx`** - Main interface for returning users
- **`src/components/EventForm.tsx`** - Dynamic form generation
- **`src/components/CameraCapture.tsx`** - Camera access and photo capture

### Features
- Dark/light mode support
- Responsive design
- Smooth animations
- Professional UI with blue color scheme

## 🎨 Styling & Configuration

### Configuration Files
- **`tailwind.config.js`** - Custom colors, animations, dark mode
- **`vite.config.ts`** - Build config with PWA plugin
- **`package.json`** - Dependencies and scripts

### Design System
- Custom color palette (primary, success, warning, error, neutral)
- Custom animations (fade-in, slide-up, bounce-gentle)
- Professional blue theme
- Mobile-first responsive design

## 📱 PWA Features

### Configuration
- Service worker for offline support
- App manifest for installability
- Auto-update capabilities
- Standalone display mode

## 🔄 Data Flow

### Application Flow
```
main.tsx → App.tsx → Key/Label Init → Welcome/Onboarding/Dashboard
```

### User Journey
```
Welcome → Language Selection → Onboarding → Dashboard → EventForm → Export
```

### Event Processing
```
Form Data → Validation → EventPackage → ZIP Export → Download/Submit
```

## 🚀 Missing Features & Improvements

### High Priority
1. **Backend Integration**
   - Real relay implementation
   - S3 upload functionality
   - Blockchain integration
   - Certificate management

2. **Testing**
   - Unit tests for components
   - Integration tests
   - E2E testing

3. **Security Enhancements**
   - Biometric authentication
   - Encrypted storage
   - Certificate renewal

### Medium Priority
1. **Enhanced Features**
   - Event history/management
   - Offline support
   - Push notifications
   - QR code sharing

2. **Advanced UI/UX**
   - Map view for events
   - Advanced media handling
   - Real-time collaboration
   - Advanced search/filtering

3. **Performance**
   - Image optimization
   - Background sync
   - Error recovery
   - Performance monitoring

### Low Priority
1. **Admin Features**
   - Admin dashboard
   - Analytics
   - User management
   - System monitoring

2. **Documentation**
   - API documentation
   - Developer guides
   - Deployment guides

## 📊 Implementation Roadmap

### Phase 1: Core Backend (Weeks 1-4)
- Real relay implementation
- S3 integration
- Basic testing

### Phase 2: Enhanced Features (Weeks 5-8)
- Event history
- Offline support
- Advanced UI components

### Phase 3: Security & Performance (Weeks 9-12)
- Security enhancements
- Performance optimization
- Advanced testing

### Phase 4: Enterprise Features (Weeks 13-16)
- Admin dashboard
- Advanced export
- Complete documentation

## 🎯 Conclusion

EventApp has a solid foundation with:
- ✅ Type-safe TypeScript architecture
- ✅ Modular component structure
- ✅ Comprehensive i18n support
- ✅ Professional UI/UX
- ✅ PWA capabilities
- ✅ Cryptographic security

**Next Steps**: Focus on backend integration, testing, and enhanced features to create a production-ready event reporting platform.
