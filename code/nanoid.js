import { nanoid } from 'nanoid'

export class ChatMessageMedia {
    constructor(message_id, url, type) {
        this.id = nanoid()
        this.message_id = message_id
        this.url = url
        this.type = type
      }
}

export class ChatMessage {
    constructor(text) {
      this.id = nanoid()
      this.text = text
      this.medias = []
    }

    /**
     * 
     * @param { ChatMessageMedia } media 
     */
    addMedia(media) {
        this.medias.push(media)
    } 
  }

const message = new ChatMessage('Hello, look at that puppy')

message.addMedia(new ChatMessageMedia(
    message.id,
    'https://i.picsum.photos/id/508/200/200.jpg?hmac=K4JUehX1v2yEPLUOyJDAmRhZu8PgMu4vv6ypO-CA5nw',
    'image'
))

message.addMedia(new ChatMessageMedia(
    message.id,
    'https://ak.picdn.net/shutterstock/videos/1044255715/preview/stock-footage-person-signing-important-document-camera-following-tip-of-the-pen-as-it-signs-crucial-business.webm',
    'video'
))

console.info(message)