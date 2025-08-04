# Code Review Recommendations

This document summarizes the recommendations from the code review of the EventApp codebase.

## High-Priority Recommendations

- **Encrypt the private key:** The private key is currently stored in plain text in IndexedDB, which is a major security vulnerability. You must encrypt the private key before storing it.
- **Move Proof of Work to a Web Worker:** The current PoW implementation blocks the main thread, which can lead to a poor user experience. You should move the PoW calculation to a Web Worker to avoid freezing the UI.
- **Remove AWS Credentials from Frontend:** The AWS credentials (`VITE_AWS_ACCESS_KEY_ID` and `VITE_AWS_SECRET_ACCESS_KEY`) are exposed in the frontend code. This is a **critical security vulnerability**. These credentials should never be exposed in the client-side code. An attacker could easily steal these credentials and gain access to your S3 bucket. You should use a backend service to handle the S3 upload.
- **Sign the Event Package:** The event package is not signed. This is a crucial security feature that is missing from the implementation. You need to implement the signing of the event package with the user's private key.

## Medium-Priority Recommendations

- **Use auto-incrementing `kid`s:** The `kid` is hardcoded in several places. You should use the auto-incrementing feature of IndexedDB to automatically generate unique `kid`s for each key pair.
- **Add a file size limit for media uploads:** This will prevent users from uploading very large files, which could cause performance issues or crash the browser.
- **Improve error handling:** There are several places where the error handling could be improved. You should provide more user-friendly error messages and ensure that errors are propagated correctly.
- **Add a random challenge string to the PoW:** This will make the PoW more resistant to pre-computation attacks.
- **Implement Cache Invalidation for Labels:** There should be a mechanism to invalidate the cached labels in `label-manager.ts`.

## Low-Priority Recommendations

- **Remove console logs:** Remove all `console.log` statements from the code before deploying to production.
- **Use a more robust MIME type parser:** Consider using a library to parse MIME types to handle edge cases correctly.
- **Validate media type on the client-side:** Validate the media type before uploading it to the server to catch errors earlier.
- **Show the welcome screen only on the first visit:** Use `localStorage` to store a flag indicating whether the user has seen the welcome screen before.
- **Use `i18n.language` in `getLocalizedText`:** The `getLocalizedText` helper should use the current language from `i18n` instead of defaulting to English.
- **Refactor `cleanData` creation:** The `cleanData` object is created in both `validate` and `handleSubmit`. You can create it once and pass it to both functions.
- **Disable i18n Debug Mode in Production:** The `debug` option in `i18n.ts` should be set to `false` in a production environment.
- **Improve Error Handling in `useLabelManagement`:** The `useLabelManagement` hook should re-throw errors so that they can be handled by the component.
- **Expand `MediaType` Type:** The `MediaType` type in `types/event.ts` should be expanded to include more media types as needed.
