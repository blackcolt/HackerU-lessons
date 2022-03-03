- Please choose one of your UI project and transofrm it to angular project.

- How to add event that transmit to mother component:
- Create an output inside the child component (eventEmitter)
  @Output() evEmitter = new EventEmitter<void>()
- add a function that emitting the output (.emit())
  this.evEmitter.emit()
- in the mother component (that calls the child component) add a function that handle the emitting
  motherHandle(){
  }

- in the child tag add (evEmitter)=motherHandle
