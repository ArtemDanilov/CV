import React from "react";

import Container from "../../../../components/Container";
import Item from "./item";

const Portfolio = (props) => {
  const data = props.content;

  return (
    <section className="w-full p-2.5 lg:pl-8 print:pl-8">
      <Container type="advanced" title={data.title} key={data.id}>
        <div className="md:grid md:grid-cols-2 print:grid print:grid-cols-2">
          {data.items.map((item) => {
            return (
              <Item
                {...item}
                key={item.id}
                style={{ color: data.headings_color }}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
