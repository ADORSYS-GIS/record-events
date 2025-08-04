import { useEffect, useState } from "react";
import { initializeLabels, type Label } from "../labels/label-manager";

export function useLabelManagement() {
  const [labels, setLabels] = useState<Label[]>([]);
  const [labelStatus, setLabelStatus] = useState("Labels: Initializing...");

  useEffect(() => {
    const init = async () => {
      try {
        setLabelStatus("Labels: Fetching...");
        const fetchedLabels = await initializeLabels();
        setLabels(fetchedLabels);
        setLabelStatus("Labels: Loaded.");
      } catch (error) {
        setLabelStatus(`Labels: Error - ${error}`);
        console.error("Label management error:", error);
      }
    };
    init();
  }, []);

  return { labels, labelStatus };
}
