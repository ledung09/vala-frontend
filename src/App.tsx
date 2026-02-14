import { AppBar } from '@/_shared/components/smart/app-bar';
import SearchItem from '@/features/search/components/search-item.tsx';

export function App() {
  return (
    <div>
      <AppBar />
      <div className="mx-auto max-w-4xl">
        <span>1000 games match your search</span>
        <div className="flex flex-col gap-4">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  );
}

export default App;
