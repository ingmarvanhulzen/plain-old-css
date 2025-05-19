import "./styles.css";

export default function Page() {
  return (
    <main>
      <div className="progress" />
      <section className="content">
        <h1>Macbook Air</h1>
        <p>
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
        {/*        <h2 className="text-fader top">
          <span>DESIGN</span>
        </h2>
 <h1 className="text-fader">
          <span>Built to go places.</span>
        </h1> */}
        <div className="box">
          <h2 className="text top">DESIGN</h2>
          <h1 className="text">Built to go places.</h1>
        </div>
      </div>
      <div className="image-scaler">
        <img
          className="image"
          src="https://www.apple.com/v/macbook-air/u/images/overview/design/design_hero_endframe__dv7t8042ce6a_large_2x.jpg"
        />
      </div>
      <div className="content">
        <p>
          <em>Remarkably light and less than half an inch thin,</em>{" "}
          MacBook&nbsp;Air fits easily into your on-the-go lifestyle — and your
          bag. MacBook&nbsp;Air with M4 is made with over 50&nbsp;percent
          recycled materials and has a durable recycled aluminum&nbsp;enclosure.
        </p>
        <img
          className="image-scaler"
          src="https://www.apple.com/v/macbook-air/u/images/overview/design/sizes/design_sizes_endframe__ckfqlo8f44eq_large_2x.jpg"
        />
        <p>
          <em>Two perfectly portable sizes.</em> The 13‑inch MacBook Air is the
          ultimate on-the-go laptop, and the 15‑inch model gives you even more
          space onscreen for multitasking.
        </p>

        <div className="grid">
          <div>
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_side_skyblue__dtyt9gw4nfiq_large.jpg" />
          </div>
          <div className="span-2">
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_top_skyblue__eepkvlvjzcia_large.jpg" />
          </div>
          <div>
            <img src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_magsafe_skyblue__gii6y9jn1yai_large.jpg" />
          </div>
        </div>

        <p>
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
        <h2 className="text-fader top">Performance and battery life</h2>
        <h1 className="text-fader">M4. The chip that zips.</h1>
      </div>
      <img
        className="image-scaler"
        src="https://www.apple.com/v/macbook-air/u/images/overview/performance/performance_hero_endframe__brqjd2udp1yq_large.jpg"
      />

      <div className="content">
        <p>
          <em>Multitasker. Multifaster.</em> MacBook Air with M4 brings even
          more speed and fluidity to everything you do, like working between
          loads of apps and tabs, editing videos, or playing games like Sid
          Meier’s Civilization® VII. All with a silent, fanless design.
        </p>
        <p>
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
      {/* <Ruler /> */}
    </main>
  );
}
