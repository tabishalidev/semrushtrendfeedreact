import "./styles.css";
import { useNavigate } from "react-router-dom";
import React from 'react';
import {useState} from 'react';

import Accordion from "@semcore/accordion";
import { Text } from "@semcore/typography";
import { Flex, Box } from "@semcore/flex-box";
import FavoriteM from "@semcore/icon/Favorite/m";
import FavoriteFilledL from "@semcore/icon/FavoriteFilled/l";
import FavoriteL from "@semcore/icon/Favorite/l";
import BookmarkFilledM from "@semcore/icon/BookmarkFilled/m";


import Tooltip from "@semcore/ui/tooltip";
import SearchBar from "../components/SearchBar";

import Input from "@semcore/ui/input";
import Button from "@semcore/ui/button";
import SearchM from "@semcore/icon/Search/m";

import CardFull from '../components/CardFull';
import { Row } from '@semcore/ui/grid';
import { Col } from '@semcore/ui/grid';

import AVData from '../data/avdata.json';



function Home() {

  let navigate = useNavigate();

  const[FavoriteIcon, setFavoriteIcon] = useState(<FavoriteL></FavoriteL>);
  const[addfeedText, setAddFeedText] = useState('Add to Favorite Feeds');
  
    function handleClick(){
        setFavoriteIcon(<FavoriteFilledL id="ffl"></FavoriteFilledL>)
        setAddFeedText('Remove from Favorite Feeds')
    }

    const steps = [];
    for (let i = 1; i <= 3; i++) {
      steps.push(<Col md={4}>
              <CardFull></CardFull>
            </Col>);
    }
  

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
                className="accordion-selected-toggle"
                p="8px 12px"
                onClick={() => {navigate("/savedtrends")}}
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
                      <BookmarkFilledM></BookmarkFilledM>{" "}
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

        <div id="topbar">
          <div id="searchbar">
            <Input size="l" state="normal">
              <Input.Addon>
                <SearchM />
              </Input.Addon>
              <Input.Value placeholder="Search by Keyword" />
            </Input>
          </div>

          <div id="searchbutton">
              <Button size="l" use="primary">
                Search
              </Button>
          </div>
        </div>
        
        {/* <div id = "topbar">
          <SearchBar id="sc"></SearchBar>
        </div> */}


        <div id="content">
          <h4 class="tc">Trending Content</h4>
          <Tooltip title={addfeedText} onClick={handleClick}>
            {FavoriteIcon}
          </Tooltip>
          <span class="sectiontitle">
              {
                  AVData.map ( (data) => {
                    return(
                      data.title
                    )
                  })
                }
          </span>


          <CardFull></CardFull>

        
        </div>
      </body>
    </>
  )
}

export default Home