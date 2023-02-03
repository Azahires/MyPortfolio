import { useEffect, useState } from "react";
import axios from "axios";
import WorkCard from "@components/WorkCard/WorkCard";
import Style from "./style";

export default function DisplayProjects() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5010/works").then(({ data }) => {
      setWorks(data);
    });
  }, []);

  return (
    <Style>
      <div className="cards-container">
        {works &&
          works.map((work) => {
            return (
              <WorkCard
                title={work.title}
                picture={work.picture}
                description={work.description}
                url={work.url}
                key={work.idProject}
              />
            );
          })}
      </div>
    </Style>
  );
}
