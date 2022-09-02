import React from "react";
import "../Pages/styles.css";
import Skeleton from "@semcore/ui/skeleton";
import Button from "@semcore/ui/button";
import Card from "@semcore/ui/card";
import SaveButton from './SaveButton';
import ShareM from "@semcore/icon/Share/m";

import AVData from '../data/avdata.json';
import { Col } from '@semcore/ui/grid';
import { Row } from '@semcore/ui/grid';


function CardFull() {
    
    return <>
      <Row>
        {[...Array(9)].map((x, i) =>
          <Col key={i} md={4}>
              <div id ="cards">
                        <Card mt={7} mr={3} wMin="200px" hMin="475px">
                          <Card.Header>
                         
                            {
                              AVData.map ( (data) => {
                                console.log(data.items.length)
                                return(
                                  <img id="cde" src= {data.items[i+1].content_html} width="266" height="150" align="left" hspace="5" />
                                )
                              })}

                            <Card.Title> {
                              AVData.map ( (data) => {
                                console.log(data.items.length)
                                return(
                                  data.items[i+1].title
                                )
                              })}
                            </Card.Title>

                            <Card.Description>{
                              AVData.map ( (data) => {
                                return(
                                  data.items[i+1].author.name
                                )
                              })} 
                            </Card.Description>
                            <Card.Description>{
                              AVData.map ( (data) => {
                                return(
                                  data.items[i+1].date_published.substring(0,10)
                                )
                              })} 
                            </Card.Description>
                            <Card.Description>Trending Level: <span class="y">High</span></Card.Description>
                          </Card.Header>
                          <Card.Body mt={-5}>
                             {AVData.map ( (data) => {
                                return(
                                  <p id="description">{data.items[i+1].summary}</p>
                                )
                              })} 
                            <div id="save">
                              <SaveButton></SaveButton>
                            </div>

                            <div id="share">
                              <Button size="m" theme={undefined} use="secondary">
                                <Button.Addon>
                                  <ShareM />
                                </Button.Addon>
                                <Button.Text>Share</Button.Text>
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                    
                </div>
            </Col>
           
        )}
        </Row>
    </>
}

export default CardFull;