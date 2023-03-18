export type RoomType =
  | "BattleGround"
  | "CheeseballField"
  | "ComputerLab"
  | "DigSite"
  | "GadgetLab"
  | "Gym"
  | "JoustingField"
  | "LectureTheater"
  | "PanicRoom"
  | "PotionsRoom"
  | "RecordingStudio"
  | "RoboConstruction"
  | "RoboDesign"
  | "SavouryKitchen"
  | "ScienceLab"
  | "SpellsRoom"
  | "SweetKitchen"
  | "VRLab";

export interface Courses {
  name: string;
  classes: Partial<Record<RoomType, number>>[];
}

export const COURSES: Courses[] = [
  {
    name: "Academic Exercise",
    classes: [
      { LectureTheater: 1, CheeseballField: 2 },
      { CheeseballField: 1, Gym: 2 },
      { LectureTheater: 1, CheeseballField: 1, Gym: 1 },
    ],
  },
  {
    name: "Archaeology",
    classes: [
      { LectureTheater: 1, DigSite: 2 },
      { DigSite: 2, ComputerLab: 1 },
      { DigSite: 2, ScienceLab: 1 },
    ],
  },
  {
    name: "Countercultural Studies",
    classes: [
      { LectureTheater: 2, Gym: 1 },
      { LectureTheater: 2, Gym: 1 },
    ],
  },
  {
    name: "Dark Art",
    classes: [{ LectureTheater: 3 }, { LectureTheater: 1, PotionsRoom: 2 }],
  },
  {
    name: "Funny Business",
    classes: [
      { LectureTheater: 2, ScienceLab: 1 },
      { LectureTheater: 2, ScienceLab: 1 },
    ],
  },
  {
    name: "Gastronomy",
    classes: [
      { LectureTheater: 1, SavouryKitchen: 2 },
      { LectureTheater: 1, SavouryKitchen: 1, SweetKitchen: 1 },
      { SavouryKitchen: 1, SweetKitchen: 1, ComputerLab: 1 },
    ],
  },
  {
    name: "General Knowledge",
    classes: [{ LectureTheater: 3 }],
  },
  {
    name: "Internet History",
    classes: [
      { LectureTheater: 1, ComputerLab: 2 },
      { LectureTheater: 1, ComputerLab: 1, VRLab: 1 },
      { LectureTheater: 1, ComputerLab: 1, VRLab: 1 },
    ],
  },
  {
    name: "Knight School",
    classes: [
      { LectureTheater: 1, BattleGround: 2 },
      { LectureTheater: 1, BattleGround: 1, JoustingField: 1 },
      { BattleGround: 1, JoustingField: 2 },
    ],
  },
  {
    name: "Money Wangling",
    classes: [
      { LectureTheater: 2, ComputerLab: 1 },
      { LectureTheater: 1, ComputerLab: 2 },
    ],
  },
  {
    name: "Musicality",
    classes: [
      { LectureTheater: 1, RecordingStudio: 2 },
      { LectureTheater: 1, RecordingStudio: 1, ComputerLab: 1 },
      { LectureTheater: 1, RecordingStudio: 2 },
    ],
  },
  {
    name: "Robotics",
    classes: [
      { LectureTheater: 1, RoboConstruction: 2 },
      { LectureTheater: 1, RoboConstruction: 1, RoboDesign: 1 },
      { LectureTheater: 1, RoboConstruction: 1, RoboDesign: 1 },
    ],
  },
  {
    name: "School of Thought",
    classes: [
      { LectureTheater: 1, ComputerLab: 1, ScienceLab: 1 },
      { LectureTheater: 1, ScienceLab: 1, Gym: 1 },
      { ScienceLab: 1, Gym: 1, VRLab: 1 },
      { ComputerLab: 1, ScienceLab: 1, Gym: 1 },
    ],
  },
  {
    name: "Scientography",
    classes: [
      { LectureTheater: 1, ScienceLab: 2 },
      { LectureTheater: 2, ScienceLab: 1 },
      { LectureTheater: 1, ScienceLab: 2 },
    ],
  },
  {
    name: "Spy School",
    classes: [
      { LectureTheater: 1, GadgetLab: 2 },
      { LectureTheater: 1, PanicRoom: 2 },
      { GadgetLab: 1, PanicRoom: 1, ComputerLab: 1 },
    ],
  },
  {
    name: "Virtual Normality",
    classes: [
      { LectureTheater: 1, VRLab: 2 },
      { LectureTheater: 1, VRLab: 2 },
      { LectureTheater: 1, VRLab: 2 },
    ],
  },
  {
    name: "Wizardry",
    classes: [
      { LectureTheater: 1, PotionsRoom: 2 },
      { LectureTheater: 1, PotionsRoom: 1, SpellsRoom: 1 },
      { PotionsRoom: 1, SpellsRoom: 2 },
    ],
  },
];
