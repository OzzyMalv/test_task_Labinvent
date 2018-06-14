import React, { Component } from "react";
import styled from "styled-components";

const FormPage = styled.div`
  border: solid 1px lightgrey;
  /* margin: 20px; */
  max-width: 1150px;
  margin: 0 auto;
  width: auto;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: stretch;
  margin-top: 20px;
  width: auto;
  /* border: solid 1px grey; */
`;

const RadioDivControls = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;
const ButtomCustom = styled.button`
  /* border: solid 1px lightblue; */
  margin-right: 20px;
  border-radius: 100px;
  width: 140px;
`;
const FormInfo = styled.form`
  border: solid 1px lightgrey;
  padding: 5px;
`;
const InputDiv = styled.div`
  margin-left: 100px;
`;
const PanelInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
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
      <FormPage>
        <Main>
          <FormInfo>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Ethernet Settings</legend>
              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="radioIP"
                    defaultChecked
                  />{" "}
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                {/* <br /> */}
                <label>
                  <input className="uk-radio" type="radio" name="radioIP" /> Use
                  the folowing IP address:
                </label>
              </RadioDivControls>

              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    IP address:
                    <InputData
                      required="true"
                      className="uk-input"
                      type="text"
                      placeholder="Input"
                    />
                  </label>
                </PanelInput>

                <PanelInput>
                  <label className="uk-form-label">
                    Subnet Mask:
                    <InputData
                      className="uk-input"
                      type="text"
                      placeholder="Input"
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Default Gateway:
                    <InputData
                      className="uk-input"
                      type="text"
                      placeholder="Input"
                    />
                  </label>
                </PanelInput>
              </InputDiv>

              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="radioDNS"
                    defaultChecked
                  />{" "}
                  Obtain DNS server address automatically
                </label>
                <label>
                  <input className="uk-radio" type="radio" name="radioDNS" />{" "}
                  Use the folowing DNS server address:
                </label>
              </RadioDivControls>

              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    Preferred DNS server:
                    <InputData
                      className="uk-input"
                      type="text"
                      placeholder="Input"
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Alternative DNS server:
                    <InputData
                      className="uk-input"
                      type="text"
                      placeholder="Input"
                    />
                  </label>
                </PanelInput>
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
              <PanelInput>
                <label className="uk-form-label">
                  Security Key:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
            </InputDiv>

            <RadioDivControls className="uk-form-controls uk-form-controls-text">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radioIP"
                  defaultChecked
                />{" "}
                Obtain an IP address automatically (DHCP/BootP)
              </label>
              <label>
                <input className="uk-radio" type="radio" name="radioIP" /> Use
                the folowing IP address:
              </label>
            </RadioDivControls>
            <InputDiv className="uk-margin">
              <PanelInput>
                <label className="uk-form-label">
                  IP address:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
              <PanelInput>
                <label className="uk-form-label">
                  Subnet Mask:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
              <PanelInput>
                <label className="uk-form-label">
                  Default Gateway:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
            </InputDiv>

            <RadioDivControls className="uk-form-controls uk-form-controls-text">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radioDNS"
                  defaultChecked
                />{" "}
                Obtain DNS server address automatically
              </label>
              <label>
                <input className="uk-radio" type="radio" name="radioDNS" /> Use
                the folowing DNS server address:
              </label>
            </RadioDivControls>

            <InputDiv className="uk-margin">
              <PanelInput>
                <label className="uk-form-label">
                  Preferred DNS server:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
              <PanelInput>
                <label className="uk-form-label">
                  Alternative DNS server:
                  <InputData
                    className="uk-input"
                    type="text"
                    placeholder="Input"
                  />
                </label>
              </PanelInput>
            </InputDiv>
          </FormInfo>
        </Main>
        <SubmitPanel>
          <ButtomCustom className="uk-button uk-button-primary">
            Save
          </ButtomCustom>
          <ButtomCustom className="uk-button uk-button-default">
            Cansel
          </ButtomCustom>
        </SubmitPanel>
      </FormPage>
    );
  }
}

export default Form;
