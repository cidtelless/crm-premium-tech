'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings,
  Search,
  Filter,
  Plus,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Target,
  Clock,
  ChevronRight,
  MoreHorizontal,
  Bell,
  User,
  Zap,
  Brain,
  Shield,
  Globe,
  Activity,
  Briefcase,
  Star,
  Package,
  Eye,
  Download,
  Upload,
  MessageSquare,
  Video,
  Headphones,
  Award,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Layers,
  Database,
  Cpu,
  Wifi,
  Lock,
  Unlock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  PlayCircle,
  PauseCircle,
  RefreshCw,
  Maximize2,
  Minimize2,
  Share2,
  Copy,
  ExternalLink,
  Bookmark,
  Heart,
  ThumbsUp,
  MessageCircle,
  Send,
  Mic,
  Camera,
  Image,
  FileImage,
  Paperclip,
  Calendar as CalendarIcon,
  Clock3,
  Timer,
  Stopwatch,
  AlarmClock,
  Sunrise,
  Sunset,
  Moon,
  Sun,
  CloudRain,
  Cloud,
  Thermometer,
  Wind,
  Compass,
  Navigation,
  Map,
  Route,
  Car,
  Plane,
  Train,
  Ship,
  Truck,
  Bike,
  Walk,
  Home,
  Building,
  Store,
  Factory,
  Warehouse,
  School,
  Hospital,
  Bank,
  Hotel,
  Restaurant,
  Coffee,
  ShoppingCart,
  CreditCard,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  BarChart,
  Radar,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Code,
  Terminal,
  Command,
  Keyboard,
  Mouse,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  HardDrive,
  Cpu as ProcessorIcon,
  MemoryStick,
  Usb,
  Bluetooth,
  Wifi as WifiIcon,
  Signal,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Mic2,
  MicOff,
  Headphones as HeadphonesIcon,
  Speaker,
  Radio,
  Tv,
  Film,
  Music,
  Music2,
  Music3,
  Music4,
  Disc,
  Disc2,
  Disc3,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Repeat,
  Repeat1,
  Shuffle,
  List,
  Grid,
  Columns,
  Rows,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Maximize,
  Minimize,
  Move,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  Edit,
  Edit2,
  Edit3,
  Pen,
  PenTool,
  Paintbrush,
  Paintbrush2,
  Palette,
  Pipette,
  Eraser,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List as ListIcon,
  ListOrdered,
  Quote,
  Link,
  Link2,
  Unlink,
  Unlink2,
  Hash,
  AtSign,
  Percent,
  Dollar as DollarIcon,
  Euro,
  Pound,
  Yen,
  IndianRupee,
  Bitcoin,
  Ethereum,
  Litecoin,
  Dogecoin,
  Gamepad,
  Gamepad2,
  Joystick,
  Dices,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Spade,
  Club,
  Heart as HeartIcon,
  Diamond,
  Crown,
  Trophy,
  Medal,
  Award as AwardIcon,
  Gift,
  PartyPopper,
  Cake,
  Candy,
  Apple,
  Cherry,
  Grape,
  Orange,
  Banana,
  Strawberry,
  Carrot,
  Corn,
  Pizza,
  Sandwich,
  Salad,
  Soup,
  IceCream,
  Cookie,
  Donut,
  Croissant,
  Bagel,
  Pretzel,
  Cheese,
  Egg,
  Milk,
  Wine,
  Beer,
  Martini,
  Cocktail,
  Juice,
  Tea,
  Coffee as CoffeeIcon,
  Utensils,
  UtensilsCrossed,
  ChefHat,
  Flame,
  Snowflake,
  Droplet,
  Droplets,
  Waves,
  Tornado,
  Volcano,
  Mountain,
  MountainSnow,
  Trees,
  Tree,
  TreePine,
  TreeDeciduous,
  Flower,
  Flower2,
  Leaf,
  Clover,
  Seedling,
  Sprout,
  Cactus,
  Palmtree,
  Shell,
  Fish,
  Turtle,
  Rabbit,
  Squirrel,
  Hedgehog,
  Dog,
  Cat,
  Bird,
  Bug,
  Worm,
  Snail,
  Ant,
  Bee,
  Butterfly,
  Spider,
  Footprints,
  Paw,
  Bone,
  Feather,
  Egg as EggIcon,
  Milk as MilkIcon,
  Wheat,
  Grape as GrapeIcon,
  Cherry as CherryIcon,
  Apple as AppleIcon,
  Banana as BananaIcon,
  Orange as OrangeIcon,
  Lemon,
  Lime,
  Coconut,
  Avocado,
  Eggplant,
  Potato,
  Carrot as CarrotIcon,
  Corn as CornIcon,
  Broccoli,
  Lettuce,
  Tomato,
  Onion,
  Garlic,
  Pepper,
  Mushroom,
  Nut,
  Bread,
  Croissant as CroissantIcon,
  Bagel as BagelIcon,
  Pretzel as PretzelIcon,
  Donut as DonutIcon,
  Cookie as CookieIcon,
  Cake as CakeIcon,
  Candy as CandyIcon,
  Lollipop,
  IceCream as IceCreamIcon,
  Popsicle,
  Sundae,
  Pie,
  Cupcake,
  Muffin,
  Pancakes,
  Waffle,
  Honey,
  Jam,
  Butter,
  Salt,
  Pepper as PepperIcon,
  Spice,
  Herb,
  Oil,
  Vinegar,
  Sauce,
  Ketchup,
  Mustard,
  Mayo,
  Salsa,
  Guacamole,
  Hummus,
  Cheese as CheeseIcon,
  Yogurt,
  Cream,
  Butter as ButterIcon,
  Egg as EggIcon2,
  Milk as MilkIcon2,
  Water,
  Juice as JuiceIcon,
  Soda,
  Energy,
  Protein,
  Vitamin,
  Supplement,
  Medicine,
  Pill,
  Syringe,
  Thermometer as ThermometerIcon,
  Stethoscope,
  Bandage,
  Crutch,
  Wheelchair,
  Glasses,
  Sunglasses,
  ContactLens,
  Hearing,
  Tooth,
  Toothbrush,
  Soap,
  Shampoo,
  Lotion,
  Perfume,
  Lipstick,
  Mascara,
  Nail,
  Razor,
  Scissors as ScissorsIcon,
  Comb,
  Brush,
  Mirror,
  Towel,
  Bathtub,
  Shower,
  Toilet,
  Sink,
  Faucet,
  Drain,
  Pipe,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Axe,
  Pickaxe,
  Shovel,
  Rake,
  Hoe,
  Pitchfork,
  Broom,
  Mop,
  Bucket,
  Sponge,
  Cloth,
  Detergent,
  Bleach,
  Disinfectant,
  Gloves,
  Mask,
  Goggles,
  Helmet,
  HardHat,
  Vest,
  Boots,
  Shoes,
  Socks,
  Shirt,
  Pants,
  Dress,
  Skirt,
  Shorts,
  Jacket,
  Coat,
  Sweater,
  Hoodie,
  Scarf,
  Hat,
  Cap,
  Beanie,
  Glove,
  Mitten,
  Belt,
  Tie,
  Bowtie,
  Suspenders,
  Underwear,
  Bra,
  Swimsuit,
  Bikini,
  Trunks,
  Pajamas,
  Robe,
  Slippers,
  Sandals,
  Flip,
  Heels,
  Sneakers,
  Boots as BootsIcon,
  Loafers,
  Oxfords,
  Flats,
  Wedges,
  Platforms,
  Clogs,
  Moccasins,
  Espadrilles,
  Ballerinas,
  Pumps,
  Stilettos,
  Ankle,
  Knee,
  Thigh,
  Over,
  Under,
  Side,
  Zip,
  Button,
  Snap,
  Velcro,
  Lace,
  Elastic,
  Drawstring,
  Pocket,
  Hood,
  Collar,
  Sleeve,
  Cuff,
  Hem,
  Seam,
  Stitch,
  Thread,
  Needle,
  Pin,
  Safety,
  Zipper,
  Button as ButtonIcon,
  Snap as SnapIcon,
  Velcro as VelcroIcon,
  Lace as LaceIcon,
  Elastic as ElasticIcon,
  Drawstring as DrawstringIcon,
  Pocket as PocketIcon,
  Hood as HoodIcon,
  Collar as CollarIcon,
  Sleeve as SleeveIcon,
  Cuff as CuffIcon,
  Hem as HemIcon,
  Seam as SeamIcon,
  Stitch as StitchIcon,
  Thread as ThreadIcon,
  Needle as NeedleIcon,
  Pin as PinIcon,
  Safety as SafetyIcon
} from 'lucide-react'

