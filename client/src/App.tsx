import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import VoyageTurkya from "./pages/VoyageTurkya";
import VoyageArmenia from "./pages/VoyageArmenia";
import VoyageSriLanka from "./pages/VoyageSriLanka";
import Umrah from "./pages/Umrah";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/voyage-turkya" component={VoyageTurkya} />
      <Route path="/voyage-armenia" component={VoyageArmenia} />
      <Route path="/voyage-srilanka" component={VoyageSriLanka} />
      <Route path="/umrah" component={Umrah} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
