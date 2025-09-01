import React from "react";
import {
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
} from "lucide-react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

interface ConnectionStatusProps {
  className?: string;
}

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  className = "",
}) => {
  const { isOnline, isConnected, connectionType, downlink, effectiveType } =
    useOnlineStatus();

  const getConnectionIcon = () => {
    if (!isOnline) {
      return <WifiOff className="w-4 h-4 text-red-500" />;
    }

    if (!isConnected) {
      return <SignalLow className="w-4 h-4 text-orange-500" />;
    }

    // Determine signal strength based on connection type
    switch (effectiveType) {
      case "4g":
        return <SignalHigh className="w-4 h-4 text-green-500" />;
      case "3g":
        return <SignalMedium className="w-4 h-4 text-yellow-500" />;
      case "2g":
      case "slow-2g":
        return <SignalLow className="w-4 h-4 text-orange-500" />;
      default:
        return <Wifi className="w-4 h-4 text-blue-500" />;
    }
  };

  const getConnectionText = () => {
    if (!isOnline) return "Offline";
    if (!isConnected) return "Poor Connection";

    switch (effectiveType) {
      case "4g":
        return "4G Connected";
      case "3g":
        return "3G Connected";
      case "2g":
        return "2G Connected";
      case "slow-2g":
        return "Slow Connection";
      default:
        return "Connected";
    }
  };

  const getConnectionColor = () => {
    if (!isOnline) return "text-red-600";
    if (!isConnected) return "text-orange-600";

    switch (effectiveType) {
      case "4g":
        return "text-green-600";
      case "3g":
        return "text-yellow-600";
      case "2g":
      case "slow-2g":
        return "text-orange-600";
      default:
        return "text-blue-600";
    }
  };

  const getPulseColor = () => {
    if (!isOnline) return "bg-red-500";
    if (!isConnected) return "bg-orange-500";

    switch (effectiveType) {
      case "4g":
        return "bg-green-500";
      case "3g":
        return "bg-yellow-500";
      case "2g":
      case "slow-2g":
        return "bg-orange-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Status indicator */}
      <div className="relative">
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${getPulseColor()}`}
        ></div>
        {/* Connection icon */}
        <div className="absolute -top-1 -right-1">{getConnectionIcon()}</div>
      </div>

      {/* Status text */}
      <span
        className={`text-sm font-medium transition-all duration-300 ${getConnectionColor()}`}
      >
        {getConnectionText()}
      </span>

      {/* Connection details tooltip */}
      {isOnline && (
        <div className="group relative">
          <div className="w-3 h-3 text-gray-400 cursor-help">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3.001 3.001 0 0113 8a3 3 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            <div className="text-center">
              <div className="font-medium mb-1">Connection Details</div>
              <div>Type: {effectiveType || "Unknown"}</div>
              {downlink && <div>Speed: {downlink.toFixed(1)} Mbps</div>}
              <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    effectiveType === "4g"
                      ? "bg-green-500"
                      : effectiveType === "3g"
                        ? "bg-yellow-500"
                        : effectiveType === "2g"
                          ? "bg-orange-500"
                          : "bg-red-500"
                  }`}
                  style={{
                    width:
                      effectiveType === "4g"
                        ? "100%"
                        : effectiveType === "3g"
                          ? "75%"
                          : effectiveType === "2g"
                            ? "50%"
                            : "25%",
                  }}
                ></div>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
