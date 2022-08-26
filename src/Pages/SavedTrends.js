import React from 'react'
import "./styles.css";
import Accordion from "@semcore/accordion";
import { Text } from "@semcore/typography";
import { Flex, Box } from "@semcore/flex-box";
import FavoriteM from "@semcore/icon/Favorite/m";
import BookmarkFilledM from "@semcore/icon/BookmarkFilled/m";
import BookmarkM from "@semcore/icon/Bookmark/m";
import DropdownMenu from "@semcore/dropdown-menu";
import { ButtonTrigger } from "@semcore/base-trigger";
import Button from "@semcore/ui/button";
import { useNavigate } from "react-router-dom";
import icon from "../icons/iconclipboard.png";

function SavedTrends() {
  let navigate = useNavigate();

  return (
    <>
      <body id="trendfeed">
        <h2 class="titles">Trends</h2>
        <div id="sidebar">
          <Accordion>
            <Accordion.Item>
              <Accordion.Item.Toggle
                className="accordion-selected-toggle"
                p="8px 12px"
              >
                <Flex alignItems="center">
                  <Accordion.Item.Chevron color="gray-300" mr={4} />
                  <Text color="gray-800">{`Favorite Feeds`}</Text>
                </Flex>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse>
                <Box p="5px 43px">
                  {
                    <>
                      <Text size={100} color="gray-800">{`Click `}</Text>
                      <FavoriteM></FavoriteM>
                      <Text
                        size={100}
                        color="gray-800"
                      >{` to add your favorite feeds`}</Text>
                    </>
                  }
                </Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          </Accordion>

          <Accordion>
            <Accordion.Item>
              <Accordion.Item.Toggle
                className="accordion-selected-toggle-savedtrend"
                p="8px 12px"
              >
                <Flex alignItems="center">
                  <BookmarkFilledM />
                  <Text p="0px 15px" color="gray-800">{`Saved Trends`}</Text>
                </Flex>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse>
                <Box p="5px 43px">
                  {
                    <>
                      <Text size={100} color="gray-800">{`Click `}</Text>
                      <BookmarkM></BookmarkM>{" "}
                      <Text
                        size={100}
                        color="gray-800"
                      >{` to save a trend`}</Text>
                    </>
                  }
                </Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          </Accordion>

          <hr></hr>

          <Accordion>
            {[...new Array(5)].map((_, index) => (
              <Accordion.Item value={index} key={index}>
                <Accordion.Item.Toggle
                  className="accordion-selected-toggle"
                  p="8px 12px"
                >
                  <Flex alignItems="center">
                    <Accordion.Item.Chevron color="gray-300" mr={4} />
                    <Text color="gray-800">{`Section ${index + 1}`}</Text>
                  </Flex>
                </Accordion.Item.Toggle>
                <Accordion.Item.Collapse>
                  <Box p="5px 43px">
                    {
                      <Text size={100} color="gray-800">{`Hello Section ${
                        index + 1
                      }`}</Text>
                    }
                  </Box>
                </Accordion.Item.Collapse>
              </Accordion.Item>
            ))}
          </Accordion>

          <div id="level">
            <p>
              Trending Level: <span class="g">Elevated</span>
            </p>
            <p>
              Trending Level: <span class="y">High</span>
            </p>
            <p>
              Trending Level: <span class="r">Extreme</span>
            </p>
          </div>
        </div>

        <div id="savetrendbar">
          <h4>Saved trends</h4>
          <div id="dropbar">
            <DropdownMenu>
              <DropdownMenu.Trigger p="17px 15px">
                <ButtonTrigger w={503}>All Trends</ButtonTrigger>
              </DropdownMenu.Trigger>
              <DropdownMenu.Menu>
                <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                <DropdownMenu.Item>Item 3</DropdownMenu.Item>
                <DropdownMenu.Item>Item 4</DropdownMenu.Item>
              </DropdownMenu.Menu>
            </DropdownMenu>
          </div>
        </div>

        <div id="savetrendcontent">
          <img src={icon} />
          <h4>There is nothing here yet</h4>
          <p>Click Save on a Trend card to add it to Saved Trends</p>
          <Button size="m" theme={undefined} use="primary" onClick={() => {navigate("/")}}>
            Go to Trends
          </Button>
        </div>
      </body>
    </>

  )
}

export default SavedTrends;