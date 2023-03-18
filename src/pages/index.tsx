import { useMemo, useState } from "react";
import Head from "next/head";

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
    setCurrentSelectedCourse(
      availableList.length ? [...availableList, course].sort()[0] : course
    );
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
        const _all = { ...all };
        const requiredCourseRooms = COURSES[name as CourseName].class.total;

        Object.entries(requiredCourseRooms).forEach(([room, number]) => {
          _all[room as RoomType] = (_all[room as RoomType] ?? 0) + number * multiplier;
        });

        return _all;
      }, {} as PartialRecord<RoomType, number>),
    [selectedCourse]
  );

  return (
    <>
      <Head>
        <title>Two Point Campus Course Planner</title>
        <meta name="description" content="Two Point Campus Course Planner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Two Point Campus Course Planner</h1>
        <p>Plan before you click that &ldquo;Confirm&rdquo; button.</p>
        <hr />
        <h2>Course Management</h2>
        <label>
          Choose Course:{" "}
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
        </label>
        <button type="button" onClick={addCourse} disabled={availableList.length === 0}>
          Add
        </button>
        <ul>
          {Object.entries(selectedCourse).map(([name, data]) => (
            <li key={name}>
              {name} |{" "}
              <button type="button" onClick={() => removeCourse(name as CourseName)}>
                Remove
              </button>{" "}
              | Students:{" "}
              <select
                value={data.multiplier}
                onChange={(e) =>
                  changeStudentsInCourse(name as CourseName, +e.target.value)
                }
              >
                <option value={0}>0</option>
                <option value={1}>8</option>
                <option value={2}>16</option>
                <option value={3}>24</option>
                <option value={4}>32</option>
                <option value={5}>40</option>
                <option value={6}>48</option>
                <option value={7}>56</option>
                <option value={8}>64</option>
              </select>
            </li>
          ))}
        </ul>
        <hr />
        <h2>Classroom Requirements</h2>
        <p>6 slots per room</p>
        <ul>
          {Object.entries(requiredRoom).map(([roomName, slotNumber]) => (
            <li key={roomName}>
              {roomName} | {Math.ceil(slotNumber / 6)} rooms ({slotNumber} slots) |{" "}
              <RoomVis slots={slotNumber} />
            </li>
          ))}
        </ul>
        <hr />
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
    </>
  );
}
