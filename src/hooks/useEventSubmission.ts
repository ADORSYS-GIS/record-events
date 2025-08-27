import { toast } from "sonner";
import { useEventsServicePostApiV1EventsPackage } from "../openapi-rq/queries/queries";
import { SignedEventPackage } from "../openapi-rq/requests/types.gen";

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

  const submitEvent = (signedEventPackage: SignedEventPackage) => {
    mutation.mutate({ requestBody: signedEventPackage });
  };

  return {
    submitEvent,
    isSubmitting: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
};
