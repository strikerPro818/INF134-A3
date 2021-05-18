import {
  MyToolkit
} from './mytoolkit.js';


var btn = new MyToolkit.Button;

btn.move(50, 50);

btn.label('Press!');

btn.state(function (e) {
  console.log('Button Pressed!')
  console.log(e);
});

btn.onclick(function (e) {
  console.log('Button Clicked!')
  console.log(e);
});


var checkbox = new MyToolkit.CheckBox;

checkbox.move(250, 60);

checkbox.label('Check Box');

checkbox.onclick(function (e) {
  console.log('Checked Changed!')
  console.log(e);
});

checkbox.state(function (e) {
  console.log('Check Box widget Changed!')
  console.log(e);
});


var radiobtn = new MyToolkit.RadioButton;

radiobtn.move(450, 50);

radiobtn.labelOne('Radio [1]');
radiobtn.labelTwo('Radio [2]');

radiobtn.state(function (e) {
  console.log('Radio Changed!')
  console.log(e);
});

radiobtn.onclick(function (e) {
  console.log('Checked Changed:', e.target.id, 'selected!');
  console.log(e);
})


var textbox = new MyToolkit.TextBox;

textbox.move(200, 200);

textbox.content(function (text) {
  console.log('Current Words:', text);
})

textbox.keyup(function (e) {
  console.log('Text Changed!')
  console.log(e);
})

textbox.state(function (e) {
  console.log('Text Box Changed!')
  console.log(e);
});


var scrollbar = new MyToolkit.ScrollBar;

scrollbar.move(750, 50);

scrollbar.setHeight(300);

scrollbar.position(function (pos) {
  console.log("Scroll Thumb Position:", pos);
})

scrollbar.onclick(function (e) {
  console.log('Scroll Bar Changed!')
  console.log(e);
});

scrollbar.scrollDirection(function (d) {
  console.log("Scroll Bar Direction: ", d);
});

scrollbar.state(function (e) {
  console.log('Scroll Bar widget Changed!')
  console.log(e);
});

var progressbar = new MyToolkit.ProgressBar;

var barWidth = 150;

progressbar.move(200, barWidth);

progressbar.width(240);

progressbar.setIncrement(20);

var getInc = progressbar.getIncrement();

setInterval(inc, 500);
var incVal = 0;

function inc() {
  incVal = incVal + getInc;
  if (incVal <= barWidth) {
    progressbar.incrementBar(incVal)

  } else {
    incVal = 0
    progressbar.incrementBar(incVal)

  }
}

progressbar.onIncrement(function (e) {
  console.log('Progress Incremented!')
  console.log(e);
});

progressbar.state(function (e) {
  console.log('Progress Bar Changed!')
  console.log(e);
});


var spinner = new MyToolkit.Spinner;

spinner.move(250, 100);

spinner.state(function (e) {
  console.log("Spinner Changed")
  console.log(e)
});
