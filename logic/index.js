
let whatIKnow = {
  "hello": "hi back"
}
export default function processMessage(value) {
  console.log(whatIKnow);

  if (value.startsWith("/learn")) {
    var msg = value.substring(6,value.indexOf("/reply")).trim()
    var learned = value.substring(value.indexOf("/reply")+6)
    console.log("took " , msg, " learned ", learned)
    whatIKnow[msg] = learned;
    return 'I learned to reply to "' + msg + '" with: "' + learned + '""';
  }
  if (whatIKnow[value]) {
    return whatIKnow[value]
  }
  return "I do not understand: " + value;
}