export default function PremiumCRMDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isLoading, setIsLoading] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [aiInsights, setAiInsights] = useState(true)
  const [realTimeData, setRealTimeData] = useState(true)

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      if (realTimeData) {
        // Simula atualizações em tempo real
        setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [realTimeData])

  const navigation = [
    { id: 'dashboard', name: 'Command Center', icon: Cpu, premium: true },
    { id: 'contacts', name: 'Neural Network', icon: Brain, premium: true },
    { id: 'pipeline', name: 'Revenue Engine', icon: Zap, premium: true },
    { id: 'calendar', name: 'Time Matrix', icon: Clock3, premium: true },
    { id: 'reports', name: 'Analytics Hub', icon: Activity, premium: true },
    { id: 'ai-assistant', name: 'AI Assistant', icon: Sparkles, premium: true, new: true },
    { id: 'automation', name: 'Automation', icon: RefreshCw, premium: true },
    { id: 'settings', name: 'Control Panel', icon: Settings, premium: true },
  ]

  const premiumMetrics = [
    { 
      title: 'ARR (Annual Recurring Revenue)', 
      value: 'R$ 12.4M', 
      change: '+24.7%', 
      trend: 'up',
      icon: TrendingUp,
      gradient: 'from-[#3B82F6] to-[#1E40AF]',
      prediction: '+R$ 3.2M próximos 6 meses'
    },
    { 
      title: 'Customer Lifetime Value', 
      value: 'R$ 47.8K', 
      change: '+18.3%', 
      trend: 'up',
      icon: Target,
      gradient: 'from-[#8B5CF6] to-[#6D28D9]',
      prediction: 'Crescimento sustentável'
    },
    { 
      title: 'AI Conversion Score', 
      value: '94.2%', 
      change: '+12.1%', 
      trend: 'up',
      icon: Brain,
      gradient: 'from-[#06B6D4] to-[#0891B2]',
      prediction: 'Otimização IA ativa'
    },
    { 
      title: 'Revenue Velocity', 
      value: '2.3x', 
      change: '+31.5%', 
      trend: 'up',
      icon: Zap,
      gradient: 'from-[#10B981] to-[#059669]',
      prediction: 'Aceleração exponencial'
    },
  ]

  const aiInsightsList = [
    {
      type: 'opportunity',
      title: 'High-Value Lead Detected',
      description: 'Enterprise client showing 89% conversion probability',
      action: 'Schedule demo call',
      priority: 'high',
      confidence: 94
    },
    {
      type: 'risk',
      title: 'Churn Risk Alert',
      description: '3 clients showing decreased engagement patterns',
      action: 'Initiate retention campaign',
      priority: 'medium',
      confidence: 87
    },
    {
      type: 'optimization',
      title: 'Pipeline Optimization',
      description: 'Reduce sales cycle by 23% with AI recommendations',
      action: 'Apply suggestions',
      priority: 'low',
      confidence: 91
    }
  ]

  const premiumContacts = [
    { 
      id: 1, 
      name: 'Sarah Chen', 
      company: 'TechNova Corp', 
      email: 'sarah@technova.com', 
      phone: '+1 (555) 123-4567', 
      status: 'Enterprise', 
      value: 'R$ 450.000',
      aiScore: 96,
      lastInteraction: '2h ago',
      nextAction: 'Product Demo',
      tags: ['High-Value', 'Decision Maker', 'Hot Lead'],
      avatar: 'SC',
      country: 'US',
      timezone: 'PST'
    },
    { 
      id: 2, 
      name: 'Marcus Rodriguez', 
      company: 'InnovateLab', 
      email: 'marcus@innovatelab.com', 
      phone: '+1 (555) 987-6543', 
      status: 'Strategic', 
      value: 'R$ 280.000',
      aiScore: 89,
      lastInteraction: '4h ago',
      nextAction: 'Contract Review',
      tags: ['Strategic', 'Technical', 'Warm'],
      avatar: 'MR',
      country: 'CA',
      timezone: 'EST'
    },
    { 
      id: 3, 
      name: 'Elena Volkov', 
      company: 'FutureScale', 
      email: 'elena@futurescale.com', 
      phone: '+44 20 7946 0958', 
      status: 'Premium', 
      value: 'R$ 680.000',
      aiScore: 92,
      lastInteraction: '1h ago',
      nextAction: 'Executive Meeting',
      tags: ['C-Level', 'Global', 'Priority'],
      avatar: 'EV',
      country: 'UK',
      timezone: 'GMT'
    },
  ]

  const advancedPipeline = [
    { 
      id: 'discovery', 
      name: 'AI Discovery', 
      count: 24,
      value: 'R$ 2.4M',
      conversionRate: 34,
      avgDealSize: 'R$ 100K',
      deals: [
        { 
          id: 1, 
          title: 'Enterprise AI Platform', 
          company: 'Global Dynamics', 
          value: 'R$ 850.000', 
          probability: 25,
          aiScore: 87,
          nextMilestone: 'Technical Demo',
          daysInStage: 12,
          temperature: 'hot'
        },
        { 
          id: 2, 
          title: 'Digital Transformation Suite', 
          company: 'MegaCorp Industries', 
          value: 'R$ 1.200.000', 
          probability: 30,
          aiScore: 91,
          nextMilestone: 'Stakeholder Meeting',
          daysInStage: 8,
          temperature: 'warm'
        },
      ]
    },
    { 
      id: 'qualification', 
      name: 'Neural Qualification', 
      count: 18,
      value: 'R$ 3.2M',
      conversionRate: 67,
      avgDealSize: 'R$ 178K',
      deals: [
        { 
          id: 3, 
          title: 'Cloud Migration Project', 
          company: 'TechForward Ltd', 
          value: 'R$ 420.000', 
          probability: 65,
          aiScore: 94,
          nextMilestone: 'Proposal Delivery',
          daysInStage: 15,
          temperature: 'hot'
        },
      ]
    },
    { 
      id: 'proposal', 
      name: 'Smart Proposal', 
      count: 12,
      value: 'R$ 4.1M',
      conversionRate: 78,
      avgDealSize: 'R$ 342K',
      deals: [
        { 
          id: 4, 
          title: 'AI-Powered Analytics', 
          company: 'DataVision Corp', 
          value: 'R$ 680.000', 
          probability: 85,
          aiScore: 96,
          nextMilestone: 'Contract Negotiation',
          daysInStage: 6,
          temperature: 'hot'
        },
      ]
    },
    { 
      id: 'negotiation', 
      name: 'Final Stage', 
      count: 8,
      value: 'R$ 5.8M',
      conversionRate: 89,
      avgDealSize: 'R$ 725K',
      deals: [
        { 
          id: 5, 
          title: 'Enterprise Integration', 
          company: 'GlobalTech Solutions', 
          value: 'R$ 1.450.000', 
          probability: 95,
          aiScore: 98,
          nextMilestone: 'Signature',
          daysInStage: 3,
          temperature: 'hot'
        },
      ]
    },
    { 
      id: 'closed', 
      name: 'Revenue Realized', 
      count: 47,
      value: 'R$ 18.7M',
      conversionRate: 100,
      avgDealSize: 'R$ 398K',
      deals: []
    },
  ]

  const renderPremiumDashboard = () => (
    <div className="space-y-4 md:space-y-6">
      {/* AI Insights Banner - MOBILE OTIMIZADO */}
      {aiInsights && (
        <div className="bg-gradient-to-r from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 backdrop-blur-sm overflow-hidden">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm md:text-base truncate">AI Neural Insights</h3>
                <p className="text-slate-300 text-xs md:text-sm truncate">Real-time intelligence powered by machine learning</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 self-start md:self-auto flex-shrink-0">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#10B981] text-xs md:text-sm font-medium">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {aiInsightsList.map((insight, index) => (
              <div key={index} className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    insight.priority === 'high' ? 'bg-[#EF4444]/20 text-[#EF4444]' :
                    insight.priority === 'medium' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' :
                    'bg-[#10B981]/20 text-[#10B981]'
                  }`}>
                    {insight.priority.toUpperCase()}
                  </span>
                  <span className="text-white/60 text-xs flex-shrink-0">{insight.confidence}% confidence</span>
                </div>
                <h4 className="text-white font-medium text-xs md:text-sm mb-1 truncate">{insight.title}</h4>
                <p className="text-white/70 text-xs mb-3 line-clamp-2">{insight.description}</p>
                <button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white text-xs py-2 rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 truncate">
                  {insight.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Premium Metrics - RESPONSIVIDADE CORRIGIDA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
        {premiumMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="group relative bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/20 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl md:rounded-2xl" style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${metric.gradient} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    metric.trend === 'up' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                
                <h3 className="text-slate-300 text-xs font-medium mb-2">{metric.title}</h3>
                <div className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">{metric.value}</div>
                
                <div className="space-y-2">
                  <div className="w-full bg-[#334155] rounded-full h-1.5 md:h-2">
                    <div className={`bg-gradient-to-r ${metric.gradient} h-1.5 md:h-2 rounded-full transition-all duration-1000`} style={{width: '78%'}}></div>
                  </div>
                  <p className="text-slate-400 text-xs">{metric.prediction}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Advanced Analytics Grid - RESPONSIVIDADE CORRIGIDA */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8">
        {/* Real-time Revenue Chart - MOBILE OTIMIZADO */}
        <div className="xl:col-span-2 bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center justify-between mb-4 md:mb-8">
            <div>
              <h3 className="text-white text-base md:text-xl font-bold mb-1 md:mb-2">Revenue Acceleration</h3>
              <p className="text-slate-300 text-xs md:text-sm">AI-powered predictive analytics</p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-full"></div>
                  <span className="text-slate-300 text-xs md:text-sm">Actual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] rounded-full"></div>
                  <span className="text-slate-300 text-xs md:text-sm">Predicted</span>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="text-[#3B82F6] text-xs md:text-sm hover:text-white transition-colors px-2 md:px-3 py-1 rounded-lg bg-[#3B82F6]/10">7D</button>
                <button className="text-slate-300 text-xs md:text-sm hover:text-white transition-colors px-2 md:px-3 py-1 rounded-lg hover:bg-[#334155]">30D</button>
                <button className="text-slate-300 text-xs md:text-sm hover:text-white transition-colors px-2 md:px-3 py-1 rounded-lg hover:bg-[#334155]">90D</button>
              </div>
            </div>
          </div>
          
          {/* Gráfico de Exemplo Aprimorado - MOBILE OTIMIZADO */}
          <div className="relative">
            {/* Grid de fundo - RESPONSIVO */}
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 grid-rows-6 opacity-10">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-r border-b border-[#475569]"></div>
              ))}
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i + 36} className="border-r border-b border-[#475569] hidden md:block"></div>
              ))}
            </div>
            
            {/* Eixo Y - Valores - MOBILE OTIMIZADO */}
            <div className="absolute left-0 top-0 h-40 md:h-80 flex flex-col justify-between text-xs text-slate-400 pr-2 md:pr-4">
              <span>R$ 2.5M</span>
              <span>R$ 2.0M</span>
              <span>R$ 1.5M</span>
              <span>R$ 1.0M</span>
              <span>R$ 0.5M</span>
              <span>R$ 0</span>
            </div>
            
            {/* Área do gráfico - MOBILE OTIMIZADO */}
            <div className="ml-6 md:ml-12 h-40 md:h-80 flex items-end justify-between space-x-0.5 md:space-x-2 mb-3 md:mb-6 relative">
              {/* Linha de tendência AI */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,75 Q 25,65 50,45 T 100,25"
                  stroke="url(#aiGradient)"
                  strokeWidth="0.5"
                  fill="none"
                  className="drop-shadow-lg"
                />
              </svg>
              
              {/* Barras do gráfico - MOBILE OTIMIZADO */}
              {[
                {actual: 65, predicted: 72, month: 'Jan'}, 
                {actual: 78, predicted: 85, month: 'Fev'}, 
                {actual: 52, predicted: 68, month: 'Mar'}, 
                {actual: 89, predicted: 94, month: 'Abr'}, 
                {actual: 73, predicted: 88, month: 'Mai'}, 
                {actual: 95, predicted: 98, month: 'Jun'},
                {actual: 67, predicted: 82, month: 'Jul'}, 
                {actual: 84, predicted: 91, month: 'Ago'}, 
                {actual: 76, predicted: 89, month: 'Set'},
                {actual: 92, predicted: 96, month: 'Out'}, 
                {actual: 88, predicted: 94, month: 'Nov'}, 
                {actual: 96, predicted: 99, month: 'Dez'}
              ].map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center space-y-1 group">
                  {/* Barra Predição (fundo) */}
                  <div 
                    className="w-full bg-gradient-to-t from-[#8B5CF6]/30 to-[#6D28D9]/30 rounded-t-sm md:rounded-t-lg transition-all duration-1000 hover:opacity-80 relative" 
                    style={{height: `${data.predicted}%`}}
                  >
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-sm md:rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Barra Atual (frente) */}
                  <div 
                    className="w-full bg-gradient-to-t from-[#3B82F6] to-[#1E40AF] rounded-t-sm md:rounded-t-lg transition-all duration-1000 hover:opacity-80 relative shadow-lg shadow-[#3B82F6]/25" 
                    style={{height: `${data.actual}%`, marginTop: `-${data.actual}%`}}
                  >
                    {/* Indicador de valor no hover - MOBILE OTIMIZADO */}
                    <div className="absolute -top-4 md:-top-8 left-1/2 transform -translate-x-1/2 bg-[#1E293B] text-white text-xs px-1 md:px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      R$ {(data.actual * 25000).toLocaleString()}
                    </div>
                    
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-sm md:rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Label do mês - MOBILE OTIMIZADO */}
                  <span className="text-slate-400 text-xs mt-1 md:mt-2 group-hover:text-slate-300 transition-colors">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Indicadores de performance - MOBILE OTIMIZADO */}
            <div className="ml-6 md:ml-12 flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center justify-between text-sm">
              <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4">
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-[#10B981]" />
                  <span className="text-[#10B981] font-medium text-xs md:text-sm">+34.7% vs mês anterior</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-3 h-3 md:w-4 md:h-4 text-[#3B82F6]" />
                  <span className="text-slate-300 text-xs md:text-sm">87% da meta trimestral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-3 h-3 md:w-4 md:h-4 text-[#8B5CF6]" />
                  <span className="text-[#8B5CF6] text-xs md:text-sm">IA: 94% precisão</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Performance Monitor - MOBILE OTIMIZADO */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-white text-base md:text-lg font-semibold">AI Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#10B981] text-xs md:text-sm">Active</span>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {[
              { name: 'Lead Scoring', value: 94, color: 'from-[#10B981] to-[#059669]' },
              { name: 'Churn Prediction', value: 87, color: 'from-[#3B82F6] to-[#1E40AF]' },
              { name: 'Price Optimization', value: 91, color: 'from-[#8B5CF6] to-[#6D28D9]' },
              { name: 'Sales Forecasting', value: 96, color: 'from-[#06B6D4] to-[#0891B2]' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-xs md:text-sm font-medium">{item.name}</span>
                  <span className="text-white text-xs md:text-sm font-bold">{item.value}%</span>
                </div>
                <div className="w-full bg-[#334155] rounded-full h-1.5 md:h-2">
                  <div 
                    className={`bg-gradient-to-r ${item.color} h-1.5 md:h-2 rounded-full transition-all duration-1000`} 
                    style={{width: `${item.value}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-lg md:rounded-xl border border-[#3B82F6]/20">
            <div className="flex items-center space-x-2 md:space-x-3 mb-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#3B82F6]" />
              <span className="text-[#3B82F6] font-medium text-xs md:text-sm">AI Recommendation</span>
            </div>
            <p className="text-slate-300 text-xs md:text-sm">Increase lead scoring threshold to 85% for 12% better conversion rate.</p>
            <button className="mt-2 md:mt-3 w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#2563EB] hover:to-[#7C3AED] transition-all duration-300">
              Apply Optimization
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Activity Feed - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-white text-base md:text-lg font-semibold">Live Activity Stream</h3>
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3 md:w-4 md:h-4 text-[#10B981]" />
            <span className="text-[#10B981] text-xs md:text-sm">Real-time</span>
          </div>
        </div>
        
        <div className="space-y-3 md:space-y-4 max-h-48 md:max-h-64 overflow-y-auto">
          {[
            { type: 'deal', message: 'Sarah Chen moved "Enterprise AI Platform" to Proposal stage', time: '2 min ago', icon: TrendingUp, color: 'text-[#10B981]' },
            { type: 'ai', message: 'AI detected high-value opportunity: MegaCorp Industries', time: '5 min ago', icon: Brain, color: 'text-[#8B5CF6]' },
            { type: 'meeting', message: 'Video call completed with Elena Volkov (45 min)', time: '12 min ago', icon: Video, color: 'text-[#3B82F6]' },
            { type: 'email', message: 'Automated follow-up sent to 12 warm leads', time: '18 min ago', icon: Mail, color: 'text-[#06B6D4]' },
            { type: 'alert', message: 'Churn risk detected for TechForward Ltd', time: '25 min ago', icon: AlertTriangle, color: 'text-[#EF4444]' },
          ].map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-[#334155]/50 transition-colors">
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#334155] flex items-center justify-center ${activity.color}`}>
                  <Icon className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs md:text-sm truncate">{activity.message}</p>
                  <p className="text-slate-400 text-xs">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderNeuralContacts = () => (
    <div className="space-y-4 md:space-y-8">
      {/* Advanced Search & Filters - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-r from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
        <div className="flex flex-col space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-2xl font-bold text-white">Neural Contact Intelligence</h2>
          
          <div className="flex flex-col space-y-3">
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="AI-powered search..."
                className="bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 text-white placeholder-slate-400 focus:border-[#3B82F6] focus:outline-none w-full transition-all duration-300 text-sm md:text-base"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
                <Brain className="w-4 h-4" />
                <span>AI Filter</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
                <Filter className="w-4 h-4" />
                <span>Advanced</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
                <Plus className="w-4 h-4" />
                <span>Add Contact</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Contact Cards - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
        {premiumContacts.map((contact) => (
          <div key={contact.id} className="group bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3B82F6]/20 hover:scale-105">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg">
                    {contact.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-5 md:h-5 bg-[#10B981] rounded-full border-2 border-[#1E293B] flex items-center justify-center">
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-bold text-sm md:text-lg truncate">{contact.name}</h3>
                  <p className="text-slate-300 text-xs md:text-sm truncate">{contact.company}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Globe className="w-3 h-3 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-400 text-xs truncate">{contact.country} • {contact.timezone}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right flex-shrink-0">
                <div className="flex items-center space-x-1 md:space-x-2 mb-2">
                  <Brain className="w-3 h-3 md:w-4 md:h-4 text-[#8B5CF6]" />
                  <span className="text-[#8B5CF6] font-bold text-xs md:text-sm">{contact.aiScore}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  contact.status === 'Enterprise' ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' :
                  contact.status === 'Strategic' ? 'bg-[#3B82F6]/20 text-[#3B82F6]' :
                  'bg-[#10B981]/20 text-[#10B981]'
                }`}>
                  {contact.status}
                </span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 truncate">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">Last contact: {contact.lastInteraction}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
              {contact.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-[#334155] text-slate-300 text-xs rounded-lg border border-[#475569]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div>
                <p className="text-slate-400 text-xs">Deal Value</p>
                <p className="text-white font-bold text-sm md:text-lg">{contact.value}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs">Next Action</p>
                <p className="text-[#3B82F6] font-medium text-xs md:text-sm">{contact.nextAction}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white py-2 rounded-lg md:rounded-xl font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-xs md:text-sm">
                <MessageSquare className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                Message
              </button>
              <button className="flex-1 bg-[#334155] text-white py-2 rounded-lg md:rounded-xl font-medium hover:bg-[#475569] transition-all duration-300 text-xs md:text-sm">
                <Video className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights Panel - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/20 rounded-xl md:rounded-2xl p-3 md:p-6">
        <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg md:rounded-xl flex items-center justify-center">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">Contact Intelligence</h3>
            <p className="text-slate-300 text-xs md:text-sm">AI-powered relationship insights</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Engagement Patterns</h4>
            <p className="text-white/70 text-xs md:text-sm">Sarah Chen responds best to technical demos on Tuesday mornings</p>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Decision Timeline</h4>
            <p className="text-white/70 text-xs md:text-sm">Enterprise deals typically close in 45-60 days for this segment</p>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Competitive Intel</h4>
            <p className="text-white/70 text-xs md:text-sm">3 contacts are evaluating similar solutions from competitors</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderRevenueEngine = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-start md:items-center">
        <div className="min-w-0 flex-1">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 truncate">Revenue Engine</h2>
          <p className="text-slate-300 text-sm md:text-base truncate">AI-powered sales acceleration platform</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto flex-shrink-0">
          <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
            <Brain className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">AI Optimize</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">New Opportunity</span>
          </button>
        </div>
      </div>

      {/* Pipeline Overview - MOBILE OTIMIZADO COM OVERFLOW CORRIGIDO */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 overflow-hidden">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <h3 className="text-white text-base md:text-xl font-semibold truncate">Pipeline Performance</h3>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs md:text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#10B981] rounded-full flex-shrink-0"></div>
              <span className="text-slate-300 truncate">Total Value: R$ 34.2M</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
              <span className="text-slate-300 truncate">Weighted: R$ 18.7M</span>
            </div>
          </div>
        </div>
        
        {/* Pipeline Stages - SCROLL HORIZONTAL OTIMIZADO PARA MOBILE */}
        <div className="overflow-x-auto pb-3 md:pb-4 -mx-3 md:mx-0 px-3 md:px-0">
          <div className="flex space-x-3 md:space-x-6 min-w-max md:min-w-0 md:grid md:grid-cols-5 md:gap-6">
            {advancedPipeline.map((stage) => (
              <div key={stage.id} className="bg-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-5 hover:border-[#3B82F6]/30 transition-all duration-300 w-64 md:w-auto flex-shrink-0 min-w-0">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h4 className="text-white font-semibold text-xs md:text-sm truncate flex-1 mr-2">{stage.name}</h4>
                  <span className="bg-[#475569] text-slate-300 text-xs px-2 py-1 rounded-full flex-shrink-0">{stage.count}</span>
                </div>
                
                <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex-shrink-0">Total Value</span>
                    <span className="text-white font-medium text-xs md:text-sm truncate ml-2">{stage.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex-shrink-0">Conversion</span>
                    <span className="text-[#10B981] font-medium text-xs md:text-sm flex-shrink-0">{stage.conversionRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs flex-shrink-0">Avg Deal</span>
                    <span className="text-slate-300 text-xs md:text-sm truncate ml-2">{stage.avgDealSize}</span>
                  </div>
                </div>
                
                <div className="w-full bg-[#1E293B] rounded-full h-1.5 md:h-2 mb-3 md:mb-4">
                  <div 
                    className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-1.5 md:h-2 rounded-full transition-all duration-1000" 
                    style={{width: `${stage.conversionRate}%`}}
                  ></div>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  {stage.deals.map((deal) => (
                    <div key={deal.id} className="bg-[#1E293B] border border-[#475569] rounded-lg md:rounded-xl p-2 md:p-4 hover:border-[#3B82F6]/30 transition-all duration-300 cursor-pointer group min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-white font-medium text-xs md:text-sm group-hover:text-[#3B82F6] transition-colors truncate flex-1 mr-2">{deal.title}</h5>
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          deal.temperature === 'hot' ? 'bg-[#EF4444]' :
                          deal.temperature === 'warm' ? 'bg-[#F59E0B]' : 'bg-[#3B82F6]'
                        }`}></div>
                      </div>
                      <p className="text-slate-300 text-xs mb-2 md:mb-3 truncate">{deal.company}</p>
                      
                      <div className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[#3B82F6] font-semibold text-xs md:text-sm truncate flex-1 mr-2">{deal.value}</span>
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <Brain className="w-3 h-3 text-[#8B5CF6]" />
                            <span className="text-[#8B5CF6] text-xs">{deal.aiScore}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 truncate flex-1 mr-2">{deal.probability}% probability</span>
                          <span className="text-slate-400 flex-shrink-0">{deal.daysInStage}d in stage</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-[#334155] rounded-full h-1 mb-2">
                        <div 
                          className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-1 rounded-full transition-all duration-500" 
                          style={{width: `${deal.probability}%`}}
                        ></div>
                      </div>
                      
                      <p className="text-slate-300 text-xs truncate">Next: {deal.nextMilestone}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/20 rounded-xl md:rounded-2xl p-3 md:p-6">
          <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg md:rounded-xl flex items-center justify-center">
              <Brain className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base">AI Deal Insights</h3>
              <p className="text-slate-300 text-xs md:text-sm">Machine learning recommendations</p>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#10B981] text-xs md:text-sm font-medium">HIGH PRIORITY</span>
                <span className="text-white/60 text-xs">94% confidence</span>
              </div>
              <h4 className="text-white font-medium mb-1 text-sm md:text-base">Focus on Enterprise AI Platform</h4>
              <p className="text-white/70 text-xs md:text-sm mb-3">Deal shows 89% close probability. Schedule technical demo within 48h.</p>
              <button className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#0D9488] hover:to-[#047857] transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            
            <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#F59E0B] text-xs md:text-sm font-medium">MEDIUM PRIORITY</span>
                <span className="text-white/60 text-xs">78% confidence</span>
              </div>
              <h4 className="text-white font-medium mb-1 text-sm md:text-base">Accelerate Digital Transformation</h4>
              <p className="text-white/70 text-xs md:text-sm mb-3">Competitor activity detected. Expedite proposal delivery.</p>
              <button className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#E5A000] hover:to-[#C2610C] transition-all duration-300">
                Fast Track
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Revenue Forecast</h3>
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between p-3 md:p-4 bg-[#334155] rounded-lg md:rounded-xl">
              <div>
                <p className="text-slate-300 text-xs md:text-sm">This Quarter</p>
                <p className="text-white text-lg md:text-2xl font-bold">R$ 8.4M</p>
                <p className="text-[#10B981] text-xs md:text-sm">+23% vs target</p>
              </div>
              <div className="text-right">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {[
                { month: 'January', forecast: 'R$ 2.8M', confidence: 92 },
                { month: 'February', forecast: 'R$ 3.1M', confidence: 87 },
                { month: 'March', forecast: 'R$ 2.5M', confidence: 94 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-[#334155]/50 rounded-lg">
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">{item.month}</p>
                    <p className="text-slate-300 text-xs md:text-sm">{item.forecast}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#3B82F6] text-xs md:text-sm font-medium">{item.confidence}%</p>
                    <p className="text-slate-400 text-xs">confidence</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAIAssistant = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="text-center mb-4 md:mb-8">
        <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-2xl shadow-[#3B82F6]/25">
          <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-white" />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">AI Sales Assistant</h2>
        <p className="text-slate-300 text-sm md:text-lg">Your intelligent sales companion powered by advanced machine learning</p>
      </div>

      {/* Chat Interface - RESPONSIVIDADE CORRIGIDA */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-2 md:p-6 h-[350px] md:h-[600px] flex flex-col">
        <div className="flex items-center justify-between mb-3 md:mb-4 flex-shrink-0 px-1 md:px-0">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center">
              <Brain className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="text-white font-medium text-sm md:text-base">AI Assistant</span>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#10B981] text-xs md:text-sm">Online</span>
            </div>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        
        {/* Chat Messages - Área com scroll responsiva */}
        <div className="flex-1 overflow-y-auto space-y-2 md:space-y-4 mb-3 md:mb-4 pr-1 md:pr-2">
          <div className="flex items-start space-x-2 md:space-x-3">
            <div className="w-5 h-5 md:w-8 md:h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
            </div>
            <div className="bg-[#334155] rounded-xl md:rounded-2xl rounded-tl-sm p-2 md:p-3 max-w-[85%]">
              <p className="text-white text-xs md:text-sm">Hello! I've analyzed your pipeline and found 3 high-priority opportunities that need immediate attention. Would you like me to walk you through them?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 md:space-x-3 justify-end">
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl md:rounded-2xl rounded-tr-sm p-2 md:p-3 max-w-[85%]">
              <p className="text-white text-xs md:text-sm">Yes, please show me the opportunities with the highest close probability.</p>
            </div>
            <div className="w-5 h-5 md:w-8 md:h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
            </div>
          </div>
          
          <div className="flex items-start space-x-2 md:space-x-3">
            <div className="w-5 h-5 md:w-8 md:h-8 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
            </div>
            <div className="bg-[#334155] rounded-xl md:rounded-2xl rounded-tl-sm p-2 md:p-3 max-w-[85%]">
              <p className="text-white text-xs md:text-sm mb-2">Perfect! Here are your top 3 opportunities:</p>
              <div className="space-y-2">
                <div className="bg-[#1E293B] rounded-lg p-2 md:p-3">
                  <p className="text-[#10B981] font-medium text-xs md:text-sm">Enterprise AI Platform - R$ 850K</p>
                  <p className="text-slate-300 text-xs">89% close probability • Global Dynamics</p>
                </div>
                <div className="bg-[#1E293B] rounded-lg p-2 md:p-3">
                  <p className="text-[#3B82F6] font-medium text-xs md:text-sm">Cloud Migration - R$ 420K</p>
                  <p className="text-slate-300 text-xs">85% close probability • TechForward</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Input Area - Responsivo */}
        <div className="flex items-center space-x-2 flex-shrink-0 px-1 md:px-0">
          <input 
            type="text" 
            placeholder="Ask me anything about your sales data..."
            className="flex-1 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-2 md:px-4 py-2 md:py-3 text-white placeholder-slate-400 focus:border-[#3B82F6] focus:outline-none text-xs md:text-sm"
          />
          <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl p-2 md:p-3 text-white hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 flex-shrink-0">
            <Send className="w-3 h-3 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* AI Capabilities - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {[
          {
            icon: Target,
            title: 'Lead Scoring',
            description: 'AI analyzes 50+ data points to score lead quality and conversion probability',
            gradient: 'from-[#10B981] to-[#059669]'
          },
          {
            icon: Brain,
            title: 'Predictive Analytics',
            description: 'Forecast revenue, identify risks, and predict customer behavior patterns',
            gradient: 'from-[#8B5CF6] to-[#6D28D9]'
          },
          {
            icon: Zap,
            title: 'Smart Automation',
            description: 'Automate follow-ups, schedule meetings, and personalize outreach at scale',
            gradient: 'from-[#06B6D4] to-[#0891B2]'
          },
          {
            icon: Activity,
            title: 'Performance Insights',
            description: 'Real-time analysis of sales performance with actionable recommendations',
            gradient: 'from-[#3B82F6] to-[#1E40AF]'
          },
          {
            icon: Shield,
            title: 'Risk Detection',
            description: 'Early warning system for churn risk and deal slippage prevention',
            gradient: 'from-[#EF4444] to-[#DC2626]'
          },
          {
            icon: TrendingUp,
            title: 'Revenue Optimization',
            description: 'AI-powered pricing strategies and upselling opportunity identification',
            gradient: 'from-[#10B981] to-[#059669]'
          },
        ].map((capability, index) => {
          const Icon = capability.icon
          return (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/30 transition-all duration-300 group">
              <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${capability.gradient} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">{capability.title}</h3>
              <p className="text-slate-300 text-xs md:text-sm">{capability.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

  // Time Matrix - Tela de Gestão de Tempo - MOBILE OTIMIZADO
  const renderTimeMatrix = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Time Matrix</h2>
          <p className="text-slate-300 text-sm md:text-base">AI-powered time management and productivity optimization</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
            <Brain className="w-4 h-4" />
            <span>AI Schedule</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
            <Plus className="w-4 h-4" />
            <span>New Event</span>
          </button>
        </div>
      </div>

      {/* Time Analytics - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
        {[
          { title: 'Productive Hours Today', value: '6.2h', change: '+12%', icon: Clock3, gradient: 'from-[#10B981] to-[#059669]' },
          { title: 'Meeting Efficiency', value: '87%', change: '+5%', icon: Video, gradient: 'from-[#3B82F6] to-[#1E40AF]' },
          { title: 'Focus Time', value: '4.8h', change: '+18%', icon: Target, gradient: 'from-[#8B5CF6] to-[#6D28D9]' },
          { title: 'Task Completion', value: '92%', change: '+8%', icon: CheckCircle, gradient: 'from-[#06B6D4] to-[#0891B2]' },
        ].map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${metric.gradient} rounded-lg md:rounded-xl flex items-center justify-center`}>
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-[#10B981] text-xs md:text-sm font-medium">{metric.change}</span>
              </div>
              <h3 className="text-slate-300 text-xs font-medium mb-2">{metric.title}</h3>
              <div className="text-xl md:text-3xl font-bold text-white">{metric.value}</div>
            </div>
          )
        })}
      </div>

      {/* Calendar & Schedule - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Smart Calendar</h3>
          
          {/* Calendar Grid - MOBILE OTIMIZADO */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4 md:mb-6">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <div key={day} className="text-center text-slate-400 text-xs font-medium p-1 md:p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 5
              const isToday = day === 15
              const hasEvent = [3, 8, 12, 15, 18, 22, 25].includes(day)
              return (
                <div key={i} className={`aspect-square flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-300 ${
                  day < 1 || day > 30 ? 'text-slate-500' :
                  isToday ? 'bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white font-bold' :
                  hasEvent ? 'bg-[#334155] text-white hover:bg-[#475569]' :
                  'text-slate-300 hover:bg-[#334155]'
                }`}>
                  {day > 0 && day <= 30 ? day : ''}
                  {hasEvent && day > 0 && day <= 30 && (
                    <div className="absolute w-1 h-1 bg-[#10B981] rounded-full mt-3 md:mt-6"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Today's Schedule</h3>
          
          <div className="space-y-2 md:space-y-4">
            {[
              { time: '09:00', title: 'Team Standup', type: 'meeting', duration: '30min' },
              { time: '10:30', title: 'Client Demo - TechNova', type: 'demo', duration: '1h' },
              { time: '14:00', title: 'Focus Time - Proposals', type: 'focus', duration: '2h' },
              { time: '16:30', title: 'Pipeline Review', type: 'review', duration: '45min' },
              { time: '18:00', title: 'Follow-up Calls', type: 'calls', duration: '1h' },
            ].map((event, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-4 p-2 md:p-3 bg-[#334155] rounded-lg md:rounded-xl hover:bg-[#475569] transition-colors cursor-pointer">
                <div className="text-[#3B82F6] font-mono text-xs flex-shrink-0">{event.time}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-xs md:text-sm truncate">{event.title}</p>
                  <p className="text-slate-400 text-xs">{event.duration}</p>
                </div>
                <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0 ${
                  event.type === 'meeting' ? 'bg-[#3B82F6]' :
                  event.type === 'demo' ? 'bg-[#10B981]' :
                  event.type === 'focus' ? 'bg-[#8B5CF6]' :
                  event.type === 'review' ? 'bg-[#06B6D4]' : 'bg-[#EF4444]'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Time Insights - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/20 rounded-xl md:rounded-2xl p-3 md:p-6">
        <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg md:rounded-xl flex items-center justify-center">
            <Brain className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">AI Time Intelligence</h3>
            <p className="text-slate-300 text-xs md:text-sm">Productivity optimization recommendations</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Peak Performance</h4>
            <p className="text-white/70 text-xs md:text-sm">Your most productive hours are 10-12 AM. Schedule important calls then.</p>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Meeting Optimization</h4>
            <p className="text-white/70 text-xs md:text-sm">Reduce meeting time by 15 minutes to increase focus time by 2 hours weekly.</p>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Energy Management</h4>
            <p className="text-white/70 text-xs md:text-sm">Schedule breaks every 90 minutes to maintain 95% productivity levels.</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Analytics Hub - Tela de Analytics Avançado - MOBILE OTIMIZADO
  const renderAnalyticsHub = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Analytics Hub</h2>
          <p className="text-slate-300 text-sm md:text-base">Advanced business intelligence and data visualization</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
            <BarChart3 className="w-4 h-4" />
            <span>New Report</span>
          </button>
        </div>
      </div>

      {/* KPI Dashboard - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
        {[
          { title: 'Total Revenue', value: 'R$ 18.7M', change: '+34.7%', icon: DollarSign, gradient: 'from-[#10B981] to-[#059669]' },
          { title: 'Conversion Rate', value: '23.4%', change: '+12.3%', icon: TrendingUp, gradient: 'from-[#3B82F6] to-[#1E40AF]' },
          { title: 'Customer Acquisition', value: '1,247', change: '+18.9%', icon: Users, gradient: 'from-[#8B5CF6] to-[#6D28D9]' },
          { title: 'Avg Deal Size', value: 'R$ 398K', change: '+8.2%', icon: Target, gradient: 'from-[#06B6D4] to-[#0891B2]' },
        ].map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${kpi.gradient} rounded-lg md:rounded-xl flex items-center justify-center`}>
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-[#10B981] text-xs md:text-sm font-medium">{kpi.change}</span>
              </div>
              <h3 className="text-slate-300 text-xs font-medium mb-2">{kpi.title}</h3>
              <div className="text-xl md:text-3xl font-bold text-white">{kpi.value}</div>
            </div>
          )
        })}
      </div>

      {/* Advanced Charts - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Sales Funnel */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Sales Funnel Analysis</h3>
          
          <div className="space-y-3 md:space-y-4">
            {[
              { stage: 'Leads', count: 2847, percentage: 100, color: 'from-[#3B82F6] to-[#1E40AF]' },
              { stage: 'Qualified', count: 1423, percentage: 50, color: 'from-[#8B5CF6] to-[#6D28D9]' },
              { stage: 'Proposal', count: 569, percentage: 20, color: 'from-[#06B6D4] to-[#0891B2]' },
              { stage: 'Negotiation', count: 284, percentage: 10, color: 'from-[#10B981] to-[#059669]' },
              { stage: 'Closed Won', count: 142, percentage: 5, color: 'from-[#10B981] to-[#059669]' },
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm md:text-base">{stage.stage}</span>
                  <div className="text-right">
                    <span className="text-white font-bold text-sm md:text-base">{stage.count.toLocaleString()}</span>
                    <span className="text-slate-400 text-xs md:text-sm ml-2">{stage.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-[#334155] rounded-full h-2 md:h-3">
                  <div 
                    className={`bg-gradient-to-r ${stage.color} h-2 md:h-3 rounded-full transition-all duration-1000`}
                    style={{width: `${stage.percentage}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Performance Trends</h3>
          
          <div className="space-y-4 md:space-y-6">
            {[
              { metric: 'Revenue Growth', current: 34.7, target: 30, color: '[#10B981]' },
              { metric: 'Lead Quality Score', current: 87, target: 85, color: '[#3B82F6]' },
              { metric: 'Sales Velocity', current: 23, target: 20, color: '[#8B5CF6]' },
              { metric: 'Customer Retention', current: 94, target: 90, color: '[#06B6D4]' },
            ].map((trend, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-medium text-sm">{trend.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-sm md:text-base">{trend.current}%</span>
                    <span className="text-slate-400 text-xs md:text-sm">/ {trend.target}%</span>
                  </div>
                </div>
                <div className="w-full bg-[#334155] rounded-full h-1.5 md:h-2">
                  <div className="relative h-1.5 md:h-2 rounded-full bg-[#334155]">
                    <div 
                      className={`bg-${trend.color} h-1.5 md:h-2 rounded-full transition-all duration-1000`}
                      style={{width: `${Math.min(trend.current, 100)}%`}}
                    ></div>
                    <div 
                      className="absolute top-0 w-0.5 h-1.5 md:h-2 bg-white/50"
                      style={{left: `${trend.target}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Reports - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
        <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Detailed Reports</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {[
            { title: 'Sales Performance', description: 'Comprehensive sales team analysis', icon: BarChart3, status: 'Ready' },
            { title: 'Customer Journey', description: 'End-to-end customer experience mapping', icon: Route, status: 'Processing' },
            { title: 'Revenue Forecast', description: 'AI-powered revenue predictions', icon: TrendingUp, status: 'Ready' },
            { title: 'Market Analysis', description: 'Competitive landscape insights', icon: Globe, status: 'Ready' },
            { title: 'Product Performance', description: 'Product-wise sales breakdown', icon: Package, status: 'Scheduled' },
            { title: 'Team Productivity', description: 'Individual and team metrics', icon: Users, status: 'Ready' },
          ].map((report, index) => {
            const Icon = report.icon
            return (
              <div key={index} className="bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl p-3 md:p-4 hover:border-[#3B82F6]/30 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'Ready' ? 'bg-[#10B981]/20 text-[#10B981]' :
                    report.status === 'Processing' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' :
                    'bg-[#3B82F6]/20 text-[#3B82F6]'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm md:text-base">{report.title}</h4>
                <p className="text-slate-300 text-xs md:text-sm">{report.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Automation - Tela de Automação - MOBILE OTIMIZADO
  const renderAutomation = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Automation Center</h2>
          <p className="text-slate-300 text-sm md:text-base">Intelligent workflow automation and process optimization</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
            <Brain className="w-4 h-4" />
            <span>AI Builder</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
            <Plus className="w-4 h-4" />
            <span>New Workflow</span>
          </button>
        </div>
      </div>

      {/* Automation Stats - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
        {[
          { title: 'Active Workflows', value: '24', change: '+6', icon: RefreshCw, gradient: 'from-[#10B981] to-[#059669]' },
          { title: 'Time Saved', value: '127h', change: '+23h', icon: Clock, gradient: 'from-[#3B82F6] to-[#1E40AF]' },
          { title: 'Tasks Automated', value: '1,847', change: '+342', icon: CheckCircle, gradient: 'from-[#8B5CF6] to-[#6D28D9]' },
          { title: 'Success Rate', value: '98.2%', change: '+2.1%', icon: Target, gradient: 'from-[#06B6D4] to-[#0891B2]' },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${stat.gradient} rounded-lg md:rounded-xl flex items-center justify-center`}>
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-[#10B981] text-xs md:text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-slate-300 text-xs font-medium mb-2">{stat.title}</h3>
              <div className="text-xl md:text-3xl font-bold text-white">{stat.value}</div>
            </div>
          )
        })}
      </div>

      {/* Active Workflows - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Active Workflows</h3>
          
          <div className="space-y-3 md:space-y-4">
            {[
              { name: 'Lead Qualification', trigger: 'New lead created', actions: 5, status: 'active', runs: 247 },
              { name: 'Follow-up Sequence', trigger: 'Demo completed', actions: 8, status: 'active', runs: 89 },
              { name: 'Contract Reminder', trigger: 'Proposal sent', actions: 3, status: 'active', runs: 156 },
              { name: 'Onboarding Flow', trigger: 'Deal closed', actions: 12, status: 'paused', runs: 34 },
              { name: 'Churn Prevention', trigger: 'Low engagement', actions: 6, status: 'active', runs: 23 },
            ].map((workflow, index) => (
              <div key={index} className="bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl p-3 md:p-4 hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h4 className="text-white font-semibold text-sm truncate">{workflow.name}</h4>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className={`w-2 h-2 rounded-full ${
                      workflow.status === 'active' ? 'bg-[#10B981]' : 'bg-[#F59E0B]'
                    }`}></span>
                    <span className={`text-xs font-medium ${
                      workflow.status === 'active' ? 'text-[#10B981]' : 'text-[#F59E0B]'
                    }`}>
                      {workflow.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs md:text-sm mb-2 md:mb-3 truncate">{workflow.trigger}</p>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-slate-400">{workflow.actions} actions</span>
                  <span className="text-slate-400">{workflow.runs} runs this month</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Workflow Builder</h3>
          
          <div className="space-y-3 md:space-y-4">
            <div className="bg-[#334155] border-2 border-dashed border-[#475569] rounded-lg md:rounded-xl p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Drag & Drop Builder</h4>
              <p className="text-slate-300 text-xs md:text-sm mb-3 md:mb-4">Create powerful workflows with our visual builder</p>
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white px-4 md:px-6 py-2 rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 text-sm">
                Start Building
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {[
                { name: 'Email Sequence', icon: Mail, color: '[#3B82F6]' },
                { name: 'Task Creation', icon: CheckCircle, color: '[#10B981]' },
                { name: 'Data Sync', icon: RefreshCw, color: '[#8B5CF6]' },
                { name: 'Notifications', icon: Bell, color: '[#06B6D4]' },
              ].map((template, index) => {
                const Icon = template.icon
                return (
                  <div key={index} className="bg-[#334155] border border-[#475569] rounded-lg p-2 md:p-3 hover:border-[#3B82F6]/30 transition-all duration-300 cursor-pointer text-center">
                    <div className={`w-5 h-5 md:w-8 md:h-8 bg-${template.color}/20 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <Icon className={`w-3 h-3 md:w-4 md:h-4 text-${template.color}`} />
                    </div>
                    <span className="text-slate-300 text-xs">{template.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* AI Automation Suggestions - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/20 rounded-xl md:rounded-2xl p-3 md:p-6">
        <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg md:rounded-xl flex items-center justify-center">
            <Brain className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">AI Automation Suggestions</h3>
            <p className="text-slate-300 text-xs md:text-sm">Smart recommendations to optimize your workflows</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Auto Lead Scoring</h4>
            <p className="text-white/70 text-xs md:text-sm mb-3">Automatically score new leads based on 50+ data points</p>
            <button className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#0D9488] hover:to-[#047857] transition-all duration-300">
              Create Workflow
            </button>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Smart Follow-ups</h4>
            <p className="text-white/70 text-xs md:text-sm mb-3">Send personalized follow-ups based on engagement patterns</p>
            <button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300">
              Create Workflow
            </button>
          </div>
          <div className="bg-black/20 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2 text-sm md:text-base">Deal Alerts</h4>
            <p className="text-white/70 text-xs md:text-sm mb-3">Get notified when deals need attention or are at risk</p>
            <button className="w-full bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white text-xs md:text-sm py-2 rounded-lg hover:from-[#0891B2] hover:to-[#0E7490] transition-all duration-300">
              Create Workflow
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Control Panel - Tela de Configurações - MOBILE OTIMIZADO
  const renderControlPanel = () => (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Control Panel</h2>
          <p className="text-slate-300 text-sm md:text-base">System configuration and advanced settings</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white hover:border-[#3B82F6] transition-all duration-300 text-sm">
            <Download className="w-4 h-4" />
            <span>Export Config</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-white font-medium hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#3B82F6]/25 text-sm">
            <Shield className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* System Status - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
        {[
          { title: 'System Health', value: '99.8%', status: 'excellent', icon: Activity, gradient: 'from-[#10B981] to-[#059669]' },
          { title: 'API Response', value: '45ms', status: 'good', icon: Zap, gradient: 'from-[#3B82F6] to-[#1E40AF]' },
          { title: 'Data Sync', value: 'Live', status: 'active', icon: RefreshCw, gradient: 'from-[#8B5CF6] to-[#6D28D9]' },
          { title: 'Security Score', value: 'A+', status: 'secure', icon: Shield, gradient: 'from-[#06B6D4] to-[#0891B2]' },
        ].map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${metric.gradient} rounded-lg md:rounded-xl flex items-center justify-center`}>
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-slate-300 text-xs font-medium mb-2">{metric.title}</h3>
              <div className="text-xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
              <span className="text-[#10B981] text-xs font-medium">{metric.status.toUpperCase()}</span>
            </div>
          )
        })}
      </div>

      {/* Configuration Sections - MOBILE OTIMIZADO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* AI Settings */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">AI Configuration</h3>
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Lead Scoring AI</h4>
                <p className="text-slate-400 text-xs md:text-sm">Automatically score leads based on behavior</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Predictive Analytics</h4>
                <p className="text-slate-400 text-xs md:text-sm">Revenue forecasting and trend analysis</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Smart Recommendations</h4>
                <p className="text-slate-400 text-xs md:text-sm">AI-powered action suggestions</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <label className="text-white font-medium text-sm md:text-base">AI Confidence Threshold</label>
              <div className="flex items-center space-x-3 md:space-x-4">
                <span className="text-slate-400 text-xs md:text-sm">Low</span>
                <div className="flex-1 bg-[#334155] rounded-full h-1.5 md:h-2">
                  <div className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-1.5 md:h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-slate-400 text-xs md:text-sm">High</span>
              </div>
              <span className="text-slate-300 text-xs md:text-sm">Current: 75% confidence</span>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
          <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Security & Privacy</h3>
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Two-Factor Authentication</h4>
                <p className="text-slate-400 text-xs md:text-sm">Enhanced account security</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Data Encryption</h4>
                <p className="text-slate-400 text-xs md:text-sm">End-to-end data protection</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-3 md:mr-4">
                <h4 className="text-white font-medium text-sm md:text-base">Audit Logging</h4>
                <p className="text-slate-400 text-xs md:text-sm">Track all system activities</p>
              </div>
              <div className="relative flex-shrink-0">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-5 md:w-12 md:h-6 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full cursor-pointer">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md transform translate-x-5 md:translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#10B981]" />
                <span className="text-[#10B981] font-medium text-sm md:text-base">Security Status: Excellent</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm">All security measures are active and functioning properly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Settings - MOBILE OTIMIZADO */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] border border-[#475569] rounded-xl md:rounded-2xl p-3 md:p-6">
        <h3 className="text-white text-base md:text-xl font-semibold mb-4 md:mb-6">Integrations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {[
            { name: 'Slack', description: 'Team communication', status: 'connected', icon: MessageSquare },
            { name: 'Google Workspace', description: 'Email and calendar sync', status: 'connected', icon: Mail },
            { name: 'Zoom', description: 'Video conferencing', status: 'connected', icon: Video },
            { name: 'HubSpot', description: 'Marketing automation', status: 'available', icon: Target },
            { name: 'Salesforce', description: 'CRM integration', status: 'available', icon: Database },
            { name: 'Zapier', description: 'Workflow automation', status: 'available', icon: Zap },
          ].map((integration, index) => {
            const Icon = integration.icon
            return (
              <div key={index} className="bg-[#334155] border border-[#475569] rounded-lg md:rounded-xl p-3 md:p-4 hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    integration.status === 'connected' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#3B82F6]/20 text-[#3B82F6]'
                  }`}>
                    {integration.status.toUpperCase()}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm md:text-base">{integration.name}</h4>
                <p className="text-slate-300 text-xs md:text-sm mb-3">{integration.description}</p>
                <button className={`w-full py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                  integration.status === 'connected' 
                    ? 'bg-[#475569] text-slate-300 hover:bg-[#64748B]' 
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white hover:from-[#2563EB] hover:to-[#1D4ED8]'
                }`}>
                  {integration.status === 'connected' ? 'Configure' : 'Connect'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderPremiumDashboard()
      case 'contacts': return renderNeuralContacts()
      case 'pipeline': return renderRevenueEngine()
      case 'calendar': return renderTimeMatrix()
      case 'reports': return renderAnalyticsHub()
      case 'ai-assistant': return renderAIAssistant()
      case 'automation': return renderAutomation()
      case 'settings': return renderControlPanel()
      default: return renderPremiumDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-inter relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Premium Header - MOBILE OTIMIZADO */}
      <header className="relative z-10 bg-gradient-to-r from-[#1E293B]/95 to-[#334155]/95 backdrop-blur-xl border-b border-[#475569] px-3 md:px-8 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-7 h-7 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-[#3B82F6]/25">
              <Cpu className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                AC Tech Pro
              </h1>
              <p className="text-slate-400 text-xs hidden md:block">Enterprise AI Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Real-time Status - MOBILE OTIMIZADO */}
            <div className="hidden sm:flex items-center space-x-1 md:space-x-2 bg-[#334155]/50 rounded-lg md:rounded-xl px-2 py-1 md:px-3 md:py-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#10B981] text-xs font-medium">Live</span>
            </div>
            
            {/* AI Status - DESKTOP APENAS */}
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-xl px-3 py-2">
              <Brain className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] text-sm font-medium">AI Active</span>
            </div>
            
            {/* Notifications - MOBILE OTIMIZADO */}
            <button className="relative p-1.5 md:p-2 text-slate-300 hover:text-white transition-colors group">
              <Bell className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-5 md:h-5 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{notifications}</span>
                </div>
              )}
            </button>
            
            {/* User Avatar - MOBILE OTIMIZADO */}
            <div className="w-7 h-7 md:w-10 md:h-10 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-[#3B82F6]/25 cursor-pointer hover:scale-105 transition-transform text-xs md:text-base">
              JS
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative z-10">
        {/* Premium Sidebar - DESKTOP APENAS */}
        <aside className="hidden lg:block w-72 bg-gradient-to-b from-[#1E293B]/95 to-[#334155]/95 backdrop-blur-xl border-r border-[#475569] min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white shadow-lg shadow-[#3B82F6]/25'
                        : 'text-slate-300 hover:text-white hover:bg-[#334155]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.premium && (
                        <div className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full"></div>
                      )}
                      {item.new && (
                        <span className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs px-2 py-1 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </nav>
        </aside>

        {/* Mobile Navigation - RODAPÉ FIXO COM TODAS AS TELAS */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1E293B]/95 to-[#334155]/95 backdrop-blur-xl border-t border-[#475569] px-1 py-2 z-50 safe-area-pb">
          <div className="flex justify-around items-center">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all duration-300 min-w-0 relative ${
                    activeTab === item.id 
                      ? 'text-[#3B82F6] scale-110 bg-[#3B82F6]/10' 
                      : 'text-slate-300 hover:text-white hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4 mb-0.5" />
                  {item.new && <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#10B981] rounded-full"></div>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content - MOBILE OTIMIZADO */}
        <main className="flex-1 p-2 md:p-8 pb-16 lg:pb-8 relative">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            renderContent()
          )}
        </main>
      </div>
    </div>
  )
}