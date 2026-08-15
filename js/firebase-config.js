// AI Nexus Academy - Firebase Cloud Infrastructure Integration
// Project: course-site-be20c

const firebaseConfig = {
  apiKey: "AIzaSyCzJi-FfdUp_MlDPi7nf_Ue57TuPC7w9Vc",
  authDomain: "course-site-be20c.firebaseapp.com",
  databaseURL: "https://course-site-be20c-default-rtdb.firebaseio.com",
  projectId: "course-site-be20c",
  storageBucket: "course-site-be20c.firebasestorage.app",
  messagingSenderId: "529718109500",
  appId: "1:529718109500:web:814b606686b12b630daa39",
  measurementId: "G-2CR5EBGC7R"
};

// Initialize Firebase SDK Wrapper
const FirebaseService = {
  app: null,
  db: null,
  rtdb: null,
  analytics: null,
  auth: null,
  isInitialized: false,

  init: function() {
    try {
      if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
          this.app = firebase.initializeApp(firebaseConfig);
        } else {
          this.app = firebase.app();
        }

        // Initialize Firestore
        if (firebase.firestore) {
          this.db = firebase.firestore();
        }

        // Initialize Realtime Database
        if (firebase.database) {
          this.rtdb = firebase.database();
        }

        // Initialize Auth
        if (firebase.auth) {
          this.auth = firebase.auth();
        }

        // Initialize Analytics
        if (firebase.analytics) {
          this.analytics = firebase.analytics();
        }

        this.isInitialized = true;
        console.log("🔥 Firebase connected successfully to project: course-site-be20c");
      } else {
        console.warn("⚠️ Firebase SDK not loaded, using local storage fallback.");
      }
    } catch (err) {
      console.warn("⚠️ Firebase initialization notice:", err.message);
    }
  },

  // Save new student admission to Firebase Firestore & Realtime DB
  saveStudentAdmission: async function(studentData) {
    try {
      // 1. Save to Firestore
      if (this.db) {
        await this.db.collection("students").doc(studentData.id).set(studentData, { merge: true });
        await this.db.collection("registrations").doc(studentData.id).set(studentData, { merge: true });
        console.log("☁️ Admission saved to Firebase Firestore:", studentData.id);
      }

      // 2. Save to Realtime Database backup
      if (this.rtdb) {
        await this.rtdb.ref(`students/${studentData.id}`).set(studentData);
      }

      // 3. Log Analytics event
      if (this.analytics) {
        this.analytics.logEvent("course_enrollment_complete", {
          course_id: studentData.trackId,
          total_paid: studentData.totalPaid,
          student_id: studentData.id
        });
      }
    } catch (error) {
      console.error("Firebase sync error (data kept in local storage):", error);
    }
  },

  // Save Capstone Submission to Firestore
  saveCapstone: async function(capstoneData) {
    try {
      if (this.db) {
        await this.db.collection("capstones").doc(capstoneData.id).set(capstoneData, { merge: true });
      }
    } catch (e) {
      console.warn("Firebase Capstone sync notice:", e.message);
    }
  },

  // Verify Certificate in Firestore
  verifyCertificateInCloud: async function(certificateId) {
    try {
      if (this.db) {
        const query = await this.db.collection("students").where("certificateId", "==", certificateId).get();
        if (!query.empty) {
          return query.docs[0].data();
        }
      }
    } catch (e) {
      console.warn("Cloud certificate verify notice:", e.message);
    }
    return null;
  },

  // Log Custom User Actions in Firebase Analytics
  logEvent: function(eventName, eventParams = {}) {
    if (this.analytics) {
      try {
        this.analytics.logEvent(eventName, eventParams);
      } catch (e) {}
    }
  }
};

// Auto-initialize on script load
if (typeof window !== 'undefined') {
  window.FirebaseService = FirebaseService;
}
