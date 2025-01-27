export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-white text-center text-2xl font-bold">Credits</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Projecten</h2>
          <p className="text-gray-600 mt-2">Ontdek onze verschillende projecten</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-600">Een korte beschrijving van het eerste project.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Meer Info
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-600">Een korte beschrijving van het tweede project.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Meer Info
              </button>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
              <p className="text-gray-600">Een korte beschrijving van het derde project.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Meer Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }  