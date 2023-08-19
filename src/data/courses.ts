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
      per_year: PartialRecord<RoomName, number>[];
    };
    years: 1 | 2 | 3 | 4;
  }
>;

export const COURSES: Course = {
  "Academic Exercise": {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Cheeseball Field": 2,
        },
        {
          "Cheeseball Field": 1,
          Gym: 2,
        },
        {
          "Lecture Theater": 1,
          "Cheeseball Field": 1,
          Gym: 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Dig Site": 2,
        },
        {
          "Dig Site": 2,
          "Computer Lab": 1,
        },
        {
          "Dig Site": 2,
          "Science Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 2,
          Gym: 1,
        },
        {
          "Lecture Theater": 2,
          Gym: 1,
        },
      ],
      total: {
        "Lecture Theater": 4,
        Gym: 2,
      },
    },
    years: 2,
  },
  "Dark Art": {
    class: {
      per_year: [
        {
          "Lecture Theater": 3,
        },
        {
          "Lecture Theater": 1,
          "Potions Room": 2,
        },
      ],
      total: {
        "Lecture Theater": 4,
        "Potions Room": 2,
      },
    },
    years: 2,
  },
  "Funny Business": {
    class: {
      per_year: [
        {
          "Lecture Theater": 2,
          "Science Lab": 1,
        },
        {
          "Lecture Theater": 2,
          "Science Lab": 1,
        },
      ],
      total: {
        "Lecture Theater": 4,
        "Science Lab": 2,
      },
    },
    years: 2,
  },
  Gastronomy: {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Savoury Kitchen": 2,
        },
        {
          "Lecture Theater": 1,
          "Savoury Kitchen": 1,
          "Sweet Kitchen": 1,
        },
        {
          "Savoury Kitchen": 1,
          "Sweet Kitchen": 1,
          "Science Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 3,
        },
      ],
      total: {
        "Lecture Theater": 3,
      },
    },
    years: 1,
  },
  "Internet History": {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Computer Lab": 2,
        },
        {
          "Lecture Theater": 1,
          "Computer Lab": 1,
          "VR Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Computer Lab": 1,
          "VR Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Battle Ground": 2,
        },
        {
          "Lecture Theater": 1,
          "Battle Ground": 1,
          "Jousting Field": 1,
        },
        {
          "Battle Ground": 1,
          "Jousting Field": 2,
        },
      ],
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
      per_year: [
        {
          "Head Clinic": 6,
          Psychiatry: 6,
          Surgery: 6,
        },
        {
          "Head Clinic": 6,
          Psychiatry: 6,
          Surgery: 6,
        },
        {
          "Head Clinic": 6,
          Psychiatry: 6,
          Surgery: 6,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 2,
          "Computer Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Computer Lab": 2,
        },
      ],
      total: {
        "Lecture Theater": 3,
        "Computer Lab": 3,
      },
    },
    years: 2,
  },
  Musicality: {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Recording Studio": 2,
        },
        {
          "Lecture Theater": 1,
          "Recording Studio": 1,
          "Computer Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Recording Studio": 2,
        },
      ],
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
      per_year: [
        {
          "Injection Room": 6,
          "Thumping Therapy": 6,
          Ward: 6,
        },
        {
          "Injection Room": 6,
          "Thumping Therapy": 6,
          Ward: 6,
        },
        {
          "Injection Room": 6,
          "Thumping Therapy": 6,
          Ward: 6,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Detection Office": 2,
        },
        {
          "Lecture Theater": 1,
          "Detection Office": 1,
          "Ghost Storage": 1,
        },
        {
          "Detection Office": 1,
          "Ghost Storage": 2,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 2,
          "Science Lab": 1,
        },
        {
          "Lecture Theater": 2,
          "Computer Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Science Lab": 1,
          "Computer Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Robo Construction": 2,
        },
        {
          "Lecture Theater": 1,
          "Robo Construction": 1,
          "Robo Design": 1,
        },
        {
          "Lecture Theater": 1,
          "Robo Construction": 1,
          "Robo Design": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Computer Lab": 1,
          "Science Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Science Lab": 1,
          Gym: 1,
        },
        {
          "Science Lab": 1,
          Gym: 1,
          "VR Lab": 1,
        },
        {
          "Computer Lab": 1,
          "Science Lab": 1,
          Gym: 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Science Lab": 2,
        },
        {
          "Lecture Theater": 2,
          "Science Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Science Lab": 2,
        },
      ],
      total: {
        "Lecture Theater": 4,
        "Science Lab": 5,
      },
    },
    years: 3,
  },
  "Spy School": {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Gadget Lab": 2,
        },
        {
          "Lecture Theater": 1,
          "Panic Room": 2,
        },
        {
          "Gadget Lab": 1,
          "Panic Room": 1,
          "Computer Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "VR Lab": 2,
        },
        {
          "Lecture Theater": 1,
          "VR Lab": 2,
        },
        {
          "Lecture Theater": 1,
          "VR Lab": 2,
        },
      ],
      total: {
        "Lecture Theater": 3,
        "VR Lab": 6,
      },
    },
    years: 3,
  },
  Wizardry: {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Potions Room": 2,
        },
        {
          "Lecture Theater": 1,
          "Potions Room": 1,
          "Spells Room": 1,
        },
        {
          "Potions Room": 1,
          "Spells Room": 2,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Anti-Gravity Chamber": 2,
        },
        {
          "Lecture Theater": 1,
          "Anti-Gravity Chamber": 1,
          "Rocket Lab": 1,
        },
        {
          "Anti-Gravity Chamber": 1,
          "Rocket Lab": 1,
          Gym: 1,
        },
      ],
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
      per_year: [
        {
          Creamatorium: 2,
          "Science Lab": 1,
        },
        {
          Creamatorium: 2,
          "Science Lab": 1,
        },
        {
          Creamatorium: 2,
          "Science Lab": 1,
        },
      ],
      total: {
        Creamatorium: 6,
        "Science Lab": 3,
      },
    },
    years: 3,
  },
  "Cosmic Expansion": {
    class: {
      per_year: [
        {
          "Lecture Theater": 2,
          "Rocket Lab": 1,
        },
        {
          "Lecture Theater": 1,
          "Rocket Lab": 2,
        },
      ],
      total: {
        "Lecture Theater": 3,
        "Rocket Lab": 3,
      },
    },
    years: 2,
  },
  Humanities: {
    class: {
      per_year: [
        {
          "Lecture Theater": 1,
          "Living Room": 2,
        },
        {
          "Lecture Theater": 1,
          "Living Room": 1,
          "Computer Lab": 1,
        },
        {
          "Living Room": 2,
          "Computer Lab": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Command Room": 2,
        },
        {
          "Command Room": 2,
          "Battle Space": 1,
        },
        {
          "Lecture Theater": 1,
          "Command Room": 1,
          "Battle Space": 1,
        },
      ],
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
      per_year: [
        {
          "Lecture Theater": 1,
          "Battle Space": 2,
        },
        {
          "Battle Space": 2,
          Gym: 1,
        },
        {
          "Lecture Theater": 1,
          "Battle Space": 1,
          Gym: 1,
        },
      ],
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

export type CourseLevelData = [number, [number, number, number, number], number];

export const COURSE_LEVEL_DATA_BY_STUDENTS: CourseLevelData[] = [
  [0, [0, 0, 0, 0], 0],
  [1, [10, 20, 30, 40], 10], // 8
  [3, [35, 55, 75, 95], 20], // 16
  [4, [55, 80, 105, 130], 25], // 24
  [6, [110, 145, 180, 215], 35], // 32
  [7, [145, 185, 225, 265], 40], // 40
  [9, [230, 280, 330, 380], 50], // 48
  [10, [280, 335, 390, 445], 55], // 55
];

export const MEDICAL_COURSE_LEVEL_DATA_BY_STUDENTS = [
  [0, 0, 0],
  [1, 30, 0], // 3
  [1, 30, 0], // 6
  [2, 50, 0], // 9
  [3, 75, 0], // 12
  [4, 105, 0], // 15
  [5, 140, 0], // 18
  [6, 180, 0], // 21
  [7, 225, 0], // 24
  [8, 275, 0], // 27
  [9, 330, 0], // 30
  [10, 390, 0], // 33
];
