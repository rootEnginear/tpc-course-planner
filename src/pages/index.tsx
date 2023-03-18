import { useMemo, useState } from "react";

import RoomVis from "@/components/RoomVis";
import { COURSES, COURSE_NAME, CourseName, RoomType } from "@/data/courses";
import { PartialRecord } from "@/utils/partialrecord";

type SelectedCourseDetail = { multiplier: number };
type SelectedCourseData = PartialRecord<CourseName, SelectedCourseDetail>;

export default function Home() {
  const [currentSelectedCourse, setCurrentSelectedCourse] = useState<
    CourseName | undefined
  >("Academic Exercise");

  const [selectedCourse, setSelectedCourse] = useState<SelectedCourseData>({});

  const addCourse = () => {
    if (!currentSelectedCourse || availableList.length === 0) return;

    setSelectedCourse((e) => ({ ...e, [currentSelectedCourse]: { multiplier: 1 } }));
    setCurrentSelectedCourse(
      availableList.find((course) => course !== currentSelectedCourse)
    );
  };

  const removeCourse = (course: CourseName) => {
    setSelectedCourse((e) => {
      const { [course]: _, ...f } = e;
      return f;
    });
    if (availableList.length === 0) return course;
  };

  const changeStudentsInCourse = (course: CourseName, multiplier: number) => {
    setSelectedCourse((e) => ({ ...e, [course]: { multiplier } }));
  };

  const availableList = COURSE_NAME.filter(
    (course) => !Object.keys(selectedCourse).includes(course)
  );

  const requiredRoom = useMemo(
    () =>
      Object.entries(selectedCourse).reduce((all, [name, { multiplier }]) => {
        const _all: PartialRecord<RoomType, number> = { ...all };
        const requiredCourseRooms = COURSES[name as CourseName].class.total;

        Object.entries(requiredCourseRooms).forEach(([room, number]) => {
          _all[room as RoomType] = (_all[room as RoomType] ?? 0) + number * multiplier;
        });

        return _all;
      }, {} as PartialRecord<RoomType, number>),
    [selectedCourse]
  );

  const totalSlots = Object.values(requiredRoom).reduce((a, c) => a + c, 0);

  return (
    <main>
      <h1>Two Point Campus Course Planner</h1>
      <p>
        Plan your campus courses before you click the &ldquo;Confirm&rdquo; button, lose
        your point, and end up with uneven class.
      </p>
      <hr />
      <h2>Course Management</h2>
      <ul>
        {Object.entries(selectedCourse).map(([name, data]) => (
          <li key={name}>
            {name} | Students:{" "}
            <select
              value={data.multiplier}
              onChange={(e) =>
                changeStudentsInCourse(name as CourseName, +e.target.value)
              }
            >
              <option value={8}>64</option>
              <option value={7}>56</option>
              <option value={6}>48</option>
              <option value={5}>40</option>
              <option value={4}>32</option>
              <option value={3}>24</option>
              <option value={2}>16</option>
              <option value={1}>8</option>
              <option value={0}>0</option>
            </select>{" "}
            <button type="button" onClick={() => removeCourse(name as CourseName)}>
              Remove
            </button>{" "}
            |{" "}
            {Object.entries(COURSES[name as CourseName].class.total).map(
              ([name, val]) => (
                <>
                  <span>{name}</span> <RoomVis slots={val} />{" "}
                </>
              )
            )}
          </li>
        ))}
      </ul>
      <label>
        <strong>Choose Course:</strong>{" "}
        <select
          value={availableList.length === 0 ? "empty" : currentSelectedCourse}
          disabled={availableList.length === 0}
          onChange={(e) => setCurrentSelectedCourse(e.target.value as CourseName)}
        >
          {availableList.length ? (
            availableList.map((course) => (
              <option value={course} key={course}>
                {course}
              </option>
            ))
          ) : (
            <option disabled value="empty">
              No course left
            </option>
          )}
        </select>
      </label>{" "}
      <button type="button" onClick={addCourse} disabled={availableList.length === 0}>
        Add
      </button>
      {currentSelectedCourse && (
        <blockquote>
          <strong>{currentSelectedCourse}</strong>:{" "}
          {Object.entries(COURSES[currentSelectedCourse].class.total).map(
            ([name, val]) => (
              <>
                <span>{name}</span> <RoomVis slots={val} />{" "}
              </>
            )
          )}
        </blockquote>
      )}
      <hr />
      <h2>Classroom Requirements</h2>
      <p>
        <strong>Total:</strong> {Math.ceil(totalSlots / 6)} rooms ({totalSlots} slots — 6
        slots/room)
      </p>
      <ul>
        {Object.entries(requiredRoom).map(([roomName, slotNumber]) => (
          <li key={roomName}>
            {roomName} | {Math.ceil(slotNumber / 6)} rooms ({slotNumber} slots) |{" "}
            <RoomVis slots={slotNumber} />
          </li>
        ))}
      </ul>
      <hr />
      <h2>Some Complete Presets</h2>
      <ul>
        <li>48 Academic Exercise</li>
        <li>24 Archaeology + 8 Money Wangling + 24 Scientography</li>
        <li>48 Archaeology</li>
        <li>24 Countercultural Studies</li>
        <li>16 Dark Art + 16 Wizardry</li>
        <li>24 Dark Art</li>
        <li>24 Funny Business</li>
        <li>24 Gastronomy + 8 Money Wangling + 8 General Knowledge</li>
        <li>48 Gastronomy</li>
        <li>16 General Knowledge</li>
        <li>24 Internet History + 8 General Knowledge</li>
        <li>48 Internet History</li>
        <li>48 Knight School</li>
        <li>16 Money Wangling</li>
        <li>48 Musicality</li>
        <li>24 Robotics + 8 General Knowledge</li>
        <li>48 Robotics</li>
        <li>16 School of Thought + 16 Internet History + 16 Funny Business</li>
        <li>48 School of Thought</li>
        <li>16 Scientography + 8 Funny Business</li>
        <li>48 Scientography</li>
        <li>48 Spy School</li>
        <li>8 Virtual Normality + 8 General Knowledge</li>
        <li>16 Virtual Normality</li>
        <li>48 Wizardry</li>
      </ul>
      <hr></hr>
      <details>
        <summary>Debug</summary>
        <pre>
          <code>{JSON.stringify(requiredRoom)}</code>
        </pre>
        <pre>
          <code>{JSON.stringify(selectedCourse)}</code>
        </pre>
      </details>
    </main>
  );
}
