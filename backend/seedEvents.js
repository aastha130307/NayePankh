const mongoose = require("mongoose");
const Event = require("./models/Event");
require("dotenv").config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nayepankh";

const seedEvents = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await Event.deleteMany();
    console.log("🧹 Old events cleared");

    const events = [
      {
        title: "Free Education Drive for Kids",
        date: new Date("2026-06-25"),
        location: "Patiala Community Hall",
        description:
          "Providing free books, stationery, and basic learning support for underprivileged children.",
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        category: "Education Drive",
        status: "Upcoming",
      },
      {
        title: "Health Checkup Camp",
        date: new Date("2026-06-28"),
        location: "Civil Hospital, Patiala",
        description:
          "Free health checkups including BP, sugar tests, and general diagnosis for families.",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309",
        category: "Health Camp",
        status: "Upcoming",
      },
      {
        title: "Women Empowerment Workshop",
        date: new Date("2026-07-02"),
        location: "NGO Training Center",
        description:
          "Skill development session focusing on digital literacy, entrepreneurship, and self-employment.",
        image:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
        category: "Workshop",
        status: "Upcoming",
      },
      {
        title: "Awareness Campaign: Education for All",
        date: new Date("2026-07-05"),
        location: "City Market Area",
        description:
          "Street campaign promoting importance of education in rural and urban areas.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        category: "Awareness Campaign",
        status: "Upcoming",
      },
      {
        title: "Blanket Distribution Drive",
        date: new Date("2026-01-10"),
        location: "Rural Villages Near Patiala",
        description:
          "Distribution of warm blankets to homeless and low-income families during winter.",
        image:
          "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
        category: "Other",
        status: "Completed",
      },
      {
        title: "School Donation Program",
        date: new Date("2026-02-15"),
        location: "Government School, Nabha",
        description:
          "Donating benches, books, and school supplies to improve classroom facilities.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        category: "Education Drive",
        status: "Completed",
      },
      {
        title: "Tree Plantation Drive",
        date: new Date("2026-07-12"),
        location: "Patiala Green Belt Area",
        description:
          "Planting trees to promote environmental sustainability and reduce pollution.",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        category: "Awareness Campaign",
        status: "Upcoming",
      },
      {
        title: "Digital Literacy Workshop",
        date: new Date("2026-07-18"),
        location: "Community Center",
        description:
          "Basic computer and smartphone training for rural youth and elderly citizens.",
        image:
          "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        category: "Workshop",
        status: "Upcoming",
      },
      {
        title: "Food Distribution Drive",
        date: new Date("2026-06-15"),
        location: "Railway Station Area",
        description:
          "Serving fresh meals to homeless individuals and daily wage workers.",
        image:
          "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
        category: "Other",
        status: "Completed",
      },
      {
        title: "Youth Skill Development Program",
        date: new Date("2026-07-22"),
        location: "NGO Head Office",
        description:
          "Career guidance and skill-building sessions for students and job seekers.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        category: "Workshop",
        status: "Upcoming",
      },
      {
        title: "Anti-Drug Awareness Campaign",
        date: new Date("2026-07-30"),
        location: "University Campus, Patiala",
        description:
          "Awareness drive against drug abuse among youth with expert talks and counseling.",
        image:
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
        category: "Awareness Campaign",
        status: "Upcoming",
      },
    ];

    await Event.insertMany(events);

    console.log("🎉 12 Events seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding events:", error);
    process.exit(1);
  }
};

seedEvents();