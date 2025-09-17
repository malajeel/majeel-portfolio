import { useEffect, useState } from 'react';

export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(!document.hidden);
  const [wasHiddenFor, setWasHiddenFor] = useState(0);
  
  useEffect(() => {
    let hiddenTime: number | null = null;
    
    const handleVisibilityChange = () => {
      const now = Date.now();
      
      if (document.hidden) {
        hiddenTime = now;
        console.log('Page hidden at:', new Date(now).toISOString());
        setIsVisible(false);
      } else {
        if (hiddenTime) {
          const timeHidden = now - hiddenTime;
          setWasHiddenFor(timeHidden);
          console.log('Page visible again after:', timeHidden / 1000, 'seconds');
          
          // If page was hidden for more than 30 minutes, consider refreshing
          if (timeHidden > 30 * 60 * 1000) {
            console.log('Page was hidden for over 30 minutes, considering refresh...');
            // Force a gentle reload by updating the app state
            window.dispatchEvent(new CustomEvent('app-wake-up'));
          }
        }
        setIsVisible(true);
        hiddenTime = null;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also listen for focus events as backup
    window.addEventListener('focus', () => {
      console.log('Window focused');
      setIsVisible(true);
    });
    
    window.addEventListener('blur', () => {
      console.log('Window blurred');
      setIsVisible(false);
    });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', () => setIsVisible(true));
      window.removeEventListener('blur', () => setIsVisible(false));
    };
  }, []);

  return { isVisible, wasHiddenFor };
};