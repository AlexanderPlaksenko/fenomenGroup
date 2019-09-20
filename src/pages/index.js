import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeedbackForm from "../components/form"
import AccordionExampleStyled from "../components/accordion"
import ReactFullpage from "@fullpage/react-fullpage"

import Footer from "../components/footer"

import db from "../../static/db/db.json"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="ФЕНОМЕН - помощник руководителя отдела продаж"/>
        <ReactFullpage
          setResponsive={true}
          responsiveWidth={768}
          navigation={true}
          navigationPosition={"right"}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className={"section fp-auto-height-responsive page-header"}>
                  <div className="row">
                    <div className="container">
                      <div className={"col-12 page-header-hero"}>
                        <h1 className={"text-left font-semibold"}>{db.section1.title}</h1>
                        <div className={"text-left first-section-list"}>
                          <p>{db.section1.text1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section fp-auto-height-responsive row">
                  <div className="container">
                    <div className="col-12">
                      <p className={"head-2"}>{db.section2.sub_title}</p>
                      <div className="row">
                        <AccordionExampleStyled/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={"section fp-auto-height-responsive row"}>
                  <div className={"features"}>
                    <div className={"feature__item"}>
                      <div className={"container"}>
                        <div className={"col-12"}>
                          <div className={"feature__content"}>
                            <h2 className={"head-2 text-center"}>{db.section3.title}</h2>
                            <p className={"mb-5"}>{db.section3.text}</p>
                            <p className={"mb-5"}>{db.section3.text1}</p>
                            <p className={"mb-5"}>{db.section3.text3}</p>
                            <p className={"mb-5"}>{db.section3.text4}</p>
                            <p className={"mb-5"}>{db.section3.text5}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={"section fp-auto-height-responsive row"}>
                  <div className={"features"}>
                    <div className={"feature__item"}>
                      <div className={"container"}>
                        <div className={"col-12"}>
                          <div className={"feature__content"}>
                            <h2 className={"head-2 text-center"}>Применяем все актуальные инструменты автоматизации от
                              наших партнеров:</h2>
                            <div className="row">
                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/bitrix.png" alt="Битрикс24"/>
                                  </div>
                                  <div className="brand-text">Система включает в себя все необходимые инструменты для
                                    организации работы отдела и автоматизации продаж.
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/amo.png" alt="amoCRM"/>
                                  </div>
                                  <div className="brand-text">Самая легкая в использовании CRM на рынке. Интерфейс
                                    amoCRM интуитивно понятен и не требует обучения или периода внедрения и адаптации.
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/terrasoft.png" alt="Террасофт"/>
                                  </div>
                                  <div className="brand-text">Уникальная синергия интеллектуальной платформы для
                                    управления бизнес-процессами и единой CRM-системы с множеством расширений и шаблонов
                                  </div>
                                </div>
                              </div>

                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/mango.png" alt="MANGO OFFICE"/>
                                  </div>
                                  <div className="brand-text">Облачная телефония для организации продаж, обслуживания и связи внутри бизнеса
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/scriptdesigner.png" alt="Скрипт Дизайнер"/>
                                  </div>
                                  <div className="brand-text">Конструктор скриптов продаж с широким функционалом, поддержкой всех популярных платформ и сервисов.
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 col-6-md col-12-sm">
                                <div className="brand-block">
                                  <div className="brand-logo">
                                    <img src="./images/logos/hyperscript.png" alt="HyperScript"/>
                                  </div>
                                  <div className="brand-text">Конструктор скриптов продаж и интерактивных инструкций для сотрудников
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section fp-auto-height-responsive row">
                  <div className="container">
                    <FeedbackForm/>
                  </div>
                  <Footer/>
                </div>
              </div>
            )
          }}
        />
      </Layout>
    )
  }
}

export default IndexPage
