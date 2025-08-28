# Frontend-Backend Migration Plan

## Overview

This document outlines the step-by-step process to replace all mock functionality in the frontend with real backend integration using the OpenAPI-generated client.

## Current State Analysis

### Mock Functionality to Replace:

#### 1. **EventForm.tsx** - Event Submission

**Current Mock Implementation:**

- Direct S3 upload via AWS Lambda endpoint
- Hardcoded API endpoint: `https://46af8nd05j.execute-api.eu-north-1.amazonaws.com/prod`
- Manual ZIP creation and upload
- No backend event processing

**Backend Integration Needed:**

- Use `useEventsServicePostApiV1EventsPackage()` for event submission
- Send `EventPackage` to backend for processing
- Backend handles ZIP creation and S3 upload
- Get `ProcessingResult` with event ID and hash

#### 2. **Dashboard.tsx** - Event History

**Current Mock Implementation:**

- Hardcoded `recentEvents` array
- Static status indicators
- No real data fetching

**Backend Integration Needed:**

- Use `useEventsServiceGetApiV1EventsByHashVerify()` for verification
- Implement event history tracking
- Real-time status updates

#### 3. **App.tsx** - Application State

**Current Mock Implementation:**

- Local storage for onboarding state
- No backend health checks
- No real authentication

**Backend Integration Needed:**

- Use `useHealthServiceGetHealth()` for backend monitoring
- Implement proper error handling for backend connectivity

## Migration Steps

### Phase 1: Setup React Query Infrastructure

#### Step 1.1: Install and Configure React Query

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

#### Step 1.2: Create Query Client Configuration

```typescript
// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
    },
  },
});
```

#### Step 1.3: Update main.tsx with Query Provider

```typescript
// src/main.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './lib/queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
```

### Phase 2: Replace EventForm Submission

#### Step 2.1: Create Event Submission Hook

```typescript
// src/hooks/useEventSubmission.ts
import { useEventsServicePostApiV1EventsPackage } from "../openapi-rq/queries/queries";
import { EventPackage } from "../openapi-rq/requests/types.gen";
import { toast } from "sonner";

export const useEventSubmission = () => {
  const mutation = useEventsServicePostApiV1EventsPackage({
    onSuccess: (data) => {
      toast.success("Event submitted successfully!");
      console.log("Event processed:", data);
    },
    onError: (error) => {
      toast.error("Failed to submit event");
      console.error("Submission error:", error);
    },
  });

  const submitEvent = (eventPackage: EventPackage) => {
    mutation.mutate({ requestBody: eventPackage });
  };

  return {
    submitEvent,
    isSubmitting: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
};
```

#### Step 2.2: Update EventForm.tsx

**Replace the entire `handleSubmit` function:**

```typescript
// OLD: Direct S3 upload
const handleSubmit = async (e: React.FormEvent) => {
  // ... existing validation code ...

  // NEW: Use backend API
  const eventPackage: EventPackage = {
    id: generateUUID(),
    version: "1.0.0",
    annotations: annotations,
    metadata: {
      createdAt: new Date().toISOString(),
      source: "web",
      createdBy: createdBy || "anonymous",
    },
    media: mediaFile
      ? {
          data: await fileToBase64(mediaFile),
          name: mediaFile.name,
          type: mediaFile.type as MediaType,
          size: mediaFile.size,
          lastModified: mediaFile.lastModified,
        }
      : null,
  };

  submitEvent(eventPackage);
};
```

#### Step 2.3: Update Form State Management

```typescript
// Add to EventForm component
const { submitEvent, isSubmitting, error } = useEventSubmission();

// Replace local isSubmitting state with React Query state
// Remove: const [isSubmitting, setIsSubmitting] = useState(false);
```

### Phase 3: Implement Event History and Verification

#### Step 3.1: Create Event History Hook

```typescript
// src/hooks/useEventHistory.ts
import { useEventsServiceGetApiV1EventsByHashVerify } from "../openapi-rq/queries/queries";

export const useEventHistory = () => {
  // This will need to be enhanced when backend provides event listing
  const verifyEvent = (hash: string) => {
    return useEventsServiceGetApiV1EventsByHashVerify({ hash });
  };

  return { verifyEvent };
};
```

#### Step 3.2: Update Dashboard.tsx

