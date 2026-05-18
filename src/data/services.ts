import type { ServicePage, ServiceSlug } from '@/types';

export const services: ServicePage[] = [
  {
    slug: '24-7-emergency-towing',
    category: 'Emergency',
    h1: '24/7 Emergency Towing in Townsville',
    metaTitle: '24/7 Emergency Towing Townsville | Round-the-Clock Tow Truck',
    metaDescription:
      'Need an emergency tow truck in Townsville right now? See the 24/7 operators we recommend for accident, breakdown and roadside callouts across the city.',
    intro:
      "Cars do not break down on a schedule, and Townsville's heat, monsoon storms and long stretches of highway between suburbs make 24-hour cover something locals genuinely need. A 24/7 emergency tow truck operator answers the phone at 2am, dispatches a driver who is already on shift, and gets you and your vehicle off the road before traffic, weather or a second accident makes things worse. The operators we recommend on this page run rostered overnight crews — not a hopeful voicemail — and they cover Townsville, Thuringowa and the Ring Road. Whether you have rolled to a stop on the Bruce Highway after a long drive south, kerbed a tyre on Charters Towers Road, or had a fender-bender in the Stockland carpark on a Saturday night, the priority is the same: a damage-free tilt-tray pickup, a clear quote, and a tow to a workshop, panel beater or your home address. Use the recommended operator block below to dial straight through.",
    included: [
      'Live phone answering, day and night, every day of the year',
      'Dispatch to Townsville metro, Thuringowa, Magnetic Island ferry terminal and the Ring Road',
      'Tilt-tray loading to keep gearboxes, AWD systems and low-clearance vehicles damage-free',
      'Coordination with police, ambulance and tow-away zones when required',
      'Drop-off to a workshop, panel beater, insurance holding yard or your driveway',
    ],
    scenarios: [
      'Late-night breakdown on the Bruce Highway south of Townsville with no service stations nearby',
      'Bingle in the Stockland Townsville carpark on a Saturday after closing time',
      'Vehicle that will not restart at the Magnetic Island ferry terminal after the last sailing',
    ],
    faqs: [
      {
        q: 'How quickly can a 24/7 tow truck reach me in Townsville?',
        a: 'For metro suburbs the recommended operators here aim for around 30 minutes, traffic and weather permitting. Outer Ring Road, Bruce Highway and Magnetic Island callouts naturally take longer.',
      },
      {
        q: 'Will I be charged a higher rate for an after-hours tow?',
        a: 'Most Townsville operators apply an after-hours surcharge between roughly 6pm and 6am and on public holidays. Always confirm the quote on the call before you accept the job.',
      },
      {
        q: 'What should I do while I wait for the tow truck at night?',
        a: 'Pull as far off the road as you safely can, switch on hazards, stay belted in if traffic is moving fast around you, and share your live location with the operator over SMS so the driver can find you quickly.',
      },
      {
        q: 'Can the tow operator deal with police or my insurer for me?',
        a: 'Yes. Both recommended operators can liaise with attending officers at an accident scene and provide the paperwork your insurer will need for a claim.',
      },
      {
        q: 'Is 24/7 towing the same as roadside assistance?',
        a: 'Not quite. Roadside assistance covers small fixes like a jump start or fuel top-up. A 24/7 tow brings a truck to relocate the vehicle when it cannot be driven safely.',
      },
    ],
    related: ['accident-towing', 'breakdown-towing', 'tilt-tray-towing', 'insurance-towing'],
  },
  {
    slug: 'accident-towing',
    category: 'Emergency',
    h1: 'Accident Towing in Townsville',
    metaTitle: 'Accident Towing Townsville | Crash Recovery Tow Truck',
    metaDescription:
      'Crash recovery, insurance-approved towing and damage-free pickup after an accident in Townsville. See the operators we recommend for accident towing.',
    intro:
      "An accident is one of the worst times to be searching for a tow company on your phone. The right Townsville accident-towing operator does three things at once: gets your vehicle off the road safely, protects what is left of it from further damage, and gives you the paperwork your insurer needs. Both companies we recommend on this page run tilt-tray rigs, which lift damaged cars without dragging suspension, exhaust or bumpers along the road — important if a panel beater or write-off assessor still needs to inspect the underside. They will also coordinate with attending police, store the vehicle in a secure yard if you are not going home in it, and help fast-track an insurance handover. Townsville's accident hotspots — Stockland Townsville, the Ring Road merges, the Bruce Highway and the Charters Towers Road / Nathan Street intersections — see plenty of weekend bingles, so the operators here are familiar with the routes, the wreckers and the bodyshops.",
    included: [
      'Tilt-tray pickup that keeps a damaged vehicle off its wheels',
      'Cleanup of glass and minor debris within reason at the scene',
      'Liaison with police and tow-away officers',
      'Secure overnight storage if your panel beater or insurer is closed',
      'Direct delivery to a Townsville-approved insurance repairer',
    ],
    scenarios: [
      'Nose-to-tail at the Charters Towers Road / Nathan Street lights in afternoon traffic',
      'Single-car incident on the wet Ring Road in monsoon season',
      'Carpark prang at Willows Shopping Centre with another driver disputing fault',
    ],
    faqs: [
      {
        q: 'Do I have to use the tow truck that turns up first at an accident?',
        a: 'No. In Queensland you have the right to choose your own operator. Politely decline if a truck arrives that you did not call, and dial the company you actually want.',
      },
      {
        q: 'Will my insurance pay for the accident tow?',
        a: 'Most comprehensive policies cover an accident tow to the nearest safe holding yard or your nominated repairer. Confirm cover with your insurer before agreeing to long tows.',
      },
      {
        q: 'Can the operator tow my car straight to a panel beater of my choice?',
        a: 'Yes. Both recommended Townsville operators will tow to the panel beater you nominate, including out-of-area shops if you authorise the extra distance.',
      },
      {
        q: 'What if my car is leaking fluid or the airbags have deployed?',
        a: 'Tell the operator on the call. They will bring absorbent and prepare the truck appropriately so the vehicle can be loaded without spreading fluid or causing further damage.',
      },
      {
        q: 'Should I move the vehicle before the tow arrives?',
        a: 'Only if it is safe and the vehicle is drivable. If anyone is injured or the car is blocking traffic dangerously, call 000 first and let police direct any movement.',
      },
    ],
    related: ['24-7-emergency-towing', 'insurance-towing', 'tilt-tray-towing', 'breakdown-towing'],
  },
  {
    slug: 'breakdown-towing',
    category: 'Emergency',
    h1: 'Breakdown Towing in Townsville',
    metaTitle: 'Breakdown Towing Townsville | Tow Truck Near Me',
    metaDescription:
      'Broken down somewhere in Townsville? See the local breakdown towing operators we recommend for fast, damage-free pickup to your workshop of choice.',
    intro:
      "Breakdowns rarely happen anywhere convenient. A Townsville breakdown tow is most often called from a service-station forecourt, the side of Riverway Drive, the Ring Road shoulder or a residential street where a battery has finally given up after a long Dry. The operators we recommend specialise in getting drivable-but-not-quite cars onto a tilt tray quickly, and getting them to the mechanic, dealership or auto-electrician you actually want — not whichever workshop the tow company has a deal with. They are the right call when your car will start but will not move, when warning lights have lit up and you do not want to risk the next 20km, when you have run out of fuel beyond walking distance, or when a flat battery is not responding to a jump. If you are not sure whether you need a full tow or roadside, mention the symptoms on the call and the operator will advise.",
    included: [
      'Tilt-tray collection from roadside, driveway or carpark',
      'Tow to your nominated mechanic, dealership or auto-electrician in the Townsville area',
      'Optional roadside-first triage (jump start, fuel, tyre) if a full tow is not needed',
      'Out-of-hours callouts at advertised after-hours rates',
      'Storage at the operator yard if your workshop cannot accept the vehicle the same day',
    ],
    scenarios: [
      'Battery dead in the Aitkenvale Coles carpark after weekend grocery run',
      'Engine warning light on the Ring Road approaching Douglas — pulled over for safety',
      'Run out of fuel south of Stuart waiting for the next service station',
    ],
    faqs: [
      {
        q: 'How soon can a Townsville breakdown tow truck get to me?',
        a: 'Allow around 30 minutes for metro suburbs in normal traffic, longer during peak hour, monsoon weather, or for outer Ring Road and rural callouts.',
      },
      {
        q: 'Can the tow take me and any passengers along with the vehicle?',
        a: 'Most tilt trays seat one passenger in the cab. For more than one passenger, arrange separate transport — drivers cannot legally carry passengers in the towed vehicle.',
      },
      {
        q: 'Will the tow operator try to talk me out of using my preferred mechanic?',
        a: "No. Both recommended Townsville operators will tow to the workshop you nominate. You are the customer paying for the tow.",
      },
      {
        q: 'Is roadside assistance cheaper than a tow?',
        a: 'Usually yes for a single jump start, fuel top-up or tyre change. If the vehicle still will not run after roadside attempts, you will need a tow anyway.',
      },
      {
        q: 'What information should I have ready when I call?',
        a: "Your exact location (a Google Maps drop pin works best), the make and model, whether the vehicle is automatic or manual, whether it is drivable onto a tray, and the address you want it taken to.",
      },
    ],
    related: ['24-7-emergency-towing', 'jump-start', 'fuel-delivery', 'tyre-change-roadside-assist'],
  },
  {
    slug: 'tilt-tray-towing',
    category: 'Equipment',
    h1: 'Tilt Tray Towing in Townsville',
    metaTitle: 'Tilt Tray Towing Townsville | Damage-Free Tow Truck',
    metaDescription:
      'Tilt tray tow trucks lift the whole vehicle off the road for damage-free transport. See the Townsville operators we recommend for tilt tray work.',
    intro:
      "A tilt-tray tow truck is the modern default for Townsville recoveries because the entire vehicle rides on a flat deck — no wheels turning, no driveline strain, no bumpers dragging on the kerb. That matters more than people realise. All-wheel-drive cars, low-slung sedans, EVs, prestige vehicles and anything sitting on Townsville's lowered street builds can all be moved without risking the gearbox or undertray. Tilt-tray rigs are also the right pick when a vehicle is unregistered, has a locked or seized wheel, or has been kerbed badly enough that one corner will not roll. The operators we recommend run modern tilt trays as the front-line fleet for both accident and breakdown jobs across Townsville, with the loading angle and winch capacity to handle most passenger vehicles, work utes and small commercial loads.",
    included: [
      'Hydraulic tilt-tray loading with low approach angle for low-clearance vehicles',
      'Powered winch for non-drivable, locked or seized vehicles',
      'Wheel cradles and soft straps to avoid panel and rim damage',
      'Single-deck capacity for sedans, utes, vans and most light commercials',
      'Combination with dollies for AWD or 4WD vehicles when required',
    ],
    scenarios: [
      'Lowered weekend project car that cannot be loaded on a hook-and-chain',
      'AWD with a seized rear differential after a long drive',
      'EV on its first major service tow — no driveline rotation while moving',
    ],
    faqs: [
      {
        q: 'Why is a tilt tray better than hook-and-chain for most cars?',
        a: 'Tilt trays lift all four wheels off the road, eliminating driveline strain on AWD and AWD-converted vehicles and protecting low front bumpers from kerb scraping.',
      },
      {
        q: 'Can a tilt tray load a vehicle with no working wheels?',
        a: 'Yes. The onboard winch can drag the vehicle onto the deck on its own rims or skid plates, and dollies are available if needed for one-side wheel issues.',
      },
      {
        q: 'Is a tilt tray suitable for AWD or 4WD vehicles?',
        a: 'Yes — it is usually the safest option for AWD because no wheels rotate during the tow, which prevents transfer-case and viscous-coupling damage.',
      },
      {
        q: 'What size vehicle can a Townsville tilt tray handle?',
        a: 'Standard tilt trays cover most sedans, hatches, SUVs, utes and small vans. Larger vehicles need a heavy-tilt or heavy-recovery rig — both recommended operators offer this.',
      },
      {
        q: 'Can I ride in my vehicle on the tray?',
        a: 'No. You must ride in the truck cab. Riding in a vehicle on a tray is unsafe and not legal.',
      },
    ],
    related: ['flatbed-towing', 'prestige-and-luxury-vehicle-towing', 'accident-towing', '4wd-and-off-road-recovery'],
  },
  {
    slug: 'flatbed-towing',
    category: 'Equipment',
    h1: 'Flatbed Towing in Townsville',
    metaTitle: 'Flatbed Towing Townsville | Flat Deck Tow Truck',
    metaDescription:
      'Flatbed and flat-deck towing in Townsville for cars, utes and equipment that need to ride completely off the road. See our recommended operators.',
    intro:
      "Flatbed and flat-deck towing in Townsville is closely related to tilt-tray work — both lift the entire vehicle off the road — but the term is most often used for longer-deck rigs and equipment-style trays where the load is craned, ramp-loaded or skidded on rather than tilted. It is the right call for vehicles that are wider, longer or oddly shaped: side-by-sides, golf carts, ride-on mowers, small forklifts, light tractors, and damaged vehicles that need to be lifted in pieces. It is also the format of choice for two-vehicle moves where space allows. The operators we recommend can mobilise a flat deck across the Townsville metro and out to the Ring Road, and combine flat-deck capacity with tilt-tray and heavy-recovery rigs when a job needs more than one truck.",
    included: [
      'Flat-deck transport for non-standard or oversized loads',
      'Ramp or crane loading for vehicles and equipment without driveable wheels',
      'Tie-down with rated chains and ratchet straps for highway transport',
      'Multi-vehicle deck loading where dimensions and weights allow',
      'Combined dispatch with tilt tray when a job needs two trucks',
    ],
    scenarios: [
      'Side-by-side ATV that broke down on a station property west of Townsville',
      'Ride-on mower that needs to be moved between rural blocks',
      'Track-day car that cannot be tilted because of an under-tray splitter',
    ],
    faqs: [
      {
        q: 'What is the difference between a flatbed and a tilt tray?',
        a: 'A tilt tray hydraulically tilts to ground level for self-loading, while a flat deck is typically a fixed-height tray loaded by ramp, crane or forklift. Many operators use the terms interchangeably.',
      },
      {
        q: 'Can a flat deck transport two vehicles at once?',
        a: 'Sometimes — if combined length and weight are within the truck rating. Confirm on the call with the dimensions and weights of both vehicles.',
      },
      {
        q: 'Is flatbed towing more expensive than tilt tray?',
        a: "Usually similar for single-vehicle jobs. Multi-vehicle or oversized loads cost more because of extra loading time and tie-downs.",
      },
      {
        q: 'Can a flatbed tow take damaged vehicles after an accident?',
        a: 'Yes, particularly when the vehicle is wide or has been spread across the road and needs craned or skidded loading.',
      },
      {
        q: 'Do I need to provide tie-down points on my equipment?',
        a: "Helpful but not always required. Modern flat decks carry chains, straps and edge protectors that suit most factory tie-down arrangements.",
      },
    ],
    related: ['tilt-tray-towing', 'machinery-and-equipment-transport', 'heavy-haulage-towing', 'boat-and-trailer-transport'],
  },
  {
    slug: 'heavy-haulage-towing',
    category: 'Heavy',
    h1: 'Heavy Haulage and Heavy Vehicle Towing in Townsville',
    metaTitle: 'Heavy Haulage Townsville | Heavy Tow Truck & Recovery',
    metaDescription:
      'Heavy tow trucks for trucks, buses, prime movers and machinery in Townsville. See the heavy haulage and recovery operators we recommend.',
    intro:
      "Heavy haulage towing in Townsville covers anything that a standard tilt tray cannot handle: prime movers, rigid trucks, buses, coaches, plant equipment, road trains and the larger end of recreational vehicles. North Queensland is heavy-vehicle country — sugar, mining, civil and freight all run trucks through Townsville — and a breakdown on the Bruce Highway, Flinders Highway or any of the industrial estates is a very different recovery from a sedan on the Ring Road. The operators we recommend for heavy work run rotator and underlift recovery trucks, can split combinations safely, and have the experience to call in police escorts and traffic control where needed. They will also stage the recovery — get the truck off the carriageway first, clean up, then deal with cab and driveline issues at a yard where it is safe to work.",
    included: [
      'Underlift and rotator recovery for prime movers, rigids and buses',
      'Trailer separation and re-coupling on scene',
      'Coordinated traffic control and police liaison on highway recoveries',
      'Recovery from soft shoulders, run-offs and ditches',
      'Movement of disabled heavy vehicles to nominated workshop or holding yard',
    ],
    scenarios: [
      'Prime mover with brake issues stranded on the Bruce Highway south of Townsville',
      'Rigid truck rolled gently onto its side on a soft Ring Road shoulder after a wet-season storm',
      'Coach with a driveline failure outside an Aitkenvale depot during morning traffic',
    ],
    faqs: [
      {
        q: 'What sort of vehicles count as heavy for towing in Townsville?',
        a: 'Anything above a 4.5-tonne GVM rigid, plus buses, prime movers, road trains and most plant equipment. If a standard tilt tray cannot lift it, you need a heavy operator.',
      },
      {
        q: 'How long does a typical heavy recovery take?',
        a: "Plan for several hours from the first call to the truck reaching its destination. Roll-overs and run-offs take longer, especially when traffic control is involved.",
      },
      {
        q: 'Can you separate a trailer from a disabled prime mover on scene?',
        a: 'Yes. Both recommended operators can split combinations and recover the trailer separately if the prime mover is not safe to be towed coupled.',
      },
      {
        q: 'Do I need to organise a pilot or escort for the tow?',
        a: 'For oversize or off-route recoveries the operator can advise and arrange escorts. Standard underlift recoveries on existing routes generally do not need one.',
      },
      {
        q: 'Is heavy recovery covered by my fleet insurance?',
        a: 'Most fleet and commercial motor policies cover heavy recovery, but always confirm with your insurer and broker before authorising the job.',
      },
    ],
    related: ['machinery-and-equipment-transport', 'tilt-tray-towing', 'accident-towing', 'interstate-and-long-distance-towing'],
  },
  {
    slug: '4wd-and-off-road-recovery',
    category: 'Off-road',
    h1: '4WD and Off-Road Recovery in Townsville',
    metaTitle: '4WD Recovery Townsville | Off-Road Tow Truck & Bog Recovery',
    metaDescription:
      'Bogged, beached or stuck off the bitumen near Townsville? See the 4WD and off-road recovery operators we recommend for soft sand, mud and bush jobs.',
    intro:
      "Townsville is one of the best places in Australia to own a 4WD — and one of the easiest places to get one stuck. Pallarenda, Alva Beach, Cape Pallarenda, the Bohle and back roads west of the Ring Road all see vehicles bogged in soft sand, mud after monsoon storms, or hung up on a tide that came in faster than expected. Off-road recovery is its own discipline: the operator needs the right snatch, winch and traction equipment, the right truck to reach you (often a 4WD recovery rig rather than a tilt tray), and the experience to know when to dig, when to winch, and when to wait for the tide. Both recommended operators offer 4WD and off-road recovery in addition to standard tow services. Tell them on the call whether you are bogged in sand, mud or saltwater, whether the vehicle is still drivable, and whether the recovery point will need to be a tow truck, a winch line or another 4WD.",
    included: [
      'Snatch and winch recovery from soft sand, mud and creek crossings',
      'Beach recovery (Pallarenda, Alva Beach, surrounding access tracks)',
      'Recovery of vehicles bogged on station tracks west of Townsville',
      'Coordination of multiple recovery vehicles for technical pulls',
      'Tow back to the bitumen on a tilt tray if the vehicle cannot drive home',
    ],
    scenarios: [
      'Dual-cab bogged in soft sand at Pallarenda after letting tyres down too late',
      '4WD stuck in monsoon mud on a Bohle back-track after a storm',
      'Caravan hung up on a soft shoulder on a station road west of Townsville',
    ],
    faqs: [
      {
        q: 'Can the recovery operator reach me on a beach or sand track?',
        a: 'Yes — both recommended operators run vehicles capable of off-road recovery work. Tell them the access point, tide window and how far in you are.',
      },
      {
        q: 'Will saltwater immersion damage the recovery further?',
        a: 'It can. If your vehicle has been in saltwater, mention it on the call so the operator can prioritise getting it onto a tray and then to a flush-and-inspection workshop quickly.',
      },
      {
        q: 'Should I try to dig myself out before calling?',
        a: 'A few minutes of safe digging and tyre deflation can help, but if the vehicle is on the tide line or hung up on the chassis, stop and call.',
      },
      {
        q: 'Is 4WD recovery covered by standard insurance?',
        a: 'Some comprehensive policies cover off-road recovery up to a capped amount. Check your PDS and confirm with the operator before authorising.',
      },
      {
        q: 'Can you also recover a trailer or caravan?',
        a: 'Yes. Tell the operator the trailer dimensions and tow-ball weight so they can plan the right recovery and tow setup.',
      },
    ],
    related: ['tilt-tray-towing', 'breakdown-towing', '24-7-emergency-towing', 'machinery-and-equipment-transport'],
  },
  {
    slug: 'motorbike-towing',
    category: 'Specialty',
    h1: 'Motorbike Towing in Townsville',
    metaTitle: 'Motorbike Towing Townsville | Bike Tow Truck',
    metaDescription:
      'Motorbike towing in Townsville with proper bike straps, wheel chocks and damage-free transport. See the operators we recommend for bike tows.',
    intro:
      "Bikes are the most easily damaged vehicle on a tow truck if the driver does not know what they are doing. Townsville's recommended operators carry wheel chocks, soft tie-down straps and the right ramp angles so that sport, naked, cruiser and adventure bikes can all be loaded without scratching tanks, bending bars or putting load through fork seals. Whether you have come off a bike on the Hervey Range climb, broken down at the lights on Charters Towers Road, or simply need a non-running project bike moved between sheds, ask for a tilt-tray equipped for bikes specifically rather than a generic tow. Both recommended Townsville operators handle bike tows as part of their everyday workload. Townsville's bike crash hotspots cluster in a few predictable places — the Hervey Range climb for sport bikes, the Bruce Highway south for adventure riders pushing through fatigue, and Charters Towers Road through Aitkenvale and Hermit Park for commuters caught out by a sudden brake. If the bike has gone down, photograph the scene before any movement, leave the bars where they fell, and tell the operator on the call which side of the bike took the impact. That guidance changes how the loading is staged.",
    included: [
      'Wheel chock and soft-strap tie-down designed for motorbikes',
      'Loading via tilt-tray ramp at low approach angle',
      'Recovery of crashed or non-starting bikes',
      'Transport between Townsville suburbs, workshops and storage',
      'Optional pillion-equivalent transport for the rider in the truck cab',
    ],
    scenarios: [
      'Sport bike with a flat battery at the Aitkenvale lights',
      'Adventure bike off the road after a low-speed slide on the Hervey Range climb',
      'Project bike that has not run for years being moved between two Townsville sheds',
    ],
    faqs: [
      {
        q: 'Will tying my bike down with normal straps damage the forks?',
        a: 'It can if the front is over-compressed for a long distance. Operators with proper bike kits use a wheel chock and soft straps that protect fork seals.',
      },
      {
        q: 'Can the tow operator move a bike that will not start?',
        a: 'Yes — non-running bikes are loaded with the same wheel chock and winched or pushed onto the tray.',
      },
      {
        q: 'Are after-hours bike recoveries available in Townsville?',
        a: 'Yes. Both recommended operators run 24/7 and can attend a downed bike at any hour.',
      },
      {
        q: 'Will my insurer pay for a bike tow after a crash?',
        a: 'Most comprehensive bike policies include a tow allowance. Confirm with your insurer before authorising long-distance tows.',
      },
      {
        q: 'Can I ride in the truck with the bike?',
        a: 'Yes — one rider can usually travel in the truck cab. Multiple passengers will need separate transport.',
      },
    ],
    related: ['tilt-tray-towing', 'accident-towing', 'breakdown-towing', '24-7-emergency-towing'],
  },
  {
    slug: 'prestige-and-luxury-vehicle-towing',
    category: 'Specialty',
    h1: 'Prestige and Luxury Vehicle Towing in Townsville',
    metaTitle: 'Prestige Towing Townsville | Luxury & Exotic Tow Truck',
    metaDescription:
      'Prestige, luxury and low-clearance vehicle towing in Townsville with tilt tray, soft straps and damage-free loading. See the operators we recommend.',
    intro:
      "Prestige cars, luxury SUVs, EVs and modified street cars all share the same problem on a tow truck: low front splitters, soft alloys, sensitive driveline electronics and paint that nobody wants to repair. Townsville's recommended operators run tilt trays with low approach angles, soft straps that go around the wheel rather than the suspension, and drivers who know how to load an EV, an AWD German SUV or a lowered project car without leaving a mark. If you drive something that you would not want a generic tow truck to touch, say so on the call and ask for a damage-free tilt-tray pickup. The price is normally the same as any other tilt-tray job — what changes is the loading care. Townsville's prestige and EV ownership has grown sharply in the newer master-planned suburbs (Idalia, parts of North Ward, Bushland Beach), and the Townsville Airport long-stay carparks see plenty of prestige vehicles waiting on owners' return. Both situations benefit from operators who handle these loads daily rather than as an occasional exception — fork seals, alloy edges and EV traction batteries all reward driver experience.",
    included: [
      'Tilt-tray pickup with extended ramps and low approach angle',
      'Wheel-only soft straps to avoid suspension and bodywork load',
      'Optional under-tray boards for very low front splitters',
      'EV-aware loading (no driveline rotation, no jump-starting)',
      'Direct delivery to dealership, specialist workshop or detailer',
    ],
    scenarios: [
      'Luxury SUV with a flat battery in a Townsville shopping centre carpark',
      'Lowered street car that has scraped onto a kerb on Flinders Street',
      'EV awaiting a service appointment that needs a tow rather than a drive-in',
    ],
    faqs: [
      {
        q: 'Is a tilt tray safe for prestige cars?',
        a: "Yes — it is the safest option. Tilt trays lift the whole vehicle so no wheels turn during transport, which protects driveline and suspension.",
      },
      {
        q: 'Can the operator handle a very low front splitter?',
        a: "Yes. Mention the ride height on the call and the operator will bring extended ramps or under-tray loading boards.",
      },
      {
        q: 'Will jump-starting an EV damage it?',
        a: 'You should not jump-start a high-voltage EV traction battery. The 12V auxiliary battery can sometimes be supported, but the safer option is usually a tow.',
      },
      {
        q: 'Can the tow be done discreetly?',
        a: 'Yes — operators can attend without lights and stage the loading quickly when carparks or buildings need to be respected.',
      },
      {
        q: 'Will my comprehensive policy cover a prestige tow?',
        a: 'Most do. Confirm the cap and the approved repairer with your insurer before authorising long-distance jobs.',
      },
    ],
    related: ['tilt-tray-towing', 'flatbed-towing', '24-7-emergency-towing', 'insurance-towing'],
  },
  {
    slug: 'machinery-and-equipment-transport',
    category: 'Heavy',
    h1: 'Machinery and Equipment Transport in Townsville',
    metaTitle: 'Machinery Transport Townsville | Equipment Float & Tow',
    metaDescription:
      'Machinery, plant and equipment transport in Townsville and across NQ. See the heavy float and tilt-tray operators we recommend for plant moves.',
    intro:
      "Townsville's industrial estates from Bohle to Mount St John move plant and machinery every working day, and the right operator can handle anything from a skid-steer to a small excavator, telehandler or tractor. The recommended operators here run heavy floats and flat decks suited to plant work, with rated chains, edge protectors and the loading skill to keep tracks, tyres and hydraulic lines undamaged. They can also coordinate multi-piece moves between sites, store machinery overnight at a secure yard, and combine equipment transport with the heavy-recovery work that often goes hand in hand with it. For larger or oversize loads, ask early so escorts and route planning can be arranged. Most Townsville machinery moves run on a recurring fleet account rather than ad-hoc bookings — civil contractors, hire businesses and mining-services operators tend to set up a billing arrangement with the operator and call as jobs come up. If you're moving plant regularly through the Bohle, Mount St John or Stuart industrial pockets, get the account paperwork sorted before the first urgent job rather than after.",
    included: [
      'Float and flat-deck transport for skid-steers, excavators, telehandlers and tractors',
      'Loading via ramp or onboard winch as the equipment requires',
      'Rated chains, edge protectors and tie-down for highway transport',
      'Yard-to-yard, yard-to-site and site-to-site moves across the Townsville region',
      'Coordination of escorts and route planning for oversize loads',
    ],
    scenarios: [
      'Skid-steer being relocated between two Bohle workshops',
      'Mini excavator moving from a Mount St John yard to a worksite at Idalia',
      'Telehandler that has broken down on a worksite and needs a float to a service centre',
    ],
    faqs: [
      {
        q: 'How do I know if my equipment needs a float or a tilt tray?',
        a: 'Tracked or large-tyred equipment usually needs a float for the lower deck height. Smaller skid-steers and rigid wheeled equipment often fit a tilt tray.',
      },
      {
        q: 'Can you move equipment that does not start?',
        a: 'Yes. Both recommended operators can winch or skid non-running equipment onto the deck.',
      },
      {
        q: 'Do you handle pilots and escorts for oversize loads?',
        a: 'Yes — talk to the operator on booking so they can arrange a pilot if your load exceeds standard width or height permits.',
      },
      {
        q: 'Can you store equipment overnight in Townsville?',
        a: 'Yes. Both recommended operators have secure yards available for short-term storage between transport legs.',
      },
      {
        q: 'Are insurance and chain-of-responsibility paperwork included?',
        a: 'Yes. Heavy and machinery operators run under chain-of-responsibility obligations and can provide the appropriate paperwork for your records.',
      },
    ],
    related: ['heavy-haulage-towing', 'flatbed-towing', 'interstate-and-long-distance-towing', '4wd-and-off-road-recovery'],
  },
  {
    slug: 'boat-and-trailer-transport',
    category: 'Specialty',
    h1: 'Boat and Trailer Transport in Townsville',
    metaTitle: 'Boat & Trailer Tow Townsville | Trailer Breakdown Recovery',
    metaDescription:
      'Boat trailer breakdown? Trailer with no tow vehicle? See the Townsville operators we recommend for boat and trailer transport and recovery.',
    intro:
      "Townsville is a boating town, and the trip back from the ramp is where most boat-trailer breakdowns happen — wheel bearings that have given up after a saltwater dip, blown trailer tyres on the way home from the Ross River or Cungulla ramps, or a tow vehicle that decided that today was the day. The recommended operators here can recover a boat-on-trailer combination, transport a stranded trailer with no working tow vehicle, and move boats between Townsville ramps, storage yards and detailer/repair shops. They will also coordinate with marina staff or trailer-yard managers for after-hours drop-offs. The seasonal pattern matters too. Boat-trailer recoveries spike from September through to the school holidays as more locals get back on the water, and the bearings that survived last year's storage finally let go on a hot afternoon between the ramp and the shed. If your trailer hasn't been on a long run since the last wet season, do the bearing-buddy and tyre check before a Cungulla, Pallarenda or Bowling Green Bay trip rather than after.",
    included: [
      'Recovery of trailered boats with seized bearings or blown tyres',
      'Transport of trailers with no functioning tow vehicle',
      'Boat moves between ramps, marinas and storage yards',
      'Trailer-only moves from owner addresses to repair shops',
      'After-hours coordination at marinas and trailer yards',
    ],
    scenarios: [
      'Boat trailer wheel-bearing failure on the way home from the Ross River ramp',
      'Tow vehicle that has died at the trailer-yard gate with the boat still hooked up',
      'Tinny on a trailer being moved between two Townsville sheds for repair',
    ],
    faqs: [
      {
        q: 'Can you tow my boat and trailer if my tow vehicle has broken down?',
        a: 'Yes. The recommended operators can hook up your trailer and continue the move — confirm trailer weight and tow-ball type when booking.',
      },
      {
        q: 'What about a heavy trailer that exceeds standard tow ratings?',
        a: 'Use the heavy-haulage option in that case. Both recommended operators can dispatch a larger truck where needed.',
      },
      {
        q: 'Can the boat stay on the trailer during transport?',
        a: 'Almost always yes — the boat is tied down and transported on the trailer. Loose gear in the boat should be secured first.',
      },
      {
        q: 'How do I check trailer tyres before a long trip?',
        a: 'Cold pressures, tread depth and any sidewall cracking — boat-trailer tyres age faster than they wear. Replace before a long-distance run if in doubt.',
      },
      {
        q: 'Do you handle marina-to-marina moves?',
        a: 'Yes. Confirm gate access times and the lift requirements at both ends so the operator can plan the right truck.',
      },
    ],
    related: ['breakdown-towing', 'tilt-tray-towing', 'flatbed-towing', 'interstate-and-long-distance-towing'],
  },
  {
    slug: 'interstate-and-long-distance-towing',
    category: 'Distance',
    h1: 'Interstate and Long-Distance Towing from Townsville',
    metaTitle: 'Interstate Towing Townsville | Long-Distance Tow Truck',
    metaDescription:
      'Long-distance and interstate towing from Townsville to Cairns, Mackay, Brisbane and beyond. See the operators we recommend for interstate moves.',
    intro:
      "Most Townsville tows are short — a few suburbs or a quick run to a workshop. Long-distance work is different. A tow to Cairns, Mackay, Rockhampton, Brisbane or interstate needs a truck that can hold its rated load on the highway for hours, a driver rostered for the round trip, and a quote that covers fuel, tolls and turnaround. The recommended operators here can quote and run long-distance jobs from Townsville with the right combination of tilt-tray, flat-deck or float to suit the vehicle. Plan ahead where you can — a long-distance tow booked the day before is usually cheaper than a same-day callout because the operator can stage it around their other work. The Bruce Highway corridor north to Cairns is roughly 350 km one way; south to Mackay is around 390 km and to Brisbane closer to 1,350 km. Each adds its own fatigue-management requirement under heavy-vehicle rules, so the operator quote will reflect rest stops as well as fuel. For interstate runs into NSW or further, expect a multi-day delivery window with an itinerary up front.",
    included: [
      'Quoted long-distance and interstate tows from Townsville',
      'Tilt-tray, flat-deck or float as the load requires',
      'Highway-rated tie-down and load checks at refuelling stops',
      'Direct hand-over at destination workshop, dealership or yard',
      'Pre-booking discounts where staging is possible',
    ],
    scenarios: [
      'Family vehicle that has died in Townsville needing to be returned to a Brisbane home address',
      'Insurance write-off being moved to a southern auction yard',
      'Workshop-purchased project car being moved north or south for a buyer',
    ],
    faqs: [
      {
        q: 'How is interstate towing priced from Townsville?',
        a: 'Mostly by distance plus fuel and the size of the vehicle being towed. Pre-booked moves are usually cheaper than emergency callouts.',
      },
      {
        q: 'How long does a Townsville-to-Brisbane tow take?',
        a: "Plan a multi-day run with rest breaks for the driver under fatigue rules. The operator will quote a delivery window when booking.",
      },
      {
        q: 'Can I send personal items in the towed vehicle?',
        a: "Small personal items only, and at your own risk. Heavy or valuable items should be transported separately.",
      },
      {
        q: 'Is interstate towing covered by insurance?',
        a: "Many comprehensive policies cap tow allowances at a metro distance. Long-distance tows are usually paid out of pocket and can be claimed back where the policy allows.",
      },
      {
        q: 'Can the vehicle be dropped at a closed dealership out of hours?',
        a: 'Sometimes yes — confirm key drop or yard access with the destination ahead of the tow.',
      },
    ],
    related: ['heavy-haulage-towing', 'machinery-and-equipment-transport', 'tilt-tray-towing', 'insurance-towing'],
  },
  {
    slug: 'jump-start',
    category: 'Roadside',
    h1: 'Jump Start Service in Townsville',
    metaTitle: 'Jump Start Townsville | Flat Battery Roadside Help',
    metaDescription:
      'Flat battery in Townsville? See the operators we recommend for a fast jump start callout, with tow backup if the battery will not hold.',
    intro:
      "A flat battery is the single most common Townsville roadside callout, and most are fixed in a few minutes — either with a clean jump start or a quick assessment that the battery is finished and the car needs a tow to a battery shop. Townsville's heat is hard on lead-acid batteries: most last 18–24 months in NQ rather than the 3–4 years they'd manage in cooler southern cities, and modern start-stop vehicles draw current even when parked. The recommended operators here can attend a flat battery anywhere in the metro, jump-start safely (including newer vehicles where booster terminals are not at the battery itself) and tow on the same call if the battery will not take a charge. Mention on the call whether the dash electronics still work — that helps the operator bring the right kit. Dual-battery 4WDs that have been deep-cycled by an auxiliary fridge after a weekend camping trip are a separate category worth flagging on the call. The operator will isolate the auxiliary first, then check whether the main starting battery can be revived or needs replacing.",
    included: [
      'Roadside jump-start with high-current jump pack or vehicle-to-vehicle leads',
      'Battery health check on the spot',
      'Tow backup on the same callout if the battery will not hold a charge',
      'Safe jump procedure for modern start-stop and dual-battery vehicles',
      'Diagnosis hint of likely cause (drain, alternator, dead cell)',
    ],
    scenarios: [
      'Car will not start in the Aitkenvale shopping centre carpark after weekend errands',
      'Dual-battery 4WD that has gone flat after camping at Pallarenda',
      'Work vehicle that will not turn over after a long weekend in the depot',
    ],
    faqs: [
      {
        q: 'How quickly can someone get to me with a jump pack?',
        a: 'Around 30 minutes is typical for the Townsville metro. Outer suburbs and the Ring Road take longer.',
      },
      {
        q: 'Is it safe to jump-start a modern car?',
        a: 'Yes if done on the manufacturer-specified booster points. The recommended operators bring kit specifically for modern start-stop vehicles.',
      },
      {
        q: 'What if my battery will not hold a charge?',
        a: 'The operator can tow you to a battery shop or your preferred mechanic on the same callout — no second booking needed.',
      },
      {
        q: 'Is a jump start cheaper than a tow?',
        a: 'Yes for a single jump. If the battery is dead, a tow becomes the most efficient option.',
      },
      {
        q: 'Can I jump-start an EV?',
        a: "You should not jump the high-voltage traction battery. The 12V auxiliary system can sometimes be supported, but a tow is usually safer.",
      },
    ],
    related: ['breakdown-towing', 'tyre-change-roadside-assist', 'fuel-delivery', 'lockout-service'],
  },
  {
    slug: 'lockout-service',
    category: 'Roadside',
    h1: 'Vehicle Lockout Service in Townsville',
    metaTitle: 'Car Lockout Townsville | Locked Out Roadside Help',
    metaDescription:
      'Locked your keys in the car in Townsville? See the operators we recommend for a fast lockout callout — with tow backup if needed.',
    intro:
      "Locking the keys in the car ranks just behind a flat battery as the most common roadside problem in Townsville. The recommended operators here can attend a lockout in the Townsville metro and either re-enter the vehicle on site or, when re-entry is not possible because of immobiliser or smart-key issues, tow the vehicle to a locksmith or dealer. Mention on the call whether you have a spare key at home — sometimes the fastest fix is to drive a spare to you, and the operator can advise. The hot-summer version of this callout matters: a child or pet locked inside a Townsville vehicle in February heat is a genuine emergency. Cabin temperatures inside a closed car can climb past 60°C in 15 minutes on a sunny afternoon. If that's the situation, dial 000 and the tow operator simultaneously — emergency services have authority to break a window if needed, and the recovery operator can attend to the vehicle afterward.",
    included: [
      'Roadside lockout attendance across the Townsville metro',
      'Re-entry on site where the vehicle and the law allow',
      'Tow to a locksmith or dealership for smart-key and immobiliser cases',
      'Priority dispatch for vehicles with passengers or pets locked inside',
      'Coordination with police if a window must be broken in an emergency',
    ],
    scenarios: [
      'Keys locked in the boot at the Strand carpark before a beach run',
      'Smart-key dead in a luxury SUV that needs a dealer fix',
      'Toddler locked inside a running vehicle in summer heat (urgent dispatch)',
    ],
    faqs: [
      {
        q: 'Will the operator damage the car re-entering it?',
        a: 'Modern re-entry tools rarely cause damage on most vehicles. Some prestige and smart-key vehicles will need a dealer or locksmith to avoid risk.',
      },
      {
        q: 'What if my smart key is dead, not lost?',
        a: 'Sometimes a fresh battery in the fob does the trick. If not, a tow to the dealer is usually the fastest path.',
      },
      {
        q: 'Can the operator make a new key for me?',
        a: 'No — they will tow you to a locksmith or dealer who can program one.',
      },
      {
        q: 'How urgent is a lockout with a pet or child inside?',
        a: 'Treated as an emergency. Call the operator and 000 simultaneously if the car is hot.',
      },
      {
        q: 'Does my insurance cover a lockout callout?',
        a: 'Some roadside add-ons do. The fee is usually small and many people just pay direct for speed.',
      },
    ],
    related: ['jump-start', 'fuel-delivery', 'tyre-change-roadside-assist', 'breakdown-towing'],
  },
  {
    slug: 'fuel-delivery',
    category: 'Roadside',
    h1: 'Emergency Fuel Delivery in Townsville',
    metaTitle: 'Fuel Delivery Townsville | Out of Fuel Roadside Help',
    metaDescription:
      'Run out of fuel in Townsville? See the roadside operators we recommend for a fast emergency fuel delivery callout.',
    intro:
      "Running out of fuel happens — between Townsville's longer suburb-to-suburb runs, the Ring Road and the southern stretch of the Bruce Highway, it can be a long way between service stations. The recommended operators here can deliver enough fuel to get you to the nearest pump (typically 5–10 litres of petrol or diesel), and they will tow you instead if the vehicle has other issues. Tell them on the call whether your vehicle takes petrol or diesel and roughly how much you need. The empty-tank version of the call has a few honest variants worth knowing. If you have put the wrong fuel in by mistake (petrol into a diesel, or vice versa), do not start the engine — call for a tow rather than a delivery, because a misfuel needs a tank drain at a workshop. If you've genuinely run dry on the Bruce Highway south of Townsville and there's no service station in sight, share a Google Maps drop-pin so the operator can find you fast; the southern stretch has long gaps between fuel and a precise location saves real minutes on the call.",
    included: [
      'Petrol or diesel delivery to your roadside location',
      'Enough fuel to reach the nearest service station',
      'Tow option on the same call if the issue turns out not to be fuel',
      'Safe pump-out / tow recommendation for misfuel scenarios',
      'Service across Townsville metro and Ring Road',
    ],
    scenarios: [
      'Run dry on the Ring Road approaching Douglas',
      'Empty tank at a Magnetic Island ferry terminal carpark with the next ferry hours away',
      'Diesel ute that has run dry on a station road west of Townsville',
    ],
    faqs: [
      {
        q: 'How much fuel will be delivered?',
        a: 'Enough to reach the nearest service station — typically 5–10 litres. Larger amounts can be arranged on request.',
      },
      {
        q: 'What should I do if I have put the wrong fuel in?',
        a: "Do not start the engine. Call for a tow to a workshop where the tank can be drained safely.",
      },
      {
        q: 'Can the operator deliver to a remote location?',
        a: 'Yes — confirm the access on the call. Long delivery runs cost more because of the round-trip distance.',
      },
      {
        q: 'Is fuel delivery cheaper than a tow?',
        a: 'For a true empty-tank job, yes. If the vehicle has another issue, a tow ends up cheaper than two callouts.',
      },
      {
        q: 'Can the same operator also jump-start me if needed?',
        a: 'Yes. Both recommended operators carry roadside kit alongside their tow capability.',
      },
    ],
    related: ['jump-start', 'breakdown-towing', 'tyre-change-roadside-assist', 'lockout-service'],
  },
  {
    slug: 'tyre-change-roadside-assist',
    category: 'Roadside',
    h1: 'Tyre Change and Roadside Assist in Townsville',
    metaTitle: 'Tyre Change Townsville | Flat Tyre Roadside Help',
    metaDescription:
      'Flat tyre in Townsville? See the operators we recommend for a fast tyre-change roadside callout, with tow backup if the spare is out of action.',
    intro:
      "Modern cars often ship without a spare wheel, and many drivers in Townsville will go years between flats — until one happens on the Ring Road, on a hot bitumen shoulder or in a carpark with no jack to be found. The recommended operators here can change a tyre roadside if you have a usable spare, plug a slow leak temporarily, or tow you to a tyre shop if you have no spare or the damage is beyond a roadside fix. Tell the operator the wheel size and whether you have nuts or wheel locks accessible — and on the call mention if the vehicle is already in a dangerous spot so they can arrive with traffic-management awareness. Townsville's wet season changes the tyre conversation. The first few weeks after monsoon rain produce a noticeable spike in side-wall damage and slow leaks, particularly on Riverway Drive and the longer Ring Road sections where potholes open up fast and don't get patched immediately. Carrying a sidewall-friendly spare and a working jack is worth the boot space if you commute through those corridors.",
    included: [
      'Roadside tyre change with your spare',
      'Plug repair for small punctures where appropriate',
      'Tow to a tyre shop when no spare is available',
      'Wheel-lock removal when the key is in the vehicle',
      'Coordination with traffic if the vehicle is in a dangerous position',
    ],
    scenarios: [
      'Side-wall blowout on the Ring Road shoulder at speed',
      'Slow puncture in a Townsville suburb that has gone flat overnight',
      'No spare in a modern hatchback at a service station with no compatible plug kit',
    ],
    faqs: [
      {
        q: 'What if I do not have a spare tyre?',
        a: 'A tilt-tray tow to your nearest tyre shop is usually the fastest fix.',
      },
      {
        q: 'Can the operator plug a tyre on the side of the road?',
        a: 'For a small tread puncture, yes. Side-wall damage and large gashes need a tyre shop, not a plug.',
      },
      {
        q: 'Will my insurance cover a tyre change callout?',
        a: 'Some roadside add-ons do. Most people pay direct for speed.',
      },
      {
        q: 'What about wheel locks if I cannot find the key?',
        a: 'Operators carry a range of removal sockets that work for most wheel locks. If yours is unusual, a tow to a tyre shop will be the safer call.',
      },
      {
        q: 'Can the operator put air into a slow-leak tyre to get me to a shop?',
        a: 'Yes. They can air up and follow you to a nearby tyre shop if the leak is slow enough to be safe.',
      },
    ],
    related: ['jump-start', 'fuel-delivery', 'lockout-service', 'breakdown-towing'],
  },
  {
    slug: 'insurance-towing',
    category: 'Insurance',
    h1: 'Insurance Towing in Townsville',
    metaTitle: 'Insurance Towing Townsville | Insurance-Approved Tow Truck',
    metaDescription:
      'Insurance-approved towing in Townsville. See the operators we recommend for accident, write-off and repairer-direct insurance jobs.',
    intro:
      "Insurance towing is a slightly different category from a normal roadside tow. The vehicle is being moved to a place that the insurer will accept — usually a holding yard, an approved repairer or an assessment centre — and the paperwork from the operator needs to support the claim. The recommended operators here are familiar with the Townsville insurer and panel-beater landscape, can tow direct to the repairer on your policy, and can store the vehicle securely if your insurer needs a few days to assess. If you are being asked at an accident scene to authorise a tow by an operator you did not call, you do not have to — politely decline and call the company you actually want. Queensland law gives you the right to choose your own tow operator, full stop. Photograph the tow authorisation form before you sign it, keep a copy of the operator invoice, note any QPRS number if police attended, and call your insurer from the scene if you can. The combination of those items is what makes the claim straightforward — most disputed insurance tows in Townsville come down to missing paperwork on the day, not missing cover in the policy.",
    included: [
      'Tilt-tray tow to your nominated insurance-approved repairer',
      'Direct delivery to insurer holding yards in Townsville',
      'Secure overnight storage during weekend or holiday windows',
      'Paperwork suitable for an insurance claim',
      'Coordination with your insurer or broker as required',
    ],
    scenarios: [
      'Comprehensive-insured driver after a Charters Towers Road bingle wanting their preferred panel beater',
      'Write-off being relocated to an insurer holding yard pending assessment',
      'Cross-suburb tow from accident scene to a Townsville assessment centre',
    ],
    faqs: [
      {
        q: 'Can I choose any insurance towing operator I want?',
        a: 'Yes. In Queensland you choose the tow company. Insurer-approved status helps with paperwork but you are not required to use the first truck on scene.',
      },
      {
        q: 'Will my insurer pay the tow operator directly?',
        a: 'Sometimes. Many insurers reimburse you instead. Confirm before authorising the tow.',
      },
      {
        q: 'How long can the vehicle be stored before assessment?',
        a: 'Usually a few days at a normal storage rate, longer by arrangement. Talk to the operator and your insurer to manage the cost.',
      },
      {
        q: 'What paperwork do I need to keep?',
        a: 'The tow authorisation, the operator invoice, and any photos taken at the scene. All useful to your insurer.',
      },
      {
        q: 'What if the at-fault driver is supposed to pay the tow?',
        a: 'You may still need to pay up front and recover the cost via your insurer or the at-fault party. Confirm with your insurer before agreeing to absorb the cost.',
      },
    ],
    related: ['accident-towing', 'tilt-tray-towing', '24-7-emergency-towing', 'abandoned-vehicle-removal'],
  },
  {
    slug: 'abandoned-vehicle-removal',
    category: 'Other',
    h1: 'Abandoned Vehicle Removal in Townsville',
    metaTitle: 'Abandoned Vehicle Removal Townsville | Tow Away Service',
    metaDescription:
      'Need an abandoned or unwanted vehicle removed from your Townsville property or carpark? See the operators we recommend for compliant tow-away.',
    intro:
      "Property managers, body corporates and Townsville business owners all run into the same problem occasionally: a vehicle has been left in a carpark or on a street frontage, the owner is not contactable, and it needs to be moved. The recommended operators here can remove abandoned and unwanted vehicles in line with Queensland tow-away requirements, deliver them to a wrecker or auction yard if appropriate, and provide the paperwork your body corporate or business will need to satisfy any later dispute. Where signage and notice requirements apply on private property, the operator can advise on the right process before the truck rolls. Townsville sees abandoned-vehicle removal callouts across the metro — body corporate carparks in North Ward and the Strand, workshop yards in Garbutt where a customer never returned to collect, residential street frontages in the older inner suburbs, and the occasional unregistered project car that has overstayed its welcome on a Hermit Park driveway. Each scenario has slightly different paperwork and notice requirements. Get the conversation started before the date you need the vehicle gone so the process can be followed cleanly.",
    included: [
      'Tow-away of abandoned and unwanted vehicles from private property',
      'Coordination with body corporate, property manager or business owner',
      'Delivery to wrecker, scrap yard or auction depending on the case',
      'Paperwork suitable for property records and dispute resolution',
      'Process advice on signage and notice obligations for private tow-aways',
    ],
    scenarios: [
      'Unregistered vehicle dumped overnight at the back of a Townsville body corporate carpark',
      'Customer car left at a workshop for months with no contact returned',
      'Project car that the owner no longer wants and needs removed from a residential driveway',
    ],
    faqs: [
      {
        q: 'Can I just have a vehicle towed off my property whenever I want?',
        a: 'Not usually. Notice and signage requirements normally apply on private property. The operator can advise on the right process.',
      },
      {
        q: 'What if the owner returns and disputes the tow?',
        a: 'The paperwork and timeline notes from the operator are exactly what you need. Keep copies.',
      },
      {
        q: 'Where does an abandoned vehicle end up?',
        a: 'Depending on its condition: a wrecker, an auction yard or, in some cases, returned to the registered owner if they pay the fees.',
      },
      {
        q: 'Will the body corporate pay for the tow?',
        a: 'Usually yes — discuss with the property manager or committee before authorising.',
      },
      {
        q: 'Can you remove a vehicle that is partially dismantled?',
        a: 'Yes. A flat-deck or skid-loaded recovery handles vehicles that no longer have working wheels.',
      },
    ],
    related: ['insurance-towing', 'tilt-tray-towing', 'flatbed-towing', 'breakdown-towing'],
  },
];

export const getService = (slug: ServiceSlug) =>
  services.find((s) => s.slug === slug)!;

export const allServiceSlugs: ServiceSlug[] = services.map((s) => s.slug);
