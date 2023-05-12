import React from "react";

import Container from "../../../../components/Container";

const About = (props) => {
  const data = props.content;

  return (
    <section className="w-full p-3 lg:pl-8">
      <Container type="advanced" title={data.title} key={data.id}>
        <p>{data.text}</p>
      </Container>
    </section>
  );
};

export default About;
