
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scan, X, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

interface QRScannerProps {
  onClose: () => void;
  onScanComplete: (data: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onClose, onScanComplete }) => {
  const { language } = useLanguage();
  const scanText = getTranslation(language, 'scanQRCode');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Simulate a QR code scan for demo purposes
  const handleScan = () => {
    setScanning(true);
    setError(null);
    
    // Simulate scanning delay
    setTimeout(() => {
      setScanning(false);
      
      // Simulate scan success (70% chance) or failure
      if (Math.random() > 0.3) {
        const mockQRData = "https://safe-banking-link.example.com/verify?code=123456";
        setScanResult(mockQRData);
        onScanComplete(mockQRData);
      } else {
        setError("Could not read QR code. Please try again.");
      }
    }, 2000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg">{scanText}</CardTitle>
          <CardDescription>Scan a QR code to verify its safety</CardDescription>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {!scanResult && !error ? (
          <div className="flex flex-col items-center">
            <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 mb-4 w-full aspect-square flex flex-col items-center justify-center">
              {scanning ? (
                <div className="animate-pulse">
                  <div className="h-32 w-32 bg-muted rounded-lg flex items-center justify-center">
                    <Scan className="h-8 w-8 text-muted-foreground animate-pulse" />
                  </div>
                  <p className="text-sm text-center mt-4">Scanning...</p>
                </div>
              ) : (
                <>
                  <Scan className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-center text-muted-foreground mb-4">
                    Position the QR code within the frame
                  </p>
                </>
              )}
            </div>
            <Button onClick={handleScan} disabled={scanning} className="w-full">
              {scanning ? "Scanning..." : "Start Scan"}
            </Button>
          </div>
        ) : scanResult ? (
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <p className="font-medium text-green-800">QR Code Scanned Successfully</p>
            </div>
            <p className="text-sm text-green-700 break-all">{scanResult}</p>
            <Button onClick={() => setScanResult(null)} className="mt-4 w-full">
              Scan Another Code
            </Button>
          </div>
        ) : (
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="font-medium text-red-800">Scan Error</p>
            </div>
            <p className="text-sm text-red-700">{error}</p>
            <Button onClick={() => setError(null)} className="mt-4 w-full">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRScanner;
