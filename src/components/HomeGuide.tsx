import Link from 'next/link';

// Long-form, keyword-bearing copy for the home page. This is the main body
// content Google uses to understand that "/" is the page for "towing
// Townsville" and "tow truck Townsville", so keep it genuinely useful.
export function HomeGuide() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-[1fr_22rem]">
        <article className="prose-towing max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-hivis-600 font-bold !mb-2">
            The local guide
          </p>
          <h2 className="!mt-0">Towing Townsville: how to get the right tow truck, fast</h2>
          <p>
            Townsville is a big, spread-out city. A breakdown in the CBD, a bingle on Ross River
            Road in Aitkenvale, a flat battery in a Kirwan driveway and a bogged 4WD at Bushland
            Beach are four very different jobs — and they don&apos;t all need the same truck. This
            site exists so that when you need a <strong>tow truck in Townsville</strong>, you can
            call the right operator first time instead of ringing around.
          </p>
          <p>
            We compare the towing companies working across Townsville, Thuringowa, the Northern
            Beaches and Magnetic Island on response time, insurance, fleet and reputation, and
            recommend the two we trust most. Both answer around the clock, both run tilt trays,
            and both will tow to the mechanic, smash repairer or home address you choose.
          </p>

          <h3>Which tow truck do you need?</h3>
          <ul>
            <li>
              <Link href="/services/tilt-tray-towing">Tilt tray towing</Link> — the standard for
              cars, utes, AWDs and anything low or prestige. The vehicle is winched onto a deck,
              so nothing drags on the road.
            </li>
            <li>
              <Link href="/services/accident-towing">Accident towing</Link> — scene clean-up,
              secure storage and direct billing with most insurers.
            </li>
            <li>
              <Link href="/services/breakdown-towing">Breakdown towing</Link> — won&apos;t start,
              overheated, gearbox gone. Often a{' '}
              <Link href="/services/jump-start">jump start</Link> or{' '}
              <Link href="/services/tyre-change-roadside-assist">tyre change</Link> solves it on
              the spot.
            </li>
            <li>
              <Link href="/services/heavy-haulage-towing">Heavy towing</Link> — trucks, buses,
              motorhomes and machinery on the Bruce and Flinders Highways.
            </li>
            <li>
              <Link href="/services/4wd-and-off-road-recovery">4WD recovery</Link> — beach,
              creek-crossing and wet-season bogs from Pallarenda to Alligator Creek.
            </li>
          </ul>

          <h3>How much does towing cost in Townsville?</h3>
          <p>
            A standard suburban tow in Townsville typically costs around $150–$300. After-hours,
            heavy, off-road and long-distance jobs are quoted on the call. If the tow is part of
            an insurance claim, the insurer usually pays the operator directly — confirm before
            the truck is dispatched and keep the claim number handy.
          </p>

          <h3>How long will the tow truck take?</h3>
          <p>
            Our top recommended operator advertises around a 30-minute average across metro
            Townsville. Afternoon peak on Charters Towers Road and the Ring Road, wet-season
            flooding and outer areas such as Rollingstone, Alligator Creek or the Hervey Range
            acreage add time. Giving the exact suburb and nearest cross street when you call is
            the single biggest thing you can do to speed it up.
          </p>

          <h3>Tow truck Townsville, suburb by suburb</h3>
          <p>
            Every suburb has its own quirks — shopping-centre carparks in Aitkenvale and Hyde
            Park, defence traffic around Garbutt and Douglas, acreage driveways in Alice River,
            the vehicle barge for Magnetic Island. Our{' '}
            <Link href="/townsville">Townsville suburb guides</Link> cover what to expect and
            what to tell the operator, whether you&apos;re after a tow truck in{' '}
            <Link href="/townsville/kirwan">Kirwan</Link>,{' '}
            <Link href="/townsville/aitkenvale">Aitkenvale</Link>,{' '}
            <Link href="/townsville/townsville-city">the CBD</Link>,{' '}
            <Link href="/townsville/douglas">Douglas</Link> or{' '}
            <Link href="/townsville/deeragun">Deeragun</Link>.
          </p>
        </article>

        <aside className="h-max lg:sticky lg:top-24 rounded-2xl bg-slate-50 border border-slate-100 p-6">
          <h2 className="font-display font-bold text-navy-900 text-lg">Before you call — checklist</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {[
              'You and passengers are safe and off the road. Call 000 if anyone is hurt.',
              'Exact location: suburb, street and nearest cross street or landmark.',
              'Make, model and drivetrain (2WD, AWD or 4WD).',
              'Does it roll, steer and brake? Are the keys with the car?',
              'Where should it go: mechanic, home, smash repairer or insurer?',
              'Insurance claim number, if it was an accident.',
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <span className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-hivis" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
