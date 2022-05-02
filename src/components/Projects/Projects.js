import React, { useState, useRef } from "react";
import "./Projects.scss";
import Arrow from "./Arrow";
import adidas from "./adidas1.jpg";

import AboutSlider from "../AboutSlider/AboutSlider";
import { SliderData } from "../AboutSlider/SliderData";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="projects_section" data-scroll-section>
      <div className="projects">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h1>{item.title}</h1>
              <Arrow
                width={50}
                className={selected === i ? "rotate" : "projects_icon"}
              />
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <div>{item.images}</div>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    title: "adidas",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
    images: (
      <div>
        <AboutSlider show={3} infiniteLoop={true}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </AboutSlider>
      </div>
    ),
  },
  {
    title: "DIV. Amsterdam",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
    images: (
      <div>
        <AboutSlider show={3} infiniteLoop={true}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </AboutSlider>
      </div>
    ),
  },

  {
    title: "Studio Pands",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
    image: "image",
  },
  {
    title: "Portraits",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
    image: "image",
  },
  {
    title: "Studio Pands",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
  },
  {
    title: "Goldkimono",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatibus, odio, repudiandae similique ea numquam recusandae reprehenderit fugiat iure eos fuga eius assumenda tempore rerum tenetur laborum esse eligendi beatae molestiae et suscipit ipsam aspernatur. Numquam vero, error alias ipsa molestias, sed et sapiente eum, praesentium aperiam minima mollitia a!",
  },
];

export default Projects;