**Replace mock data with real data:**

```typescript
// OLD: Mock data
const recentEvents = [
  {
    id: 1,
    title: "Traffic Incident",
    status: "submitted",
    timestamp: "2 hours ago",
  },
  // ...
];

// NEW: Real data (placeholder until backend provides listing)
const [recentEvents, setRecentEvents] = useState([]);

// Add event verification functionality
const verifyEventHash = async (hash: string) => {
  const { data } = await useEventsServiceGetApiV1EventsByHashVerify({ hash });
  return data?.exists || false;
};
```

### Phase 4: Add Backend Health Monitoring

#### Step 4.1: Create Health Check Hook

```typescript
// src/hooks/useBackendHealth.ts
import { useHealthServiceGetHealth } from "../openapi-rq/queries/queries";

export const useBackendHealth = () => {
  const {
    data: health,
    isLoading,
    error,
  } = useHealthServiceGetHealth({
    refetchInterval: 30000, // Check every 30 seconds
  });

  return {
    isHealthy: health?.status === "healthy",
    isLoading,
    error,
    health,
  };
};
```

#### Step 4.2: Update App.tsx

```typescript
// Add health monitoring
const { isHealthy, isLoading: healthLoading } = useBackendHealth();

// Show backend status in UI
if (!isHealthy && !healthLoading) {
  return <BackendErrorDisplay />;
}
```

### Phase 5: Update Types and Utilities

#### Step 5.1: Replace Custom Types with Generated Types

```typescript
// OLD: src/types/event.ts
// NEW: Use types from src/openapi-rq/requests/types.gen.ts

import {
  EventPackage,
  EventAnnotation,
  EventMedia,
  EventMetadata,
  ProcessingResult,
} from "../openapi-rq/requests/types.gen";
```

#### Step 5.2: Update Event Packer Utility

```typescript
// src/utils/event-packer.ts
// Update to use generated types
import {
  EventPackage,
  EventAnnotation,
  EventMetadata,
} from "../openapi-rq/requests/types.gen";

export const createEventPackage = (
  annotations: EventAnnotation[],
  metadata: EventMetadata,
  media?: EventMedia,
): EventPackage => {
  return {
    id: generateUUID(),
    version: "1.0.0",
    annotations,
    metadata,
    media: media || null,
  };
};
```

### Phase 6: Error Handling and Loading States

#### Step 6.1: Create Global Error Boundary

```typescript
// src/components/ErrorBoundary.tsx
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

export const ErrorBoundary = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <h2>Something went wrong</h2>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};
```

#### Step 6.2: Add Loading States

```typescript
// Update all components to use React Query loading states
const { data, isLoading, error } = useSomeQuery();

if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

## Implementation Priority

### High Priority (Core Functionality)

1. ✅ **React Query Setup** - Foundation for all API calls
2. 🔄 **EventForm Submission** - Replace S3 upload with backend API
3. ⏳ **Backend Health Monitoring** - Ensure connectivity
4. ⏳ **Error Handling** - Proper error states

### Medium Priority (Enhanced Features)

1. ⏳ **Event Verification** - Verify submitted events
2. ⏳ **Event History** - Display submitted events
3. ⏳ **Real-time Updates** - Poll for status changes

### Low Priority (Nice to Have)

1. ⏳ **Offline Support** - Cache and sync when online
2. ⏳ **Advanced Filtering** - Search and filter events
3. ⏳ **Bulk Operations** - Multiple event management

## Testing Strategy

### Unit Tests

- Test hooks with mocked React Query
- Test utility functions with generated types
- Test error handling scenarios

### Integration Tests

- Test API calls with mock backend
- Test form submission flow
- Test error recovery

### E2E Tests

- Test complete event submission flow
- Test backend connectivity
- Test error scenarios

## Rollback Plan

If issues arise during migration:

1. Keep old mock implementations as fallbacks
2. Use feature flags to toggle between old/new implementations
3. Monitor error rates and performance
4. Have rollback scripts ready

## Success Metrics

- [ ] All mock data replaced with real API calls
- [ ] Event submission works end-to-end
- [ ] Error handling covers all scenarios
- [ ] Performance remains acceptable
- [ ] User experience is improved
- [ ] Backend connectivity is reliable
