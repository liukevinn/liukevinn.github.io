import React from 'react';
import './css/Timeline.css';

const events = [
  { year: 2020, title: 'Milwaukee Stem Program', description: 'Established STEM program to foster exploratory education for 100+ participants in lower-income areas of Milwaukee. Organized 3 distinct interactive programs including 3D Printing, Aeronautics, & Astronomy. Created and oversaw a mentorship program connecting young STEM students with teachers and professors.'},
  { year: 2022, title: 'University of Helsinki Online FullStackOpen Coding Bootcamp', description: 'Studied and reviewed the basics and features of React, Javascript, HTML, and CSS to create full stack application projects. Built applications such as a weather app, phonebook, and notes app, and deployed them to the internet'},
  { year: 2023, title: 'High-Energy Particle Collision Program', description: 'Spearheaded weekly meetings of over 20 members to discuss particle research information and various findings. Researched Electroweak interactions and learned about ATLAS and Electron scattering experiments. Completed external research with fellow program members to go beyond the scope of the research program.' },
  { year: 2023, title: 'Duke Applied Machine Learning', description: 'Collaborated closely with a small group to implement new features on the tent-shift-schedule website for over 100 users. Created an export to excel feature which takes in recorded group information from website and creates a formatted excel sheet'},
  { year: 2024, title: 'Catalyst', description: 'Joined Catalyst, a social and pre-professional community of tech enthusiasts. I am currently working on an entrepeneurial project. More to come on this!'}];

const TimelineEvent = ({ event, index }) => {
  const alignment = index % 2 === 0 ? 'left' : 'right';
  return (
    <div className={`timeline-event timeline-event-${alignment}`}>
      <div className={`timeline-event-content content-${alignment}`}>
        <span className="timeline-event-year">{event.year}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <TimelineEvent event={event} key={index} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
