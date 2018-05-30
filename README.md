# SamsALIbim 
The [ALICE project](http://alice-collaboration.web.cern.ch/) makes use of [SAMS (Shift Account Management System)](https://glance.cern.ch/alice/sams/) which is a human resources tool. This tool tracks collaborators, organizations and their roles and individual trainings. The data within this tool is used by Jiskefet, the bookkeeping tool for the ALICE experiment.

This library is an attempt to create an api that stays constant while it allows for easy transition for different implementations of accessing SAMS.

## Project goals:
The project has the following goals:

1. Define the outputs and inputs which might be obvious
2. Allow the library to change implementation of the data access without to much hassle
3. Allow for using test servers run locally at Software for Science.
4. Test the capacities of Typescript in combination with the [WebUI library](https://github.com/AliceO2Group/WebUi).

## Pages:
1. [Design](./doc/design.md)