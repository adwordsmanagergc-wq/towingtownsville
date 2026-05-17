import type { BlogPost } from '@/types';

// Blog posts are kept in a single TypeScript module so the site can render them
// without an MDX bundler in the build path. The `body` field is plain Markdown
// rendered by the lightweight markdown helper in src/lib/md.ts.
export const allBlogPosts: BlogPost[] = [
  {
    slug: 'broken-down-in-townsville-causes-and-recovery',
    title: "Broken Down in Townsville? Every Way Your Vehicle Can Fail (and What to Do Next)",
    description:
      "Broken down in Townsville? A plain-English run-through of every way cars, utes, trucks, 4WDs, bikes and boat trailers fail in NQ — and how to get a tow truck Townsville locals trust.",
    date: '2026-05-15',
    author: 'Townsville Towing Compare',
    readMinutes: 8,
    faqs: [
      {
        q: "What's the most common reason cars break down in Townsville?",
        a: "Flat or failing batteries are the single most common Townsville roadside callout. The heat is brutal on lead-acid batteries — most last 18–24 months in NQ rather than the 3–4 years they'd manage in a cooler climate. If your car cranks slowly or won't start after the weekend, the battery is the first suspect.",
      },
      {
        q: "Can a tow truck Townsville operator handle a bogged 4WD on the beach?",
        a: "Yes — but tell them on the call. Beach and soft-sand recoveries need a 4WD recovery rig with the right snatch, winch and traction gear, not a standard tilt tray. See our [4WD recovery service page](/services/4wd-and-off-road-recovery) for what's involved.",
      },
      {
        q: "Should I push my car off the road before the tow arrives?",
        a: "Only if it's safe and you're not in traffic. On the Ring Road, the Bruce Highway or any high-speed shoulder, stay belted in and let the tow operator manage the recovery with traffic awareness.",
      },
      {
        q: "Do Townsville tow operators come out for boat-trailer breakdowns?",
        a: "Yes. Wheel-bearing failures and blown trailer tyres on the way home from the ramp are common Townsville callouts — see [boat and trailer transport](/services/boat-and-trailer-transport).",
      },
      {
        q: "Is there 24/7 emergency towing in Townsville?",
        a: "Yes. The reputable operators answer the phone around the clock for accident and breakdown work — see [24/7 emergency towing](/services/24-7-emergency-towing).",
      },
    ],
    body: `## Why Townsville chews vehicles up faster than most cities

Townsville isn't a kind place to a car. Heat that hits 35°C+ for six months of the year, monsoon storms that flood low-lying roads in minutes, long stretches of highway between fuel stops, soft-sand beach access at Pallarenda and Alva Beach, the Hervey Range climb, and corrugated station tracks west of the Ring Road — each one accelerates a specific failure mode. If you drive in NQ, your odds of needing a [tow truck Townsville](/) operator at some point in your ownership are basically 100%.

This guide walks through every way vehicles fail in Townsville — from the everyday flat battery in an Aitkenvale carpark to a prime mover stuck on the Bruce Highway — and tells you exactly who to call for each.

## Cars and SUVs — the everyday failures

### Flat or dead battery

The single most common Townsville roadside callout. Heat kills lead-acid batteries fast — expect 18–24 months in NQ instead of the 3–4 years you'd get further south. Modern start-stop vehicles drain even faster.

**What to do:** Try a [jump start](/services/jump-start) first. If the battery won't hold a charge after a jump, you need a tow to a battery shop.

### Alternator failure

Often mistaken for a battery issue. The car runs fine until you drive home with headlights on, then suddenly dies because the alternator has stopped charging the battery for the last hour.

**What to do:** Tow to your mechanic. The car won't restart and won't run for long even if it does.

### Cooling system failure (radiator, hoses, water pump)

Townsville heat plus a tired radiator hose equals a steam cloud on the side of the road. Common around long weekends, after road trips, and on hot afternoons.

**What to do:** Stop immediately. Driving a hot engine warps heads and destroys head gaskets. Call a [breakdown towing](/services/breakdown-towing) operator — do not push your luck "just to get home".

### Running out of fuel

Sounds dumb, but the stretches of road around Townsville mean drivers run dry more often than they'd admit. The Ring Road, the Bruce Highway south, and any rural run past Mount Stuart have long gaps between service stations.

**What to do:** [Emergency fuel delivery](/services/fuel-delivery) gets you 5–10 litres to the next pump.

### Locked out

Keys in the boot at the Strand, smart-key flat in the carpark, child locked inside a hot car. All everyday Townsville callouts.

**What to do:** Call a [lockout service](/services/lockout-service). For a child or pet inside a hot vehicle, dial 000 and the tow operator simultaneously.

### Tyre damage

Pothole season after the wet chews through tyres faster than people expect. Sidewall blowouts on the Ring Road shoulder are a regular call.

**What to do:** [Tyre change roadside assist](/services/tyre-change-roadside-assist) if you've got a usable spare; tow to a tyre shop if you don't.

## Utes and light commercial — the working-day failures

Tradies, fleet vehicles and dual-cab utes have their own pattern. Clutches that have lived a hard life, brakes that have done too many tip-offs at landfill, electricals shorted by the tarp setup, batteries that have been deep-cycled by an auxiliary fridge — all common.

The tow itself is usually a standard [tilt tray](/services/tilt-tray-towing) job to your fleet workshop or preferred mechanic. If the ute is loaded, mention that on the call so the operator brings the right tie-down kit.

## Trucks, prime movers and heavy vehicles

Heavy-vehicle breakdowns aren't passenger-car territory — they need a heavy operator with underlift or rotator capacity. Townsville sees its share on the Bruce Highway, Flinders Highway and around the Bohle, Mount St John and Garbutt industrial estates.

Common heavy failures:

- **Brake system faults** — air leak, spring brake stuck on, ABS sensor fault
- **Cooling failure** on long climbs (Hervey Range, the Bruce ascents)
- **Driveline issues** — clutch, transmission, diff
- **Tyre or wheel-end failure** — blowouts at speed, bearing failures

See [heavy haulage towing](/services/heavy-haulage-towing) for what a recovery looks like, and the [Bruce Highway breakdown guide](/blog/heavy-vehicle-breakdown-bruce-highway-townsville) for what to do at the scene.

## 4WD recovery — sand, mud, beach, bush

This is the one most people underestimate. Townsville is the easiest place in Australia to own a 4WD and the easiest place to get one badly stuck.

### Soft sand and beach recoveries

**Pallarenda, Alva Beach, Cape Pallarenda** — soft-sand bogs are the daily 4WD recovery callout. The pattern is always the same: driver came in from harder track, didn't deflate tyres enough, sank into the soft section just past the access ramp.

**What to do:** Stop spinning the wheels immediately. Drop tyres to 18 psi or lower. Clear sand in front of the wheels. If the tide is coming up, stop trying to self-recover and call a [4WD and off-road recovery](/services/4wd-and-off-road-recovery) operator now. A vehicle that ends up in saltwater is a different (and much more expensive) problem.

See our full [Pallarenda / Alva Beach recovery guide](/blog/4wd-bogged-pallarenda-alva-beach-recovery-guide) for the step-by-step.

### Mud bogs after the wet

The back tracks west of the Ring Road, station roads beyond Mount Stuart, and the corrugated runs out toward Hervey Range can turn into mud-pit territory in a single storm.

**What to do:** Same as sand — stop spinning, assess, call. Mention "mud, not sand" on the call so the recovery operator brings the right kit.

### Creek crossings and water damage

Wet-season crossings hide deep holes that weren't there last weekend. A vehicle that's gone deep enough to draw water into the airbox needs a tow straight to a workshop — do not attempt to restart it.

### Hung up on chassis

Sometimes the vehicle isn't bogged in the traditional sense — it's high-centred on a ridge, a log, or a sand hump, with all four wheels off the ground. A winch recovery is the only safe option.

## Caravans, camper trailers and recreational

Most caravan breakdowns happen on the tow vehicle, not the trailer. But trailers have their own failure modes:

- **Wheel-bearing failure** — usually starts as a low rumble, ends as a locked wheel
- **Brake controller / electric brake faults**
- **Coupling or chain failures** on rough roads

A caravan can usually be recovered behind a standard tow truck if the tow vehicle is dead. Mention dimensions and ATM weight on the call.

## Motorbikes

Bike breakdowns are usually electrical (battery, stator, ignition), tyre-related, or chain-related. The tow itself needs proper bike straps and a wheel chock — see [motorbike towing](/services/motorbike-towing). A generic tow truck without bike gear is the wrong call; fork seals and tank paint pay the price.

Common Townsville locations: the Hervey Range climb (sport bikes), Charters Towers Road through Aitkenvale (commuters), the Magnetic Island ferry terminal (vehicles returning from the island).

## Boats on trailers

Most boat-trailer breakdowns happen on the way home from the ramp:

- **Saltwater-cooked wheel bearings** — the dominant failure
- **Blown trailer tyres** — sidewall age more than tread wear
- **Tow vehicle dies with the boat still hooked up**

See [boat and trailer transport](/services/boat-and-trailer-transport). Mention whether the boat is loaded and the trailer's tow-ball weight when booking.

## "Just push it" is not an option in Townsville

In a cooler city, the broken-down driver might walk to the nearest mechanic. In Townsville, the heat, the distance between buildings, and the highway shoulders make that a genuinely bad idea. A 30-minute walk on the Bruce Highway shoulder at 1pm in February is a heatstroke risk. A bogged 4WD with a tide coming up is a write-off risk. The right answer is almost always: stay with the vehicle, hazards on, call for a tow.

## What to do right now if you've broken down

1. **Get off the road** — hazards on, coast to the shoulder if the vehicle is still moving.
2. **Stay with the vehicle** unless traffic makes that unsafe.
3. **Drop a Google Maps pin** so the tow operator can find you fast.
4. **Call a [tow truck Townsville](/) operator** — explain what's wrong, what the vehicle is, where you want it taken.
5. **Take photos** — for the insurer, the mechanic and your own records.

## Who to call

The Townsville tow operators we recommend cover every category above — passenger vehicle, heavy, 4WD recovery, motorbike, caravan, boat trailer — 24/7 across the Townsville metro and out to the Ring Road, Magnetic Island ferry terminal and the Bruce Highway approaches.

See the **[recommended operators on our home page](/)** for direct contact details, or read the longer write-up of why we recommend them at **[/recommended](/recommended)**. Both operators take direct bookings and will tow to the workshop you nominate, not theirs.

## Related guides

- [How much does a tow truck cost in Townsville? (2026 guide)](/blog/tow-truck-cost-townsville-2026)
- [Accident towing in Townsville — first 10 minutes](/blog/accident-towing-townsville-first-10-minutes)
- [Townsville's accident hotspots](/blog/townsville-accident-hotspots-driving-guide)
- [Tilt tray vs flatbed vs hook-and-chain](/blog/tilt-tray-vs-flatbed-vs-hook-and-chain)
- [Top 10 mechanics in Townsville](/blog/top-10-mechanics-townsville-towing-service)`,
  },  {
    slug: 'townsville-accident-hotspots-driving-guide',
    title: "Townsville's accident hotspots — the roads, intersections and conditions to drive carefully through",
    description:
      "A local-knowledge guide to Townsville's most accident-prone roads, intersections and seasons — Ring Road merges, Bruce Highway approaches, Charters Towers Road, Hervey Range and the wet-season bingle zones — and what to do if you end up needing a tow.",
    date: '2026-05-12',
    author: 'Townsville Towing Compare',
    readMinutes: 8,
    body: `## Why this guide exists

A surprising number of Townsville's accident and breakdown callouts cluster on the same handful of roads, intersections and seasonal conditions year after year. If you live here, you already half-know the list — the Ring Road merge that nobody indicates on, the Bruce Highway stretch where fatigue catches drivers out, the Charters Towers Road run from Aitkenvale to the CBD that gets hairy on Friday afternoons. This is the long-form version, written for anyone new to Townsville and for locals who want to give it to a partner or a teenager learning to drive.

This is general guidance, not legal advice — and conditions change. Drive to what's in front of you, not to what was true last month.

### The Townsville Ring Road

The Ring Road is the single biggest source of single-vehicle and rear-end callouts in the Townsville metro. Three specific situations recur:

- **Merge zones near Douglas and Mount Louisa.** Drivers slow to a crawl at the merge rather than matching highway speed, and the car behind them is doing 100. Most of the rear-enders we see come from this pattern.
- **The wet-season run-off.** Tropical downpours turn the shoulder slick in under a minute. A single light touch of the brake or steering at speed is enough to spin a 2WD. If the wipers are at full speed, drop your speed by 20 km/h.
- **Heavy-vehicle interactions.** Townsville is freight country. A road train that needs to brake hard takes a lot of road to do it. Don't sit in the no-zone immediately behind or beside one — give yourself the gap to react.

If you have to pull over on the Ring Road, get **fully** off the carriageway, hazards on, stand well clear, and call recovery. See the [Ring Road towing guide](/townsville/ring-road) for what to expect.

### The Bruce Highway south of Townsville

The southern stretch of the Bruce Highway out toward Ayr and beyond is where long-haul fatigue catches drivers out. Single-vehicle run-offs after dark are the dominant pattern, alongside roo strikes at dawn and dusk. Two practical things help:

- Don't drive Townsville-to-Mackay on the back of a full working day. Either start earlier or break the trip up.
- Animals are most active around sunrise and sunset. Drop speed, drive on high-beam where you can, and assume more animals are nearby once you see the first one.

For heavy-vehicle issues on the Bruce, see [the heavy breakdown guide](/blog/heavy-vehicle-breakdown-bruce-highway-townsville).

### Charters Towers Road and the Nathan Street axis

The Charters Towers Road / Nathan Street intersection is one of the busier inner-Townsville hotspots for low-speed nose-to-tails. Afternoon peak between roughly 4pm and 6pm is the worst window, made harder by sun glare westbound. Common causes:

- Drivers running yellow lights into stationary queues.
- Lane-changing in the last 50m before the intersection.
- Distracted driving — phones, takeaway, the dog moving around.

Even a slow-speed bingle here tends to need a tow because traffic doesn't let you swap details safely in the live lane. The [accident towing page](/services/accident-towing) walks through the first ten minutes.

### Stockland Townsville and shopping-centre carparks

Carpark prangs at Stockland Townsville, Willows Shopping Centre, Castletown and the Castletown / Hyde Park area aren't dramatic, but they happen every weekend. Reversing out of bays, blind corners on the ramps, and trolleys are the usual story. Things that help:

- Reverse-park where you can — pulling out forwards is safer than reversing into a moving carpark.
- Use the reverse camera AND turn your head — cameras have blind zones close to the bumper.
- If you're driving an SUV or ute, you're sitting higher than a sedan driver can see when they're reversing past you.

### The Hervey Range climb and out-of-town routes

The Hervey Range climb west of Townsville is short but technical. Drivers who don't know the road regularly get into trouble in three places: the first hairpin going up, the wet weather greasy stretch near the top, and the descent run-out. Motorbikes come off the climb more often than people realise. The [4WD recovery guide](/blog/4wd-bogged-pallarenda-alva-beach-recovery-guide) covers some of the soft-ground sections beyond the bitumen.

### Roundabouts that bite

Three Townsville roundabouts produce more than their share of callouts: the larger Idalia/Hugh Street roundabouts, the Riverway Drive roundabouts in Thuringowa, and the older single-lane roundabouts near the CBD that out-of-towners misread as give-ways. Rule of thumb: indicate **on entry and on exit**, every time, and assume the car in the next lane is going to swap into yours.

### Wet-season specifics

From roughly December to March, Townsville drives on a different road. Standing water is the new normal, the bitumen is greasier when rain starts after a dry stretch, and visibility drops to nothing for 30-second bursts in a storm. Lower the speed, lengthen the gap, and assume the car you can no longer see is closer than it was.

### Saturday-night Charters Towers Road and Flinders Street

Friday and Saturday nights along the Flinders Street strip and the southern end of Charters Towers Road bring a higher rate of low-speed bingles, kerb hits and lockouts. Stay sharp, share rides when you've been out, and put the tow operator's number in your phone before you go.

### School zones

Townsville's school zones are clearly marked at 40 km/h, but they catch out drivers passing through suburbs they don't live in. Mornings between 7:30 and 9:00 and afternoons between 2:30 and 4:00 are the windows.

### What to do if it happens

If you do end up needing a tow, the short version is in our [first 10 minutes guide](/blog/accident-towing-townsville-first-10-minutes). The shorter version:

- Get everyone safe.
- Call 000 if anyone is hurt.
- Pick your own tow company — you have that right in Queensland.
- Take photos before anything moves.

Both of our [recommended operators](/recommended) cover the suburbs and roads above 24/7. Kwiktow NQ is the call we make most often for accident response; ABC Towing for heavier vehicles.`,
  },
  {
    slug: 'top-10-mechanics-townsville-towing-service',
    title: "Top 10 Mechanics in Townsville (And Why You'll Probably Need a Tow Truck to Get There)",
    description:
      "Discover Townsville's top 10 mechanics and why a reliable towing service in Townsville is the unsung hero behind every repair. Local 2026 guide.",
    date: '2026-05-13',
    author: 'Townsville Towing Compare',
    readMinutes: 7,
    faqs: [
      {
        q: 'How much does towing cost in Townsville?',
        a: "A standard daytime tilt-tray tow inside the Townsville metro typically lands between $150 and $300. After-hours, weekend and long-distance jobs are quoted on request. If the tow is covered by comprehensive insurance, you usually pay nothing out of pocket. See our [cost guide](/blog/tow-truck-cost-townsville-2026) for a full breakdown.",
      },
      {
        q: 'Can you tow an AWD or 4WD vehicle?',
        a: 'Yes — and on a tilt tray (flatbed) rather than a hook-and-chain. AWD and 4WD vehicles should always be loaded so no wheels rotate during transport, which protects the centre diff and transfer case. See the [tilt tray towing page](/services/tilt-tray-towing) for the full rationale.',
      },
      {
        q: 'Do Townsville tow operators accept insurance jobs?',
        a: "Yes. Insurance-approved operators work directly with all major Australian insurers and can tow your vehicle to your nominated repairer or the insurer's holding yard. See [insurance towing](/services/insurance-towing).",
      },
      {
        q: 'Is 24/7 tow truck service available in Townsville?',
        a: 'Yes — the reputable operators answer the phone day and night. See [24/7 emergency towing](/services/24-7-emergency-towing) for what an after-hours callout actually involves and what the surcharges look like.',
      },
    ],
    mechanics: [
      { position: 1, name: 'Double D Automotive', description: 'General servicing and longstanding family customers. Tops the AutoGuru 2026 Townsville list for consistent, no-upsell work.' },
      { position: 2, name: 'NQ Autocare & Tyres', description: 'One-stop shop combining mechanical work with tyres, alignment and balancing. Ranked second on AutoGuru 2026.' },
      { position: 3, name: 'Endgame Mechanical', description: 'Diagnostics and plain-English explanations. Ranked third on AutoGuru 2026.' },
      { position: 4, name: 'Industry Plus Automotive', description: 'Garbutt workshop offering fair-priced repairs, logbook services, roadworthy certificates and air-conditioning. Rounds out AutoGuru 2026 top four.' },
      { position: 5, name: 'Bob Parkes Automotive', description: 'Family-owned Hyde Park workshop with 5.0 Localsearch rating. General servicing, towbar fitment and exhaust work.' },
      { position: 6, name: 'MB Automotive', description: 'Garbutt workshop with 5.0 average across 11 Localsearch reviews. 4WD work, fleet servicing and roadworthy inspections.' },
      { position: 7, name: 'Woolcock Automotive', description: 'Mount Louisa workshop at 4.8 stars across 17 reviews. Logbook servicing, EFI diagnostics and gearbox repairs.' },
      { position: 8, name: "Mark's Mechanics 'The Workshop'", description: 'Repco Authorised Service Centre in Garbutt, operating since 1991. 4.8 rating with nationwide warranty support.' },
      { position: 9, name: 'Dynolink', description: 'Garbutt workshop with 4.9 rating. In-house dyno, diesel performance tuning, ECU remapping (Link and Haltech).' },
      { position: 10, name: 'CB Automotive Service & Repairs', description: 'Oak Valley workshop with 5.0 rating across 11 reviews. Second-opinion diagnostics and older vehicles.' },
    ],
    body: `## Introduction: The Townsville Driver's Reality

Anyone who has driven the Bruce Highway in the wet season, navigated the climb up Castle Hill on a hot afternoon, or had a battery quietly die in a Garbutt car park knows one truth: cars in North Queensland break down at the worst possible moments. Heat, humidity, long distances between towns, and the rough corrugations of inland 4WD tracks all take a toll on engines, transmissions, and cooling systems.

And here's the part most blog posts about mechanics conveniently skip — you still have to get the car to the workshop. A great mechanic in Garbutt is no use to you if you're stranded on Riverway Drive with a seized engine. That's why every smart Townsville driver has two numbers saved in their phone: their trusted mechanic, and a reliable [towing service in Townsville](/) who can get them there safely, any time of day or night.

This guide walks through the ten best-reviewed mechanics across Townsville, and along the way we'll talk about why tow truck Townsville services are the quiet backbone of the local automotive industry.

## Why Towing Services Matter More in Townsville Than Almost Anywhere Else

Before we get to the workshop list, it's worth understanding why towing matters so much in this region.

Townsville isn't a compact metro area. The greater region stretches from Rollingstone in the north down to Giru in the south, and west toward Charters Towers. If your transmission lets go halfway to Hervey Range, you're not pushing the car home. You're calling an [emergency towing Townsville](/services/24-7-emergency-towing) operator and hoping they answer fast.

Add in the tropical climate — radiators boil over, batteries fail in 35-degree heat, and flash flooding can leave vehicles stranded in low-lying areas like Rosslea, [Idalia](/townsville/idalia) and [Oonoonba](/townsville/oonoonba) — and the case for keeping a 24/7 tow truck Townsville number on hand becomes obvious.

A proper towing service does three things a roadside mate with a tow strap simply can't:

- Tilt-tray or flatbed transport that won't damage your driveline, AWD system, or low-profile bumper
- Insurance-compliant paperwork for accident recovery and write-off transport
- Direct delivery to the workshop of your choice, not the closest holding yard

That last point is the one most drivers don't think about until they need it. When you call a breakdown towing North Queensland operator who works with local workshops, your car ends up at a mechanic you trust — not stuck at a tow yard accruing storage fees.

Right, on to the mechanics.

## The Top 10 Mechanics in Townsville for 2026

Rankings below are drawn from AutoGuru's 2026 Townsville editorial list and verified customer review data from Localsearch, weighted by both star rating and review volume.

### 1. Double D Automotive

Topping AutoGuru's Best Mechanics in Townsville list for 2026, Double D Automotive has built its reputation on consistent, no-nonsense servicing. They handle the bread-and-butter jobs — logbook services, brakes, diagnostics — without trying to upsell you on work you don't need. When customers describe a mechanic as "honest," that's the word that comes up here most.

**Best for:** General servicing and longstanding family customers.
**Towing tip:** If your daily driver won't start in the morning, a [flatbed tow truck Townsville](/services/flatbed-towing) call-out is cheaper than a misdiagnosis. Get it towed, get it looked at properly.

### 2. NQ Autocare & Tyres

Second on AutoGuru's 2026 list, NQ Autocare & Tyres is the kind of one-stop shop that saves you a second appointment. They handle mechanical work alongside tyres, wheel alignments and balancing — which matters in Townsville, where pothole season post-wet can chew through a set of tyres faster than you'd expect.

**Best for:** Combined mechanical + tyre work in one visit.

### 3. Endgame Mechanical

Ranked third on the AutoGuru 2026 list, Endgame Mechanical has earned a following among drivers who want a workshop that actually explains what's wrong with the car. For anyone burned by vague invoices in the past, that transparency is worth a lot.

**Best for:** Drivers who want clear diagnostics and plain-English explanations.

### 4. Industry Plus Automotive

Located in [Garbutt](/townsville/garbutt) and rounding out AutoGuru's top four for 2026, Industry Plus Automotive is a locally owned workshop that punches above its weight. Customer reviews call out fair pricing and genuinely helpful staff — a combination that's rarer than it should be.

**Best for:** Fair-priced mechanical repairs, log book services, roadworthy certificates and air-conditioning repairs.

### 5. Bob Parkes Automotive (Hyde Park)

Family-owned for more than 20 years and sitting on a perfect 5.0 rating from 11 Localsearch reviews, Bob Parkes Automotive is one of the most consistently recommended workshops on the Townsville subreddit. They handle general servicing, towbar fitment and exhaust work — useful if you're towing a caravan or boat.

**Best for:** Towbar fitting, exhaust work, and trusted long-term servicing.
**Towing tip:** Speaking of towbars — if yours isn't rated for the load you're pulling, you're one steep descent away from needing a [towing service Townsville](/) call-out yourself. Get it spec'd properly.

### 6. MB Automotive ([Garbutt](/townsville/garbutt))

MB Automotive holds a 5.0 average across 11 Localsearch reviews and consistently tops the Townsville Question And Answers Facebook recommendation threads. They specialise in 4WD work, fleet servicing and roadworthy inspections.

**Best for:** 4WD owners and fleet operators.

### 7. Woolcock Automotive ([Mount Louisa](/townsville/mount-louisa))

Sitting at 4.8 stars across 17 reviews — the highest review volume of any 4.8+ shop in the directory — Woolcock Automotive is a well-established name that handles logbook servicing, EFI diagnostics, gearbox repairs, and mechanical work for all makes and models.

**Best for:** EFI and gearbox diagnostics.

### 8. Mark's Mechanics 'The Workshop' ([Garbutt](/townsville/garbutt))

A Repco Authorised Service Centre operating since 1991, Mark's Mechanics holds a 4.8 rating from 9 reviews. Their nationwide warranty support is a genuine plus for anyone who travels interstate for work.

**Best for:** Nationwide warranty coverage on servicing.
**Towing tip:** Customers have shared stories of breakdowns where Mark's organised a tow within the hour. That's exactly the kind of mechanic-towing partnership worth having on speed dial — see [our recommended operators](/) for a tow that talks to the workshop on your behalf.

### 9. Dynolink ([Garbutt](/townsville/garbutt))

With a 4.9 rating from 7 reviews and a proper in-house dyno, Dynolink is the go-to for diesel tuning, ECU remapping (Link and Haltech), and performance work. If you've got a tuned 4WD or a ute that needs to actually perform with a load on the back, this is the workshop.

**Best for:** Diesel performance, tuning and ECU work.

### 10. CB Automotive Service & Repairs (Oak Valley)

CB Automotive rounds out the list with a 5.0 rating from 11 reviews. Recent customer feedback specifically calls out their ability to diagnose problems that other mechanics missed — which, in the secondhand car market, is gold.

**Best for:** Second-opinion diagnostics and older vehicles.

## Honourable Mentions

A few workshops missed the top ten by a whisker but deserve a look:

- **Bips Automotive Service Centre** ([Kirwan](/townsville/kirwan)) — 5.0 from 9 reviews, offers courtesy cars.
- **NQ Diesel** ([Garbutt](/townsville/garbutt)) — 4.9 from 8 reviews, specialist diesel and heavy vehicle work.
- **Caltabiano's Auto Fleming Street** ([Aitkenvale](/townsville/aitkenvale)) — 5.0 from 8 reviews, decades of local trust.
- **Fosters Ace Auto Repairs** ([Aitkenvale](/townsville/aitkenvale)) — RACQ approved, MTAQ accredited, 30+ years on the tools.

## How to Choose the Right Tow Truck Operator in Townsville

You've picked your mechanic. Now pick your towing partner before you need one. Here's what to look for in a towing service Townsville operator:

**Tilt-tray (flatbed) capability.** Modern vehicles — especially AWD, EVs, hybrids and low-clearance sedans — should never be dolly-towed or strap-towed. If a tow operator can't offer a tilt-tray, keep dialling.

**24/7 availability.** Breakdowns don't keep business hours. A genuine 24/7 tow truck Townsville service should answer the phone at 2am on a Sunday.

**Insurance approval.** If you're claiming the tow through comprehensive insurance, your operator needs to be on the insurer's panel or at least able to produce compliant paperwork.

**Coverage area.** Confirm they service the corridor you actually drive — Bruce Highway north and south, Hervey Range Road, Flinders Highway out to Charters Towers, and the Cape Cleveland and [Magnetic Island](/townsville/magnetic-island) ferry routes.

**Partnerships with local workshops.** The best breakdown towing North Queensland operators have informal relationships with the mechanics on this list. That means your car gets dropped off, keys handed over, and the workshop calls you to confirm — no chasing, no holding yards.

## What to Do the Moment Your Car Breaks Down in Townsville

1. **Get off the road.** Hazard lights on, indicate, coast to the verge if you can. The Bruce Highway shoulders can be narrow — get as far left as safely possible.
2. **Stay in the vehicle if traffic is heavy.** Especially on the [Ring Road](/townsville/ring-road) or Flinders Highway, exiting onto the shoulder in heat and traffic is genuinely dangerous.
3. **Call your towing service.** Have the make, model, location (drop a pin), and rough nature of the fault ready.
4. **Tell them which mechanic.** Refer back to this list. Most of the workshops above will accept after-hours drop-offs if you call ahead.
5. **Take photos.** For insurance, for the mechanic, and for your own peace of mind.

## The Bottom Line

The best mechanics in Townsville — Double D Automotive, NQ Autocare, Endgame Mechanical, Industry Plus, Bob Parkes, MB Automotive, Woolcock, Mark's Mechanics, Dynolink and CB Automotive — represent decades of combined experience and thousands of satisfied customers. But none of that matters if you can't get your car to their workshop door.

That's why a relationship with a trusted [towing service in Townsville](/) isn't a luxury — it's basic risk management for anyone who drives in North Queensland. Save the link now, before you need it at 11pm on the side of the highway in a thunderstorm.

## Need a tow?

See the Townsville tow operators we recommend on the [Townsville Towing Compare home page](/) — tilt-tray transport, insurance-approved, and direct delivery to the mechanic of your choice, including every workshop on this list.

## Frequently asked questions

### How much does towing cost in Townsville?

A standard daytime tilt-tray tow inside the Townsville metro typically lands between $150 and $300. After-hours, weekend and long-distance jobs are quoted on request. If the tow is covered by comprehensive insurance, you usually pay nothing out of pocket. See our [cost guide](/blog/tow-truck-cost-townsville-2026) for a full breakdown.

### Can you tow an AWD or 4WD vehicle?

Yes — and on a tilt tray (flatbed) rather than a hook-and-chain. AWD and 4WD vehicles should always be loaded so no wheels rotate during transport, which protects the centre diff and transfer case. See the [tilt tray towing page](/services/tilt-tray-towing) for the full rationale.

### Do Townsville tow operators accept insurance jobs?

Yes. Insurance-approved operators work directly with all major Australian insurers and can tow your vehicle to your nominated repairer or the insurer's holding yard. See [insurance towing](/services/insurance-towing).

### Is 24/7 tow truck service available in Townsville?

Yes — the reputable operators answer the phone day and night. See [24/7 emergency towing](/services/24-7-emergency-towing) for what an after-hours callout actually involves and what the surcharges look like.`,
  },
  {
    slug: 'tow-truck-cost-townsville-2026',
    title: 'How much does a tow truck cost in Townsville? (2026 guide)',
    description:
      'A plain-English breakdown of what a tow truck actually costs in Townsville in 2026, from short suburb hops to long-distance and heavy-vehicle work.',
    date: '2026-04-15',
    author: 'Townsville Towing Compare',
    readMinutes: 6,
    body: `## What you will actually pay for a tow in Townsville in 2026

Tow truck prices in Townsville sit on a sliding scale rather than a fixed menu. The two factors that move the number the most are the distance the truck travels and the weight (or awkwardness) of the load. A plain suburban tilt-tray pickup from one Townsville suburb to another is the cheapest job on the list. A heavy recovery on the Bruce Highway at 2am is the most expensive. Everything else lives somewhere between.

As a working ballpark for 2026:

- A standard daytime tilt-tray tow inside the Townsville metro typically lands somewhere between **$150 and $300**.
- An after-hours or weekend tow normally adds an out-of-hours surcharge — often **$50 to $100 more** depending on the time and the operator.
- A long-distance tow (Townsville to Cairns, Mackay or further) is **quoted by the kilometre and the size of the vehicle** rather than off a fixed sheet.
- A heavy recovery — prime mover, bus, large 4WD pulled out of a bog — is in a different category again, with hourly rates and equipment fees.

## Why the price moves the way it does

There are five inputs that change a tow quote in Townsville:

1. **Distance** — how far the truck has to drive to you, and then on to the drop-off.
2. **Time of day** — overnight, public holiday and major-event windows attract surcharges.
3. **Vehicle weight and access** — heavy vehicles need a heavy rig and sometimes traffic management.
4. **Recovery complexity** — bogged, rolled, or a long winch pull through soft ground costs more than a roll-on tilt tray.
5. **Storage and yard fees** — if your vehicle goes into a holding yard rather than directly to a workshop.

If you are getting quoted by phone, the operator should walk through these inputs out loud. A flat "it depends, mate" without follow-up questions is the wrong answer.

## The insurance question

Most comprehensive policies in Australia include a tow allowance — usually capped at the nearest safe holding yard or your nominated repairer. For an in-Townsville accident tow that cap is usually plenty. For a long-distance tow that is part of a write-off move, the cap will probably not cover the full distance and you will need to pay the difference and chase reimbursement.

Two practical things to do at the scene:

- Take a photo of the truck, the operator's ID and the tow authorisation form.
- Confirm with your insurer (or 24/7 claims line) before authorising any tow over a few suburbs.

## When roadside assistance is cheaper than a tow

Not every callout needs a tow. If you have a flat battery, a flat tyre with a usable spare, an empty tank or you have locked your keys in the car, a roadside callout is normally cheaper than a tow — and both of our recommended Townsville operators carry roadside kit. The exception is a battery that will not hold charge after a jump, in which case you will end up paying for both. Honest operators will tell you that on the call.

## How to keep the bill down

A few simple things keep the quote sensible:

- **Have your exact location ready** — a Google Maps drop-pin saves time on dispatch.
- **Mention the vehicle type** — automatic vs manual, AWD vs 2WD, low-clearance, EV.
- **Pick the destination before the truck arrives** — your mechanic, dealership, panel beater or yard.
- **Ask for the after-hours surcharge upfront** if you are calling outside business hours.

## What we recommend

If you want a clean way to compare Townsville tow companies, see our [recommendation page](/recommended) — both operators we recommend will give you a clear quote on the call rather than at the kerb.`,
  },
  {
    slug: 'accident-towing-townsville-first-10-minutes',
    title: 'Accident towing in Townsville: what to do in the first 10 minutes',
    description:
      "A clear, calm checklist for the first 10 minutes after a crash in Townsville — what to do at the scene, who to call, and how to handle the tow truck conversation.",
    date: '2026-03-26',
    author: 'Townsville Towing Compare',
    readMinutes: 7,
    body: `## The first 10 minutes after an accident

The first 10 minutes after a Townsville crash matter more than the next 10 hours. Most of the long-term mistakes people make happen at the kerb, in the noise — and most of them can be avoided with a short, repeatable checklist.

### 1. Stop, breathe, check for injuries (0–60 seconds)

Switch on hazards. Stay belted. Check yourself, then anyone else in your car. If anyone is injured, the answer is **000** before anything else. Do not move anyone with a head, neck or back injury unless leaving them where they are puts them in immediate danger.

### 2. Make the scene safer (1–3 minutes)

If the vehicle is drivable and you are blocking traffic in a dangerous spot — middle of the Ring Road, on a blind crest, in a busy roundabout — move it to the shoulder. If it is not drivable, leave it, hazards on, and step well clear of the road. Townsville drivers are usually fine. Tourists, fatigued long-distance drivers and wet-season conditions are not.

### 3. Call police if it qualifies (3–5 minutes)

In Queensland you must report a crash to police if anyone is injured, if the road is blocked, if a driver appears under the influence, or if a driver leaves the scene. For property-damage-only crashes that meet none of those, you can usually exchange details and move on. Either way, take the QPRS number if police attend — it makes the insurance claim faster.

### 4. Exchange details (5–7 minutes)

Get from the other driver: full name, address, phone, licence number, rego, insurer. Give them the same. Take photos of the cars (all four corners), licence, rego sticker if visible, and the wider scene including any street signs and skid marks.

### 5. Call your tow company — not whoever shows up first (7–10 minutes)

This is where most people get caught. In Queensland you have the right to choose your own tow operator. If a truck rolls up and you did not call them, you can politely decline. If they push, hold the line — it is your decision. Both companies we recommend handle accident tows in Townsville and will quote on the call.

When you call:

- Confirm they are coming for **your** vehicle.
- Get a quote, including any after-hours surcharge.
- Tell them whether you want the car towed to a panel beater, your insurer's holding yard, or your home address.
- Ask them to bring an authorisation form and ID.

### 6. Authorise the tow in writing

The tow operator will ask you to sign a tow authorisation. Read it. Make sure the destination on the form matches what you said on the call. Take a photo of the signed form for your records.

### 7. Call your insurer before you leave the scene

Most major insurers have 24/7 claims lines. Calling at the scene gives you a claim number, locks in the timeline, and confirms whether your policy covers the tow you just authorised. If the insurer wants the car at a specific repairer, the tow operator can usually adjust the destination on the spot.

### 8. Hold the paperwork

Keep the authorisation form, the operator invoice, the police QPRS number, your photos and any witness details together. That is everything your insurer needs.

## A short, sober note on shock

People make bad decisions in shock. They sign things they have not read, they accept tows they did not call, they apologise for things that were not their fault. None of that helps. If you do nothing else, do this: stop, breathe, and run through the checklist above before you sign anything.

## Who to call

If you want a single number to ring after a Townsville crash, our recommended operators are listed on the [home page](/). For accident-specific information by service category, see the [accident towing page](/services/accident-towing).`,
  },
  {
    slug: 'tilt-tray-vs-flatbed-vs-hook-and-chain',
    title: 'Tilt tray vs flatbed vs hook-and-chain: which one your car actually needs',
    description:
      'A plain-English explainer of the three main tow truck types — what they do, when they make sense, and which one your Townsville car probably needs.',
    date: '2026-03-09',
    author: 'Townsville Towing Compare',
    readMinutes: 6,
    body: `## Three tow trucks, three different jobs

Most people only learn the difference between tow truck types when they need one urgently. Here is the quick version, in the order you are most likely to see them in Townsville.

### Tilt tray (the modern default)

A tilt tray is a flat deck that hydraulically lowers to ground level so your vehicle can either drive on or be winched on. Once on the deck, the entire vehicle rides off the road. No wheels turn. No driveline strain. No bumper scrape on the kerb.

This is the right pick for almost every passenger-car tow in Townsville. AWD, EV, low-slung sedan, prestige SUV, project car — they all benefit from the same approach. It is also the right pick when a vehicle is unregistered, has a locked or seized wheel, or has been kerbed badly enough that one corner will not roll.

### Flatbed (close cousin)

"Flatbed" is sometimes used interchangeably with "tilt tray" — and on shorter, lighter jobs they overlap. The strict difference is that a flatbed is usually a **longer, fixed-height** deck that loads via a ramp, crane or forklift rather than tilting to ground level.

Flatbeds shine for awkward and oversize loads: side-by-sides, ride-on mowers, small tractors, two-vehicle moves where the dimensions allow, and damaged vehicles that need craned or skidded loading.

### Hook-and-chain (the old-school option)

A hook-and-chain (sometimes called a sling truck) lifts one end of the vehicle, leaving the other axle rolling on the road. It is the cheapest equipment to operate, but it has been steadily phased out of mainstream towing because it can damage modern bumpers, lower bodywork, AWD drivelines and EVs.

You may still see hook-and-chain trucks in Townsville for clearly defined jobs — moving truly junk vehicles, towing rigid 4WDs that can take a sling without damage, or short hops within a yard. For your own car, you almost always want a tilt tray instead.

## Quick decision guide

- **Modern car, ute, SUV, EV, prestige?** Tilt tray.
- **AWD or 4WD?** Tilt tray (no wheels turning is the key thing).
- **Awkward shape, oversize, two-vehicle move, equipment?** Flatbed.
- **A wreck heading to the scrap yard?** Hook-and-chain may be acceptable.
- **Heavy vehicle (truck, bus, prime mover)?** Neither — you need a heavy underlift or rotator.

## What "damage-free" actually means

When operators advertise damage-free towing, they mean three specific things: tilt-tray loading, soft straps that go around the wheel rather than the suspension, and ramps with a low enough approach angle that bumpers and splitters clear the deck. Both of our recommended Townsville operators run modern tilt-tray fleets that meet that standard.

## Why this matters

Towing the wrong way damages cars. Hook-and-chain on the wrong vehicle can crack a bumper or twist a transfer case. Dragging an AWD across the ground because the operator did not bring dollies can wreck the centre diff. The cost of the wrong choice is far higher than the price difference between truck types, which in practice is small.

## Recommended operators

For a damage-free tilt-tray pickup anywhere in Townsville, see our [recommended operators](/recommended). Both run modern tilt trays as the front-line fleet.`,
  },
  {
    slug: '4wd-bogged-pallarenda-alva-beach-recovery-guide',
    title: '4WD bogged on Pallarenda or Alva Beach? A Townsville recovery guide',
    description:
      'Practical recovery advice for getting a 4WD out of soft sand, mud or saltwater on Townsville beaches and tracks — and when to stop and call a recovery operator.',
    date: '2026-02-21',
    author: 'Townsville Towing Compare',
    readMinutes: 7,
    body: `## Why Pallarenda and Alva Beach catch people out

Townsville has some of the easiest beach access in Australia and some of the trickiest soft-sand and tidal recovery conditions. Most bog jobs we hear about start the same way: the driver came in from a hard track, did not let tyres down enough, and got stuck on the soft section just past the access ramp. The tide is rarely the first thing to go wrong, but it is often the last.

This is a short, practical guide to getting yourself out — and knowing when to stop trying.

### Step 1 — Stop the moment you start spinning

The single biggest mistake is repeated wheelspin. Spinning wheels dig deeper, melt sand around the tyre, and wreck a clutch or transmission cooler if you keep going. The instant you feel the vehicle losing momentum on sand, **stop**.

### Step 2 — Drop your tyre pressures

Townsville beach driving normally needs **18 psi or lower** on most 4WDs. Some sections want 14–16 psi. If you have not deflated, do that first — it is the single highest-value action you can take. Carry a deflator and a 12V air compressor as standard kit if you are running beach tracks regularly.

### Step 3 — Clear in front of the wheels

Get out, take a look, and clear sand from in front of all four wheels and from under the chassis if it is dragging. Use traction boards if you have them. A 30-second walk around the vehicle saves an hour later.

### Step 4 — Try to reverse out

The track behind you is already compacted. Reversing back along your own line is usually easier than driving forward into untouched soft sand.

### Step 5 — If the tide is moving, stop trying

This is the moment that matters. If you are on the tide line and the water is moving up the chassis, **stop the recovery and protect the vehicle**:

- Disconnect the battery if you have time.
- Pop the bonnet only if the vehicle is high and dry — saltwater spray inside the engine bay is worse than air.
- Move people and gear above the high-water line.
- Call recovery.

A vehicle on a beach can usually be recovered. A vehicle that has had saltwater up to the airbox and into the engine is a much worse outcome.

### Step 6 — Call recovery, not just "a tow truck"

Beach and soft-sand recovery is a specialist job. Tell the operator:

- The exact access track you came in on (helps them find you).
- The tide window — high tide time and how close the water is.
- Whether the vehicle is still drivable on its own wheels.
- Whether saltwater has already touched the engine bay.

Both of our [recommended Townsville operators](/recommended) handle 4WD and off-road recovery. Mention "beach recovery" on the call so they bring the right gear and the right truck.

## What to carry

If you regularly drive Pallarenda, Alva Beach, Cape Pallarenda tracks or the back roads west of Townsville, the absolute minimum kit is: deflator, compressor, snatch strap with rated shackles, traction boards, a long-handled shovel, and water. A second vehicle in the convoy is the single best safety upgrade.

## When to skip the heroics

There is no shame in calling early. The cost of a bog recovery is small. The cost of a vehicle written off by saltwater is enormous. If you are out of your depth, stop, secure the vehicle, and let the recovery crew do their job.`,
  },
  {
    slug: 'heavy-vehicle-breakdown-bruce-highway-townsville',
    title: 'Heavy vehicle breakdown on the Bruce Highway: who to call',
    description:
      'A practical guide for truck drivers and fleet managers when a heavy vehicle breaks down on the Bruce Highway near Townsville — what to do, who to call, and how to manage a roadside recovery.',
    date: '2026-02-04',
    author: 'Townsville Towing Compare',
    readMinutes: 6,
    body: `## The Bruce Highway is no place to muddle through

If you drive a heavy vehicle through Townsville, the Bruce Highway is the road you will eventually break down on. Long sections, overtaking lanes, wet-season storms and the occasional cane train of slower traffic mean that even a routine cooling-system failure can become a serious safety issue if it is handled badly. Here is how to handle it well.

### Step 1 — Get off the carriageway if you can

If the truck is still moving, push for the shoulder, a designated pull-over bay or a fuel stop. Any of those is safer than dying mid-lane. If the engine has stopped, leave it where it is, hazards on, triangles out at the recommended distance behind the vehicle.

### Step 2 — Call the right number

A heavy-vehicle breakdown is not a job for a passenger-car tow truck. You need an operator with **underlift or rotator capacity** to recover the unit, and ideally one who can split the trailer if needed. ABC Towing, one of our recommended Townsville operators, is set up specifically for heavy work — see the [heavy haulage page](/services/heavy-haulage-towing) for details.

When you call, have:

- Your exact location (kilometre marker if you can see one).
- The vehicle type (rigid, prime mover, B-double, road train).
- Whether the trailer is loaded and what with.
- Whether the truck is on a sealed shoulder or in soft ground.
- Whether traffic management will be needed.

### Step 3 — Tell your fleet manager and dispatcher

A fleet vehicle breakdown is a chain-of-responsibility situation. Get the call into dispatch immediately so they can re-route any time-sensitive freight, alert the customer if needed, and take any compliance action.

### Step 4 — Make sure traffic control is sorted

For a recovery on a single-carriageway section of the Bruce Highway, the operator may need a traffic-management crew to manage opposing traffic during the lift. Ask the operator on the call who is sorting that out — sometimes they bring it, sometimes you need to coordinate with the local QPS.

### Step 5 — Stay with the truck (safely)

Stay nearby but well clear of the carriageway. Do not stand between the truck and oncoming traffic. Wear hi-vis. If the vehicle is leaking fluids, mention it on the call so the operator can bring absorbent.

## Recovery options

For most Townsville-area heavy recoveries, the workflow is:

- Underlift the prime mover (or rigid).
- Split the trailer if needed and recover separately.
- Tow to the nearest workshop, depot or holding yard.

For overturned or seriously damaged units, a rotator and a longer multi-vehicle setup is involved. Both operators we recommend have the contacts and experience to coordinate that, even if the lift itself is subcontracted.

## Insurance and paperwork

Heavy recoveries are normally covered by fleet motor and goods-in-transit policies, but the paperwork has to line up: the tow operator's invoice, the photographs of the scene, any police paperwork, and the chain-of-responsibility log. Keep it all in one place.

## Plan ahead, even if it never happens

If you operate a heavy vehicle through Townsville regularly, take five minutes now to put the recovery operator's number in your phone and your dispatch system. You will be much faster on the call when it actually happens. See the [recommended operators](/recommended) page for details.`,
  },
  {
    slug: 'boat-trailer-breakdown-townsville-ramps',
    title: 'Boat trailer breakdown between Townsville ramps: your options',
    description:
      'Wheel-bearing failure, blown trailer tyre or a tow vehicle that has died — what to do when your boat trailer breaks down on the way home from a Townsville ramp.',
    date: '2026-01-19',
    author: 'Townsville Towing Compare',
    readMinutes: 6,
    body: `## The ramp is fine. The trip home is the problem.

Most Townsville boat-trailer breakdowns happen between the ramp and the shed — wheel bearings that have given up after a saltwater dip, blown trailer tyres on a hot stretch of bitumen, or a tow vehicle that finally decides today is the day. Here is a calm rundown of the options when it happens to you.

### Wheel-bearing failure

Saltwater is hard on bearings. The first warning is usually a low rumble that grows into a louder grinding sound, sometimes with a wisp of smoke from the hub. **Pull over the moment you hear it.** Continuing will destroy the spindle and turn a $40 bearing job into a $800 axle job — or worse, lock the wheel at speed.

If the wheel still spins, you can sometimes limp slowly to the next service station to assess. If it is grinding badly or smoking, stop, secure the trailer, and call recovery. Mention on the call that the trailer has a bearing failure so the operator brings the right kit (or plans for a tray pickup of the trailer if a wheel will not roll).

### Blown trailer tyre

Trailer tyres age faster than they wear. Sidewall cracking, ozone damage and the heat of long-stay storage are the usual culprits. If you have a spare and you are off the road, change it. If you do not have a spare or the wheel has shredded the guard, call for either a roadside callout (jump, spare, plug) or a tow.

### Tow vehicle has died

This is a common one. The fix depends on what you want done with the boat:

- **Take the boat home.** The recovery operator can transport the trailer (and boat) on a tray to your address. The dead tow vehicle is a separate tow, on a second truck.
- **Leave the boat at a marina or trailer yard.** The operator can detach the trailer at a nominated yard and tow the dead vehicle home from there.

Both of our [recommended Townsville operators](/recommended) handle trailer and boat-trailer recovery. Confirm the trailer dimensions, tow-ball weight and whether the boat is loaded so the right truck is dispatched.

### Heavy trailer outside standard tow rating

If your trailer is heavy enough that a normal tow vehicle would not safely move it, you are into [heavy haulage](/services/heavy-haulage-towing) territory. ABC Towing in particular runs the gear for that.

## What to carry on a long trip back

A short trip from the Ross River ramp to a Townsville suburb is one thing. A long Sunday tow back from Cungulla, Bowling Green Bay or out toward Alva Beach is another. Carry:

- A spare trailer wheel, jack and brace (and check the spare is current).
- A bearing buddy and a spare bearing kit.
- A torch.
- Water.
- Your insurer's roadside number — and the recommended Townsville tow operator number for when roadside is not enough.

## When to skip the DIY

Bearings and tyres on the side of the road in 35°C heat are not where most people do their best work. If anything is more wrong than a tyre with a usable spare, call early. Recovery is cheaper than a destroyed axle, and a lot cheaper than a write-off on the highway.`,
  },
];

export const getBlogPost = (slug: string) =>
  allBlogPosts.find((p) => p.slug === slug);
