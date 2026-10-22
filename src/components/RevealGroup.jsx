import { useEffect, useRef, useState } from 'react';

function RevealGroup({ children, className = '' }) {
  const groupRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal-group ${isVisible ? 'is-visible' : ''} ${className}`} ref={groupRef}>{children}</div>;
}

export default RevealGroup;