import React from "react";
import { marked } from "marked";
import { FormatDate } from "@/app/utils";

import styles from "./Timeline.module.css";

interface TimelineItem {
  from_date: string;
  to_date: string;
  title: string;
  role: string;
  description: string;
}

type TimelineType = "education" | string;

const Timeline = async (
  { timelineType }: { timelineType?: TimelineType } = {
    timelineType: "education",
  }
) => {
  const res =
    timelineType === "education"
      ? await fetch(
          "http://127.0.0.1:8000/user_content/timeline?type=education",
          {
            cache: "force-cache",
          }
        )
      : await fetch(
          "http://127.0.0.1:8000/user_content/timeline?type=experience",
          {
            cache: "force-cache",
          }
        );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  const data = await res.json();

  return (
    <section>
      <h2 className="section-title">{timelineType}</h2>
      <ul className={styles.timeline}>
        {data.map((item: TimelineItem, index: number) => {
          return (
            <li key={index} className={styles.item}>
              {item.from_date && (
                <span>
                  {FormatDate(item.from_date)} -{" "}
                  {item.to_date ? FormatDate(item.to_date) : "Present"}
                </span>
              )}
              <h3>{item.title}</h3>
              {item.role && (
                <span>
                  <strong>Role: </strong>
                  {item.role}
                </span>
              )}
              <div
                className={styles.nestedList}
                dangerouslySetInnerHTML={{ __html: marked(item.description) }}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Timeline;
