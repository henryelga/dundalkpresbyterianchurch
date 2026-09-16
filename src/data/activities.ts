export type Activity = {
  day: string;
  date: string;
  time: string;
  location: string;
  activity: string;
  details?: string[];
  notice?: string;
};

export const ACTIVITIES: Activity[] = [
  {
    day: "Wednesday",
    date: "10th September",
    time: "7:00 PM - 9:00 PM",
    location: "Church Hall",
    activity: "Indoor Bowling",
  },
  {
    day: "Friday",
    date: "12th September",
    time: "10:00 AM - 12:00 PM",
    location: "Church Hall",
    activity: "Indoor Bowling",
  },
  {
    day: "Every Saturday",
    date: "",
    time: "3:00 PM - 5:00 PM",
    location: "Church Hall",
    activity: "Table Tennis and Badminton Club",
  },
  {
    day: "Thursday",
    date: "4th & 18th September",
    time: "8:00 PM - 9:00 PM",
    location: "Church Building",
    activity: "Church Bible Study",
  },
  {
    day: "Monday",
    date: "8th September",
    time: "7:30 PM - 9:00 PM",
    location: "Church Building",
    activity: "Church Committee Meeting",
  },
  {
    day: "Sunday",
    date: "14th September",
    time: "11:00 AM",
    location: "Church Building",
    activity: "Worship Service - Mr Rick Hill",
  },
  {
    day: "Sunday",
    date: "21st September",
    time: "4:00 PM",
    location: "Church Building",
    notice: "NO SUNDAY MORNING SERVICE AT 11:00 AM ON 21st OF SEPTEMBER",
    activity: "Harvest Worship Service",
    details: [
      "Rev Damien Burke",
      "1st Dromora Praise Group",
      "Tea and Sandwiches in Hall afterwards",
    ],
  },
];