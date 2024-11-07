import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Phone, Smartphone } from 'lucide-react';
import Footer from '../components/Footer';

function DownloadPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8 md:p-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Download Our Android App</h1>
          <p className="text-gray-600 mt-4 mb-6">Your gateway to an improved mobile experience.</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href="https://acesuniben.github.io/App-Store/app-release.apk"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
              <Download className="w-6 h-6" />
              Download Now
            </a>
            
          </div>
          <p className="mt-2 text-sm text-gray-500">Version 1.0 | Compatible with Android 5.0+</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mt-8 mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center place-items-center">
            <div className="flex items-s gap-4">
              <Smartphone className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-700">Intuitive Interface</h3>
                <p className="text-gray-600">
                  Our app features a clean and user-friendly interface, making it easy to navigate and use.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Download className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-700">Fast Downloads</h3>
                <p className="text-gray-600">
                  Download the app quickly and start using it right away.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="mt-8 mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation Instructions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700">1. Download the APK</h3>
              <p className="text-gray-600">Click the download button above to download the APK file to your device.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">2. Enable Unknown Sources</h3>
              <p className="text-gray-600">
                Go to Settings &gt; Security &gt; Unknown sources and enable it to install apps from sources other than Google Play.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">3. Install the APK</h3>
              <p className="text-gray-600">Open the downloaded file and follow the prompts to install the app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="mt-8 mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">App Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://res.cloudinary.com/dcldvsih8/image/upload/v1730981648/Pixel_True_Mockup_4_dpbw45.png"
              alt="Feature 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://res.cloudinary.com/dcldvsih8/image/upload/v1730981649/Pixel_True_Mockup_1_nollji.png"
              alt="Feature 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://res.cloudinary.com/dcldvsih8/image/upload/v1730981649/Pixel_True_Mockup_2_qwhqhf.png"
              alt="Feature 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Message for iOS Users */}
      <section className="mt-8 mx-auto max-w-3xl">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
          <h3 className="font-medium">iOS version coming soon!</h3>
          <p className="mt-2">
            <span>iOS users can try our web version (PWA) currently in testing mode.</span>
            <Link to="https://acesmhs.surge.sh/" className="text-blue-600 hover:underline ml-2">
              Try Web Version
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-8 mx-auto max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border-b pb-2">
              <summary className="text-lg font-medium cursor-pointer">Is the app free to download?</summary>
              <p className="text-gray-600 mt-2">Yes, our app is completely free to download and use.</p>
            </details>
            <details className="border-b pb-2">
              <summary className="text-lg font-medium cursor-pointer">Do I need an internet connection?</summary>
              <p className="text-gray-600 mt-2">An internet connection is required for certain features.</p>
            </details>
            <details className="border-b pb-2">
              <summary className="text-lg font-medium cursor-pointer">How often is the app updated?</summary>
              <p className="text-gray-600 mt-2">
                We regularly update the app with new features and improvements. You'll be notified when an update is available.
              </p>
            </details>
            <details className="border-b pb-2">
              <summary className="text-lg font-medium cursor-pointer">Is the app secure?</summary>
              <p className="text-gray-600 mt-2">
                Yes, we take security and privacy very seriously. The app uses industry-standard encryption and data protection measures.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>


    <Footer/>

    </>
  );
}

export default DownloadPage;