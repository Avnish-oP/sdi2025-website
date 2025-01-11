import { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { database } from "../lib/firebase";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const visitorRef = ref(database, "visitorCount");

    // Fetch the current count from Firebase
    get(visitorRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const currentCount = snapshot.val() as number;
          const newCount = currentCount + 1;

          // Update the count in Firebase
          set(visitorRef, newCount);

          // Update state
          setVisitorCount(newCount);
        } else {
          // Initialize the counter if it doesn't exist
          set(visitorRef, 1);
          setVisitorCount(1);
        }
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Welcome to My Website</h1> */}
      This site has been visited <b>{visitorCount}</b> times.
    </div>
  );
}
