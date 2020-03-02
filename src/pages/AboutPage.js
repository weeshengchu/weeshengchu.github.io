import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Table from "react-bootstrap/Table";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title}></Hero>
      {/* 7. Setting up AboutPage with <Content> */}
      <Content>
        <p>
          I graduated in May 2019 from Nanyang Technological University with a
          degree in Mechanical engineering.
        </p>

        <p>
          Following that, I joined FDM Group as a Software developer trainee.
          The training included the following subjects:
        </p>

        <Table bordered size="sm-1">
          <tbody>
            <tr>
              <td>Professional Skills</td>
              <td>SQL</td>
              <td>Excel/VBA</td>
              <td>UNIX</td>
            </tr>
            <tr>
              <td>Financial Industry Awareness</td>
              <td>Web Application Design</td>
              <td>OOD (Java)</td>
              <td>Web Development in Java (Servlets, JSPs)</td>
            </tr>
            <tr>
              <td>Spring Framework</td>
              <td>Group software development project</td>
            </tr>
          </tbody>
        </Table>

        <p>
          After my training, I was placed with BNP Paribas as a DevOps to work
          on an Angular 8 and Spring Boot technology stack.
        </p>

        <p>
          Currently, I am intending to pursue a field included Machine Learning,
          Data science, AI, Deep Learning and Neural Network.
        </p>
        <p>
          Some other notable Technology stacks that I have worked on includes:
        </p>
        <Table bordered size="sm-1">
          <tbody>
            <tr>
              <td>Machine Learning - Python</td>
              <td>Data Cleaning (Kaggle) - Python</td>
              <td>Flask</td>
              <td>MATLAB</td>
            </tr>
            <tr>
              <td>Angular 8</td>
              <td>Mathematica</td>
              <td>Express - Backend API</td>
              <td>MongoDB Atlas</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </div>
  );
}

export default AboutPage;
