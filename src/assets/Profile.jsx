import { useEffect, useState } from "react";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      const data = await res.json();
      if (res.ok) {
        setProfileData(data);
      } else {
        alert("Error fetching profile: " + data.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>👤 Profile Page</h2>
      {profileData ? (
        <div>
          <p>Name: {profileData.fullName}</p>
          <p>Email: {profileData.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
