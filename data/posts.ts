export const posts = [
  {
    title:
      'From Finance to Code: My Unconventional Journey into Web Development',
    slug: 'from-finance-to-code',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Career Journey',
    excerpt:
      'How a finance student fell in love with code and traded spreadsheets for syntax.',
    posted_at: 'April 17, posted_at',
    reading_time: '8 min',
    body: `
          <div class="prose prose-lg max-w-none prose-headings:font-sans prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic">
            <p class="text-xl leading-relaxed mb-6">It started with a nagging curiosity that refused to be ignored. There I was, a second-year Finance major at Cairo University, drowning in financial statements and macroeconomic theories, when a single browser tab changed everything.</p>
      
            <div class="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-400">
              <h3 class="text-2xl font-semibold mb-4 text-gray-900">The Accidental Discovery</h3>
              <p>One late night between corporate finance assignments, I stumbled upon a YouTube tutorial titled <span class="font-mono bg-gray-100 px-2 py-1 rounded">"Build Your First Website in 1 Hour!"</span>. The instructor typed <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>, and like magic, those symbols transformed into visible text. My spreadsheet-filled screen suddenly felt... limiting.</p>
              <p class="mt-4">That week, I built my first webpage a horribly centered, neon-green monstrosity with blinking text. It was glorious.</p>
            </div>
      
            <h3 class="text-2xl font-semibold mt-10 mb-4 text-gray-900">The Double Life</h3>
            <p>For months, I lived two lives:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>By day:</strong> Analyzing cash flow statements in lecture halls</li>
              <li><strong>By night:</strong> Obsessively learning CSS flexbox through trial and catastrophic error</li>
            </ul>
            <p>My finance textbooks gathered dust as I plowed through JavaScript tutorials. The logical problem-solving of accounting had prepared me well debugging felt like forensic accounting, but with instant visual feedback.</p>
      
            <div class="grid md:grid-cols-2 gap-6 my-8">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 class="font-medium text-lg mb-2">What Finance Gave Me</h4>
                <p class="text-gray-600">Analytical rigor • Data interpretation • Business context</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 class="font-medium text-lg mb-2">What Code Added</h4>
                <p class="text-gray-600">Creative expression • Problem-solving superpowers • The ability to build solutions</p>
              </div>
            </div>
      
            <h3 class="text-2xl font-semibold mt-10 mb-4 text-gray-900">The Python Epiphany</h3>
            <p>When I discovered Python, everything clicked. Here was a language that could:</p>
            <ol class="list-decimal pl-6 space-y-2 mb-6">
              <li>Automate my tedious finance homework</li>
              <li>Build actual applications with Django/Flask</li>
              <li>Make data come alive through visualization</li>
            </ol>
            <p>I'll never forget the first time I built a <span class="font-mono bg-gray-100 px-2 py-1 rounded">compound interest calculator</span> bridging my two worlds. Finance provided the formulas, but code gave them interactive form.</p>
      
            <blockquote class="text-xl italic border-l-4 border-gray-400 pl-6 my-10 text-gray-700">
              "In finance, I learned to predict the future. In programming, I learned to build it."
            </blockquote>
      
            <h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-900">The Hardest Lessons</h3>
            <p>The path wasn't without obstacles:</p>
            <div class="bg-rose-50 p-6 rounded-lg mb-8 border-l-4 border-rose-400">
              <h4 class="font-medium text-lg mb-2 text-rose-800">Reality Checks</h4>
              <ul class="list-disc pl-6 space-y-2">
                <li>The JavaScript ecosystem moved faster than my comprehension</li>
                <li>Imposter syndrome when comparing myself to CS graduates</li>
                <li>Countless abandoned projects that started with "This time I'll finish!"</li>
              </ul>
            </div>
      
            <h3 class="text-2xl font-semibold mt-10 mb-4 text-gray-900">Where I Am Now</h3>
            <p>Today, I see my finance background as an unfair advantage:</p>
            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li>Building financial apps with real-world business logic</li>
              <li>Communicating technical concepts to non-technical stakeholders</li>
              <li>Approaching code architecture like financial modeling structured yet adaptable</li>
            </ul>
      
            <div class="bg-blue-50 p-6 rounded-lg mt-8 border-l-4 border-blue-400">
              <h4 class="font-medium text-lg mb-2 text-blue-800">To Anyone Starting Out</h4>
              <p>Your unique background isn't a disadvantage it's your secret weapon. The best developers I know came from philosophy, art, even medicine. What matters isn't where you start, but that you <strong>start</strong>.</p>
              <p class="mt-4">(And yes, you will eventually understand JavaScript promises.)</p>
            </div>
          </div>
        `,
  },
  {
    title:
      'Architecting Forge: A Full-Stack Deep Dive into Our Skill Exchange Platform',
    slug: 'forge-tech-deep-dive',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Case Study',
    excerpt:
      'How we combined Next.js’s speed with Django’s robustness and made skill trading buttery smooth.',
    posted_at: 'April 25, 2024',
    reading_time: '12 min',
    body: `
      <div class="prose prose-lg w-full prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900">
        <!-- Hero Hook -->
        <div class="max-w-2xl bg-gray-900 text-white py-8 rounded-xl mb-10">
          <span class="inline-block bg-blue-400 text-gray-900 px-3 py-1 rounded-full text-sm font-mono mb-4">TECH STACK</span>
          <h1 class="text-4xl font-bold mt-2">When Next.js Met Django</h1>
          <p class="text-xl opacity-90 mt-4">A love story told in TypeScript and Python</p>
        </div>
  
        <!-- Architecture Overview -->
        <h2 class="text-2xl font-semibold mb-4 border-b pb-4">System Design</h2>
        <div class="grid md:grid-cols-3 gap-6 my-8">
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-mono text-lg mb-3">Frontend</h3>
            <ul class="space-y-2 text-sm">
              <li>▶ Next.js 13 (App Router)</li>
              <li>▶ Tailwind + CSS Modules</li>
              <li>▶ Framer Motion</li>
              <li>▶ Redux (state)</li>
            </ul>
          </div>
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-mono text-lg mb-3">Backend</h3>
            <ul class="space-y-2 text-sm">
              <li>▶ Django REST Framework</li>
              <li>▶ PostgreSQL</li>

            </ul>
          </div>
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="font-mono text-lg mb-3">DevOps</h3>
            <ul class="space-y-2 text-sm">
              <li>▶ Dockerized</li>
              <li>▶ AWS ECS</li>
              <li>▶ GitHub Actions CI/CD</li>
            </ul>
          </div>
        </div>
  
        <!-- Frontend Deep Dive -->
        <h2 class="text-2xl font-semibold mt-12 mb-6 border-b pb-2">Frontend Sorcery</h2>
        <h3 class="text-xl font-medium mt-6 mb-3 text-gray-800">1. Dynamic Route Magic</h3>
        <pre class="language-ts"><code>// app/[username]/profile/page.tsx
  export async function generateMetadata({ params }) {
    const user = await fetchUser(params.username); // Django API call
    return { title: \`\${user.name}'s Forge Profile | Skills: \${user.skills.join(', ')}\` };
  }</code></pre>
        <p class="mt-4">Next.js’s App Router let us pre-render personalized profile pages while keeping bundle sizes lean. Combined with Django’s ORM, we reduced TTFB by 40% compared to client-side fetching.</p>
  
        <h3 class="text-xl font-medium mt-8 mb-3 text-gray-800">2. Motion Choreography</h3>
        <div class="border border-gray-200 rounded-lg p-6 my-4 bg-gray-50">
          <pre class="language-tsx"><code>// components/SkillCard.tsx
  import { motion } from 'framer-motion';
  
  export const SkillCard = ({ skill }) => (
    &lt;motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.03 }}
      className="border rounded-lg p-4"
    >
      &lt;h3>{skill.name}&lt;/h3>
      &lt;p>{skill.description}&lt;/p>
    &lt;/motion.div>
  );</code></pre>
        </div>
        <p>Framer Motion brought the UI alive with spring physics. Pro tip: We throttled animations on scroll using <code>useScroll</code> hooks to prevent jank.</p>
  
        <!-- Backend Breakdown -->
        <h2 class="text-2xl font-semibold mt-8 mb-6 border-b pb-4">Django Power Moves</h2>
        <h3 class="text-xl font-medium mt-6 mb-3 text-gray-800">1. The Matching Algorithm</h3>
        <pre class="language-python"><code># forge/matching.py
  def find_skill_matches(user):
      from django.db.models import Q
      return User.objects.filter(
          Q(skills_offered__overlap=user.skills_wanted) |
          Q(skills_wanted__overlap=user.skills_offered)
      ).exclude(id=user.id).annotate(
          match_score=Count('skills_offered', filter=Q(skills_offered__in=user.skills_wanted))
      ).order_by('-match_score')[:20]</code></pre>
        <p class="mt-4">This PostgreSQL-powered query finds users with complementary skills. The <code>match_score</code> annotation boosted recommendation relevance by 65%.</p>
  
        <h3 class="text-xl font-medium mt-8 mb-3 text-gray-800">2. Real-Time Negotiations</h3>
        <p>We used Django Channels to implement offer/counter-offer flows:</p>
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div>
            <pre class="language-python"><code># consumers.py
  class TradeConsumer(AsyncConsumer):
      async def negotiate(self, event):
          await self.send_json({
              'type': 'offer_update',
              'offer': event['offer'],
              'status': event['status']
          })</code></pre>
          </div>
          <div>
            <pre class="language-ts"><code>// frontend/lib/trade.ts
  const socket = new WebSocket(url);
  socket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === 'offer_update') {
      useStore.getState().updateOffer(data);
    }
  };</code></pre>
          </div>
        </div>
  
        <!-- Performance Wins -->
        <h2 class="text-2xl font-semibold mt-8 mb-6 border-b pb-4">Battles Won</h2>
        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
          <h3 class="text-lg font-semibold mb-2">Cache Me If You Can</h3>
          <p>Implemented Redis caching for:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>User profiles (TTL: 15min)</li>
            <li>Skill search results (invalidated on new user signups)</li>
            <li>GeoIP-based recommendations</li>
          </ul>
          <p class="mt-3 font-mono text-sm">→ Reduced database load by 72% during peak traffic</p>
        </div>
  
        <!-- Lessons Learned -->
        <h2 class="text-2xl font-semibold mt-8 mb-6 border-b pb-4">Hard-Earned Lessons</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-lg">
            <h3 class="text-lg font-semibold mb-2">The Cookie Monster</h3>
            <p>CSRF issues between Next.js and Django led to 3 days of debugging. Solution:</p>
            <pre class="language-ts text-xs mt-2"><code>// next.config.js
  headers: async () => [{
    source: '/api/:path*',
    headers: [
      { key: 'Access-Control-Allow-Credentials', value: 'true' },
    ],
  }]</code></pre>
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 class="text-lg font-semibold mb-2">Animation Overload</h3>
            <p>Initial Framer Motion implementations crushed mobile performance. Fixed with:</p>
            <ul class="list-disc pl-6 mt-2 text-sm">
              <li><code>will-change: transform</code> CSS hints</li>
              <li>Reduced motion preferences</li>
              <li>Lazy-loaded animations</li>
            </ul>
          </div>
        </div>
  
        <!-- Closing Thoughts -->
        <div class="bg-gray-50 p-8 rounded-xl mt-10 text-center">
          <p class="text-xl font-medium">Tech stack choices are multipliers.</p>
          <p class="mt-2">Next.js gave us velocity, Django gave us stability, and Framer Motion gave us delight.</p>
          <p class="mt-4 text-sm opacity-80">P.S. Want the full codebase? <a href="#" class="underline">Case study available for sponsors</a>.</p>
        </div>
      </div>
    `,
  },
  // image:
  //   'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  {
    title: 'Zero-Downtime Database Migrations with Django and PostgreSQL',
    slug: 'zero-downtime-django-migrations',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Backend Engineering',
    excerpt:
      'How we migrated 2TB of production data without dropping a single request.',
    posted_at: 'May 25, 2024',
    reading_time: '12 min',
    body: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>The Problem: Schema Changes on 2TB Tables</h2>
        <pre><code class="language-sql">-- The migration that would lock our users table for 47 minutes
  ALTER TABLE auth_user ADD COLUMN last_active_at TIMESTAMP;</code></pre>
  
        <h2>The Solution: Triple-Phase Migration</h2>
        <h3>Phase 1: Add Nullable Column</h3>
        <pre><code class="language-python"># migration_0001.py
  class Migration(migrations.Migration):
      operations = [
          migrations.AddField(
              model_name='user',
              name='last_active_at',
              field=models.DateTimeField(null=True),
          )
      ]</code></pre>
  
        <h3>Phase 2: Backfill with Django Batch Updates</h3>
        <pre><code class="language-python"># Backfill script
  from django.db import transaction
  
  with transaction.atomic():
      for user in User.objects.iterator(chunk_size=5000):
          User.objects.filter(pk=user.pk).update(
              last_active_at=user.session_set.latest().created_at
          )</code></pre>
  
        <h3>Phase 3: Set NOT NULL</h3>
        <pre><code class="language-sql">-- Final migration (run during low traffic)
  ALTER TABLE auth_user ALTER COLUMN last_active_at SET NOT NULL;</code></pre>
  
        <h2>Key Metrics</h2>
        <table class="min-w-full">
          <thead>
            <tr>
              <th>Approach</th>
              <th>Downtime</th>
              <th>CPU Spike</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direct ALTER TABLE</td>
              <td>47 min</td>
              <td>82%</td>
            </tr>
            <tr>
              <td>Triple-Phase</td>
              <td>0</td>
              <td>23%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    title: 'Mastering LeetCode: A Systematic Approach to Solving DP Problems',
    slug: 'leetcode-dp-systematic-approach',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Algorithms',
    excerpt:
      'How I developed a 6-step framework to solve any dynamic programming problem, with detailed breakdowns of 5 classic DP patterns.',
    posted_at: 'July 21, 2024',
    reading_time: '18 min',
    body: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>The DP Problem-Solving Framework</h2>
        <ol class="list-decimal pl-6 space-y-4">
          <li>
            <strong>Identify Subproblems</strong>
            <p>Recognize optimal substructure - can the problem be broken down?</p>
            <pre><code class="language-python"># Fibonacci example
  def fib(n):
      if n <= 1: return n
      return fib(n-1) + fib(n-2)  # Clear subproblems</code></pre>
          </li>
          <li>
            <strong>Define State Representation</strong>
            <p>What parameters define each subproblem state?</p>
            <pre><code class="language-python"># 0/1 Knapsack state
  dp[i][w] = max value using first i items with weight limit w</code></pre>
          </li>
          <li>
            <strong>Formulate Recurrence Relation</strong>
            <p>Mathematically define how subproblems combine</p>
            <pre><code class="language-python"># Longest Common Subsequence
  if text1[i] == text2[j]:
      dp[i][j] = 1 + dp[i-1][j-1]
  else:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code></pre>
          </li>
          <li>
            <strong>Implement Memoization/Tabulation</strong>
            <div class="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <p class="font-mono text-sm mb-1">Top-down (memoization)</p>
                <pre><code class="language-python">@lru_cache(maxsize=None)
  def dp(i, j):
      # recursive solution</code></pre>
              </div>
              <div>
                <p class="font-mono text-sm mb-1">Bottom-up (tabulation)</p>
                <pre><code class="language-python">dp = [[0]*(n+1) for _ in range(m+1)]
  # iterative filling</code></pre>
              </div>
            </div>
          </li>
          <li>
            <strong>Optimize Space Complexity</strong>
            <p>Reduce O(n²) → O(n) when possible</p>
            <pre><code class="language-python"># Fibonacci space optimization
  a, b = 0, 1
  for _ in range(n):
      a, b = b, a + b</code></pre>
          </li>
          <li>
            <strong>Reconstruct Solution</strong>
            <p>Trace back through DP table if path is needed</p>
          </li>
        </ol>
  
        <h2>5 Classic DP Patterns Explained</h2>
        <h3>1. 0/1 Knapsack</h3>
        <pre><code class="language-python">def knapsack(values, weights, capacity):
      n = len(values)
      dp = [[0]*(capacity+1) for _ in range(n+1)]
      
      for i in range(1, n+1):
          for w in range(1, capacity+1):
              if weights[i-1] <= w:
                  dp[i][w] = max(
                      values[i-1] + dp[i-1][w-weights[i-1]],
                      dp[i-1][w]
                  )
              else:
                  dp[i][w] = dp[i-1][w]
      
      return dp[n][capacity]</code></pre>
  
        <h3>2. Longest Increasing Subsequence</h3>
        <pre><code class="language-python">def lengthOfLIS(nums):
      tails = [0] * len(nums)
      size = 0
      for num in nums:
          i, j = 0, size
          while i != j:
              m = (i + j) // 2
              if tails[m] < num:
                  i = m + 1
              else:
                  j = m
          tails[i] = num
          size = max(i + 1, size)
      return size</code></pre>
  
        <h3>3. Matrix Chain Multiplication</h3>
        <h3>4. Coin Change</h3>
        <h3>5. Edit Distance</h3>
        <!-- Additional pattern implementations... -->
  
        <h2>Performance Comparison</h2>
        <table class="min-w-full border">
          <thead>
            <tr class="border-b">
              <th class="p-2">Problem</th>
              <th class="p-2">Brute Force</th>
              <th class="p-2">Memoization</th>
              <th class="p-2">Tabulation</th>
              <th class="p-2">Optimized</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-2">Fibonacci(40)</td>
              <td class="p-2">O(2ⁿ)</td>
              <td class="p-2">O(n)</td>
              <td class="p-2">O(n)</td>
              <td class="p-2">O(1)</td>
            </tr>
            <tr class="border-b">
              <td class="p-2">0/1 Knapsack</td>
              <td class="p-2">O(2ⁿ)</td>
              <td class="p-2">O(nW)</td>
              <td class="p-2">O(nW)</td>
              <td class="p-2">O(W)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    title: 'Design Patterns in Modern TypeScript: Beyond Singleton',
    slug: 'typescript-design-patterns',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Software Architecture',
    excerpt:
      "How 8 Gang of Four patterns evolve when implemented with TypeScript's type system and modern JavaScript features.",
    posted_at: 'Jan 15, 2025',
    reading_time: '20 min',
    body: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <h2>1. Strategy Pattern (Runtime Flexibility)</h2>
        <pre><code class="language-typescript">interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  class CreditCardStrategy implements PaymentStrategy {
    constructor(private cardNumber: string) {}
    
    pay(amount: number) {
      console.log(\`Paid $\${amount} with card \${this.cardNumber.slice(-4)}\`);
    }
  }
  
  class PaymentContext {
    constructor(private strategy: PaymentStrategy) {}
    
    executePayment(amount: number) {
      this.strategy.pay(amount);
    }
  }
  
  // Usage
  const payment = new PaymentContext(
    user.prefersPaypal 
      ? new PayPalStrategy(user.email)
      : new CreditCardStrategy(user.cardNumber)
  );</code></pre>
  
        <h2>2. Observer Pattern (Reactive Systems)</h2>
        <pre><code class="language-typescript">type Listener<T> = (event: T) => void;
  
  class Observable<T> {
    private listeners: Listener<T>[] = [];
    
    subscribe(listener: Listener<T>): () => void {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }
    
    notify(event: T) {
      this.listeners.forEach(listener => listener(event));
    }
  }
  
  // Usage in UI Component
  class SearchComponent {
    constructor() {
      searchInput.onChange = this.searchObservable.notify;
    }
    
    private searchObservable = new Observable<string>();
    
    onSearch(listener: Listener<string>) {
      return this.searchObservable.subscribe(listener);
    }
  }</code></pre>
  
        <h2>3. Factory Method (Flexible Instantiation)</h2>
        <pre><code class="language-typescript">type VehicleType = 'car' | 'truck' | 'motorcycle';
  
  interface Vehicle {
    drive(): void;
  }
  
  class VehicleFactory {
    static create(type: VehicleType): Vehicle {
      switch (type) {
        case 'car': return new Car();
        case 'truck': return new Truck();
        case 'motorcycle': return new Motorcycle();
        default: throw new Error(\`Invalid vehicle type: \${type}\`);
      }
    }
  }
  
  // Usage with Type Narrowing
  const vehicle = VehicleFactory.create(userSelectedType);
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }</code></pre>
  
        <h2>4. Adapter Pattern (Legacy Integration)</h2>
        <pre><code class="language-typescript">// Legacy Library
  class OldLogger {
    logMessage(message: string, priority: number) {
      console.log(\`[\${priority}] \${message}\`);
    }
  }
  
  // Modern Interface
  interface Logger {
    debug(msg: string): void;
    error(msg: string): void;
  }
  
  class LoggerAdapter implements Logger {
    constructor(private oldLogger: OldLogger) {}
    
    debug(msg: string) {
      this.oldLogger.logMessage(msg, 1);
    }
    
    error(msg: string) {
      this.oldLogger.logMessage(msg, 3);
    }
  }</code></pre>
  
        <h2>5. Composite Pattern (UI Trees)</h2>
        <h2>6. Decorator Pattern (TS Experimental)</h2>
        <pre><code class="language-typescript">// Using TypeScript Decorators
  function logExecution(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      console.log(\`Calling \${key} with\`, args);
      const result = originalMethod.apply(this, args);
      console.log(\`\${key} returned\`, result);
      return result;
    };
    
    return descriptor;
  }
  
  class Calculator {
    @logExecution
    add(a: number, b: number) {
      return a + b;
    }
  }</code></pre>
  
        <h2>Pattern Comparison Table</h2>
        <table class="min-w-full border">
          <thead>
            <tr class="border-b">
              <th class="p-2">Pattern</th>
              <th class="p-2">Classic OOP</th>
              <th class="p-2">TypeScript Implementation</th>
              <th class="p-2">Use Case Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-2">Singleton</td>
              <td class="p-2">Private constructor</td>
              <td class="p-2">Module exports</td>
              <td class="p-2">30%</td>
            </tr>
            <tr class="border-b">
              <td class="p-2">Observer</td>
              <td class="p-2">Subject/Observer classes</td>
              <td class="p-2">RxJS/EventEmitter</td>
              <td class="p-2">75%</td>
            </tr>
            <tr class="border-b">
              <td class="p-2">Decorator</td>
              <td class="p-2">Wrapper classes</td>
              <td class="p-2">TS decorators</td>
              <td class="p-2">40%</td>
            </tr>
          </tbody>
        </table>
  
        <h2>When Not to Use Patterns</h2>
        <div class="bg-rose-50 p-4 rounded-lg">
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Overengineering</strong>: Simple problems need simple solutions</li>
            <li><strong>Performance-critical code</strong>: Some patterns add indirection</li>
            <li><strong>Modern alternatives</strong>: React Hooks vs. Class-based patterns</li>
          </ul>
        </div>
      </div>
    `,
  },
]
