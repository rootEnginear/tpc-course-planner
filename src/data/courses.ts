import { PartialRecord } from "@/utils/partialrecord";

export const MEDICAL_ROOM = [
  "Head Clinic",
  "Injection Room",
  "Psychiatry",
  "Surgery",
  "Thumping Therapy",
  "Ward",
];

const ROOM_NAME = [
  "Anti-Gravity Chamber",
  "Battle Ground",
  "Battle Space",
  "Cheeseball Field",
  "Command Room",
  "Computer Lab",
  "Creamatorium",
  "Detection Office",
  "Dig Site",
  "Gadget Lab",
  "Ghost Storage",
  "Gym",
  "Head Clinic",
  "Injection Room",
  "Jousting Field",
  "Lecture Theater",
  "Living Room",
  "Panic Room",
  "Potions Room",
  "Psychiatry",
  "Recording Studio",
  "Robo Construction",
  "Robo Design",
  "Rocket Lab",
  "Savoury Kitchen",
  "Science Lab",
  "Spells Room",
  "Surgery",
  "Sweet Kitchen",
  "Thumping Therapy",
  "VR Lab",
  "Ward",
] as const;

export type RoomName = (typeof ROOM_NAME)[number];

export const MEDICAL_COURSE_NAME = ["Medical School", "Nursing"];

export const COURSE_NAME = [
  "Academic Exercise",
  "Archaeology",
  "Astrology",
  "Cheese-Moongery",
  "Cosmic Expansion",
  "Countercultural Studies",
  "Dark Art",
  "Funny Business",
  "Gastronomy",
  "General Knowledge",
  "Humanities",
  "Internet History",
  "Knight School",
  "Medical School",
  "Money Wangling",
  "Musicality",
  "Nursing",
  "Paranormal Detection",
  "Robotics",
  "School of Thought",
  "School Spirits",
  "Scientography",
  "Space Academy",
  "Space-Knight School",
  "Spy School",
  "Virtual Normality",
  "Wizardry",
] as const;

export type CourseName = (typeof COURSE_NAME)[number];

export type Course = Record<
  CourseName,
  {
    class: {
      total: PartialRecord<RoomName, number>;
    };
    years: 1 | 2 | 3 | 4;
  }
>;

