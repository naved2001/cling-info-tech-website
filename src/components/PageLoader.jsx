import { useEffect, useState } from "react";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="page-loader">
      <div className="loader-logo">
        C
      </div>

      <div className="loader-text">
        CLING<span>INFO</span>
      </div>

      <div className="loader-line">
        <span></span>
      </div>
    </div>
  );
}

export default PageLoader;