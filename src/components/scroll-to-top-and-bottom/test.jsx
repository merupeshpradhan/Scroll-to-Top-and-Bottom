import { useRef } from "react";
import useFetch from ".";

export default function ScrollToTopAndBottom() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occured ! Please trya again.</h1>;
  }

  if (loading) {
    return <h1>Loading ! Please wait</h1>;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button
        style={{ padding: "3px 5px 3px 5px",cursor:"pointer" }}
        onClick={handleScrollToBottom}
      >
        Scroll To Bottom
      </button>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap:"10px",
          listStyle:"none"
        }}
      >
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button style={{ padding: "3px 5px 3px 5px",cursor:"pointer" }} onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
