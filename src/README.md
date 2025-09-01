# Frontend Architecture

This document describes the refactored frontend architecture with proper page-based routing and clean component organization.

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dashboard.tsx
│   ├── EventForm.tsx
│   ├── LoadingSpinner.tsx
│   ├── OnboardingFlow.tsx
│   └── WelcomeScreen.tsx
├── pages/              # Page components that use components
│   ├── DashboardPage.tsx
│   ├── ErrorPage.tsx
│   ├── EventFormPage.tsx
│   ├── LoadingPage.tsx
│   ├── OnboardingPage.tsx
│   └── WelcomePage.tsx
├── layouts/            # Layout components
│   └── MainLayout.tsx
├── routes/             # Route configurations
│   └── AppRoutes.tsx
├── hooks/              # Custom React hooks
├── services/           # API and external services
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── labels/             # Label management
├── locales/            # Internationalization
└── lib/                # Third-party library configurations
```

## 🏗️ Architecture Overview

### **Pages** (`src/pages/`)

- **Purpose**: Page-level components that compose other components
- **Responsibility**: Handle page-specific logic and data flow
- **Example**: `DashboardPage` uses `Dashboard` component with proper props

### **Components** (`src/components/`)

- **Purpose**: Reusable UI components
- **Responsibility**: Pure presentation and user interaction
- **Example**: `Dashboard` component handles UI rendering and user events

### **Layouts** (`src/layouts/`)

- **Purpose**: Layout wrappers for pages
- **Responsibility**: Common UI elements (navigation, footer, etc.)
- **Example**: `MainLayout` provides consistent page structure

### **Routes** (`src/routes/`)

- **Purpose**: Route configuration and navigation logic
- **Responsibility**: Define application routing and page transitions
- **Example**: `AppRoutes` manages all application routes

## 🔄 Data Flow

```
App.tsx (State Management)
    ↓
AppRoutes.tsx (Route Logic)
    ↓
Pages (Page Logic)
    ↓
Components (UI Rendering)
```

## 🎯 Key Improvements

1. **Separation of Concerns**: Pages handle logic, components handle UI
2. **Clean Routing**: Proper React Router implementation
3. **Reusable Components**: Components are now truly reusable
4. **Type Safety**: Better TypeScript integration
5. **Maintainability**: Easier to maintain and extend

## 🚀 Usage

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/routes/AppRoutes.tsx`
3. Export from `src/pages/index.ts`

### Adding a New Component

1. Create component in `src/components/`
2. Use in appropriate page
3. Ensure proper TypeScript interfaces

## 📝 Best Practices

- **Pages**: Handle data fetching, state management, and business logic
- **Components**: Focus on presentation and user interaction
- **Hooks**: Extract reusable logic
- **Types**: Define clear interfaces for all components
- **Imports**: Use index files for cleaner imports
