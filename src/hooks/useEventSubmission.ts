import { toast } from "sonner";
import { useEventsServicePostApiV1EventsPackage } from "../openapi-rq/queries/queries";

export const useEventSubmission = () => {
  const mutation = useEventsServicePostApiV1EventsPackage({
    onSuccess: () => {
      toast.success("Event submitted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to submit event");
      console.error("Submission error:", error);
    },
  });

  type SignedEventPackage = string;

  const submitEventAsync = async (signedEventPackage: SignedEventPackage) => {
    await mutation.mutateAsync({ requestBody: signedEventPackage });
  };

  return {
    submitEventAsync,
    isSubmitting: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
};
