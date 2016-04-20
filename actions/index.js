import 'whatwg-fetch'

export function sendMessage(item) {
  return {
    type:"SEND_MESSAGE",
    item: item
  }
}

export function replyToMessage(item) {
  return {
    type:"REPLY_MESSAGE",
    item: item
  }
}
