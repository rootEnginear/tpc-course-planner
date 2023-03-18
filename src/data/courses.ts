import { PartialRecord } from "@/utils/partialrecord";

export const ROOM_TYPE = [
  "BattleGround",
  "CheeseballField",
  "ComputerLab",
  "DigSite",
  "GadgetLab",
  "Gym",
  "JoustingField",
  "LectureTheater",
  "PanicRoom",
  "PotionsRoom",
  "RecordingStudio",
  "RoboConstruction",
  "RoboDesign",
  "SavouryKitchen",
  "ScienceLab",
  "SpellsRoom",
  "SweetKitchen",
  "VRLab",
] as const;

export type RoomType = typeof ROOM_TYPE[number];

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

export type CourseName = typeof COURSE_NAME[number];

export type Course = Record<
  CourseName,
  {
    class: {
      total: PartialRecord<RoomType, number>;
      per_year: PartialRecord<RoomType, number>[];
    };
  }
>;

export const COURSES: Course = {
  "Academic Exercise": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          CheeseballField: 2,
        },
        {
          CheeseballField: 1,
          Gym: 2,
        },
        {
          LectureTheater: 1,
          CheeseballField: 1,
          Gym: 1,
        },
      ],
      total: {
        LectureTheater: 2,
        CheeseballField: 4,
        Gym: 3,
      },
    },
  },
  Archaeology: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          DigSite: 2,
        },
        {
          DigSite: 2,
          ComputerLab: 1,
        },
        {
          DigSite: 2,
          ScienceLab: 1,
        },
      ],
      total: {
        LectureTheater: 1,
        DigSite: 6,
        ComputerLab: 1,
        ScienceLab: 1,
      },
    },
  },
  "Countercultural Studies": {
    class: {
      per_year: [
        {
          LectureTheater: 2,
          Gym: 1,
        },
        {
          LectureTheater: 2,
          Gym: 1,
        },
      ],
      total: {
        LectureTheater: 4,
        Gym: 2,
      },
    },
  },
  "Dark Art": {
    class: {
      per_year: [
        {
          LectureTheater: 3,
        },
        {
          LectureTheater: 1,
          PotionsRoom: 2,
        },
      ],
      total: {
        LectureTheater: 4,
        PotionsRoom: 2,
      },
    },
  },
  "Funny Business": {
    class: {
      per_year: [
        {
          LectureTheater: 2,
          ScienceLab: 1,
        },
        {
          LectureTheater: 2,
          ScienceLab: 1,
        },
      ],
      total: {
        LectureTheater: 4,
        ScienceLab: 2,
      },
    },
  },
  Gastronomy: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          SavouryKitchen: 2,
        },
        {
          LectureTheater: 1,
          SavouryKitchen: 1,
          SweetKitchen: 1,
        },
        {
          SavouryKitchen: 1,
          SweetKitchen: 1,
          ComputerLab: 1,
        },
      ],
      total: {
        LectureTheater: 2,
        SavouryKitchen: 4,
        SweetKitchen: 2,
        ComputerLab: 1,
      },
    },
  },
  "General Knowledge": {
    class: {
      per_year: [
        {
          LectureTheater: 3,
        },
      ],
      total: {
        LectureTheater: 3,
      },
    },
  },
  "Internet History": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          ComputerLab: 2,
        },
        {
          LectureTheater: 1,
          ComputerLab: 1,
          VRLab: 1,
        },
        {
          LectureTheater: 1,
          ComputerLab: 1,
          VRLab: 1,
        },
      ],
      total: {
        LectureTheater: 3,
        ComputerLab: 4,
        VRLab: 2,
      },
    },
  },
  "Knight School": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          BattleGround: 2,
        },
        {
          LectureTheater: 1,
          BattleGround: 1,
          JoustingField: 1,
        },
        {
          BattleGround: 1,
          JoustingField: 2,
        },
      ],
      total: {
        LectureTheater: 2,
        BattleGround: 4,
        JoustingField: 3,
      },
    },
  },
  "Money Wangling": {
    class: {
      per_year: [
        {
          LectureTheater: 2,
          ComputerLab: 1,
        },
        {
          LectureTheater: 1,
          ComputerLab: 2,
        },
      ],
      total: {
        LectureTheater: 3,
        ComputerLab: 3,
      },
    },
  },
  Musicality: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          RecordingStudio: 2,
        },
        {
          LectureTheater: 1,
          RecordingStudio: 1,
          ComputerLab: 1,
        },
        {
          LectureTheater: 1,
          RecordingStudio: 2,
        },
      ],
      total: {
        LectureTheater: 3,
        RecordingStudio: 5,
        ComputerLab: 1,
      },
    },
  },
  Robotics: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          RoboConstruction: 2,
        },
        {
          LectureTheater: 1,
          RoboConstruction: 1,
          RoboDesign: 1,
        },
        {
          LectureTheater: 1,
          RoboConstruction: 1,
          RoboDesign: 1,
        },
      ],
      total: {
        LectureTheater: 3,
        RoboConstruction: 4,
        RoboDesign: 2,
      },
    },
  },
  "School of Thought": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          ComputerLab: 1,
          ScienceLab: 1,
        },
        {
          LectureTheater: 1,
          ScienceLab: 1,
          Gym: 1,
        },
        {
          ScienceLab: 1,
          Gym: 1,
          VRLab: 1,
        },
        {
          ComputerLab: 1,
          ScienceLab: 1,
          Gym: 1,
        },
      ],
      total: {
        LectureTheater: 2,
        ComputerLab: 2,
        ScienceLab: 4,
        Gym: 3,
        VRLab: 1,
      },
    },
  },
  Scientography: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          ScienceLab: 2,
        },
        {
          LectureTheater: 2,
          ScienceLab: 1,
        },
        {
          LectureTheater: 1,
          ScienceLab: 2,
        },
      ],
      total: {
        LectureTheater: 4,
        ScienceLab: 5,
      },
    },
  },
  "Spy School": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          GadgetLab: 2,
        },
        {
          LectureTheater: 1,
          PanicRoom: 2,
        },
        {
          GadgetLab: 1,
          PanicRoom: 1,
          ComputerLab: 1,
        },
      ],
      total: {
        LectureTheater: 2,
        GadgetLab: 3,
        PanicRoom: 3,
        ComputerLab: 1,
      },
    },
  },
  "Virtual Normality": {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          VRLab: 2,
        },
        {
          LectureTheater: 1,
          VRLab: 2,
        },
        {
          LectureTheater: 1,
          VRLab: 2,
        },
      ],
      total: {
        LectureTheater: 3,
        VRLab: 6,
      },
    },
  },
  Wizardry: {
    class: {
      per_year: [
        {
          LectureTheater: 1,
          PotionsRoom: 2,
        },
        {
          LectureTheater: 1,
          PotionsRoom: 1,
          SpellsRoom: 1,
        },
        {
          PotionsRoom: 1,
          SpellsRoom: 2,
        },
      ],
      total: {
        LectureTheater: 2,
        PotionsRoom: 4,
        SpellsRoom: 3,
      },
    },
  },
};
