import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log('AppLoader: Initializing app...');
    
    // Simulate app initialization and check for any critical resources
    const initializeApp = async () => {
      try {
        // Give React time to hydrate
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check if critical elements are available
        const root = document.getElementById('root');
        if (!root) {
          throw new Error('Root element not found');
        }
        
        console.log('AppLoader: App initialized successfully');
        setIsReady(true);
        setIsLoading(false);
      } catch (error) {
        console.error('AppLoader: Failed to initialize app:', error);
        setIsLoading(false);
        // Still show the app, but log the error
        setIsReady(true);
      }
    };

    initializeApp();

    // Listen for app wake-up events (from page visibility hook)
    const handleAppWakeUp = () => {
      console.log('AppLoader: App waking up from sleep...');
      setIsLoading(true);
      setIsReady(false);
      // Re-initialize after a brief moment
      setTimeout(() => {
        setIsReady(true);
        setIsLoading(false);
      }, 500);
    };

    window.addEventListener('app-wake-up', handleAppWakeUp);

    return () => {
      window.removeEventListener('app-wake-up', handleAppWakeUp);
    };
  }, []);

  if (isLoading && !isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AppLoader;