export const COURSES: Course = {
  "Academic Exercise": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Cheeseball Field": 4,
        Gym: 3,
      },
    },
    years: 3,
  },
  Archaeology: {
    class: {
      total: {
        "Lecture Theater": 1,
        "Dig Site": 6,
        "Computer Lab": 1,
        "Science Lab": 1,
      },
    },
    years: 3,
  },
  "Countercultural Studies": {
    class: {
      total: {
        "Lecture Theater": 4,
        Gym: 2,
      },
    },
    years: 2,
  },
  "Dark Art": {
    class: {
      total: {
        "Lecture Theater": 4,
        "Potions Room": 2,
      },
    },
    years: 2,
  },
  "Funny Business": {
    class: {
      total: {
        "Lecture Theater": 4,
        "Science Lab": 2,
      },
    },
    years: 2,
  },
  Gastronomy: {
    class: {
      total: {
        "Lecture Theater": 2,
        "Savoury Kitchen": 4,
        "Sweet Kitchen": 2,
        "Science Lab": 1,
      },
    },
    years: 3,
  },
  "General Knowledge": {
    class: {
      total: {
        "Lecture Theater": 3,
      },
    },
    years: 1,
  },
  "Internet History": {
    class: {
      total: {
        "Lecture Theater": 3,
        "Computer Lab": 4,
        "VR Lab": 2,
      },
    },
    years: 3,
  },
  "Knight School": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Battle Ground": 4,
        "Jousting Field": 3,
      },
    },
    years: 3,
  },
  "Medical School": {
    class: {
      total: {
        "Head Clinic": 18,
        Psychiatry: 18,
        Surgery: 18,
      },
    },
    years: 3,
  },
  "Money Wangling": {
    class: {
      total: {
        "Lecture Theater": 3,
        "Computer Lab": 3,
      },
    },
    years: 2,
  },
  Musicality: {
    class: {
      total: {
        "Lecture Theater": 3,
        "Recording Studio": 5,
        "Computer Lab": 1,
      },
    },
    years: 3,
  },
  Nursing: {
    class: {
      total: {
        "Injection Room": 18,
        "Thumping Therapy": 18,
        Ward: 18,
      },
    },
    years: 3,
  },
  "Paranormal Detection": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Detection Office": 4,
        "Ghost Storage": 3,
      },
    },
    years: 3,
  },
  "School Spirits": {
    class: {
      total: {
        "Lecture Theater": 5,
        "Science Lab": 2,
        "Computer Lab": 2,
      },
    },
    years: 3,
  },
  Robotics: {
    class: {
      total: {
        "Lecture Theater": 3,
        "Robo Construction": 4,
        "Robo Design": 2,
      },
    },
    years: 3,
  },
  "School of Thought": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Computer Lab": 2,
        "Science Lab": 4,
        Gym: 3,
        "VR Lab": 1,
      },
    },
    years: 4,
  },
  Scientography: {
    class: {
      total: {
        "Lecture Theater": 4,
        "Science Lab": 5,
      },
    },
    years: 3,
  },
  "Spy School": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Gadget Lab": 3,
        "Panic Room": 3,
        "Computer Lab": 1,
      },
    },
    years: 3,
  },
  "Virtual Normality": {
    class: {
      total: {
        "Lecture Theater": 3,
        "VR Lab": 6,
      },
    },
    years: 3,
  },
  Wizardry: {
    class: {
      total: {
        "Lecture Theater": 2,
        "Potions Room": 4,
        "Spells Room": 3,
      },
    },
    years: 3,
  },
  Astrology: {
    class: {
      total: {
        "Lecture Theater": 2,
        "Anti-Gravity Chamber": 4,
        "Rocket Lab": 2,
        Gym: 1,
      },
    },
    years: 3,
  },
  "Cheese-Moongery": {
    class: {
      total: {
        Creamatorium: 6,
        "Science Lab": 3,
      },
    },
    years: 3,
  },
  "Cosmic Expansion": {
    class: {
      total: {
        "Lecture Theater": 3,
        "Rocket Lab": 3,
      },
    },
    years: 2,
  },
  Humanities: {
    class: {
      total: {
        "Lecture Theater": 2,
        "Living Room": 5,
        "Computer Lab": 2,
      },
    },
    years: 3,
  },
  "Space Academy": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Command Room": 5,
        "Battle Space": 2,
      },
    },
    years: 3,
  },
  "Space-Knight School": {
    class: {
      total: {
        "Lecture Theater": 2,
        "Battle Space": 5,
        Gym: 2,
      },
    },
    years: 3,
  },
};

export const COURSES_BY_ROOM = Object.entries(COURSES).reduce((all, [course, data]) => {
  for (let room of Object.keys(data.class.total))
    all[room].push([course, data.class.total[room as RoomName] ?? 0]); // evil side effect 😈
  return all;
}, Object.fromEntries(ROOM_NAME.map((room) => [room, [] as [string, number][]])));

export type CourseLevelData = [number, [number, number, number, number]];
export type MedicalCourseLevelData = [number, number];

export const COURSE_LEVEL_DATA_BY_STUDENTS: CourseLevelData[] = [
  [0, [0, 0, 0, 0]],
  [1, [10, 20, 30, 40]], // 8
  [3, [35, 55, 75, 95]], // 16
  [4, [55, 80, 105, 130]], // 24
  [6, [110, 145, 180, 215]], // 32
  [7, [145, 185, 225, 265]], // 40
  [9, [230, 280, 330, 380]], // 48
  [10, [280, 335, 390, 445]], // 55
];

export const MEDICAL_COURSE_LEVEL_DATA_BY_STUDENTS = [
  [0, 0],
  [1, 30], // 3
  [1, 30], // 6
  [2, 50], // 9
  [3, 75], // 12
  [4, 105], // 15
  [5, 140], // 18
  [6, 180], // 21
  [7, 225], // 24
  [8, 275], // 27
  [9, 330], // 30
  [10, 390], // 33
];
