import React, { Component } from "react";
// import classnames from "classnames";
import styled from "styled-components";

const Main = styled.form`
  border: solid 1px lightgrey;
  max-width: 1150px;
  margin: 0 auto;
  width: auto;
`;
const FormPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 20px;
  width: auto;
`;

const RadioDivControls = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-top: solid 1px lightgrey;
`;
const ButtomCustom = styled.button`
  margin-right: 20px;
  border-radius: 100px;
  width: 140px;
`;
const FormSides = styled.div`
  border: solid 1px lightgrey;
  padding: 5px;
`;
const InputDiv = styled.div`
  margin-left: 100px;
`;
const InputData = styled.input`
  width: 300px;
  margin-left: 10px;
`;
const ErrorSpan = styled.span`
  margin-left: 100px;
`;

const SelectDiv = styled.div`
  margin-left: 70px;
`;
const PanelInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const SelectInput = styled(PanelInput)`
  justify-content: space-around;
  align-items: baseline;
`;
const SelectPanel = styled.select`
  margin-left: 10px;
  width: 210px;
  display: flex;
  justify-content: flex-end;
`;

const RefreshIcon = styled.div`
  cursor: pointer;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      checkWifi: "disabled",
      checkWifiSec: "disabled",
      checkWifiIp: "disabled",
      checkWifiDNS: "disabled",
      ipAddress: "",
      errors: {}
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checksFormState = this.checksFormState.bind(this);
  }

  checksFormState(ev) {
    console.log(ev.target.name);
    if (ev.target.name === "enableWifi") {
      this.state.checkWifi === "disabled"
        ? this.setState({
            checkWifi: "",
            // checkWifiSec: "",
            checkWifiIp: "",
            checkWifiDNS: ""
          })
        : this.setState({
            checkWifi: "disabled",
            // checkWifiSec: "disabled",
            checkWifiIp: "disabled",
            checkWifiDNS: "disabled"
          });
    }
    debugger;
    if (ev.target.name === "checkWifiSec") {
      this.state.checkWifiSec === "disabled"
        ? this.setState({ checkWifiSec: "" })
        : this.setState({ checkWifiSec: "disabled" });
    }
    // if (ev.target.name === "radioWifiIP")
    // this.state.checkWifeIp === "disabled"
    //   ? this.setState({ checkWife: "" })
    //   : this.setState({ checkWife: "disabled" });
  }

  handleDataChange(ev) {
    // console.log({ [ev.target.name]: ev.target.value });
    if (!!this.state.errors[ev.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[ev.target.name];
      this.setState({
        [ev.target.name]: ev.target.value,
        errors
      });
    } else {
      this.setState({
        [ev.target.name]: ev.target.value
      });
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log("event");
    let errors = {};
    if (this.state.ipAddress === "") {
      errors.ipAddress = "Ip address can't be empty";
    }

    this.setState({ errors });
    console.log(this.state.errors.ipAddress);
    ev.target.reset();
  }

  render() {
    return (
      <Main onSubmit={this.handleSubmit}>
        <FormPage>
          <FormSides>
            <fieldset className="uk-fieldset" disabled="disabled">
              <legend className="uk-legend uk-text-bold">
                Ethernet Settings
              </legend>
              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioIp"
                    defaultChecked
                  />{" "}
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioIp"
                  />{" "}
                  Use the following IP address:
                </label>
              </RadioDivControls>
              {/* required="true" */}
              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    IP address:
                    <InputData
                      className="uk-input"
                      name="ipAddress"
                      type="text"
                      placeholder="Input"
                      value={this.state.ipAddress}
                      onChange={this.handleDataChange}
                    />
                  </label>
                </PanelInput>
                {!!this.state.errors.ipAddress ? (
                  <ErrorSpan className="uk-text-danger">
                    {this.state.errors.ipAddress}
                  </ErrorSpan>
                ) : (
                  <div />
                )}
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
                    name="EthernetSettingsRadioDNS"
                    defaultChecked
                  />{" "}
                  Obtain DNS server address automatically
                </label>
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioDNS"
                  />{" "}
                  Use the following DNS server address:
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
            </fieldset>
          </FormSides>

          <FormSides>
            <legend className="uk-legend uk-text-bold">
              Wireless Settings
            </legend>
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                value="hidden"
                name="enableWifi"
                onClick={this.checksFormState}
              />{" "}
              Enable wifi:
            </label>
            <fieldset className="uk-fieldset">
              <SelectDiv className="uk-margin">
                <SelectInput>
                  <label className="uk-form-label">
                    Wireless Network Name:
                    <SelectPanel
                      className="uk-select"
                      disabled={this.state.checkWifi}
                    >
                      <option value="">Please select...</option>
                      <option>SSID 1</option>
                      <option>SSID 2</option>
                      <option>SSID 3</option>
                    </SelectPanel>
                  </label>
                  <RefreshIcon>
                    <div href="#1" uk-icon="icon: refresh" />
                  </RefreshIcon>
                </SelectInput>
              </SelectDiv>
              <label>
                <input
                  disabled={this.state.checkWifi}
                  className="uk-checkbox"
                  type="checkbox"
                  name="checkWifiSec"
                  onClick={this.checksFormState}
                />{" "}
                Enable Wireless Security:
              </label>
              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    Security Key:
                    <InputData
                      disabled={this.state.checkWifiSec}
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
                    name="radioWifiIP"
                    defaultChecked
                    onClick={this.checksFormState}
                  />{" "}
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="radioWifiIP"
                    onClick={this.checksFormState}
                  />{" "}
                  Use the following IP address:
                </label>
              </RadioDivControls>
              <InputDiv className="uk-margin" disabled={this.state.checkWifeIp}>
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
                  <input className="uk-radio" type="radio" name="radioDNS" />{" "}
                  Use the following DNS server address:
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
            </fieldset>
          </FormSides>
        </FormPage>
        <SubmitPanel>
          <ButtomCustom type="submit" className="uk-button uk-button-primary">
            Save
          </ButtomCustom>
          <ButtomCustom className="uk-button uk-button-default">
            Cancel
          </ButtomCustom>
        </SubmitPanel>
      </Main>
    );
  }
}

export default Form;
