import React from 'react';
import PageUsers from "./PageUsers";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PageUsers />
    </QueryClientProvider>
  );
}

export default App;
