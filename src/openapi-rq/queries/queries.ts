// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { EventsService, HealthService } from "../requests/services.gen";
import { EventPackage, EventPayload } from "../requests/types.gen";
import * as Common from "./common";
export const useEventsServiceGetApiV1EventsByHashVerify = <TData = Common.EventsServiceGetApiV1EventsByHashVerifyDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ hash }: {
  hash: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEventsServiceGetApiV1EventsByHashVerifyKeyFn({ hash }, queryKey), queryFn: () => EventsService.getApiV1EventsByHashVerify({ hash }) as TData, ...options });
export const useHealthServiceGetHealth = <TData = Common.HealthServiceGetHealthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseHealthServiceGetHealthKeyFn(queryKey), queryFn: () => HealthService.getHealth() as TData, ...options });
export const useEventsServicePostApiV1Events = <TData = Common.EventsServicePostApiV1EventsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EventPackage;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EventPackage;
}, TContext>({ mutationFn: ({ requestBody }) => EventsService.postApiV1Events({ requestBody }) as unknown as Promise<TData>, ...options });
export const useEventsServicePostApiV1EventsPackage = <TData = Common.EventsServicePostApiV1EventsPackageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EventPackage;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EventPackage;
}, TContext>({ mutationFn: ({ requestBody }) => EventsService.postApiV1EventsPackage({ requestBody }) as unknown as Promise<TData>, ...options });
export const useEventsServicePostApiV1EventsUpload = <TData = Common.EventsServicePostApiV1EventsUploadMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EventPayload;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EventPayload;
}, TContext>({ mutationFn: ({ requestBody }) => EventsService.postApiV1EventsUpload({ requestBody }) as unknown as Promise<TData>, ...options });
