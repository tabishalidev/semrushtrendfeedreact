import React from "react";
import Skeleton from "@semcore/ui/skeleton";
import Button from "@semcore/ui/button";
import Card from "@semcore/ui/card";
import SaveButton from './SaveButton';
import ShareM from "@semcore/icon/Share/m";


function CardFull() {
    return <>
            <Card mt={7} mr={3} wMin="200px" hMin="475px">
              <Card.Header>
                <Skeleton>
                  <rect rx="5" ry="5" width="100%" height="150" />
                </Skeleton>
                <Card.Title>Article Title</Card.Title>
                <Card.Description>Category: </Card.Description>
                <Card.Description>Date: </Card.Description>
                <Card.Description>Trending Level: </Card.Description>
              </Card.Header>
              <Card.Body>
                <Skeleton>
                  <Skeleton.Text amount={8} />
                </Skeleton>
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


    </>
    
}

export default CardFull;