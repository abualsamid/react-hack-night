
let whatIKnow = {
  "hello": "hi back"
}
export default function processMessage(value) {
  console.log(whatIKnow);

  if (value.startsWith("/learn")) {
    var msg = value.substring(6,value.indexOf("/reply")).trim()
    var learned = value.substring(value.indexOf("/reply")+6).trim()
    whatIKnow[msg] = learned;
    return 'I learned to reply to "' + msg + '" with: "' + learned + '""';
  }

  whatIKnow.forEach(function(item, key) {
    var pat = new RegExp(key)
    console.log("testing ", key, "against ", pat, " for ", value)
    if (pat.test(value)) {
      return p[key]
    }

  });

  if (whatIKnow[value]) {
    return whatIKnow[value]
  }
  return "I do not understand: " + value;
}
