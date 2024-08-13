import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { CreateRoom } from "./pages/create-room"
import { queryClient } from "./lib/react-query"
import { Room } from "./pages/room"
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />
  },
  {
    path: "/room/:roomId",
    element: <Room />
  }
])

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster invert richColors />
    </QueryClientProvider>
  )
}

