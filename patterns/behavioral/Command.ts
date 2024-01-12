// Command interface
interface Command {
  execute(): void;
}

// Concrete Command for turning on the device
class TurnOnCommand implements Command {
  private device: ElectronicDevice;

  constructor(device: ElectronicDevice) {
    this.device = device;
  }

  execute(): void {
    this.device.turnOn();
  }
}

// Concrete Command for turning off the device
class TurnOffCommand implements Command {
  private device: ElectronicDevice;

  constructor(device: ElectronicDevice) {
    this.device = device;
  }

  execute(): void {
    this.device.turnOff();
  }
}

// Receiver (Electronic Device)
class ElectronicDevice {
  private name: string;
  private isOn: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    this.isOn = true;
    console.log(`${this.name} is turned on.`);
  }

  turnOff(): void {
    this.isOn = false;
    console.log(`${this.name} is turned off.`);
  }
}

// Invoker (Remote Control)
class RemoteControl {
  private command!: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

// Client code
const light = new ElectronicDevice("Light");
const fan = new ElectronicDevice("Fan");

const turnOnLightCommand = new TurnOnCommand(light);
const turnOffLightCommand = new TurnOffCommand(light);

const turnOnFanCommand = new TurnOnCommand(fan);
const turnOffFanCommand = new TurnOffCommand(fan);

const remoteControl = new RemoteControl();

// Configuring the remote control with commands
remoteControl.setCommand(turnOnLightCommand);

// Pressing the button on the remote control
remoteControl.pressButton();

// Configuring the remote control with a different command
remoteControl.setCommand(turnOffFanCommand);

// Pressing the button again
remoteControl.pressButton();
