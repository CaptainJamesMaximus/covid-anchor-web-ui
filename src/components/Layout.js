import Head from "next/head";
import Navbar from "./Navbar";


function Layout(props) {
  return (
    <div className="layout">
      <CustomHead />

      {/* Navbar */}
      <Navbar />

      {/*App Content */}
      <div className="app-content">{props.children}</div>

      {/* STYLING */}
      <style jsx>{`
        .layout {
          width: 100%;
          height: 100vh;
          background-color: var(--color-dim-white);

          display: flex;
        }
        .app-content {
          flex-grow: 1;
          height: 100%;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

// Setting page head
function CustomHead() {
  return (
    <Head>
      <title>Covid Anchor</title>
      <link rel="stylesheet" href="/css/global.css" />
    </Head>
  );
}
export default Layout;
