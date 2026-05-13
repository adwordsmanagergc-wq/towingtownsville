import type { BlogPost } from '@/types';

// Blog posts are kept in a single TypeScript module so the site can render them
// without an MDX bundler in the build path. The `body` field is plain Markdown
// rendered by the lightweight markdown helper in src/lib/md.ts.
export const allBlogPosts: BlogPost[] = [
  {
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
    slug: 'broken-down-townsville-finding-a-good-mechanic',
    title: 'Broken down in Townsville? How to pick a good mechanic (and the right tow)',
    description:
      "If your car has broken down or needs a repair in Townsville, the workshop you pick matters as much as the tow. Here's our framework for finding a trustworthy local mechanic — and how to coordinate the handoff with the tow operator.",
    date: '2026-05-11',
    author: 'Townsville Towing Compare',
    readMinutes: 8,
    body: `## The honest answer about "top 10 mechanic" lists

We get asked all the time for a top-ten Townsville mechanics list. We don't publish one — and we won't, for two reasons. First, workshop rankings on Google rotate faster than most people realise: ownership changes, head mechanics leave, weekly review volume swings the average. A list that was right two years ago is wrong today. Second, the "best" mechanic for **you** depends on what your car is, what's wrong with it, and where you live. The best 4WD recovery specialist in Townsville is not the right choice for a 12-month-old EV under warranty.

So instead of a list that goes stale, here's the framework we use ourselves when something goes wrong with our own cars. Apply it to your shortlist and you'll land on a workshop that'll still be the right call in two years.

### What "good" looks like in a Townsville workshop

There are three honest categories of mechanic in Townsville:

- **Logbook / dealer service**. Right answer if your car is under manufacturer warranty or you need a specific dealer-only diagnostic tool. More expensive, but warranty-safe.
- **Independent generalist**. The everyday workshop that handles services, brakes, tyres, batteries, electrics and most repairs across mainstream makes. Most Townsville cars live here.
- **Specialist**. Diesel injector shops, EV-certified workshops, European-marque specialists, performance shops, off-road outfitters, transmissions specialists. Worth the drive for the right job.

If your car is out of warranty and you don't know what's wrong, a good independent generalist is the cheapest, fastest answer 80% of the time. They'll diagnose first and refer out to a specialist if needed.

### The 6 checks before you hand over keys

This is the framework. Apply all six to your shortlist:

**1. Licensed in Queensland.** A Townsville workshop should hold a current Motor Vehicle Repairers (MVR) licence under the Motor Dealers and Chattel Auctions Act. Ask for the licence number if it isn't displayed in the workshop.

**2. Insurance.** Public liability and workshop insurance is non-negotiable for any business touching your vehicle. The good ones can show you the certificate of currency without flinching.

**3. Reviews — depth, not just stars.** A workshop with 250 Google reviews at 4.6 stars beats one with 12 reviews at 5.0 stars. Read the **one and two-star reviews** in particular — that's where you see how the workshop handles a hard situation. A workshop that responds professionally to a critical review is usually a workshop that'll handle you professionally too.

**4. A written quote before work starts.** Reputable Townsville workshops give you a written quote, scope the job, and call you before going over the number. If the conversation is vague, walk away.

**5. Diagnostic fees explained.** Diagnostic time is real work. Expect to pay for it. What you don't want is a workshop that diagnoses for free and recovers it with inflated parts pricing — ask up front.

**6. Logbook stamping (if it matters).** If your car is under warranty, confirm the workshop will stamp the logbook to manufacturer schedule. Most independent shops can; if yours can't, you may need a dealer service.

### Where Townsville workshops cluster

Townsville's workshop footprint runs through a handful of zones:

- **Garbutt and the Bohle.** Light-industrial estates that house a lot of the city's independent generalists and specialists, plus heavy-vehicle workshops. See the [Garbutt towing guide](/townsville/garbutt) for the access streets.
- **Mount St John and Bohle Industrial.** Heavy and machinery work, fleet service. Most heavy-vehicle recoveries from the highway end up around here.
- **Kirwan and Thuringowa.** A mix of dealer service centres and independent workshops handling the western residential pockets. See [Kirwan towing](/townsville/kirwan).
- **CBD fringe — West End and Hermit Park.** Smaller independent shops and a couple of European-marque specialists. See [West End](/townsville/west-end).
- **South-side — Idalia and Oonoonba.** Newer service capacity for the south-of-the-river suburbs. See [Idalia](/townsville/idalia).

If you live in one of these areas, a workshop within a few kilometres usually beats a longer tow to a "name" shop on the other side of the city — assuming the workshop passes the six checks above.

### Coordinating the tow with the workshop

Here's where it goes wrong most often: the tow truck arrives, the customer hasn't decided where to take the car, and the operator suggests a workshop they have an arrangement with. That arrangement is fine when both parties are honest, but you should be making the call, not the operator.

Three practical steps:

- **Pick the workshop before the tow arrives.** Even a 30-second phone call ("Hi, my car has died, can you take a look this week?") locks in the destination.
- **Check the workshop is actually open** when the tow will arrive. Half the city is closed on Sundays.
- **Confirm key drop** if you're towing after hours. Most independent Townsville workshops have a key safe at the gate.

Both of our [recommended operators](/recommended) tow to the workshop **you** nominate, not theirs. See the [breakdown towing page](/services/breakdown-towing) for what the tow itself involves.

### When to bypass the closest workshop

A couple of situations where the nearest workshop is the wrong call:

- **Vehicle still under manufacturer warranty.** Use a licensed dealer or factory-certified workshop, even if it's a longer tow.
- **EV with a high-voltage fault.** Use an EV-certified workshop or the dealer. Hot-swapping a 12V battery is fine for any shop; HV traction-battery work is not.
- **Diesel injector fault.** A diesel injector specialist is worth the drive — the diagnostic gear pays for itself.
- **Transmission failure.** A transmission specialist or the dealer beats a generalist for serious gearbox work.

### Cost ranges in 2026

Rough Townsville benchmarks, useful only as a sanity check:

- **Basic logbook service (small car):** $250–$400
- **Brake pads (axle):** $300–$600 fitted
- **Battery (standard car):** $200–$400 fitted
- **Diagnostic scan + report:** $120–$220
- **Hourly workshop rate (independent):** $130–$180

Anything dramatically above these without a written explanation is worth a second quote.

### So who do you actually take the car to?

The shortlist is the workshop within 5–10 km of where you live or work that **passes all six checks above** and has consistent four-and-five-star reviews on Google over the last 12 months. Ring two workshops, ask the same questions, and listen to which one sounds more interested in fixing your car versus moving it through the bay.

If you want a hand getting the car there in one piece, our [recommended Townsville tow operators](/recommended) will tow to any workshop you nominate. Kwiktow NQ is the call most people make for everyday breakdowns; ABC Towing for anything heavier.`,
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
