import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  margin: 20px;
  width: auto;
  border: solid 2px grey;
`;

const SubmitPanel = styled.div``;

const FormInfo = styled.form`
  border: solid 2px grey;
`;

const InputDiv = styled.div`
  margin-left: 100px;
`;
const InputData = styled.input`
  width: 300px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  render() {
    return (
      <Main>
        <FormInfo>
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Ethernet Settings</legend>

            <div className="uk-form-controls uk-form-controls-text">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radioIP"
                  defaultChecked
                />{" "}
                Obtain an IP adress automatically (DHCP/BootP)
              </label>
              <br />
              <label>
                <input className="uk-radio" type="radio" name="radioIP" /> Use
                the folowing IP address:
              </label>
            </div>

            <InputDiv className="uk-margin">
              <label className="uk-form-label">IP address:</label>
              <InputData className="uk-input" type="text" placeholder="Input" />
              <br />
              <label className="uk-form-label">Subnet Mask:</label>
              <InputData className="uk-input" type="text" placeholder="Input" />
              <br />
              <label className="uk-form-label">Default Gateway:</label>
              <InputData className="uk-input" type="text" placeholder="Input" />
              <br />
            </InputDiv>

            <div className="uk-form-controls uk-form-controls-text">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radioDNS"
                  defaultChecked
                />{" "}
                Obtain DNS server adress automatically
              </label>
              <br />
              <label>
                <input className="uk-radio" type="radio" name="radioDNS" /> Use
                the folowing DNS server address:
              </label>
            </div>

            <InputDiv className="uk-margin">
              <label className="uk-form-label">Preferred DNS server:</label>
              <InputData className="uk-input" type="text" placeholder="Input" />
              <br />
              <label className="uk-form-label">Alternative DNS server:</label>
              <InputData className="uk-input" type="text" placeholder="Input" />
            </InputDiv>

            {/* <div className="uk-margin">
              <select className="uk-select">
                <option>Option 01</option>
                <option>Option 02</option>
              </select>
            </div> */}
          </fieldset>
        </FormInfo>
        <FormInfo>
          <legend className="uk-legend">Wireless Settings</legend>

          <label>
            <input className="uk-checkbox" type="checkbox" /> Enable wifi:
          </label>

          <InputDiv className="uk-margin">
            <label className="uk-form-label">Wireless Network Name:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
          </InputDiv>

          <label>
            <input className="uk-checkbox" type="checkbox" /> Enable Wireless
            Security:
          </label>

          <InputDiv className="uk-margin">
            <label className="uk-form-label">Security Key:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
          </InputDiv>

          <div className="uk-form-controls uk-form-controls-text">
            <label>
              <input
                className="uk-radio"
                type="radio"
                name="radioIP"
                defaultChecked
              />{" "}
              Obtain an IP adress automatically (DHCP/BootP)
            </label>
            <br />
            <label>
              <input className="uk-radio" type="radio" name="radioIP" /> Use the
              folowing IP address:
            </label>
          </div>

          <InputDiv className="uk-margin">
            <label className="uk-form-label">IP address:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
            <br />
            <label className="uk-form-label">Subnet Mask:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
            <br />
            <label className="uk-form-label">Default Gateway:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
            <br />
          </InputDiv>

          <div className="uk-form-controls uk-form-controls-text">
            <label>
              <input
                className="uk-radio"
                type="radio"
                name="radioDNS"
                defaultChecked
              />{" "}
              Obtain DNS server adress automatically
            </label>
            <br />
            <label>
              <input className="uk-radio" type="radio" name="radioDNS" /> Use
              the folowing DNS server address:
            </label>
          </div>

          <InputDiv className="uk-margin">
            <label className="uk-form-label">Preferred DNS server:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
            <br />
            <label className="uk-form-label">Alternative DNS server:</label>
            <InputData className="uk-input" type="text" placeholder="Input" />
          </InputDiv>
        </FormInfo>
      </Main>
    );
  }
}

export default Form;
