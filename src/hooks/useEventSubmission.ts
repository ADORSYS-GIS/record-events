import { toast } from "sonner";
import { useEventsServicePostApiV1EventsPackage } from "../openapi-rq/queries/queries";

export const useEventSubmission = () => {
  const formDataMutation = useEventsServicePostApiV1EventsPackage({
    onSuccess: () => {
      toast.success("Event data submitted successfully!");
    },
  });

  const imageMutation = useEventsServicePostApiV1EventsPackage({
    onSuccess: () => {
      toast.success("Event image submitted successfully!");
    },
  });

  type SignedEventPackage = string;

  const submitEventDataAsync = async (
    signedEventPackage: SignedEventPackage,
  ) => {
    await formDataMutation.mutateAsync({ requestBody: signedEventPackage });
  };

  const submitEventImageAsync = async (
    signedEventPackage: SignedEventPackage,
  ) => {
    await imageMutation.mutateAsync({ requestBody: signedEventPackage });
  };

  return {
    submitEventAsync: submitEventDataAsync,
    submitEventDataAsync,
    submitEventImageAsync,
    isSubmitting: formDataMutation.isPending || imageMutation.isPending,
    isSubmittingData: formDataMutation.isPending,
    isSubmittingImage: imageMutation.isPending,
    error: formDataMutation.error || imageMutation.error,
    errorData: formDataMutation.error,
    errorImage: imageMutation.error,
    data: formDataMutation.data,
    dataData: formDataMutation.data,
    dataImage: imageMutation.data,
  };
};
