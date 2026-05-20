export default function Page() {
  return (
    <>
      <div className="grid grid-cols-12 mx-3">
        <div
          className=""
          style={{
            borderLeft: "2px solid #c8441e",
            paddingLeft: "12px",
            marginBottom: "4px",
          }}
        >
          <p
            className="mono muted"
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Technology &amp; Product
          </p>
          <div
            className="serif ink"
            style={{
              fontSize: "54px",
              fontWeight: "900",
              lineHeight: "0.88",
              letterSpacing: "-0.02em",
            }}
          >
            Crafting
            <br />
            <span style={{ fontStyle: "italic", color: "#c8441e" }}>
              digital
            </span>
            <br />
            experiences.
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="col-span-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue
        sem nec pharetra porttitor. Nulla eget tristique mauris. Sed vel tempus
        nunc. Ut molestie sit amet risus non laoreet. Vestibulum sit amet
        dapibus elit, et interdum lectus. Duis nec arcu sapien. Integer aliquam
        convallis est id facilisis. Etiam eget dolor lacus. Etiam sed lacus
        tincidunt, iaculis mi vel, tristique augue. Praesent finibus lectus
        metus, ut porttitor neque aliquam ut. Fusce in dui aliquet, mollis leo
        et, porttitor nisi. Ut ornare nibh eu est imperdiet fermentum. Proin vel
        sapien hendrerit, sodales nunc a, efficitur nisi. Aliquam quis enim at
        nulla posuere dictum a ac ligula.
      </div>
    </>
  );
}
