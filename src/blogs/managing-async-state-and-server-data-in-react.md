---
title: Managing Async State and Server Data in React
description: Leverage TanStack Query to transition from complex, manual asynchronous operations to a simplified, highly efficient server state management system in React
published: 2025-12-07
comingSoon: false
restricted: true
restrictedToCompany: AAI Labs
externalLink: https://aai-labs.atlassian.net/wiki/x/AYD6gw
aiSummary: |
  This post explores the challenges of managing server state and asynchronous data fetching in React applications. It begins by demonstrating a “naive” implementation using React’s built-in `useState` and `useEffect` for fetching a list of users—a pattern that quickly becomes unwieldy when adding essentials like request cancellation, data refreshing, and automatic retries.

  A key insight is that server-state management introduces concerns such as caching, debouncing network calls, invalidation, and retries—problems that client-state libraries like React Context, Redux, or Zustand aren't designed to solve effectively.

  From there, the post introduces **TanStack Query** as a solution. Major ideas covered include:

  **Simplified Data Fetching:**  
  The `useQuery` hook streamlines data fetching and automatically provides `data`, `isLoading`, `error`, and `refetch` states.

  **Powerful Defaults:**  
  TanStack Query offers automatic retries (three attempts with exponential backoff), built-in caching, request deduping, and background refetching when the window regains focus, the network reconnects, or components remount.

  **Query Keys:**  
  These uniquely identify cached data, control when automatic refetching occurs (based on key changes), and enable features like invalidation and optimistic updates. Best practices include structuring keys by specificity and using key factories for consistency.

  **Mutations:**  
  The `useMutation` hook handles operations that change server data (POST, PUT, DELETE). Mutations are triggered on demand through `mutate`, and a common pattern is to invalidate related queries in `onSuccess` to ensure the UI reflects the latest data.

  **Custom Query Hooks:**  
  Wrapping `useQuery` in custom hooks (e.g., `useUsers()`) improves reusability and makes the data’s meaning clearer throughout the codebase.

  The post wraps up by recommending the use of `QueryClientProvider` at the top level of the app and enabling the TanStack React Query Devtools for easier debugging and state inspection.
---
