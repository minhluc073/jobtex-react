import React from "react";
import { Accordion } from "react-bootstrap-accordion";

function FaqItem({ data }) {
  return (
    <section className="FAQ-section">
      <div className="tf-container st2">
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion-page">
              <h4>Frequently Asked Questions</h4>
              <p className="des">
                Pellentesque quis lectus sagittis, gravida erat id
              </p>
              <h6>Payments</h6>
              <div className="flat-accordion">
                {data.slice(0, 4).map((item) => (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    show={item.show}
                    className="flat-toggle"
                  >
                    <div className="toggle-content">
                      <p>{item.content}</p>
                    </div>
                  </Accordion>
                ))}
              </div>

              <h6>Suggestion</h6>
              <div className="flat-accordion">
                <div className="flat-toggle">
                  <div className="toggle-title">
                    When is the last time you can remember feeling ?{"{"}" "
                    {"}"}
                    <span className="icon" />
                  </div>
                  <div className="toggle-content">
                    <p>
                      Aenean porta, eros lacus congue lorem, samet mollis magna
                      velit ac erat. Donec ut interdum arcu, egestas liber.
                      Etiam condimentum aliquam accumsan. Morbi accumsan purus
                      nec vehicula ornare.
                    </p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <div className="toggle-title">
                    Which of the Seven Wonders of the world do you?{"{"}" "{"}"}
                    <span className="icon" />
                  </div>
                  <div className="toggle-content">
                    <p>
                      Aenean porta, eros lacus congue lorem, samet mollis magna
                      velit ac erat. Donec ut interdum arcu, egestas liber.
                      Etiam condimentum aliquam accumsan. Morbi accumsan purus
                      nec vehicula ornare.
                    </p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <div className="toggle-title">
                    If you could change careers right this second{"{"}" "{"}"}
                    <span className="icon" />
                  </div>
                  <div className="toggle-content">
                    <p>
                      Aenean porta, eros lacus congue lorem, samet mollis magna
                      velit ac erat. Donec ut interdum arcu, egestas liber.
                      Etiam condimentum aliquam accumsan. Morbi accumsan purus
                      nec vehicula ornare.
                    </p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <div className="toggle-title">
                    What makes you happiest? <span className="icon" />
                  </div>
                  <div className="toggle-content">
                    <p>
                      Aenean porta, eros lacus congue lorem, samet mollis magna
                      velit ac erat. Donec ut interdum arcu, egestas liber.
                      Etiam condimentum aliquam accumsan. Morbi accumsan purus
                      nec vehicula ornare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqItem;
