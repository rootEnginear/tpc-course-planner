import { PartialRecord } from "@/utils/partialrecord";

export const ROOM_NAME = [
  "Battle Ground",
  "Cheeseball Field",
  "Computer Lab",
  "Dig Site",
  "Gadget Lab",
  "Gym",
  "Jousting Field",
  "Lecture Theater",
  "Panic Room",
  "Potions Room",
  "Recording Studio",
  "Robo Construction",
  "Robo Design",
  "Savoury Kitchen",
  "Science Lab",
  "Spells Room",
  "Sweet Kitchen",
  "VR Lab",
] as const;

export type RoomName = (typeof ROOM_NAME)[number];

export const COURSE_NAME = [
  "Academic Exercise",
  "Archaeology",
  "Countercultural Studies",
  "Dark Art",
  "Funny Business",
  "Gastronomy",
  "General Knowledge",
  "Internet History",
  "Knight School",
  "Money Wangling",
  "Musicality",
  "Robotics",
  "School of Thought",
  "Scientography",
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
          "Computer Lab": 1,
        },
      ],
      total: {
        "Lecture Theater": 2,
        "Savoury Kitchen": 4,
        "Sweet Kitchen": 2,
        "Computer Lab": 1,
      },
    },
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
  },
};

export const COURSES_BY_ROOM = Object.entries(COURSES).reduce((all, [course, data]) => {
  for (let room of Object.keys(data.class.total))
    all[room].push([course, data.class.total[room as RoomName] ?? 0]); // evil side effect 😈
  return all;
}, Object.fromEntries(ROOM_NAME.map((room) => [room, [] as [string, number][]])));
