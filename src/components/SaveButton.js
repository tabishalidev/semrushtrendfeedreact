import {useState} from 'react';
import Button from "@semcore/ui/button";
import BookmarkFilledM from "@semcore/icon/BookmarkFilled/m";
import BookmarkM from "@semcore/icon/Bookmark/m";

function SaveButton() {
    const[saveButtonText, setSaveButtonText] = useState('Save');
    const[saveBookmark, setSaveBookmark] = useState(<BookmarkM></BookmarkM>)
  
    function handleClick(){
        setSaveButtonText('Saved');
        setSaveBookmark(<BookmarkFilledM></BookmarkFilledM>)
    }
    return (
        <Button size="m" theme={undefined} use="secondary" onClick={handleClick}>
            <Button.Addon id="sbm">
            {saveBookmark}
            </Button.Addon>
            {saveButtonText}
      </Button>
    );
  }
  
  export default SaveButton;

