import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import FetchPlaylist from './components/FetchPlaylist';
import { QueryClient, QueryClientProvider } from 'react-query' 
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
          <div className="center">
            <h1>Youtube API</h1>
            <FetchPlaylist />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
