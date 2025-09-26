import { toast } from "sonner";
// TODO: Replace with actual hooks when the backend is updated
import {
  useEventsServicePostApiV1EventsPackage,
  useEventsServicePostApiV1EventsFormData,
  useEventsServicePostApiV1EventsImage,
} from "../openapi-rq/queries/queries";

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

  const formDataMutation = useEventsServicePostApiV1EventsFormData({
    onSuccess: () => {
      toast.success("Event data submitted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to submit event data");
      console.error("Submission error:", error);
    },
  });

  const imageMutation = useEventsServicePostApiV1EventsImage({
    onSuccess: () => {
      toast.success("Event image submitted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to submit event image");
      console.error("Submission error:", error);
    },
  });

  type SignedEventPackage = string;

  const submitEventAsync = async (signedEventPackage: SignedEventPackage) => {
    await mutation.mutateAsync({ requestBody: signedEventPackage });
  };

  const submitEventDataAsync = async (signedEventPackage: SignedEventPackage) => {
    await formDataMutation.mutateAsync({ requestBody: signedEventPackage });
  };

  const submitEventImageAsync = async (signedEventPackage: SignedEventPackage) => {
    await imageMutation.mutateAsync({ requestBody: signedEventPackage });
  };

  return {
    submitEventAsync,
    submitEventDataAsync,
    submitEventImageAsync,
    isSubmitting: mutation.isPending,
    isSubmittingData: formDataMutation.isPending,
    isSubmittingImage: imageMutation.isPending,
    error: mutation.error,
    errorData: formDataMutation.error,
    errorImage: imageMutation.error,
    data: mutation.data,
    dataData: formDataMutation.data,
    dataImage: imageMutation.data,
  };
};
