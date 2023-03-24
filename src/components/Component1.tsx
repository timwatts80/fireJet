import "./Component1.css";
export default function Component1(props: Component1Props) {
  return <div className="component-1-component-1x" style={props.style}  >
      <p className="component-1-talk-to-me-goose"  >talk to me, goose.</p>
      <div className="component-1-line-1x"   />
      <div className="component-1-click-this-shit"  >
        <p className="component-1-then-click-this-shi"  >
          then, click this shit
        </p>
      </div>
    </div>;
}
Component1.defaultProps = {
  className: "",
  style: {},
  style: {}
};
interface Component1Props {
  className: string;
  style: Object;
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */