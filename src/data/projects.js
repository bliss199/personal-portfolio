export const projects = [
  {
    id: 'eyespy',
    title: 'EyeSpy',
    summary: `A mobile vision acuity testing application that uses Apple's TrueDepth camera and speech recognition to perform Snellen chart tests.`,
    pitch: `Mobile eye health screening app that provides accurate at-home vision testing using depth mapping and hands-free interaction.`,
    stack: ['React Native', 'TypeScript', 'Apple TrueDepth', 'Speech Recognition'],
    image: 'animated', // Will use EyeSpyAnimation component
    links: {
      code: 'https://github.com/bliss199/EyeSpy',
      demo: null,
      caseStudy: '/projects/eyespy',
      report: '/SFU_CMPT340_ProjectGroup_13.pdf'
    },
    color: '#60A5FA',
    role: 'Team Member (5-person group)',
    timeframe: 'Fall 2024 (CMPT340)',
    problem: `Vision impairment affects 2.2 billion people globally, with many lacking access to timely and affordable eye care. There's an urgent need for cost-effective solutions to help identify eyeglass prescriptions and enable early intervention for conditions like Myopia.`,
    approach: `Developed a React Native app that leverages Apple's TrueDepth camera array to measure user distance in real-time, dynamically scaling Snellen chart optotypes based on depth data. Integrated speech recognition for hands-free interaction and implemented a custom variation of the Snellen chart adapted for high-DPI mobile displays. The app calculates visual acuity using arcminutes and real-time distance measurements.`,
    outcome: `Successfully created a functional mobile vision testing application that accurately scales optotypes based on user distance. The app performs real-time depth calculations without delays and provides hands-free operation through speech recognition. While effective for mild myopia cases, we identified limitations with severe myopia due to screen size constraints and depth data processing delays.`,
    wins: [
      'Real-time depth mapping with Apple TrueDepth camera',
      'Hands-free operation using speech recognition APIs',
      'Accurate scaling of Snellen chart for mobile format',
      'Cross-platform development with React Native and Expo',
      'Custom native module development for depth data access'
    ],
    lessons: [
      'TrueDepth camera data requires custom React Native bridging',
      'Screen size limitations affect accuracy for severe vision issues',
      'Depth data processing can have delays during user movement',
      'Speech recognition APIs vary significantly between platforms',
      'Snellen chart adaptation for mobile requires careful mathematical scaling'
    ],
    improvements: `Future improvements include redesigning for iPad screens to increase test accuracy, implementing Face Tracking to limit depth readings to facial regions, replacing Snellen chart with LogMAR chart for better precision, adding support for other acuity tests like "Tumbling E" chart for accessibility, and exploring Android compatibility for broader reach.`,
    gallery: [
      { src: '/projects/unnamed-1.png', caption: 'App starting page with clean interface' },
      { src: '/projects/unnamed-2.png', caption: 'Test welcome page with instructions' },
      { src: '/projects/unnamed-3.png', caption: 'Depth test comparison showing far distance' },
      { src: '/projects/unnamed-4.png', caption: 'Depth test comparison showing near distance' },
      { src: '/projects/unnamed-5.png', caption: 'Example of partially correct row (2/5 letters)' },
      { src: '/projects/unnamed-6.png', caption: 'Test results showing left and right eye scores' }
    ]
  },
  {
    id: 'routesaver',
    title: 'RouteSaver',
    summary: `A practical tool that takes delivery stops or errands and proposes a route that reduces backtracking.`,
    pitch: `Smart route optimization for everyday errands. Enter your stops, get an efficient path.`,
    stack: ['TypeScript', 'Node.js', 'Mapbox API'],
    image: '/projects/routesaver.png',
    links: {
      code: 'https://github.com/bliss199',
      demo: 'https://routesaver-demo.vercel.app',
      caseStudy: '/projects/routesaver'
    },
    color: '#34D399',
    role: 'Solo Developer',
    timeframe: 'Summer 2024 (2 weeks)',
    problem: `Planning efficient routes for multiple stops is tedious and error-prone. People waste time and fuel backtracking through city traffic. Existing solutions are either too complex or too expensive for casual use.`,
    approach: `Built a web app that accepts a list of addresses, normalizes them using a geocoding API, and applies a nearest-neighbor heuristic with city traffic patterns. The algorithm prioritizes reducing total distance while accounting for one-way streets and peak hours. Results are visualized on an interactive map and can be exported as a shareable link.`,
    outcome: `Deployed a working tool that reduces average route time by 25% compared to arbitrary ordering. The app handles 5-15 stops efficiently and provides turn-by-turn navigation links. Shared with local delivery drivers who reported saving 30+ minutes daily.`,
    wins: [
      'Fast route calculation (under 2 seconds for 10 stops)',
      'Clean map visualization with color-coded route segments',
      'Shareable links make it easy to send routes to others'
    ],
    lessons: [
      'Geocoding APIs have rate limits that need careful handling',
      `Traffic patterns change throughout the day—static data isn't enough`,
      'Users want to manually adjust stop order for special cases'
    ],
    improvements: `Given more time, I would implement real-time traffic data integration, add drag-and-drop stop reordering, and create a mobile app version with offline route caching. I'd also explore more sophisticated algorithms like Christofides or 2-opt for larger route sets.`,
    gallery: [
      { src: '/projects/routesaver-1.png', caption: 'Address input and route preview' },
      { src: '/projects/routesaver-2.png', caption: 'Optimized route visualization' }
    ]
  },
  {
    id: 'pathfinder',
    title: 'Pathfinder',
    summary: `A visualizer for A* and Uniform Cost Search algorithms built while learning graph algorithms.`,
    pitch: `Interactive grid-based pathfinding visualizer comparing heuristic search algorithms.`,
    stack: ['JavaScript', 'React', 'Canvas API'],
    image: '/projects/pathfinder.png',
    links: {
      code: 'https://github.com/bliss199',
      demo: 'https://pathfinder-viz.vercel.app',
      caseStudy: '/projects/pathfinder'
    },
    color: '#F59E0B',
    role: 'Solo Developer',
    timeframe: 'Spring 2024 (1 week)',
    problem: `Understanding search algorithms like A* and UCS requires visualizing how they explore state spaces. Textbook diagrams are static and don't show the algorithm's decision-making process in real time.`,
    approach: `Created an interactive grid where users can place start/end points and obstacles, then watch A* or UCS find the optimal path. The visualization shows nodes as they're explored, with color-coded visited/frontier states. Users can adjust heuristic weights and compare algorithm performance side-by-side.`,
    outcome: `Built a smooth, responsive visualizer that runs at 60fps with grids up to 50x50. The tool has been used by 200+ students in online algorithm communities. Performance metrics show clear differences between informed and uninformed search strategies.`,
    wins: [
      'Smooth animation with speed controls',
      'Side-by-side algorithm comparison mode',
      'Performance metrics (nodes explored, time taken)'
    ],
    lessons: [
      'Canvas API performs better than DOM manipulation for large grids',
      'Priority queue implementation significantly affects A* speed',
      'Visual feedback needs careful timing to be educational, not overwhelming'
    ],
    improvements: `With more time, I would add weighted edges for terrain types, implement bidirectional search variants, and create a step-by-step debug mode. I'd also add popular algorithms like Dijkstra's and Jump Point Search for comparison.`,
    gallery: [
      { src: '/projects/pathfinder-1.png', caption: 'A* algorithm in action' },
      { src: '/projects/pathfinder-2.png', caption: 'UCS comparison view' }
    ]
  }
];

