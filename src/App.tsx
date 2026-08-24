
import Header from './components/header'
import FilterBar from './components/filter-bar'
import BarChart from './components/plan'
import NakopitelniPlan from './components/nakopitelni-plan'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="px-6 py-4 flex flex-col gap-4">
        <FilterBar />
        <BarChart />
        <NakopitelniPlan />
      </main>
    </div>
  )
}

export default App




