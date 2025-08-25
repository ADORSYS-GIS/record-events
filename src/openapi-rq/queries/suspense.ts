// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { EventsService, HealthService } from "../requests/services.gen";
import * as Common from "./common";
export const useEventsServiceGetApiV1EventsByHashVerifySuspense = <TData = Common.EventsServiceGetApiV1EventsByHashVerifyDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ hash }: {
  hash: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEventsServiceGetApiV1EventsByHashVerifyKeyFn({ hash }, queryKey), queryFn: () => EventsService.getApiV1EventsByHashVerify({ hash }) as TData, ...options });
export const useHealthServiceGetHealthSuspense = <TData = Common.HealthServiceGetHealthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseHealthServiceGetHealthKeyFn(queryKey), queryFn: () => HealthService.getHealth() as TData, ...options });
