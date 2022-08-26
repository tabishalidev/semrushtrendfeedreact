import React from "react";
import Input from "@semcore/ui/input";
import Button from "@semcore/ui/button";
import SearchM from "@semcore/icon/Search/m";

function SearchBar () {
    return <>
    <form action="/" method="get">
        <Input size="l" state="normal">
            <Input.Addon>
                <SearchM />
            </Input.Addon>
            <Input.Value placeholder="Search by Keyword" />
        </Input>
            
        <Button size="l" use="primary">
            Search
        </Button>
    </form>
    </>
}
    


export default SearchBar;
