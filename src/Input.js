import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
const Input = () => {
  return (
    <div>
      <div>
        <Button color="primary">Hello World</Button>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>

      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div>
        <Checkbox
          value="checkedA"
          inputProps={{ "aria-label": "Checkbox A" }}
        />
        <Checkbox
          value="checkedA"
          color="primary"
          inputProps={{ "aria-label": "Checkbox A" }}
        />
        <input type="checkbox"></input>
        <input type="button"></input>
        {}
      </div>
    </div> //큰div
  );
};

//컴포넌트 내보내기
export default Input;
