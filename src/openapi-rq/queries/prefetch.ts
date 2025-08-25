// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { EventsService, HealthService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseEventsServiceGetApiV1EventsByHashVerify = (queryClient: QueryClient, { hash }: {
  hash: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseEventsServiceGetApiV1EventsByHashVerifyKeyFn({ hash }), queryFn: () => EventsService.getApiV1EventsByHashVerify({ hash }) });
export const prefetchUseHealthServiceGetHealth = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseHealthServiceGetHealthKeyFn(), queryFn: () => HealthService.getHealth() });
