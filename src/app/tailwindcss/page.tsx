export default function Page() {
  return (
    <main>
      <div className="fixed top-0 h-1 left-0 w-full bg-apple-light z-10" />
      <section className="content min-h-screen content-center">
        <h1 className="apple-title">Macbook Air</h1>
        <p className="apple-body">
          MacBook&nbsp;Air is the world’s most popular laptop for a reason.
          Actually, for a lot of reasons. It delivers{" "}
          <em>up to 18 hours of battery life.</em>
          The <em>M4 chip</em> unlocks a whole new level of performance for work
          and play. <em>Apple&nbsp;Intelligence</em> is built in to help you get
          things done effortlessly. And it now comes in a stunning Sky Blue
          color. With the perfectly portable MacBook&nbsp;Air, you’ll be ready
          to take on just about anything,&nbsp;anywhere.
        </p>
      </section>
      <div className="content">
        <h2 className="apple-subtitle animate-text-fade-top animate-timeline-view animate-range-[5vh_20vh]">
          DESIGN
        </h2>
        <h1 className="apple-title animate-text-fade animate-timeline-view animate-range-[5vh_20vh]">
          Built to go places.
        </h1>
      </div>
      <div className="origin-top animate-scale animate-timeline-view animate-range-[10vh_60vh] mb-8">
        <img
          className="image"
          src="https://www.apple.com/v/macbook-air/u/images/overview/design/design_hero_endframe__dv7t8042ce6a_large_2x.jpg"
        />
      </div>
      <div className="content space-y-8">
        <p className="apple-body">
          <em>Remarkably light and less than half an inch thin,</em>{" "}
          MacBook&nbsp;Air fits easily into your on-the-go lifestyle — and your
          bag. MacBook&nbsp;Air with M4 is made with over 50&nbsp;percent
          recycled materials and has a durable recycled aluminum&nbsp;enclosure.
        </p>
        <img
          className="origin-top animate-scale animate-timeline-view animate-range-[10vh_60vh] mb-8"
          src="https://www.apple.com/v/macbook-air/u/images/overview/design/sizes/design_sizes_endframe__ckfqlo8f44eq_large_2x.jpg"
        />
        <p className="apple-body">
          <em>Two perfectly portable sizes.</em> The 13‑inch MacBook Air is the
          ultimate on-the-go laptop, and the 15‑inch model gives you even more
          space onscreen for multitasking.
        </p>

        <div className="grid grid-cols-2 gap-8 h-160">
          <div className="bg-apple-secondary flex justify-center items-center rounded">
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_side_skyblue__dtyt9gw4nfiq_large.jpg" />
          </div>
          <div className="row-span-2 bg-apple-secondary flex justify-center items-center rounded">
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_top_skyblue__eepkvlvjzcia_large.jpg" />
          </div>
          <div className="bg-apple-secondary flex justify-center items-center rounded">
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_magsafe_skyblue__gii6y9jn1yai_large.jpg" />
          </div>
        </div>

        <p className="apple-body">
          <em>A new color is in the air.</em> Now with Sky Blue, four beautiful
          colors will have you on cloud nine. And every MacBook Air comes with a
          color-matched MagSafe charging cable.
        </p>

        <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/lifestyle-gallery/design_portability_2__e1065fp5a0ae_large_2x.jpg" />

        <p style={{ marginBottom: "10rem" }}>
          <em>Incredibly light and thin, MacBook Air</em> fits easily in your
          backpack.
        </p>
      </div>
      <div className="content">
        <h2 className="apple-subtitle animate-text-fade-top animate-timeline-view animate-range-[5vh_20vh]">
          Performance and battery life
        </h2>
        <h1 className="apple-title animate-text-fade animate-timeline-view animate-range-[5vh_20vh]">
          M4. The chip that zips.
        </h1>
      </div>
      <img
        className="origin-top animate-scale animate-timeline-view animate-range-[10vh_60vh] mb-8"
        src="https://www.apple.com/v/macbook-air/u/images/overview/performance/performance_hero_endframe__brqjd2udp1yq_large.jpg"
      />

      <div className="content">
        <p className="apple-body">
          <em>Multitasker. Multifaster.</em> MacBook Air with M4 brings even
          more speed and fluidity to everything you do, like working between
          loads of apps and tabs, editing videos, or playing games like Sid
          Meier’s Civilization® VII. All with a silent, fanless design.
        </p>
        <p className="apple-body">
          <em>Neural Engine. Blazing fast for AI.</em> Thanks to the faster
          Neural Engine in the M4 chip, MacBook Air has even more powerful AI
          capabilities to enhance everything you do. From automatic camera frame
          centering to AI image upscaling to running the latest large language
          models, you’ll be more productive and creative than ever.
        </p>
        <p style={{ marginBottom: "10rem" }}>
          <em>Live a full battery life.</em> MacBook Air has up to 18 hours of
          battery life. And it supports fast charge, getting up to 50 percent in
          just 30 minutes.6 So you can power through anything you’re working on
          without worrying about your battery.
        </p>
      </div>
    </main>
  );
}
