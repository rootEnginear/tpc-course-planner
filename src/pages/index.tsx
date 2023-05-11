import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import Image from "next/image";
import { Fragment, MouseEvent, useEffect, useMemo, useRef, useState } from "react";

import RoomVis from "@/components/RoomVis";
import {
  CourseName,
  COURSES,
  COURSES_BY_ROOM,
  COURSE_NAME,
  RoomName,
  COURSE_LEVEL_DATA_BY_STUDENTS,
} from "@/data/courses";
import { PartialRecord } from "@/utils/partialrecord";

type SelectedCourseData = PartialRecord<CourseName, number>;

if (typeof window !== "undefined") {
  const fontLink = document.getElementById("linkrel-font") as HTMLLinkElement | null;
  if (fontLink) fontLink.media = "all";
}

export default function Home() {
  const [currentSelectedCourse, setCurrentSelectedCourse] = useState<
    CourseName | undefined
  >("Academic Exercise");
  const [currentMultiplier, setCurrentMultiplier] = useState(1);

  const [selectedCourse, setSelectedCourse] = useState<SelectedCourseData>({});
  const [showRequiredRoom, setShowRequiredRoom] = useState(false);

  const addCourse = () => {
    if (!currentSelectedCourse || availableList.length === 0) return;

    setSelectedCourse((e) => ({ ...e, [currentSelectedCourse]: currentMultiplier }));
    setCurrentSelectedCourse(
      availableList.find((course) => course !== currentSelectedCourse)
    );
    setCurrentMultiplier(1);
  };

  const removeCourse = (course: CourseName) => {
    setSelectedCourse((e) => {
      const { [course]: _, ...f } = e;
      return f;
    });
    if (availableList.length === 0) setCurrentSelectedCourse(course);
  };

  const changeStudentsInCourse = (course: CourseName, multiplier: number) => {
    setSelectedCourse((e) => ({ ...e, [course]: multiplier }));
  };

  const availableList = COURSE_NAME.filter(
    (course) => !Object.keys(selectedCourse).includes(course)
  );

  const totalCourseCostAndStudents = useMemo(
    () =>
      Object.entries(selectedCourse).reduce(
        (a, [name, multiplier]) => {
          const course_year = COURSES[name as CourseName].years;
          const cost =
            a[0] + COURSE_LEVEL_DATA_BY_STUDENTS[multiplier][1][course_year - 1 ?? 0];
          const lowestStudent = Math.max(
            a[1] + ((multiplier - 1) * 8 + 1) * course_year,
            0
          );
          const highestStudent = a[2] + multiplier * 8 * course_year;

          return [cost, lowestStudent, highestStudent];
        },
        [0, 0, 0]
      ),
    [selectedCourse]
  );

  const requiredRoom = useMemo(
    () =>
      Object.entries(selectedCourse).reduce((all, [name, multiplier]) => {
        const _all: PartialRecord<RoomName, number> = { ...all };
        const requiredCourseRooms = COURSES[name as CourseName].class.total;

        Object.entries(requiredCourseRooms).forEach(([room, number]) => {
          _all[room as RoomName] = (_all[room as RoomName] ?? 0) + number * multiplier;
        });

        return _all;
      }, {} as PartialRecord<RoomName, number>),
    [selectedCourse]
  );

  const totalRooms = Object.values(requiredRoom).reduce(
    (a, c) => a + Math.ceil(c / 6),
    0
  );

  const elTooltip = useRef<HTMLDivElement>(null);
  const [tooltipInfo, setTooltipInfo] = useState<{
    room: RoomName;
    refEl: HTMLSpanElement | null;
    show: boolean;
  }>({ room: "Lecture Theater", show: false, refEl: null });
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const openTooltip = (reference: MouseEvent<HTMLSpanElement>, room: RoomName) => {
    if (!elTooltip.current) return;
    setTooltipInfo({
      room,
      show: true,
      refEl: reference.target as HTMLSpanElement | null,
    });
  };

  const hideTooltip = () => {
    setTooltipInfo((d) => ({ ...d, show: false }));
  };

  useEffect(() => {
    if (!tooltipInfo.show) return;
    if (!elTooltip.current) return;

    computePosition(tooltipInfo.refEl as Element, elTooltip.current, {
      strategy: "fixed",
      placement: "left",
      middleware: [flip(), offset(8), shift({ padding: 8 })],
    }).then(({ x, y }) => {
      setTooltipPosition({ x, y });
    });
  }, [tooltipInfo]);

  return (
    <>
      <header>
        <h1>Two Point Campus Course Planner</h1>
        <p>
          This tool will help you to plan your perfect course combination for your campus.
          This is done with a simple mathematical calculation. In practice, however, you
          might have to fight with your timetable scheduler.
        </p>
        <p>
          If you found any problems, please feel free to open{" "}
          <a
            href="https://github.com/rootEnginear/tpc-course-planner/issues"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            an issue
          </a>
          . All contributions are welcome. The icons are from{" "}
          <a
            href="https://two-point-campus.fandom.com/wiki/Two_Point_Campus_Wiki"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Two Point Campus Wiki
          </a>
          .
        </p>
        <details>
          <summary>
            <span className="font-bold">
              Why is the number of students a multiple of 8?
            </span>
          </summary>
          In short, the maximum class size is 8. — If you have 9 students, you will
          require an additional room that can accommodate up to 16 students. So it&apos;s
          a good idea to take advantage of this to maximize your profit. Also, you can set
          the student intake to 0 in the game if you don&apos;t want to take any more
          students or shut down the course.
        </details>
      </header>
      <hr />
      <main>
        <h2 className="flex items-center gap-4">
          <span>Course Management</span>
          {Object.entries(selectedCourse).length !== 0 && (
            <>
              <span className="ml-auto">
                {totalCourseCostAndStudents[0].toLocaleString()}
              </span>
              <Image
                className="mr-4"
                src="./imgs/course-point.webp"
                alt="Course Points"
                title="Course Points"
                width="24"
                height="24"
              />
              <span>
                {totalCourseCostAndStudents[1]}&ndash;{totalCourseCostAndStudents[2]}
              </span>
              <Image
                className="mr-4"
                src="./imgs/students.webp"
                alt="Estimated Students"
                title="Estimated Students"
                width="24"
                height="24"
              />
              <span>
                {Math.ceil(totalCourseCostAndStudents[1] / 5)}&ndash;
                {Math.ceil(totalCourseCostAndStudents[2] / 5)}
              </span>
              <Image
                src="./imgs/dorm.webp"
                alt="Bed Required"
                title="Bed Required"
                width="24"
                height="24"
              />
            </>
          )}
        </h2>
        {Object.entries(selectedCourse).length ? (
          Object.entries(selectedCourse).map(([name, multiplier]) => (
            <details key={name}>
              <summary>
                <span>
                  <Image
                    className="mr-4 inline-block"
                    src={`./courses/${name.replace(/ /g, "-").toLowerCase()}.webp`}
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span className="whitespace-nowrap">
                    {name}{" "}
                    <span className="font-normal">
                      ({COURSES[name as CourseName].years} years)
                    </span>
                  </span>
                  <Image
                    className="ml-auto inline-block"
                    src="./imgs/level.webp"
                    alt="Minimum Course Level"
                    title="Minimum Course Level"
                    width="16"
                    height="16"
                  />
                  <span className="text-sm font-normal">
                    {COURSE_LEVEL_DATA_BY_STUDENTS[multiplier][0]} |{" "}
                    {
                      COURSE_LEVEL_DATA_BY_STUDENTS[multiplier][1][
                        COURSES[name as CourseName].years - 1 ?? 0
                      ]
                    }
                  </span>
                  <Image
                    className="mr-4 inline-block"
                    src="./imgs/course-point.webp"
                    alt="Course Points"
                    title="Course Points"
                    width="16"
                    height="16"
                  />
                  <span className="flex items-center gap-4">
                    <select
                      value={multiplier}
                      onChange={(e) =>
                        changeStudentsInCourse(name as CourseName, +e.target.value)
                      }
                    >
                      <option value={0}>0 student (Hide)</option>
                      <option value={1}>1&ndash;8 students/y</option>
                      <option value={2}>9&ndash;16 students/y</option>
                      <option value={3}>17&ndash;24 students/y</option>
                      <option value={4}>25&ndash;32 students/y</option>
                      <option value={5}>33&ndash;40 students/y</option>
                      <option value={6}>41&ndash;48 students/y</option>
                      <option value={7}>49&ndash;55 students/y</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => removeCourse(name as CourseName)}
                      aria-label="Remove"
                      title="Remove"
                    >
                      ❌
                    </button>
                  </span>
                </span>
              </summary>
              <div className="grid grid-cols-max-auto gap-x-8">
                {Object.entries(COURSES[name as CourseName].class.total).map(
                  ([name, val]) => (
                    <Fragment key={name}>
                      <span>
                        <Image
                          className="mr-4 inline-block"
                          src={`./rooms/${name.replace(/ /g, "-").toLowerCase()}.webp`}
                          alt=""
                          width={24}
                          height={24}
                        />
                        {name}
                      </span>
                      <RoomVis slots={val * multiplier} />
                    </Fragment>
                  )
                )}
              </div>
            </details>
          ))
        ) : (
          <div className="mb-8 rounded-md border-2 border-dashed border-gray-800 p-8 text-center">
            <span className="font-bold">No course added yet!</span>{" "}
            <span className="whitespace-nowrap">Add some course below.</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <label htmlFor="course-select" className="font-bold">
            Choose Course:
          </label>
          <select
            id="course-select"
            className="w-full sm:w-auto"
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
          <div className="flex items-center gap-4">
            <select
              value={currentMultiplier}
              onChange={(e) => setCurrentMultiplier(+e.target.value)}
              disabled={availableList.length === 0}
            >
              <option value={1}>1&ndash;8 students/y</option>
              <option value={2}>9&ndash;16 students/y</option>
              <option value={3}>17&ndash;24 students/y</option>
              <option value={4}>25&ndash;32 students/y</option>
              <option value={5}>33&ndash;40 students/y</option>
              <option value={6}>41&ndash;48 students/y</option>
              <option value={7}>49&ndash;55 students/y</option>
            </select>
            {availableList.length !== 0 && (
              <button
                type="button"
                onClick={addCourse}
                disabled={availableList.length === 0}
                aria-label="Add Course"
                title="Add Course"
              >
                ➕
              </button>
            )}
          </div>
          {availableList.length !== 0 && (
            <button
              type="button"
              className="link ml-auto text-sm"
              onClick={() => setShowRequiredRoom((e) => !e)}
              disabled={availableList.length === 0}
            >
              {showRequiredRoom ? "Hide" : "Show"} Rooms
            </button>
          )}
        </div>
        {showRequiredRoom && currentSelectedCourse && (
          <div>
            <strong>Required Rooms:</strong>
            <div className="grid grid-cols-max-auto gap-x-8">
              {Object.entries(COURSES[currentSelectedCourse].class.total).map(
                ([name, val]) => (
                  <Fragment key={name}>
                    <span>
                      <Image
                        className="mr-4 inline-block"
                        src={`./rooms/${name.replace(/ /g, "-").toLowerCase()}.webp`}
                        alt=""
                        width={24}
                        height={24}
                      />
                      {name}
                    </span>
                    <RoomVis slots={val * currentMultiplier} />
                  </Fragment>
                )
              )}
            </div>
          </div>
        )}
        <hr />
        <h2>
          Total Classroom Required: {totalRooms} room{totalRooms > 1 && "s"}
        </h2>
        {totalRooms > 0 ? (
          <div className="grid grid-cols-max2-auto gap-x-8">
            {Object.entries(requiredRoom)
              .sort((a, z) => a[0].localeCompare(z[0]))
              .map(([roomName, slotNumber]) => (
                <Fragment key={roomName}>
                  <span>
                    <Image
                      className="mr-4 inline-block"
                      src={`./rooms/${roomName.replace(/ /g, "-").toLowerCase()}.webp`}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span
                      className="cursor-help rounded-sm underline decoration-dashed decoration-from-font hover:decoration-solid"
                      onMouseEnter={(e) => openTooltip(e, roomName as RoomName)}
                      onMouseLeave={hideTooltip}
                    >
                      {roomName}
                    </span>
                  </span>
                  <span>&times;{Math.ceil(slotNumber / 6)}</span>
                  <RoomVis slots={slotNumber} />
                </Fragment>
              ))}
          </div>
        ) : (
          <div className="mb-8 rounded-md border-2 border-dashed border-gray-800 p-8 text-center">
            <span className="font-bold">No room required!</span>{" "}
            <span className="whitespace-nowrap">Add some course above.</span>
          </div>
        )}
        <div
          className={`fixed w-max max-w-[250px] rounded-md border-2 border-gray-800 bg-white p-8 text-right transition-opacity ${
            tooltipInfo.show ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          ref={elTooltip}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
          }}
        >
          <strong>
            Course{COURSES_BY_ROOM[tooltipInfo.room].length > 1 && "s"} Using This Room:
          </strong>
          <ul className="mb-0 list-none">
            {COURSES_BY_ROOM[tooltipInfo.room].map(([course, slotNumber]) => (
              <li key={course}>
                {course}: {slotNumber}
                <sup>sl</sup>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <h2>Some Complete Sets</h2>
        <ul>
          <li>24 Archaeology + 8 Money Wangling + 24 Scientography</li>
          <li>16 Dark Art + 16 Wizardry</li>
          <li>24 Gastronomy + 24 Scientography</li>
          <li>24 Gastronomy + 24 Archaeology + 8 Money Wangling</li>
          <li>24 Internet History + 8 General Knowledge</li>
          <li>24 Robotics + 8 General Knowledge</li>
          <li>16 School of Thought + 16 Internet History + 16 Funny Business</li>
          <li>
            16 School of Thought + 16 Internet History + 16 Virtual Normality + 16
            Scientography{" "}
            <span className="whitespace-nowrap">
              (
              <a
                href="https://www.reddit.com/r/TwoPointCampus/comments/120usyx/comment/jjbc3n9/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                by Vasbyt-XXI
              </a>
              )
            </span>
          </li>
          <li>
            16 School of Thought + 16 Internet History + 8 Funny Business + 8
            Scientography + 24 Gastronomy{" "}
            <span className="whitespace-nowrap">
              (
              <a
                href="https://www.reddit.com/r/TwoPointCampus/comments/120usyx/comment/jjbc3n9/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                by Vasbyt-XXI
              </a>
              )
            </span>
          </li>
          <li>16 Scientography + 8 Funny Business</li>
          <li>
            32 Spy School + 16 Archaeology + 16 Scientography{" "}
            <span className="whitespace-nowrap">
              (
              <a
                href="https://github.com/rootEnginear/tpc-course-planner/discussions/1"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                by whowantblood
              </a>
              )
            </span>
          </li>
          <li>8 Virtual Normality + 8 General Knowledge</li>
          <li>48 Academic Exercise</li>
          <li>48 Archaeology</li>
          <li>24 Countercultural Studies</li>
          <li>24 Dark Art</li>
          <li>24 Funny Business</li>
          <li>48 Gastronomy</li>
          <li>16 General Knowledge</li>
          <li>48 Internet History</li>
          <li>48 Knight School</li>
          <li>16 Money Wangling</li>
          <li>48 Musicality</li>
          <li>48 Robotics</li>
          <li>48 School of Thought</li>
          <li>48 Scientography</li>
          <li>48 Spy School</li>
          <li>16 Virtual Normality</li>
          <li>48 Wizardry</li>
        </ul>
        <p>
          Some courses, such as &ldquo;Academic Exercise&rdquo;, &ldquo;Knight
          School&rdquo;, and &ldquo;Musicality&rdquo;, don&apos;t fare well with other
          courses because they have some left-over slots that are difficult to fit with
          other courses. But let me know if you can crack the code!
        </p>
      </main>
      <hr />
      <footer>
        <span className="whitespace-nowrap">
          Copyright &copy; {new Date().getFullYear()}
        </span>{" "}
        <a
          href="https://github.com/rootEnginear/tpc-course-planner"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          rootEnginear
        </a>{" "}
        <span className="whitespace-nowrap">All right reserved.</span>
      </footer>
    </>
  );
}
