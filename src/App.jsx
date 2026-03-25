import AppRoute from './routes/AppRoute';
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div>
      <AppRoute />
      <Toaster />
    </div>
  )
}