import { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMicrophone } from "react-icons/fa";

export default function ReportIssue() {
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle location fetching
  const handleGetLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        alert("Location access denied or unavailable.");
        console.error(err);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  } else {
    alert("Geolocation not supported by your browser.");
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg space-y-6 m-8">
      <h1 className="text-4xl font-bold">Report a New Issue</h1>

      {/* Problem Details */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Problem Details</h2>
        <textarea
          placeholder="Describe the issue in detail..."
          className="w-full p-3 border rounded-lg"
          rows={4}
        />

        {/* Image Upload */}
        <div className="border-dashed border-2 p-4 rounded-lg text-center ">
          <p className="mb-2 ">Upload or Capture Image</p>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={handleImageChange}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* Audio Recording (placeholder, needs lib for real recording) */}
        <button className="border px-4 py-2 rounded-lg flex gap-2 items-center hover:opacity-50">
          Record Audio <FaMicrophone />
        </button>
      </div>

      {/* Reporter Info */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Reporter Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="Your Name" className="border p-2 rounded-lg" />
          <input
            placeholder="Phone Number"
            type="tel"
            className="border p-2 rounded-lg"
          />
          <input
            placeholder="Email Address"
            type="email"
            className="border p-2 rounded-lg col-span-2"
          />
          <input
            placeholder="Aadhaar Number (optional)"
            className="border p-2 rounded-lg col-span-2"
          />
        </div>
      </div>
{/* Location */}
<div className="space-y-4">
  <h2 className="font-semibold text-lg">Location Details</h2>

  {/* Interactive Map */}
  <div className="w-full h-64 border rounded-lg overflow-hidden">
    {location ? (
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={14}
        className="w-full h-64"
        scrollWheelZoom={false}
        whenCreated={(map) => {
          map.on("click", (e) => {
            setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
          });
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[location.lat, location.lng]}
          draggable={true}
          eventHandlers={{
            dragend: (e) => {
              const newLatLng = e.target.getLatLng();
              setLocation({ lat: newLatLng.lat, lng: newLatLng.lng });
            },
          }}
        >
          <Popup>📍 Drag me or click anywhere on map</Popup>
        </Marker>
      </MapContainer>
    ) : (
      <div className="flex items-center justify-center h-full text-gray-500">
        No location selected
      </div>
    )}
  </div>

  {/* Button to fetch location */}
  <button
    onClick={handleGetLocation}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    Get Current Location
  </button>

  {location && (
    <p className="text-gray-700">
      📍 Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
    </p>
  )}
</div>


      {/* Terms */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I agree to the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-lg">Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Submit Issue
        </button>
      </div>
    </div>
  );
}
