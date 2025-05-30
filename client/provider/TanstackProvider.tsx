"use client"

import { ReactNode, useState } from "react"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const TanstackProvider = ({children}:{children: React.ReactNode}) => {

const queryClient = new QueryClient();


  return (



   <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}>
        </ReactQueryDevtools>
   </QueryClientProvider>
  )
}

export default TanstackProvider