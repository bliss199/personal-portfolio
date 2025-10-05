export const projects = [
  {
    id: 'visioncheck',
    title: 'VisionCheck',
    summary: `A simple mobile proof of concept that uses the iPhone front camera to estimate reading distance and font legibility.`,
    pitch: `Mobile eye health screening app that nudges people to book real eye exams if results are below threshold.`,
    stack: ['Swift', 'Computer Vision', 'On-device ML'],
    image: '/projects/visioncheck.png',
    links: {
      code: 'https://github.com/bliss199',
      demo: null,
      caseStudy: '/projects/visioncheck'
    },
    color: '#60A5FA',
    role: 'Solo Developer',
    timeframe: 'Fall 2024 (3 weeks)',
    problem: `Many people avoid eye exams until vision problems become severe. There's a need for accessible, preliminary screening tools that can encourage proactive eye health.`,
    approach: `Built a mobile app using the iPhone front camera and simple computer vision heuristics to estimate reading distance and test font legibility. The app offers on-device visual acuity tests with clear instructions. Results are processed locally for privacy, and users receive actionable feedback about whether they should book a professional exam.`,
    outcome: `Created a functional proof of concept that successfully demonstrates distance estimation and basic visual tests. User testing with 15 participants showed that 80% found the app intuitive and would use it as a first step before booking an exam.`,
    wins: [
      'On-device processing ensures user privacy',
      `Simple UI that doesn't overwhelm non-technical users`,
      'Clear call-to-action based on test results'
    ],
    lessons: [
      'Camera calibration varies significantly between iPhone models',
      'Lighting conditions affect accuracy more than expected',
      'Users want more explanation about what each test measures'
    ],
    improvements: `If I had more time, I would add more robust lighting detection, implement camera calibration for different devices, and create an optional results history feature. I'd also explore integrating with HealthKit for a more comprehensive health tracking experience.`,
    gallery: [
      { src: '/projects/visioncheck-1.png', caption: 'Main screen showing distance estimation' },
      { src: '/projects/visioncheck-2.png', caption: 'Visual acuity test interface' },
      { src: '/projects/visioncheck-3.png', caption: 'Results summary and recommendations' }
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

