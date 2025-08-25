// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { EventsService, HealthService } from "../requests/services.gen";
export type EventsServiceGetApiV1EventsByHashVerifyDefaultResponse = Awaited<ReturnType<typeof EventsService.getApiV1EventsByHashVerify>>;
export type EventsServiceGetApiV1EventsByHashVerifyQueryResult<TData = EventsServiceGetApiV1EventsByHashVerifyDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useEventsServiceGetApiV1EventsByHashVerifyKey = "EventsServiceGetApiV1EventsByHashVerify";
export const UseEventsServiceGetApiV1EventsByHashVerifyKeyFn = ({ hash }: {
  hash: string;
}, queryKey?: Array<unknown>) => [useEventsServiceGetApiV1EventsByHashVerifyKey, ...(queryKey ?? [{ hash }])];
export type HealthServiceGetHealthDefaultResponse = Awaited<ReturnType<typeof HealthService.getHealth>>;
export type HealthServiceGetHealthQueryResult<TData = HealthServiceGetHealthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useHealthServiceGetHealthKey = "HealthServiceGetHealth";
export const UseHealthServiceGetHealthKeyFn = (queryKey?: Array<unknown>) => [useHealthServiceGetHealthKey, ...(queryKey ?? [])];
export type EventsServicePostApiV1EventsMutationResult = Awaited<ReturnType<typeof EventsService.postApiV1Events>>;
export type EventsServicePostApiV1EventsPackageMutationResult = Awaited<ReturnType<typeof EventsService.postApiV1EventsPackage>>;
export type EventsServicePostApiV1EventsUploadMutationResult = Awaited<ReturnType<typeof EventsService.postApiV1EventsUpload>>;
