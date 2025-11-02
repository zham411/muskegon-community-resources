import { QRCodeSVG } from 'qrcode.react';

import { Download, Share2 } from 'lucide-react';



export default function QRCodePage() {

  // You'll replace this with your actual Vercel URL once deployed

  const appUrl = window.location.origin;



  const downloadQR = () => {

    const svg = document.getElementById('qr-code');

    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    const img = new Image();

    

    img.onload = () => {

      canvas.width = img.width;

      canvas.height = img.height;

      ctx.fillStyle = 'white';

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, 0, 0);

      

      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');

      downloadLink.download = 'muskegon-resources-qr.png';

      downloadLink.href = pngFile;

      downloadLink.click();

    };

    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

  };



  return (

    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          QR Code

        </h1>

        <p className="text-gray-600">

          Scan or download this QR code to share the FeedING The Lakeshore app

        </p>

      </div>



      <div className="grid md:grid-cols-2 gap-8">

        {/* QR Code Display */}

        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">

          <div className="bg-white p-6 rounded-lg border-4 border-teal-600">

            <QRCodeSVG

              id="qr-code"

              value={appUrl}

              size={256}

              level="H"

              includeMargin={true}

            />

          </div>

          

          <button

            onClick={downloadQR}

            className="mt-6 flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"

          >

            <Download className="h-5 w-5" />

            <span>Download QR Code</span>

          </button>

        </div>



        {/* Instructions */}

        <div className="space-y-6">

          <div className="bg-white rounded-lg shadow-lg p-6">

            <h2 className="text-2xl font-bold text-teal-700 mb-4">How to Use</h2>

            <ol className="space-y-3 text-gray-700">

              <li className="flex items-start space-x-3">

                <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">

                  1

                </span>

                <span>Download the QR code using the button on the left</span>

              </li>

              <li className="flex items-start space-x-3">

                <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">

                  2

                </span>

                <span>Print the QR code on flyers, posters, or business cards</span>

              </li>

              <li className="flex items-start space-x-3">

                <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">

                  3

                </span>

                <span>People can scan it with their phone camera to access the app instantly</span>

              </li>

            </ol>

          </div>



          <div className="bg-white rounded-lg shadow-lg p-6">

            <h2 className="text-2xl font-bold text-teal-700 mb-4">Share URL</h2>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">

              <code className="text-sm text-gray-800 break-all">{appUrl}</code>

            </div>

            <button

              onClick={() => {

                navigator.clipboard.writeText(appUrl);

                alert('URL copied to clipboard!');

              }}

              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"

            >

              <Share2 className="h-4 w-4" />

              <span>Copy URL</span>

            </button>

          </div>



          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">

            <p className="text-sm text-gray-700">

              <strong>Tip:</strong> After deploying to Vercel, come back to this page to download 

              a QR code that links to your production URL.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

