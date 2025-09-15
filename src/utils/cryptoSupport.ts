// Utility to check Web Crypto API availability and provide helpful error messages

export interface CryptoSupport {
  isAvailable: boolean;
  error?: string;
  recommendations: string[];
}

export function checkWebCryptoSupport(): CryptoSupport {
  // Check if we're in a secure context
  const isSecureContext = window.isSecureContext;
  
  // Check if crypto object exists
  const hasCrypto = typeof window.crypto !== 'undefined';
  
  // Check if subtle crypto is available
  const hasSubtle = hasCrypto && typeof window.crypto.subtle !== 'undefined';

  if (!hasCrypto) {
    return {
      isAvailable: false,
      error: "Web Crypto API is not supported in this browser",
      recommendations: [
        "Please use a modern browser (Chrome 37+, Firefox 34+, Safari 7+, Edge 12+)",
        "Update your browser to the latest version"
      ]
    };
  }

  if (!hasSubtle) {
    return {
      isAvailable: false,
      error: "Crypto Subtle API is not available - this usually means you're accessing the site over HTTP",
      recommendations: [
        "Access the application over HTTPS instead of HTTP",
        "If developing locally, use 'localhost' instead of your IP address",
        "Or use a development server with HTTPS enabled"
      ]
    };
  }

  if (!isSecureContext) {
    return {
      isAvailable: false,
      error: "Application is not running in a secure context",
      recommendations: [
        "Access the application over HTTPS",
        "If developing locally, use 'localhost' instead of an IP address"
      ]
    };
  }

  return {
    isAvailable: true,
    recommendations: []
  };
}

export function getWebCryptoErrorMessage(): string {
  const support = checkWebCryptoSupport();
  
  if (support.isAvailable) {
    return "";
  }

  let message = `🔒 Cryptographic Error: ${support.error}\n\n`;
  message += "To fix this issue:\n";
  support.recommendations.forEach((rec, index) => {
    message += `${index + 1}. ${rec}\n`;
  });

  return message;
